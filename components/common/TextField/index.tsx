import React, { useRef, useState } from "react";
import Image from "next/image";
import {
  TextFieldContainer,
  Input,
  InputContainer,
  Label,
  LockIconContainer,
  IconContainer,
} from "./styles";
import LockIcon from "../../../assets/images/icons/lock.svg";

interface TextFieldProps {
  type?: string;
  label?: string;
  name?: string;
  placeholder?: string;
  readonly?: boolean;
  value?: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  mb?: number;
  icon?: any;
}

const TextField: React.FC<TextFieldProps> = (props) => {
  const {
    type = "text",
    label,
    name,
    icon,
    placeholder,
    value,
    readonly = false,
    onChange,
    mb = 40,
  } = props;

  return (
    <TextFieldContainer mb={mb}>
      {label && <Label>{label}</Label>}
      <InputContainer>
        <IconContainer>
          {icon && <Image src={icon} alt=":( Not Found" />}
        </IconContainer>
        <Input
          type={type}
          name={name}
          readOnly={readonly}
          hasIcon={icon ? true : false}
          placeholder={placeholder}
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
        />
        {readonly && (
          <LockIconContainer>
            <Image src={LockIcon} width={24} height={24} alt=":( Not Found" />
          </LockIconContainer>
        )}
      </InputContainer>
    </TextFieldContainer>
  );
};

export default TextField;
