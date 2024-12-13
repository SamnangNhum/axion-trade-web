export default function SubTitle({subTitle, otherClass}:{subTitle:string, otherClass:string}){
    return(
        <div className={`text-2xl font-bold text-black ${otherClass}`}>
            {subTitle}
        </div>
    );
}