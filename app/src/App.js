import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting'
import NameList from './components/NameList'
import Stylesheet from './components/Stylesheet'
import Inline from './components/Inline'
import './appStyles.css'
import styles from './appStyles.module.css'

function App() {
  return (
    <div className="App">
      <h1 className="error">Error</h1>
      <h1 className={styles.success}>Success</h1>
      <Inline />
      <Stylesheet primary={true} />
      <NameList />
      <UserGreeting />
      <ParentComponent />
      {/* <EventBind />
      <ClassClick />
      <FunctionClick /> */}
      {/* <Counter />
      <Greet superstar="Aguila" gimmick="Fake Mexican" />
      <Greet superstar="Al Snow" gimmick="Barely a human">
        <p> What does everybody want? Head! </p>
      </Greet>
      <Welcome superstar="Rey Mysterio" gimmick="Real Mexican" />
      <Welcome superstar="Bill Gunn" gimmick="Badd Man">
        <p> OH YOU DIDN"T KNOW?!?!?! You better call somebody!!! </p>
      </Welcome>
      <Message /> */}
    </div>
  );
}

export default App;
