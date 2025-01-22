import './FabMenuItems.css';


function FabMenuItem(props) {
    console.log(props.imageUrl);
    return (
        <div className='fabMenuItem'>
           <p style={{backgroundColor:"white", padding: "8px", borderRadius: "6px", marginRight:"5px"}}>{props.title}</p>
           <span className='fabMenuIcons'>{props.imageUrl && <img src={props.imageUrl} alt="Dynamic Image" style={{maxWidth:"100%", width:'20px', height:'20px'}}/>}</span>
        </div>
    );
}

export default FabMenuItem;