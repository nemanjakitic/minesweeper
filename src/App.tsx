import { Header } from './features/Header/Header';
import { GridMap } from './features/GridMap/GridMap';
import { Container } from '@mui/material';

function App() {
  return (
    <Container style={{whiteSpace: 'nowrap' }} >
      <Header />
      <GridMap />
    </Container>
  )
}

export default App;
