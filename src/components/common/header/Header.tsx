import HeaderContainer from "./Header.styled";

export default function Header() {
  return (
    <HeaderContainer>
      <h1 className="header__title">✅TO DO LIST USING REACT-HOOK-FORM</h1>

      <ul className="header__list">
        <li className="header__list__item">DOING</li>
        <li className="header__list__item">PENDING</li>
        <li className="header__list__item">DONE</li>
      </ul>
    </HeaderContainer>
  );
}
