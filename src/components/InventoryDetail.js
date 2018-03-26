import React from 'react';

export class InventoryDetail extends React.Component {
  render(){
    let selectedInventories = this.props.state.selectedOption;
    //console.log(selectedInventories.purchaseURL);
    if(selectedInventories){
      return (
        <div className="margin-top-20 product-detail-part">
            <div className="col-xs-12 offset0 border-gray">
                <span>Seller Price</span>
                <span className="pull-right">{selectedInventories.basePrice} {selectedInventories.currency}</span>
            </div>
            <div className="col-xs-12 offset0 border-gray">
                <span>Service Costs</span>
                <span className="pull-right">{selectedInventories.value - selectedInventories.basePrice } {selectedInventories.currency}</span>
            </div>
            <div className="col-xs-12 offset0 text-bold">
                <span>Total Price</span>
                <span className="pull-right">{selectedInventories.value} {selectedInventories.currency}</span>
            </div>
            <div className="col-xs-12 offset0 margin-top-20">
              <a href={selectedInventories.purchaseURL} data-toggle="modal" className="col-xs-12 btn btn-info padding-10">Add to Cart</a>
            </div>
        </div>
      );
    }else {
      return (
          <div>
          </div>
      );
    }

  }
}
