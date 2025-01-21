import {useState} from 'react';
import data from './menuItems.json';
import './Fab.css';
import FabMenuItem from '../fabMenuItems/FabMenuItems';

function Fab() {
    const [isOpen, setIsOpen] =  useState(false);

    const toggleOnClick = () =>{
        setIsOpen(!isOpen);
    }

    // function FloatingActionBtn() {
    //     return (
    //     );
    // }
    return (
        <div className='floatingActionItem'>
        {  isOpen 
            ?(<div className='OptionMenu'>
            {data.map((item)=>
            <FabMenuItem imageUrl={item.imageUrl} title={item.text}/>)}
            <span className='XIcon' onClick={toggleOnClick}></span>
            </div>)
            :(<span className='fabIcon' onClick={toggleOnClick}></span>)
        }
        </div>
    );
}

export default Fab;