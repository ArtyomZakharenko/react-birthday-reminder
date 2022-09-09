import {ReactNode, useState} from "react";

import data, {Person} from "./data";
import List from "./List";

export interface PersonProps {
    people: Person[];
    children?: ReactNode;
}

function App() {
    const [people, setPeople] = useState(data);
  return (
      <main>
        <section className="container">
            <h3>{people.length} birthdays today</h3>
            <List people={people}/>
            <button
                onClick={() => setPeople([])}
            >
                Clear All
            </button>
        </section>
      </main>
  );
}

export default App;
