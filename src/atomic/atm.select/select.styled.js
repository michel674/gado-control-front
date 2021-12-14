import styled from 'styled-components';
import { Color } from '../../components/constants';
import { FaAngleDown } from 'react-icons/fa';

export const ArrowStyled = styled(FaAngleDown)`
  position: absolute;
  display: block;
  top: 35%;
  right: 0;
  height: 30%;
  width: 3rem;
  pointer-events: none;

  }
`;

export const Container = styled.div`
  min-height: 0;
  display: grid;
  place-items: center;
`;

export const SelectContainer = styled.div`
  position: relative;
`;

export const SelectStyled = styled.select`
  font-size: 1.5rem;
  padding: 1em 6em 1em 1.5em;
  background-color: ${Color.Gray200};
  border-radius: 8px;
  color: ${Color.Gray600};
  border: 0;

  appearance: none;
`;
