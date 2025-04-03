import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { rugParams } from "@/lib/actions/rug.action";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import MultiSelectDropdown from "@/components/common/dropdown/MultiSelectDropDown";
import MultiColorInput from "@/components/common/input/MultiInput";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

function EditRugModal({ singleRugData }: { singleRugData: rugParams }) {
  const [selectedRugSize, setSelectedRugSize] = useState<string[]>(
    singleRugData.rugSizes ?? []
  );
  const [selectedRugCategory, setSelectedRugCategory] = useState<string[]>([]);
  const [material, setMaterial] = useState<string[]>(
    singleRugData.rugMaterials ?? []
  );
  const [color, setColor] = useState<string[]>(singleRugData.rugColors ?? []);

  const rugsSize = ["Small", "Medium", "Large", "ExtraLarge"];
  const rugCategories = ["Highlight", "Hero", "Top Rug"];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="bg-blue-500 text-white px-4 py-2 ">
          Edit Profile
        </Button>
      </DialogTrigger>
      <DialogContent className="w-10/12 max-w-5xl">
        <DialogHeader className="text-center">
          <DialogTitle>Edit Rug</DialogTitle>
          <DialogDescription>
            Make changes for your Rugs here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <div className="flex ">
          <div className="flex-1">
            <Carousel className="w-full max-w-xs mx-auto">
              <CarouselContent>
                {singleRugData.rugImg.map((img, index) => (
                  <CarouselItem key={index}>
                    <Image
                      src={img}
                      alt="Rug"
                      className="w-full h-100 object-cover rounded"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
          <div className="grid grid-cols-2 gap-4 py-4  flex-1">
            <div>
              <Label htmlFor="username">Name</Label>
              <Input
                id="username"
                defaultValue={singleRugData.rugName}
                className="col-span-3"
              />
            </div>
            <div>
              <Label htmlFor="username">Price</Label>
              <Input
                id="username"
                defaultValue={singleRugData.rugPrice}
                className="col-span-3"
              />
            </div>

            <div className="col-span-2">
              <Label htmlFor="username">Description</Label>
              <Textarea defaultValue={singleRugData.rugDescription} />
            </div>
            <div>
              <Label htmlFor="username">Type</Label>
              <Input
                id="username"
                defaultValue={singleRugData.rugStyle}
                className="col-span-3"
              />
            </div>
            <div>
              <Label htmlFor="username">Code</Label>
              <Input
                id="username"
                defaultValue={singleRugData.rugCode}
                className="col-span-3"
              />
            </div>
            <div>
              <Label htmlFor="material">Color</Label>
              <MultiColorInput
                placeholder="Type a color name & press Enter"
                data={color}
                setData={setColor}
              />
            </div>
            <div>
              <Label htmlFor="material">Material</Label>
              <MultiColorInput
                placeholder="Type a material name & press Enter"
                data={material}
                setData={setMaterial}
              />
            </div>

            <div>
              <Label htmlFor="size">Size</Label>
              <MultiSelectDropdown
                onChange={setSelectedRugSize}
                selectedOptions={selectedRugSize}
                options={rugsSize}
                placeholder="Size"
              />
            </div>
            <div>
              <Label htmlFor="quality">Quality</Label>
              <Select defaultValue={singleRugData.rugQuality}>
                <SelectTrigger className="">
                  <SelectValue placeholder="Quality" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Low">Low</SelectItem>
                  <SelectItem value="Medium">Medium</SelectItem>
                  <SelectItem value="Premium">Premium</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="category">Category</Label>
              <MultiSelectDropdown
                onChange={setSelectedRugCategory}
                selectedOptions={selectedRugCategory}
                options={rugCategories}
                placeholder="Category"
              />
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default EditRugModal;
