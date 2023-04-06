<template>
  <h1>đây là component base vuejs</h1>
  <button @click="count()">Count is: </button>
  {{ data_demo }}
  <h3 :id="id_h3" :class="statusColor ? 'class1' : 'class2'">thẻ h3</h3>
  {{ objectOfAttrs }}
  <h5 v-bind="objectOfAttrs">đây là thẻ h5</h5>
  <div :id="`list-${id}`"></div>
  <div :id="`row-${id}`"></div>
  <button @click="hiddenText()">change text</button>
  <p v-if="statusText">V-if Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, sed!</p>
  <p v-show="statusText">V-show Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, sed!</p>
  <p v-html="textHtml"></p>
  <p v-text="textHtml"></p>
  <p v-if="statusText">v-if</p>
  <p v-show="statusText">v-show</p>
  {{ valueInput }}
  <p>Nhập tối đa 10 kí tự</p>
  <input type="text" v-model="valueInput">

  <h1 :id="id" :class="'2sadfs'" :style="2" :src="'https://'"></h1>
  {{ formatDate(20240504) }}
  {{ formatDate('20240504') }}
</template>
<script>
import { ref, watch } from 'vue'
// nếu statusColor  = true thì nó sẽ nhận 'class1'
// ngược lại nếu là false thì nó nhận 'class2'
export default {
    setup () {
        const valueInput = ref('')
        const id = 'name_id'
        const id_h3 = 'id_by_h3'
        const statusColor = true
        const statusText = false
        const data_demo = ref(0)
        const data_demo2 = 2
        const objectOfAttrs = {
            id: 'container',
            class: 'wrapper',
            style: 'color: red'
             }
        const textHtml = '<h1>đây là component base vuejs</h1>'
        watch(valueInput, newVal => {
            console.log('valueInput changed', newVal)
        })
        // function
        const count = () => {
            console.log(data_demo.value);
            data_demo.value = 1;
            // data_demo++;
            // statusColor = !statusColor;
        }
        const hiddenText = () => {
            // this.count()
            this.statusText = !this.statusText;
        }
        const formatDate = (date) => {
            let newDate = date.toString();
            let year = newDate.slice(0, 4);
            let month = newDate.slice(4, 6);
            let day = newDate.slice(6, 8);
            // xử lý gì đó để hiển thị ra
            return day + '/' + month + '/' + year
        }

        return {
            valueInput,
            id,
            id_h3,
            statusColor,
            statusText,
            data_demo,
            data_demo2,
            objectOfAttrs,
            textHtml,
            count, hiddenText, formatDate
        }
    },
    // data() {
    //     return {
    //         // valueInput: '',
    //         // id: 'name_id',
    //         // id_h3: 'id_by_h3',
    //         // statusColor: true,
    //         // statusText: false,
    //         // data_demo: 0,
    //         // data_demo2: 2,
    //         // objectOfAttrs: {
    //         //     id: 'container',
    //         //     class: 'wrapper',
    //         //     style: 'color: red'
    //         // },
    //         // textHtml: '<h1>đây là component base vuejs</h1>'
    //     }
    // },
    // methods: {
    //     // count() {
    //     //     console.log(this);
    //     //     this.data_demo++;
    //     //     this.statusColor = !this.statusColor;
    //     // },
    //     // hiddenText() {
    //     //     // this.count()
    //     //     this.statusText = !this.statusText;
    //     // },
    //     // formatDate(date) {
    //     //     let newDate = date.toString();
    //     //     let year = newDate.slice(0, 4);
    //     //     let month = newDate.slice(4, 6);
    //     //     let day = newDate.slice(6, 8);
    //     //     // xử lý gì đó để hiển thị ra
    //     //     return day + '/' + month + '/' + year
    //     // }
    // },
    // mounted() {
    //     setTimeout(() => {
    //         // this.textHtml = 'đã đổi text html'
    //     }, 2000);
    // },
    // watch: {
    //     // valueInput(newVal, oldVal) {
    //     //     if(newVal.length > 10) {
    //     //         console.log(12);
    //     //         // alert('không được nhập quá 10 ký tự')
    //     //         this.valueInput = this.valueInput.slice(0,10)
    //     //     }
    //     // }
    // },
}
</script>

<style>
.class1 {
    color: red;
}
.class2 {
    color: blue;
}

</style>