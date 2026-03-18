import Link from "next/link";

export default async function ProductDetail({
    params
}: {
    params: Promise<{ productId: string }>
}) {
    const { productId } = await params;
    return (
        <>
            <h1>Product Detail {productId}</h1>
            <Link href="/products/1/reviews">Reviews</Link>
        </>
    );
}
