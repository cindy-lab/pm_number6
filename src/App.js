
  import React, { Component } from 'react';

  class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        array : [
          {firstname : "Juan",
          lastname: "De la Cruz",
          age: 21
          },

          { firstname: "Mark",
          lastname: "Paul",
          age: 22
          },

          {firstname: "Paul",
          lastname: "Mark",
          age: 23
          }
        ]
      };
    }
    inputHandler = () => {
      const datalist = this.state.array;

      const list = datalist.map((item, index) => (
        <div class="center">
        <br/>
        <h1>Data:</h1>
        <hr/>
          <div key={item.id}>            
              <div>firstname :{item.firstname}, 
              </div>
              <div>lastname : {item.lastname}
              </div>
              <div>age : {item.age}
              </div>          
          </div>
        </div>
      ));
      return list;
    };
    render() {
      return <h3>{this.inputHandler()}</h3>;
    }
  }
      
  export default App;

