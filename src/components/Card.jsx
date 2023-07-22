import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
const Card = ({ arr }) => {
  console.log(arr);
  const [show, setshow] = useState(true);
  const [cur, setcur] = useState("");
  let getdetail = (id) => {
    const selectedBook = arr.find((e) => id === e.id);
    setcur(selectedBook);
    setshow(!show);
  };
  return (
    <>
      <div className="cards d-flex justify-content-around">
        {show ? (
          arr.map((itm, i) => (
            <div className="cd" key={i}>
              <div className="cards d-flex">
                <div className="img" style={{ width: "90px", zIndex: "10" ,marginLeft:'-10px'}}>
                  <img
                    src={itm.volumeInfo.imageLinks.smallThumbnail}
                    style={{
                      transform: "rotate(-5deg)",
                      zIndex: "10",
                      height: "250px",
                      position: "relative",
                    }}
                  />
                </div>
                <div
                  className="card"
                  style={{
                    width: "15rem",
                    color: "white",
                    backgroundColor: "#71C5F4",
                    padding: "20px",
                    position: "relative",
                  }}
                >
                  <h5
                    className="card-title"
                    style={{ backgroundColor: "#71C5F4", fontSize: "18px" }}
                  >
                    {itm.volumeInfo.title}
                  </h5>
                  <p
                    className="card-text"
                    style={{ backgroundColor: "#71C5F4", fontSize: "14px" }}
                  >
                    {itm.volumeInfo.description.length < 150
                      ? itm.volumeInfo.description
                      : itm.volumeInfo.description.substring(0, 150)}
                  </p>
                  <button
                    type="button"
                    style={{ backgroundColor: "#71C5F4" }}
                    onClick={() => getdetail(itm.id)}
                  >
                    Now Read!
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12">
            <div className="cards d-flex">
              <div className="img" style={{ width: "90px", zIndex: "10" }}>
                <img
                  src={cur.volumeInfo.imageLinks.smallThumbnail}
                  style={{
                    transform: "rotate(-5deg)",
                    zIndex: "10",
                    height: "250px",
                  }}
                />
              </div>
              <div
                className="card"
                style={{
                  color: "white",
                  backgroundColor: "#71C5F4",
                  padding: "20px",
                }}
              >
                <h5
                  className="card-title"
                  style={{ backgroundColor: "#71C5F4", fontSize: "18px" }}
                >
                  {cur.volumeInfo.title}
                </h5>
                <div className="aut d-flex justify-content-between"
                style={{ backgroundColor: "#71C5F4", fontSize: "16px" }}>
                  <p style={{ backgroundColor: "#71C5F4", fontSize: "16px" }}>{cur.volumeInfo.authors}</p>
                  <p style={{ backgroundColor: "#71C5F4", fontSize: "16px" }}>{cur.volumeInfo.publishedDate}</p>
                </div>
                <p
                  className="card-text"
                  style={{ backgroundColor: "#71C5F4", fontSize: "14px" }}
                >
                  {cur.volumeInfo.description.length < 150
                    ? cur.volumeInfo.description
                    : cur.volumeInfo.description.substring(0, 150)}
                </p>
                <ul className="d-flex"
                style={{ backgroundColor: "#71C5F4", fontSize: "16px" }}>
                  <li>{`Avg Rating : ${cur.volumeInfo.averageRating} | `}</li>
                  <li>{`Rating Count :${cur.volumeInfo.ratingsCount} | `} </li>
                  <li>{`Publisher :${cur.volumeInfo.publisher} | `}</li>
                  <li>{`Language :${cur.volumeInfo.language} | `}</li>
                </ul>
                <div className="btns d-flex" style={{ backgroundColor: "#71C5F4", fontSize: "16px" }}>
                  <a
                    type="button"
                    target="_blank"
                    style={{ backgroundColor: "#71C5F4",color:'white',padding:'5px 15px',margin:'0px 8px',border:'1px solid black'}}   href={cur.volumeInfo.previewLink}
                  >
                Now Read!
                  </a>
                  <a
                    type="button"
                    target="_blank"
                    style={{ backgroundColor: "#71C5F4",color:'white',padding:'5px 15px',margin:'0px 8px',border:'1px solid black'}}  href={cur.volumeInfo.infoLink}
                  >
                    More Info!
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Card;