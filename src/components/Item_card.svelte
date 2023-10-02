<div class="Item_card">
  <slot>
    <img src="src\images\Coffee(hot).jpg" alt="card_image" class="Item">
    <p style="font-weight: bold; font-size: 22px" >상품명</p>
    <p>가격</p>
  </slot>
</div>

<style>
  .Item_card{
    background: #fff;
    padding: 20px;
    border-radius: 6px;
    box-shadow: 0px 2px 4px rgba(0,0,0,0.3);
    width: 200px;
    height: 300px;
    
  }
  .Item{
    width: 180px;
    margin: 10px;
  }
  .Item_card:hover {
    transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
    box-shadow: 0px 0px 100px 100px rgba(255, 255, 0, 0.4) inset;
}
  .Item_card:active{
    transform: scale(0.98);
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.5)
  }
  p{
    text-align: center;
    margin-top: 5px;
    font-weight: bolder;
    font-size: 18px;
  }
</style>