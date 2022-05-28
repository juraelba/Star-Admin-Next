import React, { useRef, useState } from "react";
import Image from "next/image";
import {
  DropzoneContainer,
  IconContainer,
  File,
  Label,
  Form,
  Previewer,
  ImagePicker,
  Title,
  Description,
} from "./styles";
import UploadIcon from "../../../assets/images/icons/upload.svg";

interface DropzoneProps {
  label?: string;
  icon?: any;
  title?: string;
  description?: string;
}

const Dropzone: React.FC<DropzoneProps> = (props) => {
  const { label, icon, title, description } = props;
  const fileRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<string>();

  const handleClick = () => {
    if (fileRef.current !== null) fileRef.current.click();
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) setFile(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <DropzoneContainer>
      {label && <Label>{label}</Label>}
      <File
        type="file"
        ref={fileRef}
        onChange={handleChange}
        accept="image/*"
      />
      <Form onClick={handleClick}>
        {file ? (
          <Previewer>
            <img src={file} />
          </Previewer>
        ) : (
          <ImagePicker>
            <IconContainer>
              <Image
                src={icon || UploadIcon}
                width={40}
                height={40}
                alt=":( Not Found"
              />
            </IconContainer>
            <Title>{title || "Drag and drop to upload"}</Title>
            <Description>
              {description || "Size recommend 800x800. Max 2mb."}
            </Description>
          </ImagePicker>
        )}
      </Form>
    </DropzoneContainer>
  );
};

export default Dropzone;