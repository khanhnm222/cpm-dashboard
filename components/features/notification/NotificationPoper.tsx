'use client'
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

const NotificationPoper = async () => {
  const [data, setData] = useState<{image_base64: string | undefined}>({
    image_base64: undefined
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/anomaly-plot`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const result = await response.json();
        setData(result);
        console.log('result image', result);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    const intervalId = setInterval(fetchData, 30000); // 30 giây

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button type="button" className="flex justify-center items-center">
          <IconNotification width={''} height='25px' />
        </button>
      </PopoverTrigger>
      {data?.image_base64 ? (
        <PopoverContent className="w-[11rem] hover:bg-gray-100">
          <div className="grid gap-4 justify-center">
            <div className="grid gap-2 cursor-pointer px-2">
              <div className="items-center gap-4">
                <Dialog>
                  <DialogTrigger>
                    <Label htmlFor="width" className="cursor-pointer hover:text-primary flex items-center gap-2">
                      Anomarl status
                    </Label>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Notice of Abnormality</DialogTitle>
                      <DialogDescription>
                        <Image src={data?.image_base64 ?? ''} width={500} height={300} alt=''/>
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