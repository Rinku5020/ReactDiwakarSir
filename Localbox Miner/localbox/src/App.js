import logo from './logo.svg';
import './App.css';
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function App() {
  const {theme,ToggleTheme}=useContext(ThemeContext)
  return (
    <div className="App">
      <h1>Rinku Nimaje</h1>
      <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus laboriosam reprehenderit nemo voluptatum deserunt commodi repellendus. Culpa odit soluta hic eaque perspiciatis deserunt provident quis excepturi? Aut ipsam in qui.
      Eveniet, harum maxime quisquam culpa alias accusantium animi eum corrupti sint enim. Dolores, cupiditate veniam eius eos impedit ducimus nobis. Impedit deserunt ipsum ea nam eum est officia quasi architecto?
      Nam rem voluptatibus architecto molestiae similique omnis earum neque minima, reprehenderit doloremque labore sequi aut optio veniam adipisci praesentium magni ducimus tempora doloribus. Blanditiis mollitia placeat, cum autem culpa harum?
      Animi est, totam iure magnam optio vel enim voluptates, autem tempore odit sapiente aliquid consectetur, incidunt pariatur itaque voluptas maxime laborum fugiat? Cum nulla architecto expedita molestiae dignissimos dolorum obcaecati.
      Asperiores, obcaecati consectetur voluptate, non error cum distinctio enim recusandae odio eum autem porro inventore illo tempora dolorem quam ea neque vero. Eaque iure neque officiis vel, fuga nobis exercitationem?</p>
      <button onClick={ToggleTheme} >{theme === "light" ? "Switch to dark mode" : "Switch to light mode"}</button>
    </div>
  );
}

export default App;
