"use client";
import { usePathname } from "next/navigation";

export default function ReviewNotFound() {
    const pathname = usePathname();
    const productId = pathname.split("/")[2];
    const reviewId = pathname.split("/")[4];
    return (
        <>
            <h1>404 - Review Not Found</h1>
            <p>The review you are looking for {reviewId} for product {productId} does not exist.</p>
        </>
    );
}