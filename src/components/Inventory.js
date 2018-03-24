import React from 'react';

export class Inventory extends React.Component {
    constructor() {
        super();
    }

    render () {
        let inventories = this.props.state.inventories;
        let optionItems = inventories.map((Inventory) =>
                <option key={Inventory.inventoryId}>{Inventory.size}</option>
            );

        return (
         <div>
             <select className="form-control" >
                {optionItems}
             </select>
         </div>
        )
    }
}