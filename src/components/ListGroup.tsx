import { useState } from "react";

interface Props {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}

const ListGroup = ({ items, heading, onSelectItem }: Props) => {
    // Hook
    const [selectedIndex, setSelectedIndex] = useState(-1);

    return (
        <>
            <h1>{heading}</h1>
            {/* 
            {items.length === 0 && <p>No item found</p>}
            if the first condition is true the second condition will be display
            */}
            {items.length === 0 && <p>No item found</p>}
            <ul className="list-group">
                {items.map((item, index) => (
                    <li
                        className={
                            selectedIndex == index
                                ? "list-group-item active"
                                : "list-group-item"
                        }
                        key={index}
                        onClick={() => {
                            setSelectedIndex(index);
                            onSelectItem(item);
                        }}>
                        {item}
                    </li> // key can be the item itself
                ))}
            </ul>
        </>
    );
};

export default ListGroup;
