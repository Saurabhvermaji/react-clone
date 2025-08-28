import '../styles/Home.css';

/*Images*/
import logo from '../assets/logo_dark.svg';
import ci1 from '../assets/ci1.png';
import ci2 from '../assets/ci2.png';
import ci3 from '../assets/ci3.png';
import browser from '../assets/browser.png';
import Os from '../assets/Os.png';

export default function Home() {

  return (
    <>
      <div className="hero_section">
        <img src={logo} alt="logo" className='hero_section_img' />
        <h1 className='hero_head'>React</h1>
        <p className='hero_p'>The library for web and native user interfaces</p>
        <div className='hero_btn_box'>
          <button className='hero_btn' id='hero_btn1'>Learn React</button>
          <button className='hero_btn' id='hero_btn2'>API Reference</button>
        </div>
      </div>

      <section className="core-concept">
        <h1 className="core-title">Create user interfaces from components</h1>

        <p className="core-desc">
          React lets you build user interfaces out of individual pieces called components.
          Create your own React components like <strong>Thumbnail</strong>, <strong>LikeButton</strong>, and <strong>Video</strong>.
          Then combine them into entire screens, pages, and apps.
        </p>

        <img src={ci1} alt="React Logo" className="core-image" />

        <p className="core-desc">
          Whether you work on your own or with thousands of other developers, using React feels the same.
          It is designed to let you seamlessly combine components written by independent people, teams, and organizations.
        </p>
      </section>

      <section className="core-concept">
        <h1 className="core-title">Write components with code and markup</h1>

        <p className="core-desc">
          React components are JavaScript functions. Want to show some content conditionally? Use an if statement. Displaying a list? Try array map(). Learning React is learning programming.
        </p>

        <img src={ci2} alt="text" className="core-image" />

        <p className="core-desc">
          This markup syntax is called JSX. It is a JavaScript syntax extension popularized by React. Putting JSX markup close to related rendering logic makes React components easy to create, maintain, and delete.
        </p>
      </section>

      <section className="core-concept">
        <h1 className="core-title">Add interactivity wherever you need it</h1>

        <p className="core-desc">
          React components receive data and return what should appear on the screen. You can pass them new data in response to an interaction, like when the user types into an input. React will then update the screen to match the new data.
        </p>

        <img src={ci3} alt="text" className="core-image" />

        <p className="core-desc">
          You don’t have to build your whole page in React. Add React to your existing HTML page, and render interactive React components anywhere on it.
        </p>
        <button className='core-btn'> Add React to your page</button>
      </section>

      <section className="core-concept">
        <h1 className="core-title">Go full-stack with a framework</h1>

        <p className="core-desc">
          React is a library. It lets you put components together, but it doesn’t prescribe how to do routing and data fetching. To build an entire app with React, we recommend a full-stack React framework like Next.js or Remix.
        </p>

        <img src={ci1} alt="text" className="core-image" />

        <p className="core-desc">
          React is also an architecture. Frameworks that implement it let you fetch data in asynchronous components that run on the server or even during the build. Read data from a file or a database, and pass it down to your interactive components.
        </p>
         <button className='core-btn'>Get started with a framework</button>
      </section>

      <section className="core-concept">
        <h1 className="core-title">Use the best from every platform</h1>

        <p className="core-desc">
          People love web and native apps for different reasons. React lets you build both web apps and native apps using the same skills. It leans upon each platform’s unique strengths to let your interfaces feel just right on every platform.
        </p>

        <div className='core_img_box'>
          <img src={browser} alt="text" className="BrowserOs" />
          <img src={Os} alt="text" className="BrowserOs" />
        </div>

        <p className="core-desc">
          With React, you can be a web and a native developer. Your team can ship to many platforms without sacrificing the user experience. Your organization can bridge the platform silos, and form teams that own entire features end-to-end.
        </p>
        <button className='core-btn'>Build for native platforms</button>
      </section>

      <section className="news-section">
        <div className="news-info">
          <h1 className="news-heading">Upgrade when the future is ready</h1>
          <p className="news-desc">
            React approaches changes with care. Every React commit is tested on business-critical surfaces with over a billion users. Over 100,000 React components at Meta help validate every migration strategy. <br/> <br/> The React team is always researching how to improve React. Some research takes years to pay off. React has a high bar for taking a research idea into production. Only proven approaches become a part of React.
          </p>
          <button className="news-button">Read More React News</button>
        </div>

        <div className="news-list">
          <div className="news-item">
            <h1 className="news-item-title">View Transitions and Activity</h1>
            <p className="news-item-date">April 23, 2025</p>
          </div>
          <div className="news-item">
            <h1 className="news-item-title">React Compiler RC</h1>
            <p className="news-item-date">February 14, 2025</p>
          </div>
          <div className="news-item">
            <h1 className="news-item-title">Sunsetting Create React App</h1>
            <p className="news-item-date">February 14, 2025</p>
          </div>
          <div className="news-item">
            <h1 className="news-item-title">React 19</h1>
            <p className="news-item-date">December 05, 2024</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <img src={logo} alt="logo" id="cta_section_img" />
        <h1 className="cta-heading">Welcome to the React community</h1>
        <button className="cta-button">Get Started</button>
      </section>
    </>
  );
}