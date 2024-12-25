export default function Title({
    title,
    otherClass,
}: {
    title: string;
    otherClass?: string;
}) {
    return (
        <div className={`text-5xl max-md:text-3xl font-bold text-black ${otherClass}`}>{title}</div>
    );
}
