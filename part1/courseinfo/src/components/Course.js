import React from 'react';

const Header = (props) => {
  return (
    <h2>{props.course}</h2>
  )
}

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(part => <Part key={part.id} part={part} />)}
    </div>
  )
}

const Total = ({ parts }) => {
  return (
    <b>total of {parts.reduce((sum, part) => sum + part.exercises, 0)} exericses</b>
  )
}

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  );
};

export default Course;