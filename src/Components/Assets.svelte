<script>
  import Selector from '@/Asset/Selector.svelte'
  import { coins, searchTerm } from '@/stores/coins'
</script>

<div class="row main_screen hv-center">
  <div class="main_content">
    <div class="main_modal">
      <div class="search_wrapper">
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0.999929 5.05207C0.999929 2.81413 2.81413 0.999929 5.05207 0.999929C7.29 0.999929 9.1042 2.81413 9.1042 5.05207C9.1042 7.29 7.29 9.1042 5.05207 9.1042C2.81413 9.1042 0.999929 7.29 0.999929 5.05207ZM5.05207 0C2.26189 0 0 2.26189 0 5.05207C0 7.84225 2.26189 10.1041 5.05207 10.1041C6.2671 10.1041 7.38195 9.67521 8.25346 8.96052L11.1465 11.8536C11.3418 12.0488 11.6583 12.0488 11.8536 11.8536C12.0488 11.6583 12.0488 11.3418 11.8536 11.1465L8.96052 8.25346C9.67521 7.38195 10.1041 6.2671 10.1041 5.05207C10.1041 2.26189 7.84225 0 5.05207 0Z"
            fill="#9FAAC4"
          />
        </svg>
        <input bind:value={$searchTerm} type="text" placeholder="Search for asset" />
      </div>
    </div>
    <div class="coins_content">
      <div class="column">
        {#each $coins as coin}
          <div class="row v-center coint_item">
            <img src={coin.logoUrl} class="coint_images coin" alt="" />
            <p class="body-3 c-black">
              {coin.name}
            </p>
            <p>{coin.ticker}</p>
          </div>
        {/each}
      </div>
    </div>
    <Selector>
      <button class="fluid row h-center btn btn-1 edit_btn"> Edit assets </button>
    </Selector>
  </div>
</div>

<style lang="scss">
  .main_screen {
    width: 100%;
    height: 100vh;
  }

  .main_content {
    width: 380px;
    min-height: 423px;
    padding: 16px;
    border-radius: 8px;
    border: 1px solid #e7eaf3;
  }

  .search {
    fill: var(--waterloo);
    &:focus-within {
      fill: var(--green);
    }
  }

  .coint_images {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 10px;
  }

  .icon {
    position: absolute;
    top: 20px;
    left: 20px;
    pointer-events: none;
  }

  .search_wrapper {
    width: 100%;
    border: 1px solid #e7eaf3;
    border-radius: 4px;
    padding: 6px 0;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 14px;
    column-gap: 10px;
    input {
      width: 100%;
      height: 100%;
    }
  }

  .edit_btn {
    margin-top: 36px;
  }

  .coin {
    width: 16px;
    height: 16px;
  }

  .main_modal {
    padding: 16px;
  }
  .coins_content {
    display: flex;
    width: 100%;
    max-height: 278px;
    overflow-y: auto;
    padding: 0 22px;
  }

  .button_wrapper {
    padding: 16px;
    padding-top: 0px;
  }

  .coint_item {
    column-gap: 8px;
    padding: 6px 0;
  }
</style>
