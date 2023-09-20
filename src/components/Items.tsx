const Items = () => {
    return (
        <div>
            <div className='items-column column'>
                <h1>Items</h1>
                <form>
                    <input
                        type='text'
                        placeholder='Type name here'
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
                    <li className='items-list-item active'>
                        <>1</>
                        <span className='badge'>1</span>
                        <button className='btn btn-delete'>Delete</button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Items;
