import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

export class Inventory extends React.Component {
  state = {
    selectedOption: ''
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Selected: ${selectedOption.label}`);
    let sellPrice = totalPrice*.81;
    let vatPrice =  totalPrice*.19;
  }

  render() {
    let placeholder = <span>Select a size </span>;
    let valueComponent = <span>Select a size </span>;
    const { selectedOption } = this.state;
    const value = selectedOption && selectedOption.value;
    let inventories = this.props.state.inventories;
    let optionItems = inventories.map((Inventory) =>
          ({ value: Inventory.size, label:Inventory.size })
        );
        console.log(optionItems);
    return (
      <Select
        name="form-field-name"
        value={value}
        placeholder={placeholder}
        onChange={this.handleChange}
        options={optionItems}
      />
    );
  }

   // render () {
   //
   //
   //      return (
   //       <div>
   //           <select className="form-control margin-top-40">
   //              {optionItems}
   //           </select>
   //       </div>
   //      )
   //  }
}
