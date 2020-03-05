import React from 'react';

import PanelContainer from './components/Panel/PanelContainer';

const App = props => {
  return (
    <div className="container-fluid">
      <div className="row m-1">
        <PanelContainer panelTitle='toDo' tasks={props.state.toDo} />
        <PanelContainer panelTitle='inProgress' tasks={props.state.inProgress} />
        <PanelContainer panelTitle='done' tasks={props.state.done} />
      </div>
    </div>
  );
}

export default App;