import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Button, Card, Input} from '../.';

const App = () => {
    const [state, setState] = React.useState('')
    const ref = React.useRef(null)

    return (
        <div>
            <Button text="Olá mundo"/>
            <Card>
                <h1>Title</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda,
                    cum eum impedit, in inventore ipsa ipsam quae quam qui ut vel
                    voluptatem. Ad, aliquam debitis minus sit sunt voluptate?
                </p>

                <Input
                    innerRef={ref}
                    value={state}
                    label='ipsum'
                    onChange={(e) => setState(e.target.value)}
                    placeholder='blues'
                />

            </Card>
        </div>
    );
};

ReactDOM.render(<App/>, document.getElementById('root'));
