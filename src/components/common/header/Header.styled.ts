import styled from "styled-components";

const HeaderContainer = styled.header`
  position: relative;
  height: 80px;
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
    font-weight: bold;
  }

  .header__list {
    height: 35px;

    display: flex;
    justify-content: space-between;

    font-size: 18px;
    font-weight: bold;

    .header__list__item {
      line-height: 10px;
      text-align: center;

      padding: 10px;
      margin-right: 15px;

      background-color: ${(props) => props.theme.accecntColor};
      color: white;
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
