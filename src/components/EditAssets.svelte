<script lang="ts">
  import Close from "../icons/close.svelte";
  import Search from "../icons/search.svelte";
  import { COINS } from "../mock/coins";
  export let open;
  let search = "";

  const onClose = () => {
    open = false;
  };

  const getFilteredCountries = (_:any, stringToMatch:string) => {
    if (stringToMatch) {
      return COINS.filter((coin:any) => {
        return (
          coin.name.toLowerCase()?.includes(stringToMatch.toLowerCase()) ||
          coin?.code?.includes(stringToMatch.toUpperCase())
        );
      });
    } else {
      return COINS;
    }
  };
  console.log(search);
</script>

<div
  on:click={onClose}
  class="fixed min-h-screen w-full flex justify-center items-center bg-black/30 backdrop-blur-lg"
></div>
<div
  class=" absolute translate-y-[-50%] w-[511px] border border-[#E7EAF3] top-[50%] border-b border-b-[#E7EAF3] rounded-[8px] bg-white"
>
  <div
    class="px-6 flex justify-between items-center border-b border-b-[#E7EAF3] py-[14px]"
  >
    <p class="text-base font-normal leading-6 text-left text-[#2F354D]">
      Edit assets
    </p>
    <button
      on:click={onClose}
      class=" cursor-pointer text-[#7A859E] hover:text-black"
    >
      <Close />
    </button>
  </div>
  <div class="pl-[22px] mt-[13px] pr-[16px]">
    <div
      class="flex items-center border border-[#E7EAF3] py-[6px] px-[14px] rounded-[4px] gap-x-2.5"
    >
      <Search />
      <input
        on:input={(e) => (search = e?.target?.value)}
        placeholder="Search for asset"
        class="outline-none font-[400] text-[14px] text-[#9FAAC4]"
      />
    </div>
  </div>
  <div class="pl-[22px] pr-[16px]">
    <div class="mt-[16px] pl-[6px] max-h-[278px] overflow-y-auto">
      {#each getFilteredCountries(COINS, search) as coin}
        <label class="flex py-[6px] items-center gap-x-[12px]">
          <div class="flex items-center">
            <input
              id="teal-checkbox"
              type="checkbox"
              value=""
              class="w-4 h-4 text-[#18c393] bg-white border-gray-300 rounded focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
          <div class="flex items-center gap-x-[6px]">
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
        </label>
      {/each}
    </div>
  </div>
  <div class="p-4 flex gap-x-3">
    <button
      class="py-[6px] px-[20px] bg-[#14C393] rounded-[6px] text-white text-sm font-normal leading-5 text-center"
      >Apply changes</button
    >
    <button
      on:click={onClose}
      class="py-[6px] px-[28px] text-sm font-normal leading-5 text-center text-[#2F354D] cursor-pointer rounded-[6px] border border-[#E7EAF3]"
      >Cancel</button
    >
  </div>
</div>
