const Comments = () => {
    return (
        <div>
            <div className='comments-column column'>
                <h1>Comments</h1>
                <div>
                    <div className='card'>
                        <div
                            className='card-color'
                            style={{ backgroundColor: '#000' }}
                        ></div>
                        <div className='card-body'>
                            <pre>1</pre>
                        </div>
                    </div>
                </div>
                <form>
                    <input
                        type='color'
                        className='form-control'
                    />
                    <textarea
                        placeholder='Type comment here'
                        required
                        className='form-control'
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
