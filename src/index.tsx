import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { theme } from './styles/theme'
import { Provider } from 'react-redux'
import  { store } from './redux/store'

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ChakraProvider theme={theme}>
                <App />
            </ChakraProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
