import React, { Component } from 'react';

import data from '../mock/dados.js';


class Provider extends Component{


    state = {
        default : [
            {nome : 'inicial'}
        ],
        new: {},
    }

    render() {

    const { MyContext } = this.props;

        return(
            <MyContext.Provider value={{
                state : this.state,
                initialValues: () => this.setState({
                    default : data}),
                addValues: (data) => this.setState({
                    new : { data, ...this.state.new }
                })
                
            }}>
                { this.props.children }
            </MyContext.Provider>
        )
    }

}

export default Provider;
