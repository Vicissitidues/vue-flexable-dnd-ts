<template>
    <div class="vdc-out-container" :style="`width:${props.width}px`">
        <TransitionGroup name="fade" tag="div" class="vdc-trans-group-container" >
            <div class="vdc-item-container" draggable="true" v-for="item, index in items" :key="item"
                @dragstart="drag($event, index)" @dragover="over" @drop="drop($event, index)">
                <slot name="VDC" :data="item" :index="index"></slot>
            </div>
        </TransitionGroup>
    </div>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue'
import { istate, eType } from './VDContainer'
/**
 * @description a simple It is used to implement drag and drop
 * functions and provide rich customized content
 * @author Electra_fe
 * -----------------------------------------------------------
 * width:     outer container's width;
 * height:    outer container's height;
 * data:      original array for traversal, Must use array;
 * animation: Boolean;will show animation or not during dnd runtime;
 * type:      [sort|switch] function type of dnd component
 *            sort: default; after dropped,object will insert into target and all elements will sort;
 *            switch: Optional, switch object and target,other elements will stand still;
*/
// eslint-disable-next-line no-undef, no-unused-vars
const props = defineProps<{
    width: number,
    height: string,
    data: [],
    animation: boolean,
    row: number,
    type: string,
}>()

const state: istate = reactive({
  ...props,
  target: 0
})
const getItems = () => props.data
const items = ref(getItems())

// eslint-disable-next-line no-undef
const emit = defineEmits([
  'getData'
])
// while target is begin dragged
const drag = (event: DragEvent, index: number) => {
  state.target = index
}

// while target is on the  drop point
const over = (event: DragEvent) => {
  event.preventDefault()
}
// while drop the object into target
const drop = (event: DragEvent, index: number) => {
  if (props.type === eType.SORT) {
    items.value.splice(index, 0, items.value.splice(state.target, 1)[0])
  } else if (props.type === eType.SWITCH) {
    items.value[index] = items.value.splice(state.target, 1, items.value[index])[0]
  } else {
    console.error("wrong type name,check <VDContainer></VDContainer>element's [type] modal")
  }
  emit('getData', items.value)
}
</script>

<style>
.vdc-trans-group-container{
   display: flex;
   flex-wrap: inherit;
   -ms-flex-wrap: inherit;
}
.vdc-out-container {
    display: flex;
    flex-wrap: wrap;
    -ms-flex-wrap: wrap;
}

.vdc-item-container:hover {
    box-shadow: 0px 2px 2px 2px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
}

.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

/* 2. 声明进入和离开的状态 */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translate(30px, 0);
}

/* 3. 确保离开的项目被移除出了布局流
      以便正确地计算移动时的动画效果。 */
.fade-leave-active {
  position: absolute;
}
</style>
