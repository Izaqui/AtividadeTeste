import styled from 'styled-components';

export const Head = styled.header`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  background: transparent;
  transition: all ease 1s;
  background: ${props => props.isBlack};
`;

export const HeaderLeft = styled.div`
    img{
      height: 5vh;
    }
`;

export const HeaderRigth = styled(HeaderLeft)`
      height: 40px;
      img{
        height: 100%;
      }
`;
