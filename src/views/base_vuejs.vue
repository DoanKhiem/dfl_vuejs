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
  {{ valueInput }}
  <p>Nhập tối đa 10 kí tự</p>
  <input type="text" v-model="valueInput">
</template>
<script>
// nếu statusColor  = true thì nó sẽ nhận 'class1'
// ngược lại nếu là false thì nó nhận 'class2'
export default {
    data() {
        return {
            valueInput: '',
            id: 'name_id',
            id_h3: 'id_by_h3',
            statusColor: true,
            statusText: true,
            data_demo: 0,
            data_demo2: 2,
            objectOfAttrs: {
                id: 'container',
                class: 'wrapper',
                style: 'color: red'
            },
            textHtml: 'đây là text hmtl'
        }
    },
    methods: {
        count() {
            console.log(this);
            this.data_demo++;
            this.statusColor = !this.statusColor;
        },
        hiddenText() {
            // this.count()
            this.statusText = !this.statusText;
        }
    },
    mounted() {
        setTimeout(() => {
            this.textHtml = 'đã đổi text html'
        }, 2000);
    },
    watch: {
        valueInput(newVal, oldVal) {
            if(newVal.length > 10) {
                console.log(12);
                // alert('không được nhập quá 10 ký tự')
                this.valueInput = this.valueInput.slice(0,10)
            }
        }
    },
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