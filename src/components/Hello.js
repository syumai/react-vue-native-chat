import __react__vue__Vue, {
  observer as __react__vue__observer
} from 'react-vue'
import __react__vue__ReactNative from 'react-native'
import __react__vue__PropType from 'prop-types'
import {
  buildNativeComponent as __react__vue__buildNativeComponent
} from 'react-vue-helper'
import {
  bindNativeClass as __react__vue__bindClass,
  bindNativeStyle as __react__vue__bindStyle,
  mergeProps as __react__vue__mergeProps
} from 'react-vue-helper'
import {
  createElement as __react__vue__createElement,
  Component as __react__vue__Component
} from 'react'


const __react__vue__options = {};

const __react__vue__render = function render(vm) {
  return __react__vue__createElement(vm.$options.components['View'], __react__vue__mergeProps.call(this, this.props.__react__vue__nativeEvents, {
    ref: ref => {
      this.setRootRef(ref);
      this.props['__react__vue__setRef'] && this.props['__react__vue__setRef'](ref);
    },
    style: [__react__vue__bindClass.call(this, {
      staticClass: "row",
      parentClass: this.props.style
    }), __react__vue__bindStyle(undefined, undefined, undefined)]
  }), __react__vue__createElement(vm.$options.components['View'], {
    style: [__react__vue__bindClass.call(this, {
      staticClass: "column"
    })]
  }, __react__vue__createElement(vm.$options.components['Text'], {
    style: [__react__vue__bindClass.call(this, {
      staticClass: "left"
    })]
  }, "Hello, world!")), __react__vue__createElement(vm.$options.components['View'], {
    style: [__react__vue__bindClass.call(this, {
      staticClass: "column"
    })]
  }, __react__vue__createElement(vm.$options.components['Text'], {
    style: [__react__vue__bindClass.call(this, {
      staticClass: "right"
    })]
  }, "Hello, world!")));
};

const __react__vue__css = {
  "row": {
    "flex": 1,
    "flexDirection": "row"
  },
  "column": {
    "flex": 1,
    "justifyContent": "center",
    "alignItems": "center"
  },
  "left": {
    "color": "#ff0000",
    "fontSize": 12
  },
  "right": {
    "color": "#0000ff",
    "fontSize": 16
  }
}

const __react__vue__ComponentBuilded = __react__vue__buildNativeComponent(__react__vue__render, __react__vue__options, {
  Component: __react__vue__Component,
  PropTypes: __react__vue__PropType,
  Vue: __react__vue__Vue,
  ReactNative: __react__vue__ReactNative,
  css: __react__vue__css
})

export default __react__vue__observer(__react__vue__ComponentBuilded)