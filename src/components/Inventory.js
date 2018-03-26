import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import {InventoryDetail} from './InventoryDetail';

export class Inventory extends React.Component {
  state = {
    selectedOption: ''
  }
  handleChange = (selectedOption) => {
    this.setState({
      selectedOption
    });
    //console.log(`Selected: ${selectedOption.label}`);
  }

  render() {
    let placeholder = <span>Select a size </span>;

    const { selectedOption } = this.state;
    const value = selectedOption && selectedOption.value;
    let inventories = this.props.state.inventories;
    let optionItems = inventories.map((Inventory) =>
          ({
            value: Inventory.price,
            label:Inventory.size,
            basePrice:Inventory.basePrice,
            purchaseURL: Inventory.purchaseURL,
            currency: Inventory.currency
          })
        );
        console.log(optionItems);
    return (
      <div>
        <Select
          name="form-field-name"
          value={value}
          placeholder={placeholder}
          onChange={this.handleChange}
          options={optionItems}
        />
       <InventoryDetail state={this.state}/>
      </div>
    );
  }

}
