import {useEffect, useState} from 'react';
import axios from 'axios';
import Table from "./components/Table";

// creating App functional componenet
function App() {

    // declare a state variable that will store the array of people from remote server
    const [people, setPeople] = useState([]);

    // calling get method when component is rendered, its like constructor
    useEffect(() => {
        getPeople();
    }, []);

    // creating a method that will get all data from provided URL
    // then get people array from it and save it in state
    const getPeople = async () => {
        const response = await axios.get(`http://api.open-notify.org/astros.json`);
        setPeople(response.data.people);
    }

    // rendering the UI for App
    return (
        <div className="container">
            <div className="row" style={{marginTop: '30px'}}>
                <div className="col">
                    <h2>WHO IS IN SPACE RIGHT NOW!!!!</h2>
                </div>
            </div>
            <div className="row" style={{marginTop: '30px'}}>
                <div className="col">
                    {/*Calling our Table component here and passing people array to it as parameter*/}
                    {people.length > 0 && <Table people={people} />}
                </div>
            </div>
        </div>
    );
}

export default App;
