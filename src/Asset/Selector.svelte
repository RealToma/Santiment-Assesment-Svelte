<script>
  import { showMasterSelectorDialog } from '@/AssetsSelectorDialog'
</script>

<div id="fw-master-selector" on:click={() => showMasterSelectorDialog()}>
  <slot />
</div>

<style>
  div {
    --fill: var(--waterloo);
    --color-hover: var(--green);
    user-select: none;
  }

  .svg {
    user-select: all;
  }
</style>
