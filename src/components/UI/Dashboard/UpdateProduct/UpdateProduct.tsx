"use client";
import KidsForm from "@/forms/KidsForm";
import KidsInput from "@/forms/KidsInput";
import KidsSelect from "@/forms/KidsSelect";
import KidsTextArea from "@/forms/KidsTextArea";
import { useUpdateProductsMutation } from "@/redux/api/products/productsApi";
import { TProduct } from "@/types/products.type";
import { useRouter } from "next/navigation";
import React from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const UpdateProduct = ({ products }: { products: TProduct }) => {
  const [updateProducts] = useUpdateProductsMutation();
  const router = useRouter();

  const { _id, image } = products?.data;

  const handleUpdate = async (data: FieldValues) => {
    delete data._id;
    const updateProductObj = {
      ...data,
      image,
    };

    const res = await updateProducts({
      id: _id,
      data: updateProductObj,
    }).unwrap();
    if (res?.modifiedCount) {
      toast.success("Product Update Successful");
      router.push("/dashboard/products");
    }
  };

  return (
    <div>
      <KidsForm
        onSubmit={handleUpdate}
        className="w-full max-w-[500px] mx-auto mt-12"
        defaultValues={products.data}
      >
        <h1 className="mb-8 text-3xl">Update Products </h1>
        <KidsInput
          label="Title"
          type="text"
          name="title"
          placeholder="write a product name/title"
          className="w-full max-w-[300px] mt-1 mb-3 rounded-md"
        />
        <br />
        <KidsInput
          label="Brand"
          type="text"
          name="brand"
          placeholder="type products brand"
          className="w-full max-w-[300px] mt-1 mb-3 rounded-md"
        />
        <br />
        <KidsInput
          label="Category"
          type="text"
          name="category"
          placeholder="type products category"
          className="w-full max-w-[300px] mt-1 mb-3 rounded-md"
        />
        <br />
        <KidsTextArea
          label="Description"
          name="description"
          placeholder="write products description"
          className="border mx-auto w-full max-w-[300px] mt-2 p-2 rounded-md"
        />{" "}
        <br />
        <KidsSelect name="flashSale" label="Flash Sell" />
        <br />
        <KidsInput
          label="Ratings"
          type="number"
          name="ratings"
          placeholder="give a rating 1 to 5"
          className="w-full max-w-[300px] mt-1 mb-3 rounded-md"
        />{" "}
        <br />
        <KidsInput
          label="Price"
          type="number"
          name="price"
          placeholder="give products price"
          className="w-full max-w-[300px] mt-1 mb-3 rounded-md"
        />
        <br />
        <button className="btn btn-ghost" type="submit">
          Update
        </button>
      </KidsForm>
    </div>
  );
};

export default UpdateProduct;
