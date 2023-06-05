import styled from "styled-components";

const HeaderContainer = styled.header`
  width: 100%;
  height: 100px;
  margin: 30px;

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-evenly;

  .header__title {
    margin-bottom: 10px;

    font-size: 30px;
  }

  .header__list {
    width: 300px;
    height: 35px;

    display: flex;
    justify-content: space-between;

    .header__list__item {
      width: 90px;
      line-height: 30px;
      text-align: center;

      background-color: #005bc5;
      color: white;
      border-radius: 10px;
      cursor: pointer;

      &:hover {
        background-color: white;
        color: #005bc5;
        border: 1px solid #005bc5;
      }
    }
  }
`;

export default HeaderContainer;
