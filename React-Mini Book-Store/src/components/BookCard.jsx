export default function BookCard({title,author,year,price,img}) {
  return (
    <div data-testid="book-card" className="books-container">
      <img src={img} alt={title} style={{height:"300px",width:"200px", objectFit:"cover", marginTop:"15px",marginBottom:"15px"}} />
      <b>
        <div data-testid="book-card-title">
          {title}
          <span>{year}</span>
        </div>
      </b>
      <div data-testid="book-card-author">{author}</div>
      <div data-testid="book-card-price">{price}</div>
    </div>
  );
}
