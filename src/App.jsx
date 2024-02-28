import Contact from './assets/Contact';
import Counter from './assets/Counter';
import Hello from './assets/Hello';

function App() {
  const helloData = [
    { name: 'Anirach', message: 'Hi there' },
    { name: 'Foxzy', message: 'Hello..'}
  ];

  return (
    <div className='App'>
      < Counter />
      {helloData.map((data, index) => (
        <Hello key={index} name={data.name} messge={data.message} />
      ))}

      <Contact email="sonyeonnisn@email.com" phone ="0822400314"/>
    </div>
  );
}

export default App;
