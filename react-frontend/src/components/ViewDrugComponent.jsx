import React, { Component } from 'react'
import InventoryService from '../services/InventoryService'

class ViewDrugComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            productName: this.props.match.params.productName,
            drug: {}
        }
    }

    componentDidMount(){
        InventoryService.getDrugByProductName(this.state.productName).then( (res) => {
            this.setState({drug: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Drug Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Drug Product Name: </label>
                            <div> { this.state.drug.productName }</div>
                        </div>
                        <div className = "row">
                            <label> Drug Nick Name: </label>
                            <div> { this.state.drug.nickName }</div>
                        </div>
                        <div className = "row">
                            <label> Drug Category: </label>
                            <div> { this.state.drug.category }</div>
                        </div>
                        <div className = "row">
                            <label> Drug Stock: </label>
                            <div> { this.state.drug.amount }</div>
                        </div>
                        <div className = "row">
                            <label> Drug Price: </label>
                            <div> { this.state.drug.price }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewDrugComponent
