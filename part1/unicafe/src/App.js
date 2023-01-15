import { useState } from 'react'

const Header = (props) => {
  return <h1>{props.text}</h1>
}

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>
}

const Statistic = (props) => {
  return (
    <tr> 
      <td>{props.name}</td> 
      <td>{props.value}</td> 
    </tr>
  )
}

const Statistics = (props) => {
  const {good, neutral, bad} = props //destructuring props 
  const calculateTotal = () => good + bad + neutral
  const calculateAverage = () => calculateTotal()/3
  const calculatePositive = () => good/calculateTotal() * 100

  if (calculateTotal() === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  } 

  return (
    <table>
      <tbody>
        <Statistic name="good" value={good}/>
        <Statistic name="neutral" value={neutral}/>
        <Statistic name="bad" value={bad}/>
        <Statistic name="all" value={calculateTotal()}/>
        <Statistic name="average" value={calculateAverage()}/>
        <Statistic name="positive" value={calculatePositive() + "%"}/>
      </tbody>
    </table>
  )

}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)

  return (
    <div>
      <Header text="give feedback"/>
      <Button handleClick={handleGoodClick} text="good"/>
      <Button handleClick={handleNeutralClick} text="neutral"/>
      <Button handleClick={handleBadClick} text="bad"/>
      <Header text="statistics"/>
      <Statistics good={good} neutral={neutral} bad={bad}/>

    </div>
  )
}

export default App