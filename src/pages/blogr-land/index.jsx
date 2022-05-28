import './blogr.css'
import Header from "./components/header/header";
import Footer from "./components/menu-navigator/footer";
import TextSection from "./components/paragraph/text-section";
import { ReactComponent as EditorMobile } from "./images/illustration-editor-mobile.svg";

export default function BlogrLand() {

  return (
    <div>
      <Header/>
      <h2>
        A modern publishing platform
      </h2>
      <section>
        <h3>
          Grow your audience and build your online brand
        </h3>
        <div>
          <button>
            Start for Free
          </button>
          <button>
            Learn More
          </button>
        </div>
      </section>
      <TextSection headline="Designed for the future">
        <br/>
        <EditorMobile/>
      </TextSection>

      <br/>

      <TextSection headline="Introducing an extensible editor">
        <p className="simple-text">
          Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content.
          The editor supports management of multiple blogs and allows easy manipulation of embeds such as images,
          videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or
          change the looks of a blog.
        </p>
      </TextSection>
      <br/>
      <TextSection headline="Robust content management">
        <p className="simple-text">
          Flexible content management enables users to easily move through posts. Increase the usability of your blog
          by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.
        </p>
      </TextSection>
      <br/>

      {// !--IMG inverted text part --
      }
      State of the Art Infrastructure
      With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity.
      This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
      <TextSection>
        <EditorMobile/>
      </TextSection>
      <br/>
      <TextSection headline="Free, open, simple">
        <p className="simple-text">
          Blogr is a free and open source application backed by a large community of helpful developers. It supports
          features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools,
          and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.

        </p>
      </TextSection>
      <br/>

      <TextSection headline="Powerful tooling">
        <p className="simple-text">
          Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a
          breeze, but
          capable of producing even the most complicated sites.
        </p>
      </TextSection>
      <br/>
      <Footer/>

    </div>
  );

}
