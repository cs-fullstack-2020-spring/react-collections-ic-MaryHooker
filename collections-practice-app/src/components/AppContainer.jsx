import React,{Component} from 'react';
import ToDoCollector from './ToDoCollector';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        //save imported rawData under variable
        const rawData = require(`./rawData`)
        //sanity
        // console.table(rawData);

        return ( 
            <div>
                <h1>Hello World</h1>
                {/* pass down rawData */}
                <ToDoCollector rawData={rawData}/>
            </div>
         );
    }
}
 
export default AppContainer;