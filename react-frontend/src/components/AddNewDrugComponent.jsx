import React, { Component } from 'react'
import InventoryService from '../services/InventoryService';

class AddNewDrugComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            addOrUpdate: this.props.match.params.productName,
            productName: '',
            nickName: '',
            category: '',
            amount: '',
            price: ''
        }
        this.changeProductNameHandler = this.changeProductNameHandler.bind(this);
        this.changeNickNameHandler = this.changeNickNameHandler.bind(this);
        this.changePriceHandler = this.changePriceHandler.bind(this);
        this.changeAmountHandler = this.changeAmountHandler.bind(this);
        this.changeCategoryHandler = this.changeCategoryHandler.bind(this);
        this.saveOrUpdateDrug = this.saveOrUpdateDrug.bind(this);

        
    }

    // step 3
    componentDidMount(){
        // step 4
        console.log('Component Mounted');
        if(this.state.addOrUpdate === '_add'){
            return
        }else{
            console.log('componentDidMount : Update Drug');
            console.log('OnUpdate:ProductName : ', this.state.addOrUpdate);
            InventoryService.getDrugByProductName(this.state.addOrUpdate).then( res =>{
                let drug = res.data;
                console.log('drug => ' + JSON.stringify(drug));
                this.setState({
                    productName: drug.productName,
                    nickName: drug.nickName,
                    category: drug.category,
                    amount : drug.amount,
                    price : drug.price
                });
            });
        }        
    }
    saveOrUpdateDrug = (d) => {
        d.preventDefault();
        let drug = {productName: this.state.productName, nickName: this.state.nickName, category: this.state.category, amount: this.state.amount,
        price:this.state.price};
        console.log('drug => ' + JSON.stringify(drug));

        // step 5
        if(this.state.addOrUpdate === '_add'){
            InventoryService.addNewDrug(drug).then(res =>{
                this.props.history.push('/drugs');
            });
        }else{
            InventoryService.updateDrug(drug, this.state.productName).then( res => {
                this.props.history.push('/drugs');
            });
        }
    }
    
    changeProductNameHandler= (event) => {
        this.setState({productName: event.target.value});
    }

    changeNickNameHandler= (event) => {
        this.setState({nickName: event.target.value});
    }
    
    changeAmountHandler= (event) => {
        this.setState({amount: event.target.value});
    }

    changeCategoryHandler= (event) => {
        this.setState({category: event.target.value});
    }

    changePriceHandler= (event) => {
        this.setState({price: event.target.value});
    }

    cancel(){
        this.props.history.push('/drugs');
    }

    getTitle(){
        console.log('product name :  %s', this.state.productName);
        if(this.state.addOrUpdate === '_add'){
            return <h3 className="text-center">Add Drug</h3>
        }else{
            console.log('getTitle : Update Drug')
            return <h3 className="text-center">Update Drug</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Product Name: </label>
                                            <input placeholder="Product Name" name="productName" className="form-control" 
                                                value={this.state.productName} onChange={this.changeProductNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Nick Name: </label>
                                            <input placeholder="Nick Name" name="nickName" className="form-control" 
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

                                        <button className="btn btn-success" onClick={this.saveOrUpdateDrug}>Save</button>
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

export default AddNewDrugComponent
