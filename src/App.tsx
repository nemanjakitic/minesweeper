import { Header } from './features/Header/Header';
import { GridMap } from './features/GridMap/GridMap';
import { Container } from '@mui/material';
import { useAppSelector  } from './app/hooks';
import { selectDifficulty } from './features/Header/HeaderSlice';

function App() {
  return (
    <Container style={{whiteSpace: 'nowrap' }} >
      <Header />
      <GridMap difficulty={useAppSelector(selectDifficulty)}/>
    </Container>
  )
}

export default App;
