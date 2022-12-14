import "../styling/buttons.css"
function Button ({type,id,disable,content,icon,onClickfunction})
{
    return (
        <button className={type} id={id} disabled={disable} onClick={onClickfunction}>{icon}{content}</button>
        );
        
}
export default  Button;