<script lang="ts">
  import Checkbox from 'webkit/ui/Checkbox.svelte'
  let checked = false
  export let coin
</script>

<div class="row v-center coin_item" on:click={() => (checked = !checked)}>
  <Checkbox isActive={checked} />
  <!-- svelte-ignore a11y-missing-attribute -->
  <img src={coin.logoUrl} class="coin_images coin" />
  <p class="body-3 c-black">
    {coin.name}
  </p>
  <p>{coin.ticker}</p>
</div>

<style>
  .coin_images {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 10px;
  }
  .coin {
    width: 16px;
    height: 16px;
  }

  .coin_item {
    column-gap: 8px;
    padding: 6px 0;
    cursor: pointer;
  }
</style>
