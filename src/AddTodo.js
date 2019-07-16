import React, { Component } from 'react'

class AddTodo extends Component {
    state = {
        content: ''   //初期値を空欄にする
    }

    //入力
    handleChange = (e) => {
        this.setState({
            content: e.target.value //inputに入る文字をcontentの値にする
        })
    }

    //提出
    handleSubmit = (e) => {
        e.preventDefault();　
        this.props.addTodo( this.state );　//入力欄に打ち込んだものをtodosリストに加える
        this.setState({　//state変更
            content:''　//変更したcontentのstateを初期値と同じstateにする
        })　
    }

    render(){
        return (
            <div>

                <form onSubmit={ this.handleSubmit } //onSubmitでsubmitの機能、submitのやり方をhandleSubmitで指定
                >　
                    <label htmlFor="">Add new todo:</label>
                    <input type="text" onChange={ this.handleChange } value={ this.state.content }/ //onChangeで空欄の中を変更、valueで初期値を表示
                >
                </form>
                
            </div> 
        )
    }
}

export default AddTodo
