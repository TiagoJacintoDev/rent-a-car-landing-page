import styled from 'styled-components';
import { variables as v } from '../../styles/variables';
import { Container as CH, Title as TH } from '../../styles/helpers';
import { motion } from 'framer-motion';

export const Container = styled(CH)`
  background-color: ${v.color.bg};
  padding-bottom: 300px;
`;

export const Title = styled(TH)`
  margin-top: ${v.size.small};
  color: white;
  @media (min-width: ${v.ds.laptop}) {
    line-height: ${v.size.large};
    font-size: ${v.fs.largest};
  }
`;

export const SubTitle = styled.h2`
  display: flex;
  gap: ${v.size.smallest};
  color: ${v.color.txt};
  font-weight: ${v.fw.semiBold};
  font-family: ${v.ff.default};
`;

export const LeftCol = styled.div`
  position: relative;
  @media (min-width: ${v.ds.laptop}) {
    width: 45%;
  }
`;

export const CarImg = styled.img`
  position: absolute;
  top: 200px;
  width: ${({ pos }) => (pos === 'middle' ? '65%' : '60%')};

  translate: ${({ pos }) =>
    pos === 'left' ? '0' : pos === 'right' ? '75%' : '30%'};

  @media (min-width: ${v.ds.laptop}) {
    top: 200px;
    width: ${({ pos }) => (pos === 'middle' ? '100%' : '90%')};
    translate: ${({ pos }) =>
      pos === 'left' ? '0' : pos === 'right' ? '75%' : '30%'};
  }
`;

export const AppDemo = styled(motion.img)`
  position: absolute;
  top: ${v.size.small};
  right: ${v.size.medium};
  width: 20.5%;
`;

export const Cars = styled(motion.div)`
  position: relative;
  width: 100%;
`;
