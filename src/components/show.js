import React, { Component } from 'react';

class Show extends Component{

    render() {
        const { MyContext } = this.props;
        return(
            <MyContext.Consumer>
                {(context) =>(
                  <React.Fragment>
                    <div>
                    {context.state.default.map((obj) =>{
                      return(
                        <div>
                          <p>{obj.nome}</p>
                          <p>{obj.idade}</p>
                          <p>{obj.endereco}</p>
                        </div>
                      );
                    })}
                    </div>
                    <div>
                    {context.state.new.map((obj) =>{
                      return(
                        <div>
                          <p>{obj.nome}</p>
                          <p>{obj.idade}</p>
                          <p>{obj.endereco}</p>
                        </div>
                      );
                    })}
                    </div>

                    
                    <button onClick={context.initialValues}> Start </button>
                    <button onClick={context.addValues}> Add Person </button>
                  </React.Fragment>
                )}
            </MyContext.Consumer>
        )
    }
}

export default Show;
