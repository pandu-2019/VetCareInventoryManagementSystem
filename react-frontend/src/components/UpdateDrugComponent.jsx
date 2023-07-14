import React, { Component } from 'react'
import InventoryService from '../services/InventoryService';

class UpdateDrugComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            productName: this.props.match.params.productName,
            category: '',
            nickName: '',
            amount: '',
            price: ''
        }
        this.changeProductNameHandler = this.changeProductNameHandler.bind(this);
        this.changeNickNameHandler = this.changeNickNameHandler.bind(this);
        this.changeCategoryHandler = this.changeCategoryHandler.bind(this);
        this.changeAmountHandler = this.changeAmountHandler.bind(this);
        this.changePriceHandler = this.changePriceHandler.bind(this);
        this.updateDrug = this.updateDrug.bind(this);

    }

    componentDidMount(){
        InventoryService.getDrugByProductName(this.state.productName).then( (res) =>{
            let drug = res.data;
            console.log('drug => ' + JSON.stringify(drug));
            this.setState({productName: drug.productName,
                nickName: drug.nickName,
                category : drug.category,
                amount : drug.amount,
                price : drug.price
            });
        });
    }

    updateDrug = (d) => {
        d.preventDefault();
        let drug = {productName: this.state.productName, nickName: this.state.nickName, amount: this.state.amount};
        console.log('drug => ' + JSON.stringify(drug));
        console.log('productName => ' + JSON.stringify(this.state.productName));
        InventoryService.updateDrug(drug, this.state.productName).then( res => {
            this.props.history.push('/drugs');
        });
    }
    
    changeProductNameHandler= (event) => {
        this.setState({productName: event.target.value});
    }

    changeNickNameHandler= (event) => {
        this.setState({nickName: event.target.value});
    }

    changePriceHandler= (event) => {
        this.setState({price: event.target.value});
    }

    changeAmountHandler= (event) => {
        this.setState({amount: event.target.value});
    }

    changeCategoryHandler= (event) => {
        this.setState({category: event.target.value});
    }

    cancel(){
        this.props.history.push('/drugs');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Employee</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Product Name: </label>
                                            <input placeholder="Product Name" name="productName" className="form-control" 
                                                value={this.state.productName} onChange={this.changeProductNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Nick Name: </label>
                                            <input placeholder="Last Name" name="nickName" className="form-control" 
                                                value={this.state.nickName} onChange={this.changeNickNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Category: </label>
                                            <input placeholder="Category" name="category" className="form-control" 
                                                value={this.state.category} onChange={this.changeCategoryHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Amount: </label>
                                            <input placeholder="Amount" name="amount" className="form-control" 
                                                value={this.state.amount} onChange={this.changeAmountHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Price: </label>
                                            <input placeholder="Price" name="price" className="form-control" 
                                                value={this.state.price} onChange={this.changePriceHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateDrug}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateDrugComponent
