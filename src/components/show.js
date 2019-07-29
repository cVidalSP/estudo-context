import React, { Component } from 'react';

class Show extends Component{

    render() {
        const { MyContext } = this.props;
        return(
            <MyContext.Consumer>
                {(context) =>(
                  <React.Fragment>

                    {context.state.default.map((obj) =>{
                      return(
                        <div>
                          <p>{obj.nome}</p>
                          <p>{obj.idade}</p>
                          <p>{obj.endereco}</p>
                        </div>
                      );
                    })}
                    
                    <button onClick={context.initialValues}> Start </button>
                  </React.Fragment>
                )}
            </MyContext.Consumer>
        )
    }
}

export default Show;
