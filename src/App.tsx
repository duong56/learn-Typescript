import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const myAsynFunction = async (url: string): Promise<T> => {
    const { data } = await fetch(url)
    return data
  }

  const immediatelyResolvedPromise = (url: string) => {
    const resultPromise = new Promise((resolve, reject) => {
      resolve(fetch(url))
    })
    return resultPromise
  }

  // I send a request to the company. This is synchronous
  // company replies with a promise
  const angelMowersPromise = new Promise<string>((resolve, reject) => {
    // a resolved promise after certain hours
    setTimeout(() => {
      resolve('We finished mowing the lawn')
    }, 100000) // resolves after 100,000ms
    reject("We couldn't mow the lawn")
  })

  const myPaymentPromise = new Promise<Record<string, number | string>>((resolve, reject) => {
    setTimeout(() => {
      resolve({
        amount: 1000,
        note: 'Thank You',
      })
    }, 100000)
    reject({
      amount: 0,
      note: 'Sorry Lawn was not properly Mowed',
    })
  })

  angelMowersPromise
    .then(() => myPaymentPromise.then(res => console.log(res)))
    .catch(error => console.log(error))

  function add(a: number, b: number): number {
    return a + b;
  }

  const api = 'http://dummy.restapiexample.com/api/v1/employees'
  fetch(api)
    .then(response => response.json())
    .then(employees => employees.forEach(employee => console.log(employee.id))
      .catch(error => console.log(error.message)))

  let sum = add(10, 20);


  const myAsync = async (): Promise<Record<string, number | string>> => {
    await angelMowersPromise
    const response = await myPaymentPromise
    return response
  }

  const baseApi = 'https://reqres.in/api/users?page=1'
  const userApi = 'https://reqres.in/api/user'

  const fetchAllEmployees = async (url: string): Promise<Employee[]> => {
    const response = await fetch(url)
    const { data } = await response.json()
    return data
  }

  const fetchEmployee = async (url: string, id: number): Promise<Record<string, string>> => {
    const response = await fetch(`${url}/${id}`)
    const { data } = await response.json()
    return data
  }
  const generateEmail = (name: string): string => {
    return `${name.split(' ').join('.')}@company.com`
  }

  const runAsyncFunctions = async () => {
    try {
      const employees = await fetchAllEmployees(baseApi)
      Promise.all(
        employees.map(async user => {
          const userName = await fetchEmployee(userApi, user.id)
          const emails = generateEmail(userName.name)
          return emails
        })
      )
    } catch (error) {
      console.log(error)
    }
  }
  runAsyncFunctions()


  console.log(sum);

  function multiply(a: number, b: number, c?: number): number {
    if (typeof c !== 'undefined') {
      return a * b * c;
    }

    return a * b;
  }

  console.log(multiply(1, 2, 3))

  function multiply(a: number, b?: number, c: number): number {
    if (typeof c !== 'undefined') {
      return a * b * c;
    }
    return a * b;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
