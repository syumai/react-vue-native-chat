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

import {
  NavigationActions
} from 'react-navigation'
const __react__vue__options = {
  props: ['navigation'],
  methods: {
    login() {
      const resetMainAction = NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({
            routeName: 'Main'
          }),
        ],
      });
      this.navigation.dispatch(resetMainAction);
    }
  }
}

const __react__vue__render = function render(vm) {
  return __react__vue__createElement(vm.$options.components['View'], __react__vue__mergeProps.call(this, this.props.__react__vue__nativeEvents, {
    ref: ref => {
      this.setRootRef(ref);
      this.props['__react__vue__setRef'] && this.props['__react__vue__setRef'](ref);
    },
    style: [__react__vue__bindClass.call(this, {
      staticClass: "container",
      parentClass: this.props.style
    }), __react__vue__bindStyle(undefined, undefined, undefined)]
  }), __react__vue__createElement(vm.$options.components['Text'], {
    style: [__react__vue__bindClass.call(this, {
      staticClass: "logo"
    })]
  }, "MeChat"), __react__vue__createElement(vm.$options.components['View'], {
    style: [__react__vue__bindClass.call(this, {
      staticClass: "login-form"
    })]
  }, __react__vue__createElement(vm.$options.components['View'], {
    style: [__react__vue__bindClass.call(this, {
      staticClass: "input-container email"
    })]
  }, __react__vue__createElement(vm.$options.components['TextInput'], {
    autoCapitalize: "none",
    placeholder: "メールアドレス",
    style: [__react__vue__bindClass.call(this, {
      staticClass: "input"
    })]
  })), __react__vue__createElement(vm.$options.components['View'], {
    style: [__react__vue__bindClass.call(this, {
      staticClass: "input-container password"
    })]
  }, __react__vue__createElement(vm.$options.components['TextInput'], {
    secureTextEntry: true,
    placeholder: "パスワード",
    style: [__react__vue__bindClass.call(this, {
      staticClass: "input"
    })]
  })), __react__vue__createElement(vm.$options.components['View'], {
    style: [__react__vue__bindClass.call(this, {
      staticClass: "login-button-container"
    })]
  }, __react__vue__createElement(vm.$options.components['Button'], {
    title: "ログイン",
    color: "#f60",
    onPress: vm['login'],
    style: [__react__vue__bindClass.call(this, {
      staticClass: "login-button"
    })]
  }))));
};

const __react__vue__css = {
  "container": {
    "flex": 1,
    "justifyContent": "center",
    "alignItems": "center"
  },
  "logo": {
    "color": "#fa3",
    "fontSize": 42,
    "fontWeight": "bold",
    "marginBottom": 18
  },
  "input-container": {
    "width": 300,
    "height": 40,
    "justifyContent": "center",
    "alignItems": "center",
    "borderWidth": 1,
    "borderColor": "#aaa",
    "backgroundColor": "#fff"
  },
  "email": {
    "borderBottomColor": "#ccc"
  },
  "password": {
    "borderTopWidth": 0
  },
  "input": {
    "width": 300,
    "padding": 8
  },
  "login-button-container": {
    "marginTop": 18
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