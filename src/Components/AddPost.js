import React, { Component } from 'react';
import './AddPost.scss';
import {Link} from "react-router-dom";


class AddPost extends Component{

    state = {
    show: false,
  }

  toggle = () => this.setState((currentState) => ({show: !currentState.show}));
    render() {
        return(
            <div className="post-wrapper">

            <h4>Create Post</h4>
            <div className="add-post">
            
                <button onClick={this.toggle}>Create Post<span>+</span> {this.state.show}</button>
                
                {this.state.show && 
                <form>
                    <label>Add Title<input type="text" /></label>

                    <br />                    
                    <label>Write Post<input type="textarea" /></label>
                    <br />
                    <label>Add Image<input type="file" /></label>
                    <br />
                    <button>Sumit</button>

                </form>

                }

                <hr />
            </div>



            

            </div>
        );
    }
}

export default AddPost;