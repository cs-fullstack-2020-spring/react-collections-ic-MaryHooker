import React, { Component } from 'react';
import ToDo from './ToDo';

class ToDoCollector extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount(){
        console.log(this.props.rawData)
    }
    
    // "postId": 1,
    // "id": 1,
    // "name": "id labore ex et quam laborum",
    // "email": "Eliseo@gardner.biz",
    // "body":
        render(){
            
            return (
                <div>
                    <h2>Collector Component</h2>
                    {
                        this.props.rawData.map((data,index) => {
                            return (
                                <div key={index}>
                                <ToDo key={index} dataInfo={data}/>     
                                </div>
                            )
                        }

                        )
                    }
                </div>
            )
        }
}

export default ToDoCollector;