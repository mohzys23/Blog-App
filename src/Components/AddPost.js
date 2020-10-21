import React, { Component } from 'react';
import {Link} from "react-router-dom";


class AddPost extends Component{

    state = {
    show: false,
  }

  toggle = () => this.setState((currentState) => ({show: !currentState.show}));
    render() {
        return(
            <div className="post-wrapper">

            <div className="add-post">
            <h4>Create Post</h4>
                <button onClick={this.toggle}>Create Post: {this.state.show}<span>+</span></button>
                
                {this.state.show && 
                <form>
                    <label>Add Title<input type="text" /></label>

                    <br />
                    <label>Add Image<input type="file" /></label>
                    <br />
                    <label>Write Post<input type="textArea" /></label>

                </form>

                }
            </div>



            

            </div>
        );
    }
}

export default AddPost;