import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div id="footer" className="info">
        <div className="info_links">
          <ul className="footer-text bottom-text">
            <li className="m-2">
              Москва ул. Орджоникидзе, 11с10
              <br />
              +7 (777) 777-77-77
            </li>
            <li className="m-2">
              Санкт-Петербург ул. Кирочная, 19
              <br />
              +7 (111) 111-11-11
            </li>
            <li className="m-2">
              <div className="socials" style={{ display: 'flex', alignItems: 'center', columnGap: '20px' }}>
                <a href="//t.me/MVneLogiki"><img className="socials_item" src="/img/telegram.png" alt="telegram" /></a>
                <a href="/#"><img className="socials_item" src="/img/instagram.png" alt="instagram" /></a>
                <a href="/#"><img className="socials_item" src="/img/vk.png" alt="vk" /></a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
