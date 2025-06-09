import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostAnalytics from './pages/PostAnalytics';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/analytics/:postId" element={<PostAnalytics />} />
      </Routes>
    </Router>
  );
}
export default App;
