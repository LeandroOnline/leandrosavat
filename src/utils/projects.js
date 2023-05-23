import jusmovies from "../assets/images/justmovies.png";
import innovation from "../assets/images/innovation.png";
import news from "../assets/images/news.png";
import traveling from "../assets/images/traveling.png";

const projects = [
    {
      name: "Traveling",
      img: traveling,
      github: "https://github.com/LeandroOnline/travel-react",
      web: "https://travel-react-flax.vercel.app/",
      detail: "A travel consultancy (React + HTML + JS + CSS)",
    },
    {
      name: "JustMovies",
      img: jusmovies,
      github: "https://github.com/LeandroOnline/peliculas-react",
      web: "https://peliculas-react-opal.vercel.app/",
      detail:
        "A movie search engine that provides information (React + HTML + CSS + JS)",
    },
    {
      name: "News",
      img: news,
      github: "https://github.com/LeandroOnline/news",
      web: "https://news-henna-six.vercel.app/",
      detail: "Full Stack with two APIs",
    },
    {
      name: "Innovation",
      img: innovation,
      github: "https://github.com/LeandroOnline/innovation",
      web: "https://innovation-pied.vercel.app/",
      detail:
        "Corporate landing page (React + JS + Figma + Styled Components + Scrum)",
    },
  ];
export default projects;