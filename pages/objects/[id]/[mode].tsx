import { useRouter } from "next/router";
import Dropzone from "../../../components/common/Dropzone";
import {
  SpaceObjectContainer,
  Title,
  Body,
  DropzoneContainer,
  DetailContainer,
} from "./object.styles";

const Object = () => {
  const router = useRouter();
  const { id, mode } = router.query;

  return (
    <SpaceObjectContainer>
      <Title>Space Objects</Title>
      <Body>
        <DropzoneContainer>
          <Dropzone label="Star Image" />
        </DropzoneContainer>
        <DetailContainer>dfd</DetailContainer>
      </Body>
    </SpaceObjectContainer>
  );
};

export default Object;
