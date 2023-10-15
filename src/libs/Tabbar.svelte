<script lang="ts">
    import Tab, { Icon, Label } from '@smui/tab';
  	import TabBar from '@smui/tab-bar';
    type TabEntry = {
     k: number;
     icon: string;
     label: string;
    };
    const key = (tab: TabEntry) => tab.k;
    let tabs: TabEntry[] = [
   	{
		 k: 1,
	 	icon: '',
	 	label: '커피',
   	},
   	{
		 k: 2,
		 icon: '',
		 label: '에이드',
   	},
   	{
	 	k: 3,
	 	icon: '',
	 	label: '스무디',
   	},
   	{
		 k: 4,
		 icon: '',
		 label: '디저트',
 	  },
 	];
 	let active = tabs[2];
</script>


<div class="fixed left-0 top-0 h-full w-full overflow-y-hidden flex flex-col items-start p-4 ">
	<TabBar {tabs} let:tab {key} bind:active class="bg-blue-500">
		<Tab
			{tab}
			stacked={true}
			indicatorSpanOnlyContent={true}
			tabIndicator$transition="fade"
		>
			<Label class="text-xl font-bold text-black">{tab.label}</Label>
		</Tab>
	</TabBar>
</div>