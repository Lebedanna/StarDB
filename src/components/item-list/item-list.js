import React from 'react';

import './item-list.css';

import PropTypes from "prop-types";

const ItemList = (props) => {
    const {data, onItemSelected, children: renderLabel} = props
    const items = data.map((item) => {
        const {id} = item;
        const label = renderLabel(item);

        return (
            <ul className="list-group-item"
                key={id}
                onClick={() => onItemSelected(id)}>
                {label}
            </ul>
        );
    });

    return (
        <ul className='item-list list-group'>
            {items}
        </ul>
    )

}

export default ItemList;