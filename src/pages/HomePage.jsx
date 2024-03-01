import React, { useState, useEffect } from "react";

const HomePage = () => {
  const [words, setwords] = useState([
    {
      color: "bg-transparent",
      text: "",
    },
    {
      color: "bg-transparent",
      text: "",
    },
    {
      color: "bg-transparent",
      text: "",
    },
    {
      color: "bg-transparent",
      text: "",
    },
    {
      color: "bg-transparent",
      text: "",
    },
  ]);
  const [newWord, setnewWord] = useState("");
  const [desiredWord, setdesiredWord] = useState([
    {
      color: "bg-green-500",
      text: "H",
    },
    {
      color: "bg-green-500",
      text: "I",
    },
    {
      color: "bg-green-500",
      text: "D",
    },
    {
      color: "bg-green-500",
      text: "E",
    },
    {
      color: "bg-green-500",
      text: "S",
    },
  ]);

  useEffect(() => {
    console.log("word now is :" + JSON.stringify(words));
  }, [words]);

  return (
    <div className="bg-black h-screen">
      <h1 className="text-white flex justify-center text-3xl p-5">Wordle</h1>
      <hr />
      <div className="flex justify-center my-20">
        <div className="grid grid-cols-5 w-1/3 justify-center text-white ">
          {words.map((word, i) => (
            <div
              className={`w-10 h-10 border-2 flex justify-center items-center text-center text-xl ${word.color}`}
            >
              {word.text}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center text-white gap-12">
        <div className="flex items-center">
          <label htmlFor="">Enter the word : </label>
          <input
            onChange={(e) => {
              setnewWord(e.target.value);
            }}
            className="text-black px-4 mx-4"
            type="text"
            name="word"
            id=""
          />
          {/* {newWord} */}
        </div>
        <button
          onClick={() => {
            const compare = [...words];
            newWord.split("").forEach((element, index) => {
              const desiredChar = desiredWord[index].text;
              if (element === desiredChar) {
                compare[index].text = element;
                compare[index].color = "bg-green-500";
              } 
              else if (desiredWord.find((e) => e.text === element)) {
                compare[index].text = element;
                compare[index].color = "bg-yellow-500";
              } 
              else {
                compare[index].text = element;
                compare[index].color = "bg-transparent"; // Incorrect letter and position
              }
            });
            setwords(compare);
          }}
          className="border-2 border-white p-2"
          type="submit"
        >
          submit
        </button>
      </div>
    </div>
  );
};

export default HomePage;
