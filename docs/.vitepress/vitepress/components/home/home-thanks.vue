<script lang="ts" setup>
import { thanks } from '../../../config/thanks'
import ThanksList from './thanks-list.vue'

</script>

<template>
  <div class="thanks-container" m="auto">
    <ThanksList :data="thanks"></ThanksList>
  </div>
</template>

<style lang="scss">
.home-page {
  .thanks-container {
    margin-top: 72px;
    .join {
      text-align: center;
      margin: 0 0 52px 0;
    }
  }

  .thanks-list {
    --min-width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(var(--min-width), 320px));
    justify-content: center;

    &.platinum {
      --min-width: 220px;
    }
    &.gold {
      --min-width: 140px;

      @media (max-width: 720px) {
        --min-width: 160px;
      }
    }
  }

  .thanks {
    margin: 0 20px 10px;
    height: calc(var(--min-width) / 2);
    align-items: center;
    // for dark mode
    // background-color: var(--bg-color-soft);

    .name {
      font-weight: bold;
      color: var(--text-color);
      font-size: 14px;
    }

    img {
      margin-right: 16px;
    }

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    p {
      margin: 0;
      line-height: 1.8;
      color: var(--text-color-light);
      font-size: 12px;
    }
  }
}
</style>
