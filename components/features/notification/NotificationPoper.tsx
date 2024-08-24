// import useSWR from 'swr'
'use client';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { IconNotification } from "@/components/icons";
import Image from 'next/image';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import predictionResult from "@/dummy/prediction";

// const fetcher = (...args: any) => fetch(args).then((res) => res.json())

const NotificationPoper = () => {
  const [data, setData] = useState<{image_base64: string | undefined, isViewed: boolean}>({
    image_base64: undefined,
    isViewed: false
  });
  // const { data } = useSWR('http://127.0.0.1:8000/anomaly-plot', fetcher)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setData({
        image_base64: predictionResult.image_base64,
        isViewed: false,
      });
    }, 10000); // 10 giây

    // Cleanup interval khi component unmount
    return () => clearInterval(intervalId);
  });
  console.log('image', data);
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button type="button" className="flex justify-center items-center" >
          <IconNotification width={'30px'} height='25px' />
          {data?.image_base64 && !data.isViewed ? (
            <div className="absolute px-[0.5rem] bg-red-500 rounded-full text-center text-white text-sm -mr-[20px] -mt-[25px]">
              1
              <div className="rounded-full z-10 animate-ping bg-red-300 w-full h-full" ></div>
            </div>
          ) : null}
        </button>
      </PopoverTrigger>
      {data?.image_base64 ? (
        <PopoverContent className="w-[11rem] hover:bg-gray-100">
          <div className="grid gap-4 justify-center">
            <div className="grid gap-2 cursor-pointer px-2">
              <div className="items-center gap-4">
                <Dialog>
                  <DialogTrigger className='w-full'>
                    <Label
                      htmlFor="width"
                      className="cursor-pointer hover:text-primary flex items-center gap-2"
                      onClick={() => {
                        setData({
                          image_base64: predictionResult.image_base64,
                          isViewed: true,
                        });
                      }}
                    >
                      Forecast results
                    </Label>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Notice of Abnormality</DialogTitle>
                      <DialogDescription>
                        <Image src={`data:image/jpeg;base64,${data?.image_base64}` || ''} width={1200} height={400} alt=''/>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </PopoverContent>
      ) : null}
    </Popover>
  );
};
export default NotificationPoper;