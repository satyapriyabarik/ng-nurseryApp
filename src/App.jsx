
import { Container } from 'react-bootstrap';
import './App.css';
import { NurseryProvider } from './context/NurseryContext';
import Header from './components/Header';
import Footer from './components/Footer/Footer';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <NurseryProvider>
      <Header />
      <Container className="mt-4">
        <Dashboard />
      </Container>
      <Footer />
    </NurseryProvider>
  );
}

export default App;
