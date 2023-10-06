<script lang="ts">
  import Card, { Content, PrimaryAction, Actions, ActionButtons, ActionIcons } from '@smui/card';
  import Button, { Label } from '@smui/button';
  import IconButton, { Icon } from '@smui/icon-button';

  let clicked = 0;
</script>

<div class="Item_card bg-zinc-700">
  <slot>
    <div class="card-container">
      <Card>
        <Content>A card with action buttons.</Content>
        <Actions>
          <Button on:click={() => clicked++}>
            <Label>Action</Label>
            <img src="src\images\Coffee(hot).jpg" alt="card_image" class="h-10 w-10" />
          </Button>
          <Button on:click={() => clicked++}>
            <Label>Another</Label>
          </Button>
        </Actions>
      </Card>
    </div>

    <p style="font-weight: bold; font-size: 22px">상품명</p>
    <p>가격</p>
  </slot>
</div>
