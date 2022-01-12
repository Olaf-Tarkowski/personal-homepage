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
          👨🏻‍💻 Lorem Ipsum is simply dummy text of the printing and typesetting industry.
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