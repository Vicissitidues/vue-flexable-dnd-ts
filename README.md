# <div style="display:flex;align-items:center"><img src="https://raw.githubusercontent.com/Vicissitidues/vue-flexable-dnd-ts/examp/public/icon.png" alt="logo" style="zoom: 50%" />vue-flexable-dnd</div> 

_**A simple and powerful drag&drop component for Vue developers**_ 

> Thank you for install vue-flexable-dnd component ———  A drag and drop component developed for vue, which can sovle the problem that other dnd components can't do，like can use flex layout and sort mode

<!-- > 一个为vue开发的拖拽组件，解决了其他dnd组件无法进行弹性布局与排序模式的问题 -->
![example](https://github.com/Vicissitidues/vue-flexable-dnd-ts/blob/animation/gif/screenRecord.gif?raw=true)

## 💡 Highlights
- Ability to use flex layout
- smooth animation
- When there are many elements, excellent performance can be maintained
- There are two drag&drop modes: Replace and Sort
- Ability to customize internal styles and layout
- Flexible function slot
- More features will be adapted in the future
  
## 👀  preview
> [ 🔍 see example website ](https://vicissitidues.github.io/vue-flexable-dnd-ts/dist/index.html)

## 💻 Gatting started
#### component install 
```
npm install vue-flexable-dnd
```
#### 🏭 import into your project
```js
VUE3: [src/main.js]
import { createApp } from 'vue'
import App from './App.vue'
import VDContainer from 'vue-flexable-dnd'

createApp(App).use(VDContainer).mount('#app')
// after that, you can use <VDContainer> anywhere in proejct
```
#### 📃 import into your page（Not supported temporarily）
```js
import VDComponent from 'vue-flexable-dnd';

export default{
    components:{
        VDComponent
    }
}
```
#### 🧩 apply to your project
_HTML_

```  html
···
<VDContainer
    :width=350          //「Number」 outer container's width
    :animation=true    //「Boolean」 show animation or not while change the position of the target
    :data=data          //「Array【object】」 original data
    type="sort"         //「string」 sort | switch, 「sort」default, typeof sort mode
    @getData=funcName   //「function」 Callback function，Callback function to receive   array after modified
>
    <template v-slot:VDC="{data, index}">
        <div>
            <!-- edit your own components here -->
            {{data.objectParameter1}}
            {{data.objectParamerter2}}
        </div>
    </template>
</VDContainer>
···
```

JS
```js
// options style[选项式]:
export default {
    data() {
        return {
            data: [
                {
                    objectParameter1: 'anyThing',
                    objectParamerter2: 'anyThing2'
                },{
                    objectParameter1: 'anyThing3',
                    objectParamerter2: 'anyThing4'
                },

            ]
        }
    }
}
// Composition style[组合式]:
<script setup>
    const data = reactive([
                {
                    objectParameter1: 'anyThing',
                    objectParamerter2: 'anyThing2'
                },{
                    objectParameter1: 'anyThing3',
                    objectParamerter2: 'anyThing4'
                },

            ])
</script>
```
_if that doesnt work, please refer to the contents inside ```vue-flexable-dnd/examples/App.vue & vue-flexable-dnd/examples/main.js```_

_**Any 🤔️ issue or 👷 job for me：**_
> contact email: weijia618@outlook.com

[🙋‍♀️🙋🏿‍♂️🙋🏼send issue And suggestions(Global) ](https://github.com/Vicissitidues/vue-flexable-dnd-ts/issues/new)

[ &emsp;&emsp;&emsp;&nbsp; send issue And suggestions(CN) ](https://gitee.com/vicissitidues/vue-flexable-dnd/issues/new)

if yor got any job to offer contain these frameworks below:
- Vue 
- React
- Flutter
- React-native
- Node.js full stack development.
- iOS or Android software development

telecommute：✅ 

part-time：✅

full-time job:  🇨🇳 chengdu 🐼

**contact me by email now ^_^**

___

## Versions
#### V0.0.1
- basic function, original versin 
#### v0.1.0
- fix some issues 
#### v0.1.3
- improve user experience： using component without import css;
- update readme
#### v0.1.4
- add TypeScript support
- add prettier restriction
#### v0.2.0
- now the component is animated
- add several config to package.json
- update readme file