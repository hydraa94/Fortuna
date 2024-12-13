import { useState, useRef, useEffect } from "react";
import { getResponse } from "./api";
import ReactMarkdown from "react-markdown";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const responseRef = useRef(null);

  useEffect(() => {
    if (responseRef.current) {
      responseRef.current.scrollTop = responseRef.current.scrollHeight;
    }
  }, [response]);

  const handleClick = async () => {
    if (loading) return; // Prevent multiple clicks while loading
    setLoading(true);
    setResponse(""); // Clear previous response
    try {
      const aiResponse = await getResponse(input);
      setResponse(aiResponse);
      let index = 0;
      const interval = setInterval(() => {
        setResponse((prev) => prev + aiResponse[index]);
        index++;
        if (index >= aiResponse.length) {
          clearInterval(interval);
        }
      }, 5); // 50ms delay between characters
    } catch (error) {
      console.error("Error during handleClick:", error);
      setResponse("Sorry, something went wrong!");
    } finally {
      setLoading(false); // Ensure loading is false regardless of the outcome
    }

    // Simulate part-by-part response
  };

  return (
    <>
      <div className="bg-gradient-to-br from-slate-900 to-slate-700 h-screen flex items-center justify-center bg-cover bg-no-repeat">
        <div className="border border-white rounded-md shadow-black shadow-lg p-5 h-[90%] w-[50%] backdrop-blur-[35px] bg-white/10">
          <textarea
            className="bg-white/20 backdrop-blur-md border-[1px] border-white rounded-md h-2/5 w-full mb-5 p-3 text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
            placeholder="Type your message here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="w-full text-2xl text-white font-semibold font-mono bg-slate-700 rounded-xl border border-white hover:bg-slate-600 transition-all"
            onClick={handleClick}
            disabled={loading}
          >
            {loading ? "Loading..." : "SEND"}
          </button>
          <div className="bg-white/20 backdrop-blur-md border-[1px] border-white rounded-md h-2/5 w-full mt-5 p-3 overflow-y-auto">
            {loading && !response ? (
              <p className="text-center text-white font-semibold">Loading...</p>
            ) : response ? (
              <div className="text-white" ref={responseRef}>
                {" "}
                <ReactMarkdown>{response}</ReactMarkdown>
              </div>
            ) : (
              <p className="text-center text-gray-300">
                No response yet. Type something above!
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
