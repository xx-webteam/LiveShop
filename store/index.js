/**
 * 全局状态管理
 */

export const state = () => {
    user: null
}

export const mutations = {
    increment(state, v) {
        state.user = v
    }
}