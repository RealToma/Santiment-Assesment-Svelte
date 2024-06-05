<script lang="ts">
  import Checkbox from 'webkit/ui/Checkbox.svelte'
  import { selectedCoins } from '@/stores/coins'
  import { get } from 'svelte/store'
  export let coin
  let checked = get(selectedCoins).findIndex((el: any) => el.slug === coin.slug) !== -1

  const click = () => {
    checked = !checked
    const index = get(selectedCoins).findIndex((el: any) => el.slug === coin.slug)
    if (index === -1) {
      selectedCoins.set([...get(selectedCoins), coin] as any)
    } else {
      const newCoins = get(selectedCoins)
      selectedCoins.set(newCoins.filter((el: any) => el.slug !== coin.slug))
    }
  }
</script>

<div class="row v-center coin_item" on:click={click}>
  <Checkbox isActive={checked} />
  <img src={coin.logoUrl} class="coin_images coin" alt="" />
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
