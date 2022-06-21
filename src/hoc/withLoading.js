import React from 'react'


export const withLoading = (WrappedComponent, option = {
   initIsLoading:false
}) => {
    return class NewComponent extends React.Component {
        state = {
            counter: option.initIsLoading,
        }

        startLoading = () => {
            this.setState({isLoading:true})
        }

        endLoading = () => {
            this.setState({isLoading:false})
        }
        
        showLoading = (loadingType) => {
            switch(loadingType) {
                case 'normal':
                    return <h1> Loading </h1>
            }
        }
       
        handleSetOption = (opt) => {
            this.setState({ counter:opt.counter})
        }

        render() {
            return <WrappedComponent counter={this.state.counter} startLoading={this.startLoading} endLoading={this.endLoading} handleSetOption={this.handleSetOption}></WrappedComponent>
        }
    }
}