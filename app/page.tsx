import { promises as fs } from 'fs';
import { Chart } from "@/components/features/chart/Charts";
import { IDashboard } from '@/types/dashboard.type';
import moment from 'moment';

async function getDashboardData() {
  let today = new Date;
  
  const fromDateFormated = moment().format('YYYY-MM-DD HH:mm:ss');
  const toDateFormated = moment().subtract(5, 'minutes').format('YYYY-MM-DD HH:mm:ss');
  const params = {
    from_date: fromDateFormated.replace(' ',"%20").replaceAll(':', '%3A'),
    to_date: toDateFormated.replace(' ',"%20").replaceAll(':', '%3A')
  };

  console.log('request', `http://127.0.0.1:8000/performances?from_date=${params.from_date}&to_date=${params.to_date}`);
  const res = await fetch(`http://127.0.0.1:8000/performances?from_date=${params.from_date}&to_date=${params.to_date}`);

  
  return res.json();
}

export default async function Home() {
  const file = await fs.readFile(process.cwd() + '/dummy/response.json', 'utf8');
  const dummyData = JSON.parse(file) as IDashboard[];
  let datasource = null;
  async function updateData() {
    try {
      const data = await getDashboardData();
      datasource = data;
      console.log('Updated datasource:', datasource);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  await updateData();

  setInterval(updateData, 5000);

  console.log('datasource', datasource);

  const finalData: any = datasource || dummyData;
  const memoryData = [
    Number((finalData[finalData.length - 1]?.memory_used / 1073741824).toFixed(2)),
    Number((finalData[finalData.length - 1]?.memory_free / 1073741824).toFixed(2))
  ];
  const byteData = finalData.filter((item: IDashboard, index: number) => index >= finalData.length - 30)
    .map((item: IDashboard) => {
      return {
        bytes_received: (item.bytes_received / 1048576).toFixed(2),
        bytes_sent: (item.bytes_sent / 1048576).toFixed(2),
        time: `${new Date(item.time).getMinutes()}:${new Date(item.time).getSeconds()}`
      };
    });
  const cpuData = finalData.filter((item: IDashboard, index: number) => index >= finalData.length - 30).map((item: IDashboard) => {
    return {
      cpu_calls: item.cpu_calls,
      cpu_interrupts: item.cpu_interrupts,
      time: `${new Date(item.time).getMinutes()}:${new Date(item.time).getSeconds()}`
    };
  });

  const byteState = {
    series: [{
      name: 'Bytes received',
      type: 'area',
      data: byteData.map((item: IDashboard) => item.bytes_received)
    }, {
      name: 'Bytes sent',
      type: 'area',
      data: byteData.map((item: IDashboard) => item.bytes_sent)
    }],
    options: {
      chart: {
        id: 'byte-chart',
        animations: {
          enabled: true,
          easing: 'easeinout',
          speed: 800,
          animateGradually: {
            enabled: true,
            delay: 150
          },
          dynamicAnimation: {
            enabled: true,
            speed: 350
          }
        }
      },
      xaxis: {
        categories: byteData.map((item: IDashboard) => item.time)
      },
      yaxis: [
        {
          title: {
            text: 'Bytes received (MB)',
          },
        },
        {
          opposite: true,
          title: {
            text: 'Bytes sent (MB)',
          },
        },
      ],
    }
  };
  const cpuState = {
    series: [{
      name: 'CPU calls',
      type: 'area',
      data: cpuData.map((item: IDashboard) => item.cpu_calls)
    }, {
      name: 'CPU interrupts',
      type: 'area',
      data: cpuData.map((item: IDashboard) => item.cpu_interrupts)
    }],
    options: {
      chart: {
        id: 'cpu-chart',
        animations: {
          enabled: true,
          easing: 'easeinout',
          speed: 800,
          animateGradually: {
            enabled: true,
            delay: 150
          },
          dynamicAnimation: {
            enabled: true,
            speed: 350
          }
        }
      },
      xaxis: {
        categories: cpuData.map((item: IDashboard) => item.time)
      },
      yaxis: [
        {
          title: {
            text: 'CPU calls',
          },
        },
        {
          opposite: true,
          title: {
            text: 'CPU interrupts',
          },
        },
      ],
    }
  };

  const donutState = {
    series: memoryData,
    options: {
      chart: {
        id: 'apexchart-pie',
      },
      labels: ['Memory used', 'Memory free'],
      legend: {
        customLegendItems: ['Memory used', 'Memory free'],
        position: 'bottom',
      }
    }
  };
  return (
    <main className="flex flex-col items-center justify-between p-24 bg-[#e5e7eb]">
      <div className='flex h-[calc(100vh_-_64px)] md:flex-col sm:flex-col flex-col lg:flex-row gap-4 items-center bg-[#e5e7eb]'>
        <Chart
          type='donut'
          options={donutState.options as any}
          series={donutState.series}
          className='flex self-start'
        />
        <div className='flex flex-col self-start gap-4'>
          <Chart type='line' series={byteState.series as any} options={byteState.options as any} />
          <Chart type='line' series={cpuState.series as any} options={cpuState.options as any} />
        </div>
      </div>
    </main>
  );
}
