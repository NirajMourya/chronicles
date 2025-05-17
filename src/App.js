
import { CssBaseline } from '@mui/material';
import MainContent from './components/MainContent';
import Container from '@mui/material/Container';
import AppAppBar from './components/AppBar';
import Footer from './components/Footer';
import Latest from './components/Latest';

function App() {
  return (
     <>
      <CssBaseline enableColorScheme />
        <AppAppBar />
         <Container
        maxWidth="lg"
        component="main"
        sx={{ display: 'flex', flexDirection: 'column', my: 16, gap: 4 }}
      >
        <MainContent />
        <Latest />
      </Container>
        <Footer />
      </>
  );
}

export default App;
