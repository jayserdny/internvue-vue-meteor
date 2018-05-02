export default {
    namespaced: true,
  
    supply: {
      use: ['questions'],
      inject: ({ Questions }) => ({
        getters: {
          'all-questions': () => Questions.items,
        },
      }),
    },
  
    getters: {
      'count': (state, getters) => getters['all-questions'].length,
    },
  }
  