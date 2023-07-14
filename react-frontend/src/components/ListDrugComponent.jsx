import React, { Component } from 'react'
import InventoryService from '../services/InventoryService'

class ListDrugComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                drugs: []
        }
        this.addDrug = this.addDrug.bind(this);
        this.updateDrug = this.updateDrug.bind(this);
        this.deleteDrug = this.deleteDrug.bind(this);
    }

    deleteDrug(productName){
        InventoryService.deleteDrug(productName).then( res => {
            this.setState({drugs: this.state.drugs.filter(drug => drug.productName !== productName)});
        });
    }
    viewDrug(productName){
        this.props.history.push(`/view-drug/${productName}`);
    }
    updateDrug(productName){
        this.props.history.push(`/add-drug/${productName}`);
    }

    componentDidMount(){
        InventoryService.getDrugInventory().then((res) => {
            this.setState({ drugs: res.data});
        });
    }

    addDrug(){
        this.props.history.push(`/add-drug/_add`);
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Drugs List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addDrug}> Add Drugs</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Product Name </th>
                                    <th> Nick Name </th>
                                    <th> Category</th>
                                    <th> Amount </th>
                                    <th> Price</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.drugs.map(
                                        drug => 
                                        <tr key = {drug.productName}>
                                             <td> {drug.productName}</td>
                                             <td> {drug.nickName} </td>   
                                             <td> {drug.category}</td>
                                             <td> {drug.amount}</td>
                                             <td> {drug.price}</td>
                                             <td>
                                                 <button onClick={ () => this.updateDrug(drug.productName)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteDrug(drug.productName)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewDrug(drug.productName)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListDrugComponent
