import { useState } from 'react'

// const Header = (props) => {
//   return (
//     <>
//       <h1>{props.course}</h1>
//     </>
//   )
// }

// const Content = (props) => {
//   return (
//     <>
//       <Part part={props.parts[0].name} exercises={props.parts[0].exercises}/>
//       <Part part={props.parts[1].name} exercises={props.parts[1].exercises}/>
//       <Part part={props.parts[2].name} exercises={props.parts[2].exercises}/>
//     </>
//   )
// }

// const Part = (props) => {
//   return (
//     <p>
//       {props.part} {props.exercises}
//     </p>
//   )
// }

// const Total = (props) => {
//   return (
//     <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises  + props.parts[2].exercises }</p>
//   )
// }

const Display = ({counter}) => <div>{counter}</div>
const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>


const App = () => {
  // const course = 'Half Stack application development'
  // const parts = [
  //   {
  //     name: 'Fundamentals of React',
  //     exercises: 10
  //   },
  //   {
  //     name: 'Using props to pass data',
  //     exercises: 7
  //   },
  //   {
  //     name: 'State of a component',
  //     exercises: 14
  //   }
  // ]

  // return (
  //   <div>
  //     <Header course={course}/>
  //     <Content parts={parts}/>
  //     <Total parts={parts}/>
  //   </div>
  // )

  const [ counter, setCounter ] = useState(0) //counter is assigned 0, setCounter is assigned to a function that will be used to modify the state

  // setTimeout( //function passes 2 parameters: function to increment counter, and timeout of 1 second
  //   () => setCounter(counter + 1), //this is invoked 1 second after calling setTimeout func
  //   1000
  // )

  const increaseByOne = () => setCounter(counter + 1) //calling a function that changes the state causes the component to rerender
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  return (
    <div>
      <Display counter={counter}/>
      <Button onClick={increaseByOne} text='plus'/>
      <Button onClick={decreaseByOne} text='minus'/>
      <Button onClick={setToZero} text='zero'/>
    </div>
    
  )
  


}

export default App

