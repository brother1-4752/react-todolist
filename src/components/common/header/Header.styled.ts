import styled from "styled-components";

const HeaderContainer = styled.header`
  position: relative;
  height: 100px;
  margin: 30px;

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-evenly;

  .header__darkmode--btn {
    position: absolute;

    right: 0;
    top: 0;
    cursor: pointer;

    font-size: 27px;
  }

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

      background-color: ${(props) => props.theme.accecntColor};
      color: ${(props) => props.theme.bgColor};
      border-radius: 10px;
      cursor: pointer;

      &:hover {
        background-color: ${(props) => props.theme.bgColor};
        color: ${(props) => props.theme.accecntColor};
        border: 1px solid ${(props) => props.theme.accecntColor};
      }
    }
  }
`;

export default HeaderContainer;
