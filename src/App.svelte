<script lang="ts">
  import Search from "./icons/search.svelte";
  import { COINS } from "./mock/coins";
  import Modal from "./components/EditAssets.svelte";
  import { setContext } from "svelte";
  export let open: boolean = false;
  export let coins = COINS.slice(0, 20);
  const handleOpenModal = () => {
    open = true;
  };
  const setCoins = (newCoins:any) => {
    coins = newCoins;
  };

  setContext("open", { open });

  
</script>

<div class="w-full min-h-screen flex justify-center items-center">
  <div
    class="w-[512px] pt-[62px] pb-[67px] rounded-[8px] px-[64px] border-[#E7EAF3] border"
  >
    <div class="border border-[#E7EAF3] p-4 rounded-[8px]">
      <div
        class="flex items-center border border-[#E7EAF3] py-[6px] px-[14px] rounded-[4px] gap-x-2.5"
      >
        <Search />
        <input
          placeholder="Search for asset"
          class="outline-none font-[400] text-[14px] text-[#9FAAC4]"
        />
      </div>
      <div class="mt-[16px] pl-[6px] max-h-[278px] overflow-y-auto">
        {#each coins as coin}
          <div class="flex py-[6px] items-center gap-x-[6px]">
            <img
              class="w-4 h-4 rounded-full"
              src={coin.logoUrl}
              alt={coin.name}
            />
            <div class="flex gap-x-[6px]">
              <p class="text-[#2F354D] font-[400] text-[14px] leading-[20px]">
                {coin.name}
              </p>
              <p class="text-[#9FAAC4] font-[400] text-[14px] leading-[20px]">
                {coin.ticker}
              </p>
            </div>
          </div>
        {/each}
      </div>
      <button
        on:click={handleOpenModal}
        class="py-[6px] w-full bg-[#14C393] text-white text-sm cursor-pointer leading-5 text-center rounded-[6px] mt-[36px] font-[400]"
      >
        Edit assets
      </button>
    </div>
  </div>
  {#if open}
    <Modal bind:open />
  {/if}
</div>
