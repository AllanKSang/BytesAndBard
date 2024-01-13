import TechBlog from "../components/blogs/TechBlog";
import ShowerThoughtsBlog from "../components/blogs/ShowerThoughtsBlog";
import PoemsBlog from "../components/blogs/PoemsBlog";
import JokesBlog from "../components/blogs/JokesBlog";

const HomePage = () => {
  return (
    <section>
      <h1>Home</h1>
      <>
        <TechBlog category="category: tech" />
        <ShowerThoughtsBlog category="category: shower-thoughts" />
        <PoemsBlog category="category: poems" />
        <JokesBlog category="category: jokes" />
      
      </>
    </section>
  );
};

export default HomePage;
