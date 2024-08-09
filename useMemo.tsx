// import { StrictMode, memo, useEffect, useMemo, useState } from 'react'
// import { createRoot } from 'react-dom/client'
// function createTodos() {
//   const todos = []
//   for (let i = 0; i < 50; i++) {
//     todos.push({
//       id: i,
//       text: 'todo' + (i + 1),
//       comp: Math.random() > 0.5
//     })
//   }

//   return todos
// }
// const todos = createTodos()
// console.log('full todos', todos)
// function App() {
//   const [tab, setTab] = useState('all')
//   const [isDark, setIsDark] = useState(false)

//   return (
//     <>
//       <button onClick={() => setTab('all')}>all</button>
//       <button onClick={() => setTab('active')}>active</button>
//       <button onClick={() => setTab('comp')}>comp</button>
//       <br />
//       <label>
//         <input
//           type='checkbox'
//           checked={isDark}
//           onChange={(e) => setIsDark(e.target.checked)}
//         />
//         dark mode
//       </label>
//       <hr />
//       <TodoList todos={todos} tab={tab} theme={isDark ? 'dark' : 'light'} />
//     </>
//   )
// }

// const List = memo(function List({ items }) {
//   // console.log('items.length', items.length)
//   let startTime = performance.now()
//   while (performance.now() - startTime < 500) {}

//   return (
//     <>
//       <ul>
//         {items.map((item) => {
//           return (
//             <li key={item.id}>{item.comp ? <s>{item.text}</s> : item.text}</li>
//           )
//         })}
//       </ul>
//     </>
//   )
// })

// function filterTodos(todos, tab) {
//   return todos.filter((todo) => {
//     if (tab === 'all') {
//       return true
//     } else if (tab === 'active') {
//       return !todo.comp
//     } else if (tab === 'comp') {
//       return todo.comp
//     }
//   })
// }

// function TodoList({ todos, theme, tab }) {
//   // const visibleTodos = filterTodos(todos, tab)
//   const visibleTodos = useMemo(() => filterTodos(todos, tab), [todos, tab])
//   console.log('过滤后的数组', visibleTodos)
//   return (
//     <>
//       <div className={theme}>
//         <List items={visibleTodos} />
//       </div>
//     </>
//   )
// }

// // const d =

// function SearchUserList() {
//   const [users, setUsers] = useState(null)
//   const [searchKey, setSearchKey] = useState('')
//   useEffect(() => {
//     const doFetch = async () => {
//       const res = await fetch('https://reqres.in/api/users/')
//       setUsers(await res.json())
//     }
//     doFetch()
//   }, [])

//   let usersToShow = null
//   if (users) {
//     usersToShow = users.data.filter((user) => {
//       return user.first_name.includes(searchKey)
//     })
//   }

//   return (
//     <div>
//       <input
//         type='text'
//         value={searchKey}
//         onChange={(e) => setSearchKey(e.target.value)}
//       />
//       <ul>
//         {usersToShow &&
//           usersToShow.length > 0 &&
//           usersToShow.map((user) => {
//             return <li key={user.id}> {user.first_name}</li>
//           })}
//       </ul>
//     </div>
//   )
// }

import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.querySelector('#root');
const root = createRoot(container);

root.render(<div>A React Page compiled by Farm</div>);


