import { useReducer } from "react"
import Form from "./components/Form"
import { ActivityReducer, initialState } from "./reducers/activity-reducer"
import ActivityList from "./components/ActivityList"

function App() {

  const [state , dispatch] = useReducer(ActivityReducer , initialState)

    return (
      <>
          <header className=" bg-emerald-500 py-3">
            <div className=" max-w-4xl mx-auto flex justify-between">
              <h1 className=" text-center text-lg font-bold text-white uppercase">
                Contador de Calorias
              </h1>
            </div>
          </header>

          <section className=" bg-emerald-200 py-20 px-5">
            <div className=" max-w-4xl mx-auto">
              <Form 
                  dispatch= {dispatch}              
              />
            </div>
          </section>

          <section className=" p-10 mx-auto max-w-4xl">
            <ActivityList 
              activities={state.activities}
            />
          </section>
      </>
    )
}

export default App
