
export default function Description({description, otherClass}:{description:string, otherClass:string}){
    return(
        <div className={`text-md  text-black ${otherClass}`}>
            {description}
        </div>
    );
}