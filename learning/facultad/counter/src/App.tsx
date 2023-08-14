import { Counter } from './components/counter/Counter';
import { Hello } from './components/hello/Hello';

function App() {
  return (
    <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '440px'}}>
      <Hello name={'Pablo'} />
      <Hello name={'Carla'} />
      <Counter default_number={0} />
    </section>
  );
}

export default App;
