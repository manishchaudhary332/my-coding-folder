import React, { useState } from 'react';
import data from "./data";
import Card from './components/Card';

const App = () => {
  const [cards, setCards] = useState(data);

  const handleRemoveCard = (idx) => {
    setCards((prev) => prev.filter((_, cardIdx) => cardIdx !== idx));
  };

  const handleRefresh = () => {
    setCards(data);
  };

  if (cards.length === 0) {
    return (
      <div className="h-screen w-full bg-zinc-400 flex flex-col justify-center items-center">
        <h1 className="text-2xl font-semibold mb-4">No cards left</h1>
        <button onClick={handleRefresh} className="px-4 py-2 bg-blue-600 text-white rounded">
          Refresh
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-zinc-400 flex gap-3 flex-wrap p-5">
      {cards.map((item, idx) => (
        <Card key={idx} item={item} idx={idx} onRemove={handleRemoveCard} />
      ))}
    </div>
  );
};

export default App;
