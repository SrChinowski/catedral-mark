import styled from 'styled-components';

const LoginWrapper = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-image: url("https://images.unsplash.com/photo-1560931465-4388bfd3ada0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2F0ZWRyYWwlMjBkZSUyMG1leGljb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60");
`;

export const LoginLayout = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
`
export const Card = styled.div`
  padding: 10px;
  max-width: 25%;
  height: 300px;
  margin-left: 10%;
  height: 100%;
  background-color: white;
  border-radius: 25px;
`

export default LoginWrapper;
