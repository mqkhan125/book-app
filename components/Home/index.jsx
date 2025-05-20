import Layout from "../Layout";
import Book from "../books";

const Homepage = () => {
 
     const books = [
    {
      Img: "/images/python.png",
      Name: "Python",
      Price: 3000,
    },
    {
      Img: "/images/javascript.png",
      Name: "JavaScript",
      Price: 5000,
    },
    {
      Img: "/images/mern.png",
      Name: "MERN",
      Price: 7000,
    },
    {
      Img: "/images/node.png",
      Name: "Node",
      Price: 8000,
    }
  ];

   const trending = [
   
    {
      Img: "/images/php.png",
      Name: "PHP",
      Price: 3000,
    },
    {
      Img: "/images/js.png",
      Name: "JS",
      Price: 4000,
    },
    {
      Img: "/images/es6.jpg",
      Name: "ES6",
      Price: 3000,
    },
    {
      Img: "/images/react.png",
      Name: "React.js",
      Price: 3000,
    }
  ];

  return (
    <Layout title="Homepage">
      <Book books = {books}  title = 'Books List' />
      <Book books = {trending}  title = 'Trending Books' />
    </Layout>
  );
};

export default Homepage;
