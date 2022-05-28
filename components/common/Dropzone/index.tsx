import React, { useRef } from "react";
import { DropzoneContainer, Label } from "./styles";

interface DropzoneProps {
  label?: string;
  icon?: any;
  title?: string;
  description?: string;
}

const Dropzone: React.FC<DropzoneProps> = (props) => {
  const { label, icon, title, description } = props;
  const fileRef = useRef<HTMLInputElement>(null);

  return (
    <DropzoneContainer>
      {label && <Label>{label}</Label>}
      <input type="file" ref={fileRef} />
    </DropzoneContainer>
  );
};

export default Dropzone;
