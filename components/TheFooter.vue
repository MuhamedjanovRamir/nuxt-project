<script setup>
import { NAV_LINKS } from '~/utils/constants'
</script>

<template>
  <footer class="footer">
    <app-waves wave-color="#078b6c"></app-waves>
  
    <div class="footer_content">
      <div class="container">
        <div class="footer_content-wrapper">
          <div class="footer_content-item">
            <app-logo color-theme="light"></app-logo>
            <div class="copyright"><span>© 2024 International Pharmceutical Forum of Uzbekistan</span></div>
            <div class="author"><span>Разработка сайта:</span> <a href="#">Online Service Group</a></div>
          </div>

          <div class="footer_content-item">
            <div class="footer_content-contact">
              <div class="title">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 15" class="t-icon t-icon-svg t-icon-phone" style="width:18px;height:18px;flex:18px 0 0;fill:transparent;stroke:transparent;"><path fill="#fff" d="M5.805 6.402a8.8 8.8 0 0 0 3.293 3.293l.737-1.032a.833.833 0 0 1 1.078-.247 9.5 9.5 0 0 0 3.82 1.137.833.833 0 0 1 .767.83v3.72a.833.833 0 0 1-.748.829q-.663.068-1.335.068C6.283 15 .5 9.217.5 2.083q0-.672.068-1.335A.833.833 0 0 1 1.398 0h3.718c.435 0 .797.334.83.768a9.5 9.5 0 0 0 1.138 3.819.833.833 0 0 1-.247 1.078zm-2.101-.548 1.583-1.13a11.2 11.2 0 0 1-.914-3.057H2.174q-.007.207-.007.416c0 6.214 5.037 11.25 11.25 11.25q.209 0 .416-.007v-2.199a11.2 11.2 0 0 1-3.056-.914l-1.131 1.584q-.688-.268-1.323-.625l-.049-.028a10.46 10.46 0 0 1-3.918-3.918l-.028-.049a10 10 0 0 1-.624-1.323"></path></svg>
                <span>Номер телефона:</span>
              </div>
              <a href="#">+998 99 117 88 99</a>
            </div>
            <div class="footer_content-contact">
              <div class="title">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 19" class="t-icon t-icon-svg t-icon-address" style="width:18px;height:18px;flex:18px 0 0;fill:transparent;stroke:transparent;"><path fill="#fff" d="m8 15.916 4.125-4.125a5.833 5.833 0 1 0-8.25 0zm0 2.357L2.697 12.97a7.5 7.5 0 1 1 10.606 0zm0-8.94A1.667 1.667 0 1 0 8 6a1.667 1.667 0 0 0 0 3.333M8 11a3.333 3.333 0 1 1 0-6.667A3.333 3.333 0 0 1 8 11"></path></svg>
                <span>Адрес:</span>
              </div>
              <a href="#">OOO “World Pharma Forum” г. Ташкент, Проспект Амира Темура 95А</a>
            </div>
          </div>

          <div class="footer_content-item">
            <the-navbar class="footer_nav"></the-navbar>
          </div>

          <div class="footer_content-item">
            <div class="signup-card">
              <div class="item">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" fill="none" class="t-icon t-icon-svg t-icon-clock-simple" style="width:20px;height:20px;flex:20px 0 0;fill:transparent;stroke:transparent;"><path fill="#fff" d="M10 2.167c4.6 0 8.333 3.733 8.333 8.333S14.6 18.833 10 18.833A8.336 8.336 0 0 1 1.667 10.5C1.667 5.9 5.4 2.167 10 2.167m0 15a6.665 6.665 0 0 0 6.667-6.667A6.665 6.665 0 0 0 10 3.833 6.665 6.665 0 0 0 3.333 10.5 6.665 6.665 0 0 0 10 17.166m2.946-10.792 1.179 1.179L10 11.678 8.822 10.5z" opacity=".8"></path></svg>
                <span>30-31 мая, 2024</span>
              </div>
              <div class="item">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 19" class="t-icon t-icon-svg t-icon-address" style="width:20px;height:20px;flex:20px 0 0;fill:transparent;stroke:transparent;"><path fill="#fff" d="m8 15.916 4.125-4.125a5.833 5.833 0 1 0-8.25 0zm0 2.357L2.697 12.97a7.5 7.5 0 1 1 10.606 0zm0-8.94A1.667 1.667 0 1 0 8 6a1.667 1.667 0 0 0 0 3.333M8 11a3.333 3.333 0 1 1 0-6.667A3.333 3.333 0 0 1 8 11"></path></svg>
                <span>InterContinental Tashkent - Shakhrisabz Street 2</span>
              </div>
              <div class="button">
                <span>Зарегистрироваться</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="t-icon t-icon-svg t-icon-arrow-left" style="width:18px;height:18px;flex:18px 0 0;fill:transparent;stroke:transparent;"><path fill="#ffff" d="M12.172 7 6.808 1.636 8.222.222 16 8l-7.778 7.778-1.414-1.414L12.172 9H0V7z"></path></svg>
              </div>
            </div>
          </div>

          <div class="footer_content-item copyright">
            <div class="copyright"><span>© 2024 International Pharmceutical Forum of Uzbekistan</span></div>
            <div class="author"><span>Разработка сайта:</span> <a href="#">Online Service Group</a></div>
          </div>
        </div>
      </div>
    </div>
    
  </footer>
</template>

<style lang="scss" scoped>
.footer_content {
  background: $color-bg-green;
  padding: 60px 0;

  .footer_content-wrapper {
    display: flex;
    margin: 0 -12px;
    row-gap: 24px;

    .footer_content-item {
      flex: 0 0 25%;
      max-width: 25%;
      padding: 0 12px;

      &.copyright {
        display: none;
      }

      .copyright {
        font-size: 18px;
        margin-bottom: 24px;
        color: $color-text-primary;
        opacity: $opacity-text;
      }
      .author {
        
        span {
          color: $color-text-primary;
          font-size: 18px;
          opacity: $opacity-text;
        }

        a {
          color: $color-text-primary;
          font-size: 18px;
          line-height: 150%;
        }
      }

      .footer_content-contact {
        &:not(:last-child) {
          margin-bottom: 24px;
        }

        .title {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
          
          span {
            font-size: 18px;
            color: $color-text-primary;
          }
        }

        a {
          color: $color-text-primary;
          font-size: 20px;
          font-family: $font-family-bold;
          line-height: 150%;
          transition: .3s ease;

          &:hover {
            color: $color-text-green;
          }
        }
      }

      .footer_nav {
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;
      }

      .signup-card {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        padding: 20px 26px;
        background-color: $color-bg-light-green;
        border-radius: $border-big-radius;

        .item {
          display: flex;
          align-items: center;
          gap: 8px;
          color: $color-text-primary;
        }

        .button {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 20px;
          color: $color-text-primary;
          margin-top: auto;
          cursor: pointer;
          margin-top: 24px;
        }
      }
    }
  }
}

@media (max-width: 1200px) {
  .footer_content {
    .footer_content-wrapper {
      flex-wrap: wrap;

      .footer_content-item {
        flex: 0 0 50%;
        max-width: 50%;

        .footer_nav {
          padding: 0;
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .footer_content {
    .footer_content-wrapper {
      flex-wrap: wrap;

      .footer_content-item {
        flex: 0 0 100%;
        max-width: 100%;

        &.copyright {
          display: block;
        }

        &:nth-child(1) { 
          .copyright, .author {
            display: none;
          }
        }
      }
    }
  }
}
</style>
