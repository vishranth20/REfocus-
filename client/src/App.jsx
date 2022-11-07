import "./App.css";
import { data } from "./data.ts";

function App() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "serif",
        justifyContent: "center",
      }}
    >
      <h1 style={{ color: "white", padding: "10px", backgroundColor: "black" }}>
        &lt; TIMETABLE /&gt;
      </h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          border: "2px solid black",
          backdropFilter: "blur(40px)",
        }}
      >
        {Object.entries(data).map((j, jKey) => {
          return (
            <div
              key={jKey}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h3
                style={{
                  width: "200px",
                  textAlign: "center",
                  padding: "10px",
                  margin: "0px",
                  borderBottom: "2px solid black",
                  backgroundColor: "black",
                  color: "white",
                }}
              >
                {j[0].toUpperCase()}
              </h3>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {j[1].map((k, kKey) => {
                  return (
                    <span
                      key={kKey}
                      style={{
                        margin: "5px",
                        width: "120px",
                        height: "40px",
                        textAlign: "center",
                        display: "flex",
                        color: "white",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {j[0] === "time" ? k : k.period}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
