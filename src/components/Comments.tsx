import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addComment } from '../redux/itemsSlice';

const Comments = () => {
    const [text, setText] = useState<string>('');
    const [color, setColor] = useState<string>('#000000');
    const dispatch = useDispatch();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (text.trim().length) {
            dispatch(addComment({ text, color }));
        }
    };

    return (
        <div>
            <div className='comments-column column'>
                <h1>Comments</h1>
                <div>
                    <div className='card'>
                        <div
                            className='card-color'
                            style={{ backgroundColor: '#000000' }}
                        ></div>
                        <div className='card-body'>
                            <pre>1</pre>
                        </div>
                    </div>
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
                    <ul className='items-list'></ul>
                </form>
            </div>
        </div>
    );
};

export default Comments;
