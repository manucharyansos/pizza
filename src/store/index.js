import { createStore } from 'vuex'

export default createStore({
  state: {
    categories: [
      {id: 1, name:
        {am: 'Սիրո Պիցցա', en: 'Love Pizza', ru: 'Любовная пицца'},
        imageName: 'siro-pizza.webp'},
      {id: 2, name:
            {am: 'Հատուկ ատաջարկներ', en: 'Special offers', ru: 'Специальные предложения'},
        imageName: 'hatuk-aragark.webp'},
      {id: 3, name:
            {am: 'Հռոմեական պիցցաներ', en: 'Roman pizzas', ru: 'Римские пиццы',},
        imageName: 'hromeakan-pizzas.webp'},
      {id: 4, name:
            { am: 'Պիցցաներ', en: 'Pizzas', ru: 'Пиццы'},
        imageName: 'pizzas.webp'},
      {id: 5, name:
            {am: 'Պիցցա Հոթ-դոգ', en: 'Hot dog pizza', ru: 'Хот-дог пицца'},
        imageName: 'pizza-hot-dog.webp'},
      {id: 6, name:
            {am: 'Բուրգերներ', en: 'Burgers', ru: 'Бургеры'},
        imageName: 'boorgers.webp'},
      {id: 7, name:
            {am: 'Աղցաններ', en: 'Salads', ru: 'Салаты'},
        imageName: 'salads.webp'},
      {id: 8, name:
            {am: 'Խորտիկներ', en: 'Snacks', ru: 'Закуски'},
        imageName: 'xortikner.webp'},
      {id: 9, name:
            {am: 'Սենդվիչներ և Ռոլլեր ', en: 'Sandwiches and Rolls', ru: 'Сэндвичи и роллы'},
        imageName: 'sendviches.webp'},
      {id: 10, name:
            {am: 'Բոքսեր', en: 'Boxer', ru: 'Боксер'},
        imageName: 'boxes.webp'},
      {id: 11, name:
            {am: 'Ըմպելիքներ', en: 'Drinks', ru: 'Напитки'},
        imageName: 'drinks.webp'},
      {id: 11, name:
            {am: 'Սոուսներ', en: 'Sauces', ru: 'Соусы'},
        imageName: 'sous.webp'},
      {id: 12, name:
            {am: 'Աղանդներ', en: 'Sects', ru: 'секты'},
        imageName: 'axand.webp'},
    ],
    products: [
      { id: 1,
        name: {
          am: 'Պեպպերոնիի Սիրահարներ', en: 'Pepperoni Lovers', ru: 'Любители пепперони'
        }, price: '3700', image: '2544a8ba-d0d5-9951-b2b1-d24a72c7a221_2.webp'},
      { id: 2,
        name: {
          am: 'Հաթ-Սուպրիմ ', en: 'HUT-SUPREME', ru: 'СУПРИМ-ХАТ'
        }, price: '3800', image: '2544a8ba-d0d5-9951-b2b1-d24a72c7a221_2.webp'},
      { id: 3,
        name: {
          am: 'Կծու մսային ', en: 'SPICY MEAT', ru: 'ОСТРАЯ МЯСНАЯ'
        }, price: '3600', image: '2544a8ba-d0d5-9951-b2b1-d24a72c7a221_2.webp'},
      { id: 4,
        name: {
          am: ' Մսի Սիրահարներ', en: 'MEET LOVERS', ru: 'ЛЮБИТЕЛИ МЯСА'
        }, price: '3800', image: '2544a8ba-d0d5-9951-b2b1-d24a72c7a221_2.webp'},
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
