import { StrictMode, createContext, use } from 'react'
import ReactDOM from 'react-dom/client'

const Ctx = createContext(null)

export default function MyApp() {
  return (
    <Ctx.Provider value="light">
      <Form></Form>
    </Ctx.Provider>
  )
}

function Form() {
  return (
    <Panel title="Welcome">
      <Button show={true}>Sign up</Button>
      <Button show={false}>Log in</Button>
    </Panel>
  )
}

function Panel({ title, children }) {
  const t = use(Ctx)
  console.log('123', t)
  const className = `panel-${t}`
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  )
}

function Button({ show, children }) {
  if (show) {
    const t = use(Ctx)
    const className = `button-${t}`
    return (
      <button className={className}>
        {children}
      </button>
    )
  }

  return false
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyApp />
  </StrictMode>,
)
