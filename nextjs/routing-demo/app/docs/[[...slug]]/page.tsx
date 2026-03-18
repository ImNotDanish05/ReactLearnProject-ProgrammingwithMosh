export default async function Docs({
    params
}: {
    params: Promise<{ slug: string[] }>
}) {
    const { slug } = await params;

    if (slug?.length >= 1) {
        return (
            <>
                <h1>Docs</h1>
                <p>{slug?.join(" / ")}</p>
            </>
        );
    }
    return <h1>Welcome to the docs</h1>;


}