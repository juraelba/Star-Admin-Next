import styled from "styled-components";

const color = {
  light: "#FFF",
  "light-warning": "#E45F35",
  warning: "#FFF",
  success: "#FFF",
  "light-danger": "#FF313A",
  danger: "#FFF",
  yellow: "#353945",
};

const borderColor = {
  light: "#494E5B",
  "light-warning": "transparent",
  warning: "#E45F35",
  success: "#4FBF67",
  "light-danger": "transparent",
  danger: "#FFF",
  yellow: "transparent",
};

const backgroundColor = {
  light: "none",
  "light-warning": "rgba(228, 95, 53, 0.1)",
  warning: "#E45F35",
  success: "rgba(79, 191, 103, 0.1)",
  "light-danger": " rgba(255, 49, 58, 0.1)",
  danger: "#FF313A",
  yellow: "#EBCD81",
};

const height = {
  xs: 24,
  sm: 40,
  md: 48,
  lg: 56,
};

const fontSize = {
  xs: 12,
  sm: 12,
  md: 14,
  lg: 16,
};

const padding = {
  xs: 12,
  sm: 16,
  md: 24,
  lg: 32,
};

export const ButtonContainer = styled.button<{
  color:
    | "success"
    | "light-warning"
    | "warning"
    | "light"
    | "danger"
    | "light-danger"
    | "yellow";
  size: "xs" | "sm" | "md" | "lg";
  fullWidth: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => (props.fullWidth ? `100%` : `auto`)};
  height: ${(props) => height[props.size]}px;
  padding: ${(props) => `0px ${padding[props.size]}`}px;
  border-width: ${(props) =>
    props.color === `light-warning` ? 0 : props.size === "xs" ? `1px` : `2px`};
  border-color: ${(props) => borderColor[props.color]};
  border-style: solid;
  border-radius: 40px;
  background: ${(props) => backgroundColor[props.color]};
  font-family: "Montserrat";
  font-weight: ${(props) => (props.size === "xs" ? 600 : 700)};
  font-size: ${(props) => fontSize[props.size]}px;
  color: ${(props) => color[props.color]};
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;
