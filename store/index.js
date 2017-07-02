import vuex from 'vuex'


const store = () => new vuex.Store({
    actions: {
        setTitle({commit},mobileTitle){
            commit('SET_MOBILE_TITLE',mobileTitle)
        }
    },
    mutations: {
        SET_MOBILE_TITLE(state,action){
            state.mobileTitle = action;
        }
    },
    state: {
        mobileTitle: 'myBlog',
        mobileAsideShow: false
    }
})

export default store

