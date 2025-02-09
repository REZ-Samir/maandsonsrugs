import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Image from "next/image";

function Gallery() {
  return (
    <section className=" bg-primaryGrey">
      <div className="hidden sm:grid  grid-cols-6 grid-rows-3 col-auto gap-4 mx-5 py-5 md:mx-16 2xl:max-w-screen-2xl h-[800px]">
        <div className="row-span-2 lg:row-span-3 col-span-4 lg:col-span-3 ">
          <Image
            alt=""
            src={"/assets/home/New Arrival/Meadow Mirage/image_6.JPG"}
            width={500}
            height={500}
            className="w-full h-full"
            objectFit="cover"
          />
        </div>
        <div className="col-span-2 lg:col-span-1 ">
          <Image
            alt=""
            src={"/assets/home/New Arrival/Diamond Whisper/image_1.JPG"}
            width={500}
            height={500}
            className="w-full h-full"
            objectFit="cover"
          />
        </div>
        <div className="col-span-2 lg:col-span-1 bg-red-200  lg:row-start-2 lg:col-start-4">
          <Image
            alt=""
            src={"/assets/home/New Arrival/Golden Heritage/image_2.JPG"}
            width={500}
            height={500}
            className="w-full h-full"
            objectFit="cover"
          />
        </div>
        <div className="col-span-2  row-span-1 lg:row-span-2 bg-red-400">
          <Image
            alt=""
            src={"/assets/rugs/fern-grid-elegance/image_3.JPG"}
            width={500}
            height={500}
            className="w-full h-full"
            objectFit="cover"
          />
        </div>
        <div className="col-span-2 bg-red-500">
          <Image
            alt=""
            src={"/assets/home/gallery_img_2.avif"}
            width={500}
            height={500}
            className="w-full h-full"
            objectFit="cover"
          />{" "}
        </div>
        <div className="col-span-2 lg:col-span-1 bg-red-600">
          <Image
            alt=""
            src={"/assets/rugs/crimson-fern-elegance/image_5.JPG"}
            width={500}
            height={500}
            className="w-full h-full"
            objectFit="cover"
          />
        </div>
      </div>
      <Carousel className="block sm:hidden  ">
        <CarouselContent>
          {Array.from({ length: 7 }).map((_, i) => (
            <CarouselItem key={i} className=" sm:basis-1/2 lg:basis-1/3">
              <Image
                src={"/assets/hero-bg.png"}
                alt=""
                className="w-full"
                width={500}
                height={500}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-1 " />
        <CarouselNext className="absolute right-1 " />
      </Carousel>
    </section>
  );
}

export default Gallery;
