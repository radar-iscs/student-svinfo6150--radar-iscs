import Button from '../../components/button';
import AboutImage from '../../assets/about.png';
import { LINK_VISUAL } from '../../data/const';

import './AboutPage.css';

export function AboutPage() {
  const PREFIX = 'about-page';

  const linkedinBtn =
    <Button
      ariaLabel={`Go to web developer's LinkedIn page`}
      visual={LINK_VISUAL}
      content='LinkedIn'
      onClick={() => window.location.href = 'https://www.linkedin.com/in/da-lei-851492328/'}
    />;
  const githubBtn =
    <Button
      ariaLabel={`Go to web developer's GitHub page`}
      visual={LINK_VISUAL}
      content='GitHub'
      onClick={() => window.location.href = 'https://github.com/radar-iscs'}
    />;

  return (
    <div className={PREFIX}>
      <h2 className={`${PREFIX}__title`}>About Me</h2>
      <img src={AboutImage} alt='A picture of sunset taken by me, showing peace and beauty of the world' />
      <p>I’m an international student at Northeastern University with a passion for software engineering and continuous learning. I enjoy tackling complex problems, exploring emerging technologies, and collaborating with others to create meaningful solutions.</p>
      <p>When I’m not coding, you’ll find me immersed in stories—whether that’s watching intellectually stimulating films like Interstellar, Tenet, or the Star Wars saga; laughing along with irreverent animated series like Rick & Morty; or diving deep into rich literary universes such as The Three-Body Problem and A Song of Ice and Fire.</p>
      <p>Feel free to learn more about my professional experience on {linkedinBtn} or explore my projects on {githubBtn}.</p>
    </div>
  );
}
