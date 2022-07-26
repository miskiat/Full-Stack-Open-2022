const StatisticLine = (props) => {
  const { text, value } = props;
  return (
    <div>
      <p>
        {props.text} {props.value}
      </p>

      <table>
        <tr>
          <td>{text}</td>
          <td>{value}</td>
        </tr>
      </table>
    </div>
  );
};
export default StatisticLine;
