import './FabMenuItems.css';


function FabMenuItem(props) {
    return (
        <div className='fabMenuItem' onClick={props.onClick}>
           <p style={{backgroundColor:"white", padding: "8px", borderRadius: "6px", marginRight:"5px"}}>{props.title}</p>
           <span className='fabMenuIcons'>{props.imageUrl && <img src={props.imageUrl} alt="Dynamic" style={{maxWidth:"100%", width:'50px', height:'50px', borderRadius:"50%"}}/>}</span>
        </div>
    );
}

export default FabMenuItem;