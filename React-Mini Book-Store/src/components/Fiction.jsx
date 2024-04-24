import FinctinalData from "../fiction.json"
import BookCard from "./BookCard";
export default function Fiction() {
  return (
    <div>
      <h1>Fictional Books</h1>

      <div className="div-Container">
        {/* Map all Fictional Books here */}
        {FinctinalData.map((el)=><BookCard author={el.author} title={el.title} year={el.year} price={el.price} img={el.img} />)}
      

      </div>
    </div>
  );
}
