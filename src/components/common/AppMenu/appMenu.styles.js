import styled from 'styled-components';
// import bannerImg from '../../../assets/images/app-bg.png';

export const AppLayout = styled.div`
  display: grid;
  grid-template-areas:
    'header header header header header header'
    'menu main main main main main'
    'menu main main main main main'
    'menu main main main main main';

grid-template-columns: repeat(6, 1fr);
grid-template-rows: .5fr repeat(4, 1fr);

  gap: 10px;
  height: 100vh;
  background-color: #fafafa;
`

export const AppBanner = styled.div`
    grid-area: header;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 5vw;
    background-color: #0d6efd;
    height: 10vh;
`
export const Menuitem = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    width: 80%;
    margin-top: 20px;

    &>p {
        margin: 0;
        color: #6d6c6f;
    }
`

export const CardMenu = styled.div`
    height: 95%;
    border: 1px solid lightgray;

    grid-area: menu;
    grid-row-start: 1;
    grid-row-end: 6;

    margin: 10px 0px 10px 0px;

    background-color: white;
    border-radius: 25px;

    display: flex;
    flex-direction: column;
    /* justify-content: flex-start; */
    align-items: center;
    /* align-self: auto; */
    width: 100%;
    min-height: 400px;

    @media (min-width: 0px) {
        width: 100%;
        /* align-self: center; */
    }
    @media (min-width: 768px) {
        width: 100%;
        /* align-self: center; */
    }
    @media (min-width: 992px) {
        max-width: 80%;
        margin-left: 10%;
        /* align-self: auto; */
    }
    @media (min-width: 1220px) {
        max-width: 80%;
        margin-left: 10%;
        /* align-self: auto; */
    }
`

export const MainContainer = styled.div`
    grid-area: main;
    grid-row-end: 6;
    display: flex;
    width: 100%;
    height: 100%;
    padding-right: 20px;
`
