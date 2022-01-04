import React from 'react';
import { useState } from 'react';
import { Content } from './components/Content';
import { SideBar } from './components/SideBar';

function App() {
  const [value, setValue] = useState<string>();

  const ChooseCharacterFunction = (character: string) => {
    setValue(character);
  };

  return (
    <div>
      <SideBar CallbackFunction={ChooseCharacterFunction} />
      <Content value={value} />
    </div>
  );
}

export default App;
