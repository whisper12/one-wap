import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export default new Vuex.Store({
	state : {
		'idList' : '',
		'photoData': '',
		'Theaters':'',
		'city': ''
	},
	mutations: {
		SET_idList(state, idList) {
		state.idList = idList;
		},
		SET_COMMINGSOON(state,photoData){
		state.photoData = photoData
		},
		SET_THEATERS(state,Theaters){
		state.Theaters = Theaters
		},
		SET_CITY(state,City){
			state.city = City
		}	
	},
	actions: {
		setidList({commit}, idList) {
		commit('SET_idList', idList)
	},
		setphotoData({commit}, photoData) {
		commit('SET_COMMINGSOON', photoData)
	},
		setTheaters({commit}, Theaters) {
		commit('SET_THEATERS', Theaters)
	},
		setCity({commit}, City){
			commit('SET_CITY', City)
		}
	},
	getters: {
		getidList: (state) => state.idList,
		getphotoData: (state) => state.photoData,
		getTheaters: (state) => state.Theaters,
		getCity: (state) => state.city
	}
})