import './i18n'
import './App.css'
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();
  function qora() {
    document.body.classList.toggle("dark")
  }

  return (
    <div>
      <header class="container">
        <h2>Logo</h2>
        <nav>
          <ul>

            <li><a href="#">{t("menu1")}</a></li>
            <li><a href="#">{t("menu2")}</a></li>
            <li><a href="#">{t("menu3")}</a></li>

            <select onChange={(e) => i18n.changeLanguage(e.target.value)} value={i18n.language}>
              <option value="en">English</option>
              <option value="ru">rus</option>
              <option value="uz">Uzbek</option>
            </select>
            <button onClick={qora} class="dark-btn">DarkMode</button>
          </ul>
        </nav>
      </header>
      <main>
        <section>
          <div class="container">
            <div class="text">
              <h3 class="wfe">{t("title")}</h3>
              <p class="ds">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
              <button class="btn3">{t("btn")}</button>
            </div>
            <img src="./ex.png" alt="" />
          </div>
        </section>
      </main>

    </div>
  )
}

export default App