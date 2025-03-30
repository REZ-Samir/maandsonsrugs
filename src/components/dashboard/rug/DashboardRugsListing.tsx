import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  deleteRug,
  getAllRugs,
  getSingleRug,
  rugParams,
} from "@/lib/actions/rug.action";
import React, { useEffect, useState } from "react";

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

  const handleRugEdit = async (rugId: string) => {
    try {
      const response = await getSingleRug(rugId);
      console.log(response);
      // Handle the response as needed
    } catch (error) {
      console.error("Error fetching rug:", error);
    }
  };

  return (
    <section>
      <Table>
        <TableCaption>A list of your recent Rugs.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Rug Id</TableHead>
            <TableHead>Rug Name</TableHead>
            <TableHead>Rug Price</TableHead>
            <TableHead>Rug Description</TableHead>
            <TableHead>Rug Quality</TableHead>
            <TableHead>Rug Size</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rugs.map((rug, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{rug._id}</TableCell>
              <TableCell>{rug.rugName}</TableCell>
              <TableCell>${rug.rugPrice}</TableCell>
              <TableCell>{rug.rugDescription}</TableCell>
              <TableCell>{rug.rugQuality}</TableCell>
              <TableCell>{rug.rugSizes?.join(", ")}</TableCell>
              <TableCell className="text-right">
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded"
                  onClick={() => {
                    // Handle delete action
                    handleRugDelete(rug._id);
                  }}
                >
                  Delete
                </button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded ml-2" onClick={() => handleRugEdit(rug._id)}>
                  Edit
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}

export default DashboardRugsListing;
