import { useState } from 'react';
import data from './data';

import CelebrantList from './CelebrantList';

import './App.css';

function App() {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <div className="card">
        <h3>{people.length} birthdays today</h3>
        <CelebrantList />
        <button onClick={() => setPeople([])}>Clear All</button>
      </div>
    </main>
  );
}

export default App;
