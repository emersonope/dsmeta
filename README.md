# The backend was deployed to Heroku and the front to Netlify

##### In the free Heroku account, when the back is not being used, it will be temporarily inactive. When accessing the link, the back data will take about 1 minute to return to the front.

### access by clicking here:  <a href="https://631bd92d214dbb0009895527--meek-yeot-66a484.netlify.app/" target="_blank" rel="noopener noreferrer">DSMetaPage</a>.</p>

# Checklist

## Languages and tools used in this project

- Java 17
- SpringBoot 2.7.1
- ReactJs
- Heroku CLI
- Twilio for SMS service

## Requirements to run the project:
- Java 17 installed
- IntelliJ (or any IDE you like)
- Git installed
- download the project in this repository
- Nodejs 16 and Yarn (video: https://youtu.be/x5tgFTS-CYA)
- STS (video: https://youtu.be/TGQ0K9QsX88 )
- VS Code
  - `IntelliCode`
  - `ESLint`
  - `JSX HTML <tags/>`

# Figma FrontEnd Design 

<p>Click to check the template: <a href="https://www.figma.com/file/oDyi3LZOTeYaUcs8obHZwR/DSMeta1?node-id=9%3A581" target="_blank" rel="noopener noreferrer">DSMetaDesign</a>.</p>

![image](https://user-images.githubusercontent.com/64603952/188659866-22652b11-5e9b-4953-8553-e7960fc0ea7f.png)

## The ReactJS project was created using vite (https://vitejs.dev/guide/)

```
yarn create vite frontend --template react-ts
```

```
cd frontend
```

## Dependences used in the front end project:

### Datepicker (Documentation: https://github.com/Hacker0x01/react-datepicker)
```
yarn add react-datepicker@4.8.0 @types/react-datepicker@4.4.2
```
#### Example of how to use it:
```javascript
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

<DatePicker
    selected={new Date()}
    onChange={(date: Date) => {}}
    className="dsmeta-form-control"
    dateFormat="dd/MM/yyyy"
/>
```

### React Hook useState to keep date state

#### Example of how to create a date from X days ago:
```js
const date = new Date(new Date().setDate(new Date().getDate() - 365));
```

#### Adding axios to make request with Axios and useEffect

```
yarn add axios@0.27.2
```

## Listing sales

Definição da BASE_URL:

```javascript
export const BASE_URL = import.meta.env.VITE_BACKEND_URL ?? "http://localhost:8080";
```

## Adding toast to receive confirmation message

```
yarn add react-toastify@9.0.5
```

In App.tsx:
```javascript
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
```

#### To solve a black screen issue in Netlify, it was triggered `window.React = React` in main.tsx as below

```js
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

window.React = React

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
```

# To run locally you need to download this project and follow this step:

## Inside the frontend folder:

### Install dependences
```
yarn 
```

### Run the project

```
yarn dev
```

### Build the project:


```
yarn build
```
