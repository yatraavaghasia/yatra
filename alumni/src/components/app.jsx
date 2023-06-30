import React from "react";
import Card from "./card";
import alumni from "./alumni";
import Connect from "./connect";
import Navbar from "./Navbar";
import Footer from "./Footer";
function CreateEntry(alum) {
  return (
    <Card
      key={alum.id}
      name={alum.name}
      position={alum.position}
      img={alum.image}
      url={alum.url}
    />
  );
}
function App() {
  let [graduatingYear, changeYear] = React.useState("");
  const [filteredAlumni, setFilteredAlumni] = React.useState(
    alumni.filter((alum) => alum.year === "2023")
  );
  React.useEffect(() => {
    let filteredData = alumni.filter((alum) => alum.year === graduatingYear);
    setFilteredAlumni(filteredData);
  }, [graduatingYear]);
  React.useEffect(() => {
    let initialFilteredData = alumni.filter((alum) => alum.year === "2023");
    setFilteredAlumni(initialFilteredData);
  }, []);
  const handleButtonClick = (value) => {
    changeYear(value);
  };
  console.log(graduatingYear);
  return (
    <div className="container">
      <Navbar />
      <h1>Alumni</h1>
      <div className="bar">
        <button
          value={2023}
          onClick={() => {
            handleButtonClick(2023);
          }}
        >
          2023
        </button>
        <button
          value={2022}
          onClick={() => {
            handleButtonClick(2022);
          }}
        >
          2022
        </button>
        <button
          value={2021}
          onClick={() => {
            handleButtonClick(2021);
          }}
        >
          2021
        </button>
        <button
          value={2020}
          onClick={() => {
            handleButtonClick(2020);
          }}
        >
          2020
        </button>
      </div>
      <div className="year">
        {" "}
        {filteredAlumni.length > 0 ? (
          <div className="year-child">
            <h2 className="gradyear">{graduatingYear}</h2>
            {filteredAlumni.map(CreateEntry)}
          </div>
        ) : (
          <div className="year-child">
          <h2 className="gradyear">Over the years</h2>
          {alumni.map(CreateEntry)}
          </div>
        )}
      </div>
      <Connect />
      <Footer />
    </div>
  );
}
export default App;
