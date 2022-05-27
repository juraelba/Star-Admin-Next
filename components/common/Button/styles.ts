import styled from "styled-components";

const color = {
  light: "#FFF",
  warning: "#E45F35",
  success: "FFF",
};

const borderColor = {
  light: "#494E5B",
  warning: "rgba(228, 95, 53, 0.1)",
  success: "#4FBF67",
};

const backgroundColor = {
  light: "none",
  warning: "rgba(228, 95, 53, 0.1)",
  success: "rgba(79, 191, 103, 0.1)",
};

export const ButtonContainer = styled.button<{
  color: "success" | "warning" | "light";
  size: "large" | "small";
}>`
  height: ${(props) => (props.size === "small" ? `24px` : `56px`)};
  padding: ${(props) => (props.size === "small" ? `0 12px` : `0 32px`)};
  border-width: ${(props) => (props.size === "small" ? `1px` : `2px`)};
  border-color: ${(props) => borderColor[props.color]};
  border-style: solid;
  border-radius: 40px;
  background: ${(props) => backgroundColor[props.color]};
  font-family: "Montserrat";
  font-weight: ${(props) => (props.size === "small" ? 600 : 700)};
  font-size: ${(props) => (props.size === "small" ? `12px` : `16px`)};
  color: ${(props) => color[props.color]};
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;
