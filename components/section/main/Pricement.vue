<script setup>
  const activeTab = ref('one')
  const setTab = value => activeTab.value = value
</script>

<template>
  <section class="section pricement">
    <div class="container">
      <SectionHeader title="Стоимость и условия участия" text-color="#1c2f3f" class="pricement_header"/>

      <div class="pricement_tabs">
        <div class="buttons">
          <BaseButton @click="setTab('one')" :class="['button', { active: activeTab === 'one'}]" button-type="outline">
            <span class="button_text">Участие</span>
          </BaseButton>
          <BaseButton @click="setTab('two')" :class="['button', { active: activeTab === 'two'}]" button-type="outline">
            <span class="button_text">Стать партнером</span>
          </BaseButton>
        </div>
      </div>

      <div class="pricement_content">
        <div v-show="activeTab === 'one'" class="price_wrapper">
          <div class="price_card">
            <div class="price_card-header"><span>Cтоимость</span></div>
            <div class="price_card-body">
              <span class="price_body-price">$1 500</span>
              <span class="price_body-subtitle">За одного делегата</span>
              <BaseButton class="price_body-button" button-type="opacity">
                <span class="button_text">Зарегистрироваться</span>
              </BaseButton>
            </div>
          </div>
        </div>
      </div>

      <div v-show="activeTab === 'two'" class="participation">
        <h3 class="participation-title">Оставьте заявку на участие в качестве 'Партнера' форума и наши представители свяжутся с вами для подробной информации.</h3>
        <p class="participation-subtitle">Выбор одного из партнерских пакетов — это наилучший способ продемонстрировать лидирующее положение на рынке, расширить сеть деловых контактов, привлечь эффективных партнеров.</p>
        <form @submit.prevent class="participation_form">
          <div class="participation_form-wrapper">
            <div class="form-control">
              <input class="input" placeholder="Имя и фамилия" type="text">
            </div>
            <div class="form-control">
              <input class="input" placeholder="Электронный адрес" type="text">
            </div>
            <div class="form-control">
              <input class="input" placeholder="Номер телефона" type="text">
            </div>
            <div class="form-control">
              <input class="input" placeholder="Компания" type="text">
            </div>
            <div class="form-control">
              <input class="input" placeholder="Должность" type="text">
            </div>
          </div>
          <BaseButton class="button" button-type="filled"><span class="button_text">Зарегистрироваться</span></BaseButton>
        </form>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.pricement_header { justify-content: center; }

.pricement_tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 32px;

  .buttons {
    display: flex;
    gap: 8px;

    .button {
      color: $color-text-dark;

      &.active {
        background: #06b48b;
        color: $color-text-primary;
        border-color: #06b48b;
      }
    }
  }
}

.price_wrapper {
  display: flex;
  justify-content: center;

  .price_card {
    border-radius: $border-big-radius;
    width: 410px;
    max-width: 410px;
    overflow: hidden;

    .price_card-header{
      display: flex;
      justify-content: center;
      background: #0ac398;
      padding: 15px 0;
      color: $color-text-primary;
      font-family: $font-family-bold;
    }

    .price_card-body {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 32px 0;
      background: #07a781;

      span {
        color: $color-text-primary;
      }

      .price_body-price {
        font-size: 40px;
        font-family: $font-family-bold;
        margin-bottom: 8px;
        z-index: 1;
      }

      .price_body-subtitle {
        font-size: 22px;
        font-family: $font-family-bold;
        margin-bottom: 24px;
        z-index: 1;
      }

      .price_body-button { z-index: 1; }

      &::after {
        background-image: url('https://www.uzpharmforum.com/x.png');
        background-repeat: no-repeat;
        background-size: 100%;
        content: "";
        height: 140px;
        left: 50%;
        opacity: .1;
        position: absolute;
        top: 20px;
        transform: translateX(-50%) rotate(135deg);
        width: 140px;
      }
    }
  }
}

.participation-title {
  font-size: 28px;
  line-height: 150%;
  color: $color-text-dark;
  margin-bottom: 16px;
}

.participation-subtitle {
  font-family: $font-family-medium;
  opacity: $opacity-text;
  margin-bottom: 35px;
}

.participation_form .button_text {
  color: $color-text-primary;
}
.participation_form-wrapper {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -10px;

  .button_text {
  color: $color-text-primary;
  }
}

.form-control {
  padding: 0 10px;
  flex: 0 0 33.33333333%;
  max-width: 33.33333333%;
  margin-bottom: 24px;

  .input {
    width: 100%;
    padding: 4px 11px;
    height: 58px;
    color: $color-text-dark;
    font-family: $font-family-bold;
    font-size: 20px;
    border: 1px solid #c5d4e0;
    border-radius: $border-big-radius;
    transition: .3s ease;

    &:focus {
      box-shadow: 0 0 0 1px rgba(36, 205, 166, .941);
    }

    &::placeholder {
      color: $color-text-dark;
      opacity: .4;
    }
  }
}

@media (max-width: 1200px) {
  .form-control {
    flex: 0 0 50%;
    max-width: 50%;
  }
}

@media (max-width: 768px) {
  .price_wrapper {
    .price_card {
      width: 250px;
      max-width: 250px;
    }
  }

  .form-control {
    flex: 0 0 100%;
    max-width: 100%;
  }
}
</style>
