import React, { useState, useEffect, useMemo, useCallback } from 'react';

function App() {
  const [techs, setTechs] = useState([]);
  const [newTech, setnewTch] = useState('');

  const handleAdd = useCallback(() => {
    setTechs([...techs, newTech]);
    setnewTch('');
  }, [newTech, techs]);

  useEffect(() => {
    const storageTech = localStorage.getItem('tech');

    if (storageTech) {
      setTechs(JSON.parse(storageTech));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tech', JSON.stringify(techs));
  }, [techs]);

  const techSize = useMemo(() => techs.length, [techs]);

  return (
    <>
      <ul>
        {techs.map(t => (
          <li key={t}> {t} </li>
        ))}
      </ul>
      <strong>você possui {techSize} tecnologias</strong>
      <br />
      <input value={newTech} onChange={e => setnewTch(e.target.value)} />
      <button type="button" onClick={handleAdd}>
        Adicionar
      </button>
    </>
  );
}

export default App;
