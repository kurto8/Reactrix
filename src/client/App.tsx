import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import Button from '@material-ui/core/Button';
import ComponentLibrary from './containers/ComponentLibrary';

interface Props {
  message: string;
}

const App = ({ message }: Props) => (
  <div>
    <Button variant='outlined' size='small'>
      {message}
    </Button>
    <ComponentLibrary message='Hi'/>
  </div>
);

export default hot(App);
