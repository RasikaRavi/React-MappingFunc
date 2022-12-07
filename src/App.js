import "./styles.css";

const arr = ["Mars", "Venus", "Jupiter", "Earth", "Saturn", "Neptune"];
const renderList = arr.map((item) => (
  <div>
    <table cellpadding="8" cellspacing="0">
      <td>{item}</td>
    </table>
  </div>
));
export default function App() {
  return <div className="App">{renderList}</div>;
}
