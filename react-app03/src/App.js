import Component1 from "./Component1";
import Component2 from "./Component2";

const App = () => (
  <section className="container-fluid p-5">
    <div className="row">
      <div className="col">
        <Component1 />
      </div>
      <div className="col">
        <Component2 />
      </div>
    </div>
  </section>
);

export default App;
