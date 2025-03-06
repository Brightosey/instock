import { NavLink } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <section className="header__content">
        <section className="header__logo">
          <svg
            width="129"
            height="28"
            viewBox="0 0 129 28"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M38.7773 22.9996V6.6796H42.0893V22.9996H38.7773Z"
              fill="white"
            />
            <path
              d="M45.6445 22.9996V6.6796H51.2365L55.1725 20.1196H55.4125V6.6796H58.7245V22.9996H53.2765L49.1965 9.5596H48.9565V22.9996H45.6445Z"
              fill="white"
            />
            <path
              d="M67.3012 9.2716C65.5572 9.2716 64.6852 9.8476 64.6852 10.9996C64.6852 11.5116 64.9012 11.9036 65.3332 12.1756C65.7652 12.4476 66.7732 12.8396 68.3572 13.3516C69.9572 13.8636 71.0772 14.4476 71.7172 15.1036C72.3572 15.7436 72.6772 16.7356 72.6772 18.0796C72.6772 19.7916 72.1572 21.0876 71.1172 21.9676C70.0772 22.8476 68.7172 23.2876 67.0372 23.2876C65.7892 23.2876 64.2612 23.0956 62.4532 22.7116L61.5892 22.5436L61.9252 19.9756C64.0692 20.2636 65.7092 20.4076 66.8452 20.4076C68.5412 20.4076 69.3892 19.7036 69.3892 18.2956C69.3892 17.7836 69.1892 17.3836 68.7892 17.0956C68.4052 16.8076 67.6292 16.4956 66.4612 16.1596C64.6052 15.6316 63.2932 15.0076 62.5252 14.2876C61.7732 13.5516 61.3972 12.5356 61.3972 11.2396C61.3972 9.6076 61.8932 8.3916 62.8852 7.5916C63.8772 6.7916 65.2372 6.3916 66.9652 6.3916C68.1492 6.3916 69.6532 6.5516 71.4772 6.8716L72.3412 7.0396L72.0772 9.6556C69.8212 9.3996 68.2292 9.2716 67.3012 9.2716Z"
              fill="white"
            />
            <path
              d="M73.8758 9.6076V6.6796H85.8758V9.6076H81.5558V22.9996H78.2438V9.6076H73.8758Z"
              fill="white"
            />
            <path
              d="M91.216 19.1596C91.696 19.9916 92.584 20.4076 93.88 20.4076C95.176 20.4076 96.056 19.9916 96.52 19.1596C97 18.3116 97.24 16.9036 97.24 14.9356C97.24 12.9516 97 11.5116 96.52 10.6156C96.04 9.7196 95.16 9.2716 93.88 9.2716C92.6 9.2716 91.72 9.7196 91.24 10.6156C90.76 11.5116 90.52 12.9516 90.52 14.9356C90.52 16.9036 90.752 18.3116 91.216 19.1596ZM99.112 21.2716C98.104 22.6156 96.36 23.2876 93.88 23.2876C91.4 23.2876 89.648 22.6156 88.624 21.2716C87.616 19.9116 87.112 17.7916 87.112 14.9116C87.112 12.0316 87.616 9.8956 88.624 8.5036C89.648 7.0956 91.4 6.3916 93.88 6.3916C96.36 6.3916 98.104 7.0956 99.112 8.5036C100.136 9.8956 100.648 12.0316 100.648 14.9116C100.648 17.7916 100.136 19.9116 99.112 21.2716Z"
              fill="white"
            />
            <path
              d="M113.832 22.7356C112.136 23.1036 110.608 23.2876 109.248 23.2876C107.888 23.2876 106.8 23.1196 105.984 22.7836C105.168 22.4476 104.528 21.9116 104.064 21.1756C103.6 20.4396 103.28 19.5756 103.104 18.5836C102.928 17.5916 102.84 16.3436 102.84 14.8396C102.84 11.6876 103.28 9.4956 104.16 8.2636C105.056 7.0156 106.696 6.3916 109.08 6.3916C110.456 6.3916 112.048 6.6076 113.856 7.0396L113.76 9.6796C112.176 9.4396 110.856 9.3196 109.8 9.3196C108.76 9.3196 108.016 9.4636 107.568 9.7516C107.12 10.0236 106.784 10.5516 106.56 11.3356C106.352 12.1196 106.248 13.4556 106.248 15.3436C106.248 17.2316 106.464 18.5436 106.896 19.2796C107.344 19.9996 108.224 20.3596 109.536 20.3596C110.864 20.3596 112.272 20.2476 113.76 20.0236L113.832 22.7356Z"
              fill="white"
            />
            <path
              d="M119.832 22.9996H116.52V6.6796H119.832V13.8556L122.04 13.6156L124.728 6.6796H128.496L124.944 14.8636L128.592 22.9996H124.776L122.04 16.4956L119.832 16.7356V22.9996Z"
              fill="white"
            />
            <path
              d="M5.6 7H19.6V11.2L25.2 5.6L19.6 0V4.2H2.8V12.6H5.6V7ZM19.6 21H5.6V16.8L0 22.4L5.6 28V23.8H22.4V15.4H19.6V21Z"
              fill="#2E66E6"
            />
          </svg>
        </section>

        <nav className="header__nav">
          <NavLink to="/" className="header__nav-link header__nav-link--active">
            Warehouses
          </NavLink>
          <NavLink
            to="/inventory"
            className="header__nav-link header__nav-link--active"
          >
            Inventory
          </NavLink>
        </nav>
      </section>
    </header>
  );
}

export default Header;
