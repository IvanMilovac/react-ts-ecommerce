import styled from "styled-components";
import Button from "@mui/material/Button";

export const CustomBadge = styled.div`
  position: absolute;
  top: 1rem;
  right: 0.5rem;
  padding: 0.25rem 0.5rem;
  z-index: 10;
  background: #0033ff;
  border-bottom-left-radius: 0.5rem;
  color: white;
`;

export const ButtonStyle = styled(Button)`
  width: 100%;
  border-top: 1px solid #00000022;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  background: transparent;
  :hover {
    background: whitesmoke;
  }
`;
