import React, { useState } from 'react';

const Card = ({ item, onRemove, idx }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const shortText = item.info.slice(0, 50);

  return (
    <div className="w-[350px] h-auto rounded-2xl shadow-lg bg-white overflow-hidden flex flex-col">
      <div className="h-[200px] w-full bg-gray-100 flex items-center justify-center">
        {item.image ? (
          <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
        ) : (
          <span className="text-gray-400">No Image</span>
        )}
      </div>

      <div className="p-4 flex flex-col justify-between flex-1">
        <h2 className="text-xl font-bold text-gray-800">{item.name}</h2>
        
        <p className="text-gray-600 text-sm mt-2">
          {isExpanded ? item.info : shortText + '...'}
          <button onClick={toggleReadMore} className="text-blue-600 ml-1">
            {isExpanded ? ' show less' : ' read more'}
          </button>
        </p>

        <div className="mt-auto text-right flex justify-between pt-4">
          <button
            onClick={() => onRemove(idx)}
            className="px-3 py-1 bg-green-400 rounded"
          >
            Not Interested
          </button>
          <span className="text-lg font-semibold text-indigo-600">
            ${item.price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
