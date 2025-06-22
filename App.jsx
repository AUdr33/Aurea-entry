import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

function VortexAnimation() {
  const navigate = useNavigate();

  React.useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/complete");
    }, 2500);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="vortex"></div>
    </div>
  );
}

function Home() {
  const [inviteCode, setInviteCode] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleAccess = () => {
    if (inviteCode.trim().toLowerCase() === "aurea2025") {
      navigate("/vortex");
    } else {
      setError("Invalid invite code.");
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-gold p-4">
      <h1 className="text-5xl font-bold mb-6 uppercase tracking-widest">AUREA</h1>
      <p className="italic text-white/60 mb-6">If you ask what it is, you're not ready.</p>
      <input
        className="mb-4 p-2 text-black rounded"
        placeholder="Enter your invite code"
        value={inviteCode}
        onChange={(e) => setInviteCode(e.target.value)}
      />
      <button
        onClick={handleAccess}
        className="bg-gold text-black px-4 py-2 rounded hover:bg-yellow-300"
      >
        Unlock Access
      </button>
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
}

function Completion() {
  return (
    <div className="min-h-screen bg-black text-gold flex items-center justify-center text-center p-6">
      <h2 className="text-3xl font-semibold">You’ve stepped beyond access.<br />Welcome to AUREA.</h2>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vortex" element={<VortexAnimation />} />
        <Route path="/complete" element={<Completion />} />
      </Routes>
    </Router>
  );
}

export default App;