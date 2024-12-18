
export default function Description({description, otherClass}:{description:string, otherClass:string}){
    return(
        <div className={`text-lg text-black ${otherClass}`}>
            {description}
        </div>
    );
}