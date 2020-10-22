import React, { Component } from 'react';
import './AddPost.scss';
import {Link} from "react-router-dom";


class AddPost extends Component{

    state = {
        show: false,
        title: "",
        post: "",
        image: ""
    }

  toggle = () => this.setState((currentState) => ({show: !currentState.show}));

  changeTitle = (event) => this.setState({title: event.target.value});

  changePost = (event) => this.setState({post: event.target.value});

  handleImageUpload = (event) => {
    this.setState({
        image: URL.createObjectURL(event.target.files[0])
    })
  }

  handleSubmit = (event) => {
      event.preventDefault();
      this.setState({ show: false });
  }

    render() {
        return(
            <div className="post-wrapper">

            <h4>Create Post</h4>
            <div className="add-post">
            
                <button onClick={this.toggle}>Create Post<span>+</span> {this.state.show}</button>
                
                {this.state.show ? 
                <form onSubmit={this.handleSubmit}>
                    <label>Add Title<input type="text" onChange={this.changeTitle} /></label>
                    <br />                    
                    <label>Write Post<input type="textarea" onChange={this.changePost} className="textarea"/></label>
                    <label>Add Image<input type="file" onChange={this.handleImageUpload} /></label>
                    <br />
                    <button>Submit</button>
                </form> :
                <div className="section-post">
                    <img src={this.state.image} alt={this.state.title} />
                    <p>{this.state.title}</p>
                    <Link to="/post">Read More...</Link>
                </div>
                }

                <hr />


            </div>

</div>
        );
    }
}

export default AddPost;