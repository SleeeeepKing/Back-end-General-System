import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from "@/store/modules/app";
import user from "@/store/modules/user";
import permission from "@/store/modules/permission";
// import settings from "@/store/modules/settings";

Vue.use(Vuex)

//****************************************************************

// https://webpack.js.org/guides/dependency-management/#requirecontext
// const modulesFiles = require.context('./modules', true, /\.js$/)

// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
/*const modules = modulesFiles.keys().reduce((modules, modulePath) => {
    // set './app.js' => 'app'
    const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
    const value = modulesFiles(modulePath)
    modules[moduleName] = value.default
    return modules
}, {})*/

//*************************上面都不需要看****************************
const store = new Vuex.Store({
    modules: {
        app,
        // settings,
        user,
        permission
    },
    getters
})
export default store
