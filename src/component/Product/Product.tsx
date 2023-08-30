import { useQuery } from "@tanstack/react-query";
export default function Product() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["ProductDetailsData"],
     queryFn: async() =>
      await fetch("https://dummyjson.com/products")
        .then((res) => res.json())
  });
  console.log(data);

  if (isLoading) return "Loading...";

  //   if (error) return 'An error has occurred: ' + error.message  return (
  //     <div>Product</div>
  //   )
}
