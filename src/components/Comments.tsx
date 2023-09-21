import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addComment, initialState } from '../redux/itemsSlice';

const Comments = () => {
    const [text, setText] = useState<string>('');
    const [color, setColor] = useState<string>('#000000');
    const dispatch = useDispatch();

    const activeItem = useSelector((state: { items: initialState }) =>
        state.items.items.find((item) => item.active)
    );

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (text.trim().length) {
            dispatch(addComment({ id: activeItem?.id, text, color }));
            setText('');
            setColor('#000000');
        }
    };

    return (
        <div>
            <div className='comments-column column'>
                <h1>Comments #{activeItem?.id}</h1>
                <div>
                    {activeItem?.comments.map((comment) => (
                        <div className='card'>
                            <div
                                className='card-color'
                                style={{ backgroundColor: `${comment.color}` }}
                            ></div>
                            <div className='card-body'>
                                <pre>{comment.body}</pre>
                            </div>
                        </div>
                    ))}
                </div>
                <form onSubmit={handleSubmit}>
                    <input
                        type='color'
                        className='form-control'
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                    />
                    <textarea
                        placeholder='Type comment here'
                        required
                        className='form-control'
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                    <button
                        className='btn-primary btn'
                        type='submit'
                    >
                        Add New
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Comments;
