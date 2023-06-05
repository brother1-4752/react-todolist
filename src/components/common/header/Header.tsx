import { useRecoilState, useSetRecoilState } from "recoil";
import HeaderContainer from "./Header.styled";
import { categoryState, darkModeState } from "../../../atoms/atoms";

export default function Header() {
  const setCategory = useSetRecoilState(categoryState);
  const [isDark, setIsDark] = useRecoilState(darkModeState);

  const handleClickCategory = (event: React.MouseEvent<HTMLLIElement>) => {
    const {
      currentTarget: { innerHTML },
    } = event;

    setCategory(innerHTML as any);
  };

  const handleDarkMode = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <HeaderContainer>
      <h1 className="header__title">✅TO DO LIST USING REACT-HOOK-FORM</h1>

      <ul className="header__list">
        <li onClick={handleClickCategory} className="header__list__item">
          DOING
        </li>
        <li onClick={handleClickCategory} className="header__list__item">
          PENDING
        </li>
        <li onClick={handleClickCategory} className="header__list__item">
          DONE
        </li>
      </ul>

      <div onClick={handleDarkMode} className="header__darkmode--btn">
        {isDark ? "🌞" : "🌛"}
      </div>
    </HeaderContainer>
  );
}
