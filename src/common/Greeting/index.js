import { BasicInfo, Button, Content, EnvelopeIcon, Image, Mail, Name, Tile, Welcom } from "./styled";

const Greeting = () => {
  return (
    <Tile>
      <Image />
      <Content>
        <Welcom>
          This is
        </Welcom>
        <Name>
          Olaf Tarkowski
        </Name>
        <BasicInfo>
          👨🏻‍💻 I’m a passionate Frontend Developer in love with React,currently looking for new job opportunities.
        </BasicInfo>
        <Mail href="mailto:tarkowski.software@gmail.com">
          <Button>
            <EnvelopeIcon />
            Hire Me
          </Button>
        </Mail>
      </Content>
      <p>
        Button
      </p>
    </Tile >

  );
};

export default Greeting;