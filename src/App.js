import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Word from './components/Word'
import WithWordLoading from './components/WithWordLoading'
import './App.css';

const apiUrl = 'https://owlbot.info/api/v4/dictionary/ball';
axios.defaults.headers.common['Authorization'] = 'Token 28b2de09267356027ed78afa04df4279b13a9644';

function App() {
  const WordComponent = WithWordLoading(Word);
  const [appState, setAppState] = useState({
    loading: false,
    word: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    axios.get(apiUrl).then((res) => {
      const word = res.data;
      console.log(word);
      setAppState({loading: false, word: word})
    });
  }, [setAppState]);

  return (
    <div className="App">
      <WordComponent isLoading={appState.loading} word={appState.word} />
    </div>
  );
}

export default App;
