import "./App.css";
const Header = ({ courses }) => {
  return (
    <div>
      <h1>{courses[0].name}</h1>
    </div>
  );
};
const Part = (props) => {
  console.log();
  return (
    <div>
      <p>
        {props.name}
        {props.exercises}
      </p>
    </div>
  );
};
const Content = ({ courses }) => {
  return (
    <div>
      <Part
        name={courses[0].parts[0].name}
        exercises={courses[0].parts[0].exercises}
      />

      <Part
        name={courses[0].parts[1].name}
        exercises={courses[0].parts[1].exercises}
      />
      <Part
        name={courses[0].parts[2].name}
        exercises={courses[0].parts[2].exercises}
      />
      <Part
        name={courses[0].parts[3].name}
        exercises={courses[0].parts[3].exercises}
      />
    </div>
  );
};
const Total = ({ courses }) => {
  return (
    <div>
      total of{" "}
      {courses[0].parts[0].exercises +
        courses[0].parts[1].exercises +
        courses[0].parts[2].exercises +
        courses[0].parts[3].exercises}{" "}
      exercises
    </div>
  );
};
const Headerr = ({ courses }) => {
  return (
    <div>
      <h2>{courses[1].name} </h2>
    </div>
  );
};
const Contentt = ({ courses }) => {
  return (
    <div>
      <Part
        name={courses[1].parts[0].name}
        exercises={courses[1].parts[0].exercises}
      />
      <Part
        name={courses[1].parts[1].name}
        exercises={courses[1].parts[1].exercises}
      />
    </div>
  );
};
const Totall = ({ courses }) => {
  return (
    <div>
      total of {courses[1].parts[0].exercises + courses[1].parts[1].exercises}{" "}
      exercises
    </div>
  );
};

const App = () => {
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1,
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2,
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3,
        },
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  return (
    <div>
      <Header courses={courses} />
      <Content courses={courses} />
      <Total courses={courses} />
      <Headerr courses={courses} />
      <Contentt courses={courses} />
      <Totall courses={courses} />
    </div>
  );
  // return <course course={courses} />;
};

export default App;
