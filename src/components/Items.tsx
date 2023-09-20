import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, initialState, removeItem } from '../redux/itemsSlice';

const Items: React.FC = () => {
    const [name, setName] = useState<string>('');
    const dispatch = useDispatch();

    const items = useSelector((state: { items: initialState }) => state.items.items);

    const handleAction = (e: React.FormEvent) => {
        e.preventDefault();
        if (name.trim().length) {
            dispatch(addItem({ name }));
            setName('');
        }
    };
    return (
        <div>
            <div className='items-column column'>
                <h1>Items</h1>
                <form onSubmit={handleAction}>
                    <input
                        type='text'
                        placeholder='Type name here'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <button
                        className='btn-info btn'
                        type='submit'
                    >
                        Add New
                    </button>
                </form>
                <ul className='items-list'>
                    {items.map((item) => (
                        <li
                            key={item.id}
                            className='items-list-item active'
                        >
                            <>{item.name}</>
                            <span className='badge'>{item.comments.length}</span>
                            <button
                                type='button'
                                onClick={() => dispatch(removeItem({ id: item.id }))}
                                className='btn btn-delete'
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Items;
