const Total = (props) => {
    const {parts} = props
    const sum = parts.reduce((s, p) => { //s is current total sum, p is the current object in array
        return s + p.exercises
    }, 0)

    return (
        <p><b>total of {sum} exercises</b></p>
    )
}

const Part = (props) => {
    return (
        <p>
        {props.name} {props.exercises}
        </p>
    )
}

const Header = (props) => {
    return (
        <h1>{props.course}</h1>
    )
}
  
const Content = (props) => {
    const {parts} = props
    return (
        <div>
        {parts.map(part => 
            <Part key={part.id} name={part.name} exercises={part.exercises}/>
        )}
        </div>
        
    )
}

const Course = (props) => {
    const {course} = props
    return (
        <div>
        <Header course={course.name}/>
        <Content parts={course.parts}/>
        <Total parts={course.parts}/>
        </div>
        
    )
}

export default Course