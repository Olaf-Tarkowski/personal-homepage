import { BasicInfo, Content, Welcom, Mail, LinkIcons, GitHubImage, FacebookImage, InstagramImage, LinkedInImage } from "./styled";

const Footer = () => {
  return (
    <>
      <Content>
        <Welcom>
          Let’s talk!
        </Welcom>
        <Mail href="mailto:tarkowski.software@gmail.com">
          tarkowski.software@gmail.com
        </Mail>
        <BasicInfo>
          I’m always open to new projects whenever I have the time. If you have a website, dashboard or mobile app in mind and need some help to make your ideas come to life, feel free to conatct me
        </BasicInfo>
        <LinkIcons>
          <GitHubImage />
          <FacebookImage />
          <LinkedInImage />
          <InstagramImage />
        </LinkIcons>
      </Content>
    </>
  )
};

export default Footer;