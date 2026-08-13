export default async function Page({
                                       params,
                                   }: {
    params: Promise<{ slug: string }>
}) {
    const {slug} = await params
    return <div>article: {slug}</div>
}