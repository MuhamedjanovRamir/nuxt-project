<script setup>
import { INTRODUCING_CARDS } from '~/utils/constants'
</script>

<template>
  <section class="introducing">
    <div class="container">
      <div class="introducing_wrapper">
        <div class="introducing_content">
          <h1 class="introducing_content-title">Третий Международный Фармацевтический Форум Узбекистана</h1>
  
          <p class="introducing_content-subtitle">Крупнейшее международное событие, посвященное решению наиболее актуальных проблем фармацевтической отрасли нового Узбекистана</p>
  
          <div class="introducing_content-buttons">
            <app-button button-type="opacity" class="introducing_content-button">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" class="t-icon t-icon-svg t-icon-clock" style="width: 32px; height: 32px; flex: 0 0 32px; fill: transparent; stroke: transparent;"><path fill="#07A47F" d="M27 17a11 11 0 1 1-22 0 11 11 0 0 1 22 0"></path><path fill="#1DDDAF" d="M16 5a12 12 0 1 0 12 12A12.014 12.014 0 0 0 16 5m0 22a10 10 0 1 1 10-10 10.01 10.01 0 0 1-10 10m5.708-15.707a1 1 0 0 1 0 1.415l-5 5a1 1 0 0 1-1.415-1.415l5-5a1 1 0 0 1 1.415 0M12 2a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1"></path></svg>
              <span class="button_text">30-31 мая, 2024</span>
            </app-button>
  
            <app-button button-type="opacity" class="introducing_content-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" class="t-icon t-icon-svg t-icon-location" style="width: 32px; height: 32px; flex: 0 0 32px; fill: transparent; stroke: transparent;"><path fill="#07A47F" d="M19.77 21.961a1 1 0 0 0-.17-.014h-7.2q-.086 0-.17.014C8.856 22.545 7 23.744 7 25.333 7 27.853 11.665 29 16 29s9-1.147 9-3.667c0-1.589-1.857-2.788-5.23-3.372"></path><path fill="#1DDDAF" d="M16 3.381c-4.963 0-9 4.038-9 9 0 6.215 4.879 13.571 9 13.571s9-7.356 9-13.57c0-4.963-4.037-9-9-9m0 13.428a4.43 4.43 0 0 1-4.428-4.428A4.435 4.435 0 0 1 16 7.952a4.434 4.434 0 0 1 4.428 4.43A4.433 4.433 0 0 1 16 16.808m2.428-4.428A2.43 2.43 0 0 1 16 14.81a2.43 2.43 0 0 1-2.428-2.428c0-1.338 1.09-2.429 2.428-2.429a2.43 2.43 0 0 1 2.428 2.43"></path></svg>
              <span class="button_text">InterContinental Tashkent - Shakhrisabz Street 2</span>
            </app-button>
          </div>
        </div>

        <div class="introducing_extra-content">
          <div class="extra_content-image item">
            <img src="https://admin.uzpharmforum.com/media/post/images/1713298361336341.png">
          </div>
          <div class="extra_content-text item">
            <h3>Международный фармацевтический форум Узбекистана</h3>
            <p>Первый фармацевтический форум Узбекистана заявил себя как уникальная профессиональная международная площадка для лидеров фармацевтической отрасли, с участием руководителей крупнейших производителей, дистрибьютеров, органов власти, регуляторно-надзорных органов, лицензиаров технологий производства, юристов и консалтинговых специалистов, работающих в данной сфере и многих других.</p>
          </div>
          <div class="extra_content-image item">
            <img src="https://admin.uzpharmforum.com/media/post/images/1713298514689250.png">
          </div>
        </div>

        <div class="introducing_counts item">
          <div v-for="card in INTRODUCING_CARDS" :key="card" class="introducing_counts-item">
            <div class="card">
              <span class="card-count">{{ card.count }}</span>
              <span class="card-title">{{ card.title }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.introducing {
  background: $color-bg-dark-green;

  .introducing_wrapper {
    position: relative;
    z-index: 10;

    &::before {
      background-image: url('https://www.uzpharmforum.com/x.png');
      background-position: top;
      background-repeat: no-repeat;
      background-size: 100%;
      content: "";
      position: absolute;
      height: 100%;
      width: 100%;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -65%);
      z-index: 10;
    }
  }
}

