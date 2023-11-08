import "./App.css";
import Home from "./pages/Home";
import NavBar from "./pages/NavBar";
import Rent from "./pages/Rent";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [vinyls, setVinyls] = useState([
    {
      id: 1,
      title: "Their Greatest Hits 1971-1975",
      author: "Eagles",
      description:
        "The highest-certified album by the Recording Industry Association of America (RIAA), Eagles’ greatest hits really are the greatest in that regard!",
      imgURL:
        "https://a.co/d/e5r2QOy",
      isRented: false,
    },
    {
      id: 2,
      title: "Thriller",
      author: "Michael Jackson",
      description:
        "In a way, Thriller deserves to take the top spot when it comes to best-selling records — but there’s a caveat to that",
      
      imgURL:
        "https://a.co/d/h161Yck",
      isRented: false,
    },
    {
      id: 3,
      title: "Hotel California",
      author: "Eagles",
      description:
        "Eagles’ fifth studio album, Hotel California has become a true classic over time. ",
      
      imgURL:
        "https://a.co/d/5nVelh5",
      isRented: false,
    },
    {
      id: 4,
      title: "Back in black",
      author: "AC/DC",
      description:
        "Off the back of the success of Highway To Hell, there was a lot of pressure on AC/DC to deliver a solid follow-up… and they knocked it out of the park.",
      
      imgURL:
        "https://a.co/d/gR3EHAM",
      isRented: false,
    },
    {
      id: 5,
      title: "Led Zeppelin IV",
      author: "Led Zeppelin",
      description:
        "Led Zeppelin had so much faith in this album that they didn’t even name it — and it turns out they were right to believe in themselves! ",
   
      imgURL: "https://a.co/d/9dDi6tM",
      isRented: false,
    },
    {
      id: 6,
      title: "The beatles",
      author: "The beatles",
      description:
        "Often referred to as the White Album due to its instantly recognizable minimalist cover, it’s surely no surprise to see The Beatles pop up on this list.",
     
      imgURL:
        "https://a.co/d/9dDi6tM",
      isRented: false,
    },
    {
      id: 7,
      title: "The wall",
      author: "Pink Floyd",
      description:
        "Sitting atop the US album charts for a staggering 15 weeks upon its release, The Wall was an instant classic.",
     
      imgURL:
        "https://a.co/d/f5vXgTE",
      isRented: false,
    },
  ]);
  const rentVinyl = (id) => {
    setVinyls(
      vinyls.map((vinyl) => {
        if (vinyl.id === id) {
          vinyl.isRented = !vinyl.isRented;
        }
        return vinyl;
      })
    );
  };
  return(
  <div>
  <NavBar
    numberOfRentedVinyls={vinyls.filter((vinyl) => vinyl.isRented).length}
  />
  <Routes>
    <Route path="/" element={<Home vinyls={vinyls} rentVinyl={rentVinyl} />} />
    <Route
      path="/rent"
      element={
        <Rent
          vinyls={vinyls.filter((vinyl) => vinyl.isRented)}
          rentVinyl={rentVinyl}
        />
      }
    />
  </Routes>
</div>
);
};

export default App;
