<template>
    <div id="v-model-select" class="demo">
  <select v-model="selected">
    <option disabled value="">Выберите размер</option>
    <option>XS</option>
    <option>S</option>
    <option>M</option>
    <option>L</option>
    <option>XL</option>
    <option>XLL</option>
  </select>
</div>
</template>

<script>
    export default {
        data(){
            return{
                sizes:[
                    'XS', 'S', 'M','L','XL','XXL'
                ],
                selected: ''
            }
        },
        
    }
</script>

<style lang="scss" scoped>

select{
    appearance: none;
    background-image: url("@/assets/img/down.svg");
    background-repeat: no-repeat;
    background-position: right center;
    text-indent: 1px;
    text-overflow: '';

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 16px;
    gap: 8px;

    width: 204px;
    height: 48px;
    border: 1px solid #EAECF0;
    border-radius: 8px;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #354153;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08);
}

ul{
    width: 320px;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    padding: 6px;
    background: #FFFFFF;
    gap: 8px;
}

p{
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #354153;
}

</style>