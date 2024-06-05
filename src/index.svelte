<script lang="ts">
  import MasterAsset from '@/Asset/index.svelte'

  let className = ''
  export { className as class }
</script>

<slot />

<main class="column {className}">
  <MasterAsset />
</main>
