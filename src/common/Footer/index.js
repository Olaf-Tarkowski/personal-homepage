import {
  BasicInfo,
  Content,
  Welcom,
  Mail,
  LinkIcons,
  GitHubImage,
  FacebookImage,
  InstagramImage,
  LinkedInImage,
  LinkIcon,
} from "./styled";

const Footer = () => {
  return (
    <>
      <Content>
        <Welcom>Let’s talk!</Welcom>
        <Mail href="mailto:olaftarkowski97@gmail.com">
          olaftarkowski97@gmail.com
        </Mail>
        <BasicInfo>
          I’m always open to new projects whenever I have the time. If you have
          a website, dashboard or mobile app in mind and need some help to make
          your ideas come to life, feel free to conatct me ☝️.
        </BasicInfo>
        <LinkIcons>
          <LinkIcon href="https://github.com/Olaf-Tarkowski">
            <GitHubImage />
          </LinkIcon>
          <LinkIcon href="https://www.facebook.com/olaf.tarkowskii/">
            <FacebookImage />
          </LinkIcon>
          <LinkIcon href="https://www.linkedin.com/in/olaf-tarkowski/">
            <LinkedInImage />
          </LinkIcon>
          <LinkIcon href="https://www.instagram.com/0laf_tarkowski/?hl=pl">
            <InstagramImage />
          </LinkIcon>
        </LinkIcons>
      </Content>
    </>
  );
};

export default Footer;
