"use client";
import {
  useDeleteProductsMutation,
  useUpdateProductsMutation,
} from "@/redux/api/products/productsApi";
import { TProduct } from "@/types/products.type";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";

const ProductTableRow = ({ product, i }: { product: TProduct; i: string }) => {
  const [deleteProducts] = useDeleteProductsMutation();

  //delete product
  const handleDelete = async (id: string) => {
    const res: any = await deleteProducts(id);

    if (res?.deletedCount > 0) {
      toast.success("Product Delete Successful");
    }
  };
  return (
    <tr>
      <th>{i + 1}</th>
      <td>
        <Image
          src={product?.image}
          alt="product image"
          width={100}
          height={100}
          className="max-w-{80px} max-h-[80px] rounded-full"
        />
        <p>{product?.title}</p>
      </td>
      <td>{product?.brand}</td>
      <td>{product?._id}</td>
      <td>{product?.price}</td>
      <td>
        <Link href={`/dashboard/products/${product?._id}`}>
          <button className="btn btn-outline btn-primary">Edit</button>
        </Link>
        <button
          onClick={() => handleDelete(product?._id as string)}
          className="ml-4 btn btn-outline btn-error hover:text-white"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ProductTableRow;
