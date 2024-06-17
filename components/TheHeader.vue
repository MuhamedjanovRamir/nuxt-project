<script setup>
const languageOption = ref('ENG')
const selectedLanguage = ref('РУС')
const isOpenSelect = ref(false)

const toggleLanguageSelect = () => isOpenSelect.value = !isOpenSelect.value
const changeSelectedOption = (value) => {
  isOpenSelect.value = false
  languageOption.value = selectedLanguage.value
  selectedLanguage.value = value
}

const isOpenMenu = ref(false)
const openMenu = () => isOpenMenu.value = true
const closeMenu = () => isOpenMenu.value = false
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header_content">
        <app-logo></app-logo>
        <the-navbar class="header_nav"></the-navbar>

        <div class="header_buttons">
          <div class="header_buttons-select" :class="{ open: isOpenSelect }">
            <app-button
              button-type="opacity"
              @click="toggleLanguageSelect"
              class="header_buttons-selected"
            >
              <span class="button_title">{{ selectedLanguage }}</span>
              <svg xmlns="http://www.w3.org/2000/svg" 
                width="12" height="8" 
                fill="none" 
                style="width:12px;height:12px;flex:12px 0 0;fill:transparent;stroke:transparent;"
              >
                <path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m1 1.5 5 5 5-5"></path>
              </svg>
            </app-button>

            <transition name="fade">
              <app-button
                button-type="opacity"
                v-if="isOpenSelect"
                class="header_buttons-option"
                @click="changeSelectedOption(languageOption)"
              >
                <span class="button_title">{{ languageOption }}</span>
              </app-button>
            </transition>
          </div>

          <app-button button-type="filled"><span class="button_title">Зарегистрироваться</span></app-button>
        </div>

        <div @click="openMenu" class="header_burger">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ffff" viewBox="0 0 256 256" class="t-icon t-icon-svg t-icon-burger" style="width:30px;height:30px;flex:30px 0 0;fill:#ffff;stroke:transparent;"><path d="M224 128a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8M40 72h176a8 8 0 0 0 0-16H40a8 8 0 0 0 0 16m176 112H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16"></path></svg>
        </div>

        <div class="header_menu" :class="{open: isOpenMenu}">
          <div class="menu_header">
            <app-logo></app-logo>
            <svg @click="closeMenu" xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 256 256" class="t-icon t-icon-svg t-icon-x close-icon" style="width: 30px; height: 30px; flex: 0 0 30px; fill: #ffff; stroke: transparent;"><path d="M205.66 194.34a8 8 0 0 1-11.32 11.32L128 139.31l-66.34 66.35a8 8 0 0 1-11.32-11.32L116.69 128 50.34 61.66a8 8 0 0 1 11.32-11.32L128 116.69l66.34-66.35a8 8 0 0 1 11.32 11.32L139.31 128Z"></path></svg>
          </div>

          <div class="menu_body">
            <the-navbar @click="closeMenu" class="nav"></the-navbar>
            <div class="menu_footer">
              <div class="menu_footer-item">
                <app-button @click="changeSelectedOption('РУС')" :class="['lang', {active: selectedLanguage === 'РУС'}]" button-type="outline"><span class="button_text">РУС</span></app-button>
                <app-button @click="changeSelectedOption('ENG')" :class="['lang', {active: selectedLanguage === 'ENG'}]" button-type="outline"><span class="button_text">ENG</span></app-button>
              </div>
              <div class="menu_footer-item">
                <app-button class="button" button-type="filled"><span class="button_text">Зарегистрироваться</span></app-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
.header {
  padding: 30px 0;
  background: $color-bg-dark-green;

  .header_content {
    position: relative;
    z-index: 11;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .header_burger {
      display: none;
    }

    .header_menu {
      display: none;
    }

    .header_buttons {
      display: flex;
      align-items: center;
      gap: 16px;

      .button_title {
        color: $color-text-primary;
      }

      .header_buttons-select {
        position: relative;

        &.open {
          .header_buttons-selected {
            svg {
              transform: rotate(180deg);
            }
          }
        }

        .header_buttons-option {
          position: absolute;
          bottom: -105%;
          width: 100%;
          transition: .3s ease;
          
          &:hover {
            background: $color-bg-light-green;
          }
        }

        .header_buttons-selected {
          display: flex;
          align-items: center;
          gap: 8px;
  
          svg {
            padding-top: 3px;
            transition: .3s ease;
          }
        }
      }
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

@media (max-width: 1200px) {
  .header .header_content .header_buttons { display: none; }
  .header .header_content .header_nav { display: none; }

  .header {
    .header_content {
      .header_burger {
        display: block;
      }

      .header_menu {
        display: block;
        position: fixed;
        width: 100%;
        height: 100vh;
        left: -100%;
        top: 0;
        background: #044636;
        transition: .3s ease;

        &.open {
          left: 0;
        }

        .menu_header {
          padding: 30px 24px;
          border-bottom: 1px solid #f0f0f0;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .menu_body {
          height: calc(100vh - 125px);
          padding: 24px;
          display: flex;
          flex-direction: column;

          .menu_footer {
            margin-top: auto;
            display: flex;
            align-items: center;
            gap: 8px;

            .menu_footer-item {
              display: flex;
              gap: 8px;
            }

            .lang {
              border: 1px solid hsla(0, 0%, 100%, .4);

              &.active {
                background-color: hsla(0, 0%, 100%, .102);
                border: none;
              }
            }
            
            .button_text {
              color: $color-text-primary;
            }
          }

          .nav {
            flex-direction: column;
            align-items: flex-start;
            padding: 0;
          }
        }
      }
    }
  }
}

@media (max-width: 420px) {
  .header_menu {
    .menu_body {
      .menu_footer {
        flex-wrap: wrap;

        .menu_footer-item {
          flex: 0 0 100%;
        }
      }
    }
  }
}
</style>
