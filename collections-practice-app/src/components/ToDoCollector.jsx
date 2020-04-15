import React, { Component } from 'react';
import ToDo from './ToDo';

class ToDoCollector extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    // componentDidMount(){
    //     console.table(this.props.rawData)
    // }
    
    // "postId": 1,
    // "id": 1,
    // "name": "id labore ex et quam laborum",
    // "email": "Eliseo@gardner.biz",
    // "body":
        render(){
            console.table(this.props.rawData)
            return (
                <div>
                    <h2>Collector Component</h2>
                    {
                        this.props.rawData.map((data) => {
                            return (
                                
                                <ToDo key={data.id} dataInfo={data}/>     
                               
                            )
                        }

                        )
                    }
                </div>
            )
        }
}

export default ToDoCollector;