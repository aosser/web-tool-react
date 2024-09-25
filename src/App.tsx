import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Evaluation from './components/Evaluation.tsx'
import Attack from './components/Attack.tsx';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import GenAI from './components/GenAI.tsx';
import Dashboard from './components/Dashboard.tsx';
import EvalAndAttack from './components/EvalAndAttack.tsx';
import { createContext, useState } from 'react';

export const AccountIDContext = createContext<Partial<object>>({});
const App = () => {
  const [accountID, setAccountID] = useState("");

  return (
    <AccountIDContext.Provider value={{ accountID, setAccountID }}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Evaluation />} />
          <Route path="/evaluation" element={<Evaluation />} />
          <Route path="/attack" element={<Attack />} />
          <Route path="/evalandattack" element={<EvalAndAttack />} />
          <Route path="/genai" element={<GenAI />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<p>Not Found</p>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AccountIDContext.Provider>
  )
}

export default App