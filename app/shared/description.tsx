export default function Description({description,otherClass}:{description:string,otherClass:string}){
    return(
        <div className={`text-lg ${otherClass}`}>
            {description}
        </div>

    );
}