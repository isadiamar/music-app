import ReactDOM from 'react-dom';
import { ThemeProvider } from './context/ThemeContext';

import './index.css';
import App from './App';

ReactDOM.render(<ThemeProvider><App /></ThemeProvider>, document.getElementById('root'));
