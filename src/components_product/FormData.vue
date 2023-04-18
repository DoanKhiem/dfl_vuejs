<template>
  <div class="contact-area ptb-100 ptb-sm-60">
    <div class="container">
      <h3 class="mb-20">Thêm mới sản phẩm</h3>
      <p class="text-capitalize mb-20">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </p>
      <form id="contact-form" class="contact-form">
        <div class="address-wrapper row">
          <div class="col-md-12">
            {{ formData }}
            <div class="address-fname">
              <input
                class="form-control"
                type="text"
                v-model="formData.name"
                name="name"
                placeholder="Nhập tên"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="address-email">
              <input
                class="form-control"
                type="text"
                v-model="formData.img1"
                name="img1"
                placeholder="img1"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="address-web">
              <input
                class="form-control"
                type="text"
                v-model="formData.img2"
                name="img2"
                placeholder="img2"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="address-email">
              <input
                class="form-control"
                type="number"
                min="0"
                v-model="formData.price"
                name="price"
                placeholder="price"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="address-web">
              <input
                class="form-control"
                type="number"
                min="0"
                v-model="formData.prev_price"
                name="prev_price"
                placeholder="prev_price"
              />
            </div>
          </div>
          <div class="col-md-12">
            <div class="address-subject">
              <input
                class="form-control"
                type="number"
                min="0"
                v-model="formData.l_sale"
                max="100"
                name="l_sale"
                placeholder="l_sale"
              />
            </div>
          </div>
        </div>
        <p class="form-message"></p>
        <div class="footer-content mail-content clearfix">
          <div class="send-email float-md-right">
            <div @click="onSubmit" class="return-customer-btn">
              {{ statusFormAdd ? "thêm mới" : "sửa data" }}
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
  {{ intalFormData }}
</template>

<script>
import axios from "axios";
import { ref, watch } from "vue";
import {intalFormData} from './index.js'
export default {
  props: {
    dataCallProduct: {
      type: Object,
      required: true,
    },
  },
  setup(props, { emit }) {
    const formData = ref({ ...intalFormData });
    const statusFormAdd = ref(true)
    watch(() => props.dataCallProduct, (newVal) => {
        formData.value = newVal
        statusFormAdd.value = false
    });
    const onSubmit = () => {
      if (statusFormAdd.value) {
        // call api thêm mới
        axios
          .post("https://6419ba9ef398d7d95d47d12c.mockapi.io/demo/products", formData.value)
          .then(function (response) {
            Object.assign(formData.value, intalFormData)

            alert("Thêm mới thành công");
            emit('onDone', response)
          })
          .catch(function (error) {
            console.log(error);
          });
      } else {
        // call api sửa
        let id = formData.value.id
        let dataUpdate = formData.value
        delete (dataUpdate.id)
        axios
          .put(
            "https://6419ba9ef398d7d95d47d12c.mockapi.io/demo/products/" +
            id, dataUpdate
          )
          .then(function (response) {
            alert("Sửa thành công");
            Object.assign(formData.value, intalFormData)
            statusFormAdd.value = true;
            emit('onDone', response)
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    };
    return {
      onSubmit,
      formData,
      statusFormAdd,
      intalFormData
    };
  },
};
</script>

<style></style>