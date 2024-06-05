<script lang="ts">
  import { COINS } from '@/Mock/coins'

  import Dialog from 'webkit/ui/Dialog'
  import CoinItem from './CoinItem.svelte'
  import Close from '@/Icons/close.svelte'

  let closeDialog
  let searchTerm = ''
  let filteredCoins = COINS

  const search = () => {
    filteredCoins = filteredCoins.filter((el) =>
      el.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()),
    )
    if (!searchTerm) {
      filteredCoins = COINS
    }
  }
</script>

<Dialog {...$$props} noTitle class="$style.dialog " bind:closeDialog>
  <div class="row justify v-center modal_header">
    <h2 class="body-2 c-black">Edit assets</h2>
    <button on:click={() => closeDialog()}>
      <Close />
    </button>
  </div>
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
      <input bind:value={searchTerm} on:input={search} type="text" placeholder="Search for asset" />
    </div>
  </div>
  <div class="coins_content">
    <div class="column coin_wrapper">
      {#each filteredCoins as coin}
        <CoinItem {coin} />
      {/each}
    </div>
  </div>
  <div class="button_wrapper">
    <button class="fluid row h-center btn btn-1 edit_btn">Apply changes</button>
    <button class="fluid row h-center btn btn-1 edit_btn" on:click={() => closeDialog()}
      >Cancel</button
    >
  </div>
</Dialog>

<style lang="scss">
  .dialog {
    width: 500px;
    max-height: 480px !important;
    color: var(--waterloo);
    border-radius: 10px !important;
  }

  .search {
    fill: var(--waterloo);
    &:focus-within {
      fill: var(--green);
    }
  }

  .coin_wrapper {
    row-gap: 4px;
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

  .main_modal {
    padding: 16px;
  }
  .coins_content {
    display: flex;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    padding: 0 22px;
  }

  .button_wrapper {
    padding: 16px;
    padding-top: 0px;
    display: flex;
    column-gap: 12px;
    margin-top: 36px;
  }

  .modal_header {
    padding: 14px 24px;
    border-bottom: 1px solid #e7eaf3;
  }

  .edit_btn {
    width: auto;
  }

  .button_wrapper button:nth-child(2) {
    background-color: white;
    border: 1px solid #e7eaf3;
    color: var(--waterloo);
    &:hover {
      border: 1px solid var(--green);
      color: var(--green);
    }
  }
</style>
