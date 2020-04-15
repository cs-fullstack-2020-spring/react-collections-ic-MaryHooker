import React,{Component} from 'react';

class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() { 
        return ( 
            <div>
                <h3>To Do Component</h3>
                <div>
                    <p>Post: {this.props.dataInfo.postId}</p>
                    <p>ID: {this.props.dataInfo.id}</p>
                    <p>Name: {this.props.dataInfo.name}</p>
                    <p>Email: {this.props.dataInfo.email}</p>
                    <p>Body: {this.props.dataInfo.body}</p>
                    </div>
            </div>
         );
    }
}
 
export default ToDo;