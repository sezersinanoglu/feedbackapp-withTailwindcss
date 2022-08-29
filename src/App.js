import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { FeedbackProvider } from "./Context/Context";
import Header from "./Components/Header";
import FeedbackForm from "./Components/FeedbackForm";
import FeedbackStats from "./Components/FeedbackStats";
import FeedbackList from "./Components/FeedbackList";

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container max-w-3xl mx-auto">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>
{/* 
            <Route path="/about" element={<AboutPage />} /> */}
          </Routes>
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
