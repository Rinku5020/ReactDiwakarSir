import NonFictionaldata from "../nonfiction.json"
import BookCard from "./BookCard";
export default function NonFiction() {
  return (
    <div>
      <h1>Non-Fiction Book</h1>

      <div className="div-Container">
        {/* Display all Non-Fiction books here */}
        {NonFictionaldata.map((el)=><BookCard author={el.author} title={el.title} year={el.year} price={el.price} img={el.img}/>)}
      </div>
    </div>
  );
}
