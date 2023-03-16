import { List } from 'react-bootstrap-icons';

function ShoppingList(){
return (
    <div className="wrapper">
        <div className="task-input">
            <List />
            <input type="text" placeholder='Add an item' />
        </div>
        <div className="controls">
            <div className="filters">
                <span id="all" className="active">All</span>
                <span id="pending">Pending</span>
                <span className="completed">Completed</span>
            </div>
            <button className="clear-btn">Clear All</button>
        </div>
        <ul className="task-box"></ul>
    </div>
)
}

export default ShoppingList;