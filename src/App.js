import "./App.css";
import Amazon from "./components/Amazon";
import Apple from "./components/Apple";
import Meta from "./components/Meta";
import Microsoft from "./components/Microsoft";
import Tesla from "./components/Tesla";

function App() {
  return (
    <div className="flex items-center flex-col justify-center">
      <h1 className="font-bold text-3xl mt-10 pt-4 pb-4 pr-10 pl-10 rounded-md border-2 shadow-xl ">
        Stocks
      </h1>
      <p className="pt-5 pb-5 bg-black text-white pr-20 pl-20 rounded-xl mt-6 border-2">
        I've used Free API so it can have only 25 times reload limit per a day
      </p>
      <div className="">
        <div>
          <Apple />
        </div>
        <div>
          <Microsoft />
        </div>
        <div>
          <Meta />
        </div>
        <div>
          <Tesla />
        </div>
        <div>
          <Amazon />
        </div>
      </div>
      <p className="pt-5 pb-5 bg-black text-white pr-20 pl-20 rounded-xl mt-6 border-2">
        Created by{" "}
        <a
          href="https://www.linkedin.com/in/pranaygoud1229/"
          target="blank"
          className="underline font-bold"
        >
          Pranay
        </a>
      </p>
    </div>
  );
}

export default App;
