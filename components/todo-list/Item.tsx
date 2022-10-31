import { useState } from 'react';
import {FaEdit, FaTrash} from 'react-icons/fa';

export interface ItemProps {
    name: string;
    remove: () => void;
    edit: (name: string) => void;
} 

export function Item({ name, remove, edit }: ItemProps) {
    const [isEditing, setIsEditing] = useState(false);
    const [editItem, setEditItem] = useState(name);

    const toggleEdit = () => {
        edit(editItem);
        setEditItem("");
        setIsEditing((isEditing) => !isEditing);
    };

    return (
        <li>
            {isEditing ? (
                <input type="text" className="todo-input" id="todo-input" placeholder='Add a to do item' onChange={(e) => setEditItem(e.target.value)} value={editItem} />
            ) : (
                {name}
            )}
        <div className='item-button-group'>
            <button className="edit-button" onClick={toggleEdit}><FaEdit /></button> | <button className='delete-button'onClick={remove}><FaTrash /></button>
        </div>
        </li>
    )
}