import {
  ErrorImage,
  Notification,
  Section,
  BasicInfo,
  LinkButton,
  Button,
} from "./styled";

const Warning = () => {
  return (
    <>
      <Section>
        <ErrorImage />
        <Notification>Ooops! Something went wrong...</Notification>
        <BasicInfo>
          Sorry, failed to load Github projects. You can check them directly on
          Github.
        </BasicInfo>
        <LinkButton href="https://github.com/Olaf-Tarkowski">
          <Button>Go to Github</Button>
        </LinkButton>
      </Section>
    </>
  );
};

export default Warning;
