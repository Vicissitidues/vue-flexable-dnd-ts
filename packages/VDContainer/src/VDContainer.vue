<template>
    <div class="vdc-out-container" :style="`width:${props.width}px`">
        <TransitionGroup name="fade" tag="div" class="vdc-trans-group-container">
            <div class="vdc-item-container" draggable="true" v-for="item, index in items" :key="item"
                @dragstart="drag($event, index)"  @dragenter="enter($event, index)"
               @dragleave="leave($event, index)"
                @dragover="over($event, index)" @drop="drop($event, index)">
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
 * dynamic:   dynamic mode, can have elements dynamically laid out as you drag
*/
// eslint-disable-next-line no-undef, no-unused-vars
const props = defineProps<{
    width: number,
    height: number,
    data: Array<any>,
    animation: boolean,
    row: number,
    type: string,
}>()

const state: istate = reactive({
  ...props,
  preTarget: 0,
  target: 0,
  mode: true,
  addable: false,
  delable: false,
  velement: true
})
const getItems = () => props.data
const items = ref(getItems())

// eslint-disable-next-line no-undef
const emit = defineEmits([
  'getData'
])
// while target is begin dragged
const drag = (event: DragEvent, index: number) => {
  state.preTarget = index
  state.target = index
  console.log('hand', state.target)
}
const leave = (event: DragEvent, index: number) => {
  console.log('leaved', state.preTarget, state.target, index)
  if (state.preTarget === index && state.delable) {
    state.delable = false
    state.velement = true
    items.value.splice(index, 1)
    event.preventDefault()
  }
}
const enter = (event: DragEvent, index: number) => {
  console.log('entered')
  if (index !== state.preTarget) {
  }
}
// while target is on the  drop point
const over = (event: DragEvent, index: number) => {
  if (state.mode) {
    console.log('tar:', state.preTarget, state.target, index)
    if (state.velement) {
      if (index !== state.target) {
        state.preTarget = index
        items.value.splice(index, 0, {})
        state.velement = false
        state.delable = true
        event.preventDefault()
      }
    }
    event.preventDefault()
  } else {
    event.preventDefault()
  }
}
// while drop the object into target
const drop = (event: DragEvent, index: number) => {
  if (props.type === eType.SORT) {
    items.value.splice(index, 0, items.value.splice(state.target, 1)[0])
  } else if (props.type === eType.SWITCH) {
    items.value[index] = items.value.splice(state.target, 1, items.value[index])[0]
  } else {
    window.console.error("wrong type name,check <VDContainer></VDContainer>element's [type] modal")
  }
  emit('getData', items.value)
}
</script>

<style>
.vdc-trans-group-container {
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
