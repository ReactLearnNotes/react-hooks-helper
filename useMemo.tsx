/**
 * 创建todos
 */
export function createTodos() {
	const todos = [];
	for (let i = 0; i < 50; i++) {
		todos.push({
			id: i,
			text: `todo${i + 1}`,
			completed: Math.random() > 0.5,
		});
	}

	return todos;
}

// console.log('todos', createTodos())

/**
 * 根据不同的tab渲染出列表
 * @param todos
 * @param tab
 * @returns
 */
export function filterTodos(todos, tab) {
	console.log(
		`[ARTIFICIALLY SLOW] Filtering ${todos.length} todos for "${tab}" tab.`,
	);
	const startTime = performance.now();
	while (performance.now() - startTime < 1000) {
		// 在 500 毫秒内什么都不做以模拟极其缓慢的代码
	}

	return todos.filter((todo) => {
		if (tab === "all") {
			return true;
		}
		if (tab === "active") {
			return !todo.completed;
		}
		if (tab === "completed") {
			return todo.completed;
		}
	});
}

export function TodoList({ todos, theme, tab }) {
	// const visibleTodos = filterTodos(todos, tab);

	const visibleTodos = useMemo(() => filterTodos(todos, tab), [todos, tab]);
	return (
		<>
			<div className={theme}>
				<ul>
					<p>
						<b>
							Note: <code>filterTodos</code> is artificially slowed down!
						</b>
					</p>
					{visibleTodos.map((todo) => (
						<li key={todo.id}>
							{todo.completed ? <s>{todo.text}</s> : todo.text}
						</li>
					))}
				</ul>
			</div>
		</>
	);
}

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

import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";

const container = document.querySelector("#root");
const root = createRoot(container);

const todos = createTodos();
export function App() {
	const [tab, setTab] = useState("all");
	const [isDark, setIsDark] = useState(false);

	return (
		<>
			<button type="button" onClick={() => setTab("all")}>
				all
			</button>
			<button type="button" onClick={() => setTab("active")}>
				active
			</button>
			<button type="button" onClick={() => setTab("completed")}>
				Completed
			</button>
			<br />
			<label>
				<input
					type="checkbox"
					checked={isDark}
					onChange={(e) => setIsDark(e.target.checked)}
				/>
				Dark mode
			</label>
			<hr />
			<TodoList todos={todos} tab={tab} theme={isDark ? "dark" : "light"} />
		</>
	);
}

root.render(
	<div>
		<App />
	</div>,
);
