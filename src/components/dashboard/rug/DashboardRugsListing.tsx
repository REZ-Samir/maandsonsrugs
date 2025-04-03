import { Button } from "@/components/ui/button";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { deleteRug, getAllRugs, rugParams } from "@/lib/actions/rug.action";
import React, { useEffect, useState } from "react";
import EditRugModal from "./EditRugModal";

function DashboardRugsListing() {
  const [rugs, setRugs] = useState<rugParams[]>([]);

  const fetchRugs = async () => {
    try {
      const response = await getAllRugs();
      setRugs(response.rugs);
      console.log(response);
    } catch (error) {
      console.error("Error fetching rugs:", error);
    }
  };

  useEffect(() => {
    fetchRugs();
  }, []);

  const handleRugDelete = async (rugId: string) => {
    try {
      await deleteRug(rugId);
      fetchRugs();
    } catch (error) {
      console.error("Error deleting rug:", error);
    }
  };

  if (rugs.length === 0) {
    return (
      <div className="flex justify-center items-center h-full">
        <h1 className="text-2xl font-bold">No Rugs Found</h1>
      </div>
    );
  }

  return (
    <section>
      <Table>
        <TableCaption>A list of your recent Rugs.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Rug Id</TableHead>
            <TableHead>Rug Name</TableHead>
            <TableHead className="max-w-[70px]">Rug Price</TableHead>
            <TableHead>Rug Description</TableHead>
            <TableHead>Rug Quality</TableHead>
            <TableHead>Rug Size</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rugs.map((rug, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium max-w-[100px] overflow-hidden overflow-ellipsis">
                {index + 1}
              </TableCell>
              <TableCell>{rug.rugName}</TableCell>
              <TableCell className="text-right max-w-[50px]">
                ${rug.rugPrice}
              </TableCell>
              <TableCell className="max-w-[400px] overflow-ellipsis overflow-hidden text-nowrap">
                {rug.rugDescription}
              </TableCell>
              <TableCell>{rug.rugQuality}</TableCell>
              <TableCell>{rug.rugSizes?.join(", ")}</TableCell>
              <TableCell className="text-right">
                <Button
                  variant="outline"
                  className="bg-red-500 text-white px-4 py-2 rounded"
                  onClick={() => {
                    handleRugDelete(rug._id);
                  }}
                >
                  Delete
                </Button>

                {/* Modal for editing rug */}
                <EditRugModal singleRugData={rug} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}

export default DashboardRugsListing;
