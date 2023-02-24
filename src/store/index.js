import { createStore } from 'vuex'

export default createStore({
  state: {
    categories: [
      {id: 1, name: 'Սիրո Պիցցա', imageName: 'siro-pizza.webp'},
      {id: 2, name: 'Հատուկ ատաջարկներ', imageName: 'hatuk-aragark.webp'},
      {id: 3, name: 'Հռոմեական պիցցաներ', imageName: 'hromeakan-pizzas.webp'},
      {id: 4, name: 'Պիցցաներ', imageName: 'pizzas.webp'},
      {id: 5, name: 'Պիցցա Հոթ-դոգ', imageName: 'pizza-hot-dog.webp'},
      {id: 6, name: 'Բուրգերներ ', imageName: 'boorgers.webp'},
      {id: 7, name: 'Աղցաններ ', imageName: 'salads.webp'},
      {id: 8, name: 'Խորտիկներ ', imageName: 'xortikner.webp'},
      {id: 9, name: 'Սենդվիչներ և Ռոլլեր ', imageName: 'sendviches.webp'},
      {id: 10, name: 'Բոքսեր  ', imageName: 'boxes.webp'},
      {id: 11, name: 'Ըմպելիքներ  ', imageName: 'drinks.webp'},
      {id: 11, name: 'Սոուսներ  ', imageName: 'sous.webp'},
      {id: 12, name: 'Աղանդներ  ', imageName: 'axand.webp'},
    ],
    products: [
      { id: 1, name: 'Պեպպերոնիի Սիրահարներ', price: '3700', image: '2544a8ba-d0d5-9951-b2b1-d24a72c7a221_2.webp'},
      { id: 2, name: 'Հաթ-Սուպրիմ ', price: '3800', image: '2544a8ba-d0d5-9951-b2b1-d24a72c7a221_2.webp'},
      { id: 3, name: 'Կծու մսային  ', price: '3600', image: '2544a8ba-d0d5-9951-b2b1-d24a72c7a221_2.webp'},
      { id: 4, name: ' Մսի Սիրահարներ  ', price: '3800', image: '2544a8ba-d0d5-9951-b2b1-d24a72c7a221_2.webp'},
    ],
    basket: [],
    searchProd: []
  },
  getters: {
    getCategories(state){
      return state.categories
    },
    getProducts(state){
      return state.products
    },
    getBasket(state){
      return state.basket
    },
    getSearched(state) {
      return state.searchProd
    }
  },
  mutations: {
    setCategories(state, category){
      state.categories = category
    },
    setBasket(state, product){
      let productExist = false
      if (state.basket.length){
        state.basket.map((item)=>{
          if (item.id === product.id){
            productExist = true
            item.quantity++
          }
        })
        if (!productExist){
          state.basket.push(product)
          product.quantity = 1
        }
      }else{
        state.basket.push(product)
        product.quantity = 1
      }
    },
    setMinus(state, index){
      if (state.basket[index].quantity > 1){
        state.basket[index].quantity--
      }
    },
    setPlus(state, index){
      state.basket[index].quantity++
    },
    deleteProductInBasket(state, index){
      state.basket.splice(index, 1)
    },
    removeProducts(state){
      state.basket = []
    },
    setSearched(state, id){
      state.searchProd.push(id)
    },
  },
  actions: {
    allCategories({commit}, categories){
      commit('setCategories', categories)
    },
    addBasket({commit}, product){
      commit('setBasket', product)
    },
    minusProduct({commit}, index){
      commit('setMinus', index)
    },
    plusProduct({commit}, index){
      commit('setPlus', index)
    },
    deleteProductByIndex({commit},index){
      commit('deleteProductInBasket', index)
    },
    removeAllBasket({commit}){
      commit('removeProducts')
    },
    findSearched({commit}, id){
      commit('setSearched', id)
    }
  },
  modules: {
  }
})
