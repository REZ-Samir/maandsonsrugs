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
import { rugParams, updateRug } from "@/lib/actions/rug.action";
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
import {
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { usePathname } from "next/navigation";

function EditRugModal({ singleRugData }: { singleRugData: rugParams }) {
  const pathname = usePathname();
  const {
    register,
    handleSubmit,
    formState: {  },
  } = useForm();
  const [selectedRugSize, setSelectedRugSize] = useState<string[]>(
    singleRugData.rugSizes ?? []
  );
  const [selectedRugCategory, setSelectedRugCategory] = useState<string[]>(
    singleRugData.rugCategory ?? []
  );
  const [material, setMaterial] = useState<string[]>(
    singleRugData.rugMaterials ?? []
  );
  const [color, setColor] = useState<string[]>(singleRugData.rugColors ?? []);
  const [quality, setQuality] = useState<string>(singleRugData.rugQuality);

  const rugsSize = ["Small", "Medium", "Large", "ExtraLarge"];
  const rugCategories = ["Highlight", "Hero", "Top Rug"];

  const handleFormSubmit: SubmitHandler<FieldValues> = async (data) => {
    const formData: Partial<rugParams> = {
      _id: singleRugData._id,
      rugName: data.rugTitle,
      rugPrice: data.rugPrice,
      rugImg: singleRugData.rugImg,
      rugDescription: data.rugDescription,
      rugCode: data.rugCode,
      rugSizes: selectedRugSize,
      rugColors: color,
      rugMaterials: material,
      rugStyle: data.rugType,
      rugQuality: quality,
      rugCategory: selectedRugCategory,
      path: pathname,
    };
    console.log("Form Data: ", formData);

    const response = await updateRug(formData);
    console.log(response, "response");
    if (response.status === 200) {
      // router.push("/dashboard");
      alert("Rug updated successfully");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="bg-blue-500 text-white px-4 py-2 ">
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent className="w-10/12 max-w-5xl">
        <form onSubmit={handleSubmit(handleFormSubmit)}>
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
                        width={500}
                        height={500}
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
                <Label htmlFor="rugName">Name</Label>
                <Input
                  id="rugName"
                  defaultValue={singleRugData.rugName}
                  className="col-span-3"
                  {...register("rugTitle", { required: true })}
                />
              </div>
              <div>
                <Label htmlFor="price">Price</Label>
                <Input
                  id="price"
                  defaultValue={singleRugData.rugPrice}
                  className="col-span-3"
                  {...register("rugPrice", { required: true })}
                  type="number"
                  min={0}
                />
              </div>

              <div className="col-span-2">
                <Label htmlFor="username">Description</Label>
                <Textarea
                  defaultValue={singleRugData.rugDescription}
                  {...register("rugDescription", { required: true })}
                />
              </div>
              <div>
                <Label htmlFor="rugType">Type</Label>
                <Input
                  id="rugType"
                  defaultValue={singleRugData.rugStyle}
                  className="col-span-3"
                  {...register("rugType", { required: true })}
                />
              </div>
              <div>
                <Label htmlFor="rugCode">Code</Label>
                <Input
                  id="rugCode"
                  defaultValue={singleRugData.rugCode}
                  className="col-span-3"
                  {...register("rugCode", { required: true })}
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

                <Select value={quality} onValueChange={setQuality}>
                  <SelectTrigger>
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
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default EditRugModal;