.introducing_content {
  position: relative;
  z-index: 11;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 260px 0;

  .introducing_content-title {
    font-size: 72px;
    text-align: center;
    line-height: 120%;
    font-family: $font-family-bold;
    color: $color-text-primary;
    margin-bottom: 47px;
  }

  .introducing_content-subtitle {
    max-width: 725px;
    text-align: center;
    color: $color-text-primary;
    margin-bottom: 55px;
  }

  .introducing_content-buttons {
    display: flex;
    align-items: center;
    gap: 16px;

    .introducing_content-button {
      display: flex;
      align-items: center;
      gap: 8px;
      
      span {
        font-size: 24px;
        color: $color-text-primary;
      }
    }
  }
}

.introducing_extra-content {
  position: relative;
  display: flex;
  justify-content: space-between;
  z-index: 10;
  margin-bottom: 80px;

  .extra_content-image {
    padding: 0 12px;
    flex: 0 0 25%;
    height: 278px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 16px;
    }
  }

  .extra_content-text {
    flex: 0 0 50%;
    padding: 0 12px;
    text-align: center;

    h3 {
      font-size: 40px;
      color: $color-text-primary;
      font-family: $font-family-bold;
      margin-bottom: 20px;
      line-height: 110%;
    }

    p {
      color: $color-text-primary;
      opacity: $opacity-text;
    }
  }
}

.introducing_counts {
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  transform: translateY(50%);

  .introducing_counts-item {
    flex: 0 0 33.33333333%;
    max-width: 33.33333333%;
    padding: 0 16px;

    .card {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
      background: $color-bg-light-green;
      border-radius: $border-big-radius;
      height: 230px;
      padding: 34px 40px;
      text-align: center;
      color: $color-text-primary;
      overflow: hidden;

      &::after {
        background-image: url('https://www.uzpharmforum.com/x.png');
        background-repeat: no-repeat;
        background-size: 100%;
        content: "";
        height: 140px;
        opacity: .1;
        position: absolute;
        right: 5px;
        top: 50%;
        transform: translate(25%, -50%) rotate(135deg);
        width: 140px;
      }

      .card-count {
        font-size: 56px;
        font-family: $font-family-bold;
        line-height: 140%;
        margin-bottom: 10px;
      }

      .card-title {
        font-size: 24px;
      }
    }
  }
}

@media (max-width: 1200px) {
  .introducing_extra-content {
    flex-wrap: wrap;

    .extra_content-image.item:nth-child(1) {
      order: 2;
    }
     .extra_content-image.item:nth-child(2) {
      order: 3;
    }

    .extra_content-image {
      padding: 0 12px;
      flex: 0 0 50%;
      height: 278px;
    }

    .extra_content-text {
      flex: 0 0 100%;
    }
  }

  .introducing_counts {
    justify-content: flex-start;
    flex-wrap: wrap;
    row-gap: 32px;

    .introducing_counts-item {
      flex: 0 0 50%;
      max-width: 50%;
    }
  }
}

@media (max-width: 992px) {
  .introducing {
    .introducing_wrapper {
      &::before {
        background-position: top;
        transform: translate(-50%, -50%);
      }
    }
  }
  
  .introducing_content {
    padding: 130px 0;

    .introducing_content-title {
      font-size: 60px;
    }
  }

  .introducing_extra-content {
    row-gap: 24px;

    .extra_content-text {
      margin-bottom: 20px;
    }
  }

  .introducing_counts {
    padding-bottom: 24px;
    transform: translateY(0);
  }
}

@media (max-width: 937px) {
  .introducing_content-buttons {
    flex-direction: column;
    align-items: center;
  }
}

@media (max-width: 768px) {
  .introducing_content {
    padding: 60px 0;

    .introducing_content-title {
      font-size: 32px;
    }
  }

  .introducing_extra-content {
    row-gap: 24px;

    .extra_content-image {
      flex: 0 0 100%;
      max-width: 100%;
    }

    .item:nth-child(1) {
      order: 1;
    }
    .item:nth-child(2) {
      order: 2;
    }
    .item:nth-child(3) {
      order: 3;
    }
  }

  .introducing_counts {
    .introducing_counts-item {
      flex: 0 0 100%;
      max-width: 100%;
      
      .card .card-count {
        font-size: 46px;
      }
    }
  }

  .introducing_content-buttons {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
  .introducing_content .introducing_content-buttons .introducing_content-button span[data-v-80f9b194] {
    font-size: 18px;
    font-family: $font-family-regular;  
  }
}
</style>
