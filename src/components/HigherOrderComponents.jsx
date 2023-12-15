import React, { Component } from "react";

class App extends Component {
    constructor() {
        super();
        this.state = {
            userData: [
                { id: "1", name: "Joe", user_type: "Developer", age: 31, years: 11 },
                { id: "2", name: "Hill", user_type: "Designer", age: 26, years: 4 },
                { id: "3", name: "John", user_type: "Teacher", age: 24, years: 2 },
                { id: "4", name: "Sam", user_type: "Entreprenuer", age: 58, years: 25 },
                { id: "5", name: "Jack", user_type: "Designer", age: 43, years: 18 },
            ],
        };
    }
    renderItems = () => {
        const data = this.state.userData;
        const mapRows = data.map((item) => (
            <React.Fragment key={item.id}>
                <li className="list">
                    <p> Id: {item.id}</p>
                    <p> Name: {item.name}</p>
                    <p>User Type: {item.user_type}</p>
                </li>
            </React.Fragment>
        ));
        return mapRows;
    };
    render() {
        return (
            <>
                <h1>Display all items</h1>
                <div className="display">{this.renderItems()}</div>

                <h1>Display based on user type</h1>
                <div className="display">
                    {this.state.userData
                        .filter((item) => item.user_type === "Designer")
                        .map((item) => (
                            <li className="list" key={item.id}>
                                <p>Id: {item.id}</p>
                                <p>Name: {item.name}</p>
                                <p>User Type: {item.user_type}</p>
                            </li>
                        ))}
                </div>
                <h1>Filter all data starting with J</h1>
                <div className="display">
                    {this.state.userData
                        .filter((item) => item.name.startsWith("J"))
                        .map((item) => (
                            <li className="list" key={item.id}>
                                <p>Id: {item.id}</p>
                                <p>Name: {item.name}</p>
                                <p> User Type: {item.user_type}</p>
                            </li>
                        ))}
                </div>
                <h1>
                    Filter all data based on age greater than 28 and age less than or
                    equal to 50
                </h1>
                <div className="display">
                    {this.state.userData
                        .filter((item) => item.age > 28 && item.age <= 50)
                        .map((item) => (
                            <li className="list" key={item.id}>
                                <p>Id: {item.id}</p>
                                <p> Name: {item.name}</p>
                                <p>User Type: {item.user_type}</p>
                            </li>
                        ))}
                </div>
                <h1>Find the total years of the designers </h1>
                <div className="display">
                    {this.state.userData
                        .filter((item) => item.user_type === "Designer")
                        .map((item) => item.years)
                        .reduce((a, b) => a + b, 0)}
                </div>
            </>
        );
    }
}

export default App;