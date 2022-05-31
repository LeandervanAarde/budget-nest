
import React, { useState } from "react";
import { Row, Container } from "react-bootstrap";
import { Routes, Route } from 'react-router-dom';
import './index.scss';
import Landing from "./components/Landing";
import Main from "./components/Main";
import TotalExpense from "./components/TotalExpense";

function App() {
  const [showPage, setShowPage] = useState(false);

  const showDash = () => {
    setShowPage(true);
  };
  return (
    <Container fluid className="content">
      <Row>
        {!showPage ? (
          <Landing
            func={showDash}
          />
        )
          : (
            <Routes>
              <Route path="/" element={<Landing />}></Route>
              <Route path="/Home" element={<Main />}></Route>
              <Route path="/TotalExpenses" element={<TotalExpense />}></Route>

            </Routes>
          )}
      </Row>
    </Container>
  );
}

export default App;
