import './FabMenuItems.css';

function FabMenuItem(props) {
    return (
        <div className='fabMenuItem'>
           <p style={{backgroundColor:"white", padding: "8px", borderRadius: "6px", marginRight:"5px"}}>{props.title}</p>
           <span className='fabMenuIcons'><img src={props.imageUrl} style={{maxWidth:"100%", width:'20px', height:'20px'}}/></span>
        </div>
    );
}

export default FabMenuItem;