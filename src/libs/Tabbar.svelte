<script lang="ts">
  import DessertItemCard from "./DessertItemCard.svelte";
  import Tab, { Label } from "@smui/tab";
  import TabBar from "@smui/tab-bar";
  import Paper from "@smui/paper";
  import Card, {
    Content,
    PrimaryAction,
    Media,
    MediaContent,
  } from "@smui/card";
  import ItemCard from "./CoffeeItemCard.svelte";
  import CoffeeItemCard from "./CoffeeItemCard.svelte";
  import AdeItemCard from "./AdeItemCard.svelte";
  import SmoothieItemCard from "./SmoothieItemCard.svelte";
  console.log("asdasd");
  let active = "커피";
</script>

<div class="md:container md:mx-auto p-4">
  <div class="banner p-4 text-center">JungmuCafe</div>

  <div class="tab-bar">
    <TabBar
      tabs={["커피", "에이드", "스무디", "디저트"]}
      let:tab
      bind:active
      class="tab-bar"
    >
      <Tab {tab}>
        <Label
          class="text-lg font-semibold cursor-pointer p-2 hover:bg-gray-700"
        >
          {tab}
        </Label>
      </Tab>
    </TabBar>
  </div>

  <div class="text-center flex justify-around justify-items-center">
    <div class="md:container md:mx-auto p-4 flex flex-wrap gap-4">
      {#if active === "커피"}
        <Paper variant="unelevated" class="flex flex-col h-full">
          <div class="flex flex-wrap gap-4">
            <CoffeeItemCard />
          </div>
        </Paper>
      {:else if active === "에이드"}
        <Paper variant="unelevated" class="flex flex-col h-full">
          <div class="flex flex-wrap gap-4">
            <AdeItemCard />
          </div>
        </Paper>
      {:else if active === "스무디"}
        <Paper variant="unelevated" class="flex flex-col h-full">
          <div class="flex flex-wrap gap-4">
            <SmoothieItemCard />
          </div></Paper
        >
      {:else if active === "디저트"}
        <Paper variant="unelevated" class="flex flex-col h-full">
          <div class="flex flex-wrap gap-4">
            <DessertItemCard />
          </div></Paper
        >
      {/if}
    </div>
  </div>
</div>

<style>
  .banner {
    @apply bg-yellow-400 text-black fixed left-0 top-0 w-full overflow-y-hidden;
    z-index: 10;
  }

  .tab-bar {
    @apply bg-yellow-400 text-black w-full fixed left-0 top-10;
    z-index: 10;
  }
</style>
