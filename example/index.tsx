import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Button, Card } from '../.';

const App = () => {
  return (
    <div>
      <Button text="Olá mundo" />
      <Card style={{ width: '600px' }}>
        <h1>Title</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda,
          cum eum impedit, in inventore ipsa ipsam quae quam qui ut vel
          voluptatem. Ad, aliquam debitis minus sit sunt voluptate?
        </p>
      </Card>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
