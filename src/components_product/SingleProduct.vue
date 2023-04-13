<template>
  <div class="col-lg-4 col-md-4 col-sm-6 col-6">
    <div class="single-product">
      <div class="pro-img">
        <a href="product.html">
          <img
            class="primary-img"
            :src="`src/assets/img/products/${data.img1}`"
            alt="single-product"
          />
          <img
            class="secondary-img"
            :src="`src/assets/img/products/${data.img2}`"
            alt="single-product"
          />
        </a>
        <a
          href="#"
          class="quick_view"
          data-toggle="modal"
          data-target="#myModal"
          title="Quick View"
          ><i class="lnr lnr-magnifier"></i
        ></a>
      </div>
      <div class="pro-content">
        <div class="pro-info">
          <h4>
            <a href="product.html">{{ data.name }}</a>
          </h4>
          <p>
            <span class="price">${{ data.price }}</span
            ><del class="prev-price">${{ data.prev_price }}</del>
          </p>
          <div class="label-product l_sale">
            {{ data.l_sale }}<span class="symbol-percent">%</span>
          </div>
        </div>
        <div class="pro-actions">
          <div class="actions-primary">
            <a @click="addToCart()" title="Add to Cart"> + Add To Cart</a>
          </div>
          <div class="actions-secondary">
            <a @click="onDetail()" title="Compare"
              ><i class="lnr lnr-sync"></i> <span>Sửa thông tin</span></a
            >
            <a @click="onDelete()" title="WishList"
              ><i class="lnr lnr-heart"></i> <span>Xóa sản phẩm</span></a
            >
          </div>
        </div>
      </div>
      <!-- <span class="sticker-new">new</span> -->
    </div>
    <!-- <ul>
      <li>{{ data.name }}</li>
      <li>{{ data.gioi_tinh }}</li>
      <li>{{ data.age }}</li>
      <li>{{ data.address }}</li>
      <li>{{ data.avatar }}</li>
    </ul> -->
  </div>
</template>

<script>
export default {
  props: ['data'],
  setup(props, { emit }) {
    const addToCart = () => {
      emit('dataItem', props.data.name)
    }
    const onDetail = () => {
      emit('dataItem', props.data.id)
    }
    const onDelete = () => {
      emit('dataDelete', props.data.id)
    }
    return {
      addToCart,
      onDetail,
      onDelete
    }
  }
};
</script>

<style>
</style>