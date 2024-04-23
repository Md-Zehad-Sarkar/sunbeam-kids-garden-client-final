"use client";

import KidsFileInput from "@/forms/KidsFileInput";
import KidsForm from "@/forms/KidsForm";
import KidsInput from "@/forms/KidsInput";
import KidsSelect from "@/forms/KidsSelect";
import { useAddProductsMutation } from "@/redux/api/products/productsApi";
import axios from "axios";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

//for image hosting img bb
const image_hosting_api = "2223ec610998a850d27bf0a27225a987";

const api_url = "https://api.imgbb.com/1/upload";

const AddProducts = () => {
  const [addProducts] = useAddProductsMutation();
  const router = useRouter();

  const onSubmit = async (data: FieldValues) => {
    data.ratings = Number(data.ratings);
    data.price = Number(data.price);

    try {
      //image hosting
      const obj = { ...data };
      const file = obj["image"];
      delete obj["image"];

      const formData = new FormData();

      formData.append("image", file);

      // image hosting and get url
      const response = await axios.post(api_url, formData, {
        params: { key: image_hosting_api },
      });

      // extract image url from response
      const imageUrl = response.data?.data?.display_url;

      const productsData = {
        title: data.title,
        brand: data.brand,
        category: data.category,
        price: Number(data.price),
        image: imageUrl,
        description: data.description,
        ratings: Number(data.ratings),
        flashSale: data.flashSale === "true" ? true : false,
        createdAt: new Date().toISOString(),
      };

      const res = await addProducts(productsData).unwrap();
      if (res?.insertedId) {
        toast.success("Product Created Successful");
        router.push("/dashboard/products");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <h1>Add New Products </h1>
      <KidsForm
        onSubmit={onSubmit}
        className="w-full max-w-[500px] mx-auto mt-12"
      >
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
        <KidsInput
          label="Description"
          type="text"
          name="description"
          placeholder="write products description"
          className="w-full max-w-[300px] mt-1 mb-3 rounded-md"
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
        <KidsFileInput label="Image" name="image" className="mb-3" /> <br />
        <KidsInput
          label="Price"
          type="number"
          name="price"
          placeholder="give products price"
          className="w-full max-w-[300px] mt-1 mb-3 rounded-md"
        />
        <br />
        <button className="btn btn-ghost" type="submit">
          Create
        </button>
      </KidsForm>
    </div>
  );
};

export default AddProducts;
