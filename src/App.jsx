import { useState } from 'react';
import { CORE_CONCEPTS } from './data.js';
import { EXAMPLES } from './data.js';
import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx'
import TabButtos from './components/TabBusston.jsx';
import componentsImg from './assets/components.png'

function App() {
  const [selectedTopic, setSelectedtopic] = useState();
  // let tabConent = 'Please Click Button'
  function handleClick(selectedButton) {
    setSelectedtopic(selectedButton);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concept</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButtos onSelect={() => handleClick('components')}>Components</TabButtos>
            <TabButtos onSelect={() => handleClick('jsx')}>JSX</TabButtos>
            <TabButtos onSelect={() => handleClick('props')}>Props</TabButtos>
            <TabButtos onSelect={() => handleClick('state')}>State</TabButtos>
          </menu>
          {!selectedTopic ? <p>Please select a topic</p> : 
          <div id='tab-content'>
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>
              {EXAMPLES[selectedTopic].code}
            </code>
          </pre>
        </div>
          }

        </section>
      </main>
    </div>
  );
}

export default App;
