import logo from './logo.svg';
import './App.css';
import Tab from './compound-pattern/Tab';
import { useState } from 'react';

function App() {
  const [currentTabIndex, setIndex] = useState(1)

  const handleChange = (newIndex) => {
    setIndex(newIndex)
  }
  return (
    <div className="App">
      <Tab currentTab={currentTabIndex} onChange={handleChange}>
        <Tab.HeadsContainer>
          <Tab.Item label="Tab1" index={1} />
          <Tab.Item label="Tab2" index={2} />
          <Tab.Item label="Tab3" index={3} />
        </Tab.HeadsContainer>
        <Tab.ContentContainer>
          <Tab.ContentItem index={1}>
            I am content 1
          </Tab.ContentItem>
          <Tab.ContentItem index={2}>
            I am content 2
          </Tab.ContentItem>
          <Tab.ContentItem index={3}>
          I am content 3
          </Tab.ContentItem>

        </Tab.ContentContainer>
      </Tab>
    </div>
  );
}

export default App;
