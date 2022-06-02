import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  CloseButton,
  Description,
  DropzoneContainer,
  Form,
  File,
  IconContainer,
  ImagePicker,
  Label,
  Previewer,
  Title,
} from "./styles";
import UploadIcon from "../../../assets/images/icons/upload.svg";
import CloseIcon from "../../../assets/images/icons/remove.svg";

interface DropzoneProps {
  value?: any;
  label?: string;
  icon?: any;
  title?: string;
  description?: string;
  readonly?: boolean;
}

const Dropzone: React.FC<DropzoneProps> = (props) => {
  const { label, icon, title, description, value, readonly = false } = props;
  const fileRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<any>(value);
  const [hover, setHover] = useState(false);

  const handleClick = () => {
    if (!readonly && fileRef.current !== null) fileRef.current.click();
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0)
      setFile(URL.createObjectURL(event.target.files[0]));
  };
  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    stopEvent(event);
    setHover(false);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    stopEvent(event);
    setHover(true);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    stopEvent(event);
    if (event.dataTransfer)
      setFile(URL.createObjectURL(event.dataTransfer.files[0]));
    setHover(false);
  };

  const stopEvent = (event: React.DragEvent<HTMLDivElement>) => {
    event.stopPropagation();
    event.preventDefault();
  };

  const handleRemove = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setFile(null);
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
      <Form
        onClick={handleClick}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        hover={hover}
      >
        {file ? (
          <>
            <Previewer>
              {typeof file !== "string" ? (
                <Image src={file} />
              ) : (
                <img src={file} />
              )}
            </Previewer>
            {!readonly && (
              <CloseButton onClick={handleRemove}>
                <Image src={CloseIcon} alt=":( Not Found" />
              </CloseButton>
            )}
          </>
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
