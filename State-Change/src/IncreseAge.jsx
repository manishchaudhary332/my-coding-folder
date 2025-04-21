import React, { useState } from 'react';

const IncreaseAge = () => {
    const [val, setVal] = useState([
        { name: "manish", age: 24 },
        { name: "bhola", age: 25 },
        { name: "suresh", age: 26 }
    ]);

    return (
        <div className='mt-[100px] ml-5'>
            <h1>Increase age of Bhola</h1>
            {val.map((item, index) => (
                <div key={index}>
                    <h1>{item.name}</h1>
                    <h1>{item.age}</h1>
                </div>
            ))}
            <button
                className='px-2 py-1 rounded bg-gray-600 text-white mt-2'
                onClick={() => {
                    setVal(() =>
                        val.map(item =>
                            item.name === 'bhola' ? ({ name:"bhola",age:3333 }) : item
                        )
                    );
                }}
            >
                Increase Age
            </button>
        </div>
    );
};

export default IncreaseAge;
