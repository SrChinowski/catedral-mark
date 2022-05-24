import styled from 'styled-components';

import bannerImg from '../../assets/images/login.png';

const LoginWrapper = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-image: url(${bannerImg});
`;

export const LoginLayout = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
`
export const Card = styled.div`
  padding: 2rem;
  background-color: white;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 768px) {
    max-width: 80%;
    height: 50vh;
  }
  @media (min-width: 992px) {
    max-width: 20%;
    height: 50vh;
    margin-left: 10%;
  }
  @media (min-width: 1220px) {
    max-width: 20%;
    height: 50vh;
    margin-left: 10%;
  }
  @media (max-width: 768px) {
      max-width: 20%;
    height: 50vh;
    margin-left: 10%;
  }
`
export const Separator = styled.div`
height: 1.5rem;
`

export default LoginWrapper;
