import { useState } from 'react'
import { createRoot } from 'react-dom/client'

export default function App() {
  return (
    <div>
      <Comp1 />
      <Comp2 />

    </div>
  )
}

// 组件添加状态
function Comp1() {
  const [age, setAge] = useState(21)

  const handleClick = () => {
    setAge(22)
    console.log(age)
  }
  return <button onClick={handleClick}>{age}</button>
}

const a = 1

function Comp2() {
  const [number, setNumber] = useState(() => {
    return a === 1 ? 1 : 2
  })

  return (
    <div>
      <span>
        number is:
        {number}
      </span>
      <button
        onClick={() => {
          setNumber(number + 1)
          // 调用 set 函数 不会 改变已经执行的代码中当前的 state：
          console.log('set 之后是', number)
        }}
      >
        {number}
      </button>
    </div>
  )
}

const domNode = document.getElementById('root') // createRoot(domNode, options?)
const root = createRoot(domNode)
root.render(<App />)
