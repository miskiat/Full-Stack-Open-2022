import StatisticLine from "./Statistics";

const Statistics = (props) => {
  const { good, neutral, bad, sum, average, positive } = props;

  return (
    <div>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>all {props.sum}</p>
      <p>average {props.average}</p>
      <p>positive {props.positive}</p>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={sum} />
      <StatisticLine text="average" value={average} />
      <StatisticLine text="positive" value={positive} />
    </div>
  );
};
export default Statistics;
