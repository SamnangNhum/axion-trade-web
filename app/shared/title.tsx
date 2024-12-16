export default function Title({title,otherClass}:{title:string,otherClass?:string}){
    return(
        <div className={`text-5xl font-bold text-black ${otherClass}`}>
        <div className="text-5xl font-bold text-white">
            {title}
        </div>
        </div>
    );
}