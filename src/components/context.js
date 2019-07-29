import React, { Component } from 'react';

import data from '../mock/dados.js';


class Provider extends Component{


    state = {
        default : [
            {nome : 'inicial'}
        ],
        new: [],
    }

    render() {

    const { MyContext } = this.props;

    const newData = {
        nome: 'Batata',
        idade: 1,
        endereco: 'Rua Terra',
    }
    const newArray = [...this.state.new, newData]
       
    
    

        return(
            <MyContext.Provider value={{
                state : this.state,
                initialValues: () => this.setState({
                    default : data }),
                addValues: (newData) => this.setState({
                    new: newArray })
                
            }}>
                { this.props.children }
            </MyContext.Provider>
        )
    }

}

export default Provider;
