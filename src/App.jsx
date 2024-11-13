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

  let tabContent = <p>Please select a topic</p>
  if (selectedTopic) {
    tabContent = (
      <div id='tab-content'>
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>
            {EXAMPLES[selectedTopic].code}
          </code>
        </pre>
      </div>
    );
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concept</h2>
          <ul>
            {CORE_CONCEPTS.map((item) =>(
              <CoreConcept key={item.title} {...item}/>
            ))}
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButtos isSelected={selectedTopic === 'components'} onSelect={() => handleClick('components')}>Components</TabButtos>
            <TabButtos isSelected={selectedTopic === 'jsx'} onSelect={() => handleClick('jsx')}>JSX</TabButtos>
            <TabButtos isSelected={selectedTopic === 'props'} onSelect={() => handleClick('props')}>Props</TabButtos>
            <TabButtos isSelected={selectedTopic === 'state'} onSelect={() => handleClick('state')}>State</TabButtos>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
