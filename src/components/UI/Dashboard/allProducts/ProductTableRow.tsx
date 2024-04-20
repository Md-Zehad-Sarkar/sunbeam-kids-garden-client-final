"use client";
import {
  useDeleteProductsMutation,
  useUpdateProductsMutation,
} from "@/redux/api/products/productsApi";
import { TProduct } from "@/types/products.type";
import Image from "next/image";
import { toast } from "sonner";

const ProductTableRow = ({ product, i }: { product: TProduct; i: string }) => {
  const [deleteProducts] = useDeleteProductsMutation();
  const [updateProducts] = useUpdateProductsMutation();

  //edit product
  const handleEdit = async (product: TProduct) => {
    // console.log(product._id);
    const res = await updateProducts({ id: product?._id, data: product });
  };

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
        <button onClick={() => handleEdit(product)}>Edit</button>
        <button
          onClick={() => handleDelete(product?._id as string)}
          className="ml-3"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ProductTableRow;
