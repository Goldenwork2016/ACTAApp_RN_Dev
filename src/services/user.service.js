//import { AsyncStorage } from 'react-native';
export default function user(){
	const us = {
		is: {},
		data: {},
		users: [],
		followers: {},
		form: {},
		update: (cb=(resp)=>{})=>{
			window.http.post('/api/user/update', {
				name: us.name,
				data: us.data
			}, cb);
		},
		change_password: (oldPass, newPass)=>{
			window.http.post('/api/user/changePassword', {
				newPass: newPass,
				oldPass: oldPass
			}, resp => {
				if(resp) alert('successfully changed password');
				else alert('failed to change password');
			});
		},
		logout: ()=>{
			window.http.get('/api/user/logout');
			//AsyncStorage.removeItem('acta_user');
			window.render.call('logout');
		},
		set: (user)=>{
			for(let each in user){
				us[each] = user[each];
			}
			if(!us.data) us.data={};
			if(!us.data.follow) us.data.follow={};
			if(!us.data.ignore) us.data.ignore={};
			followers();
		},
	};
	const followers = ()=>{
		if(!us.users.length || us._id) return;
		//us.followers = {};
		for (var i = users.length - 1; i >= 0; i--) {
			if(users[i]._id === us._id) continue;
			if(!users[i].data.follow) continue;
			if(users[i].data.follow[us._id]){
				us.followers[users[i]._id] = true;
			}
		}
	};
	window.us = us;
	//if(AsyncStorage.getItem("acta_user")){
		//us.set(JSON.parse(AsyncStorage.getItem("acta_user")));
		window.http.get('/api/user/me', us.set);
	//}
	window.http.get('/api/user/get', users=>{
		us.users = users;
		us._users = {};
		for (var i = users.length - 1; i >= 0; i--) {
			us._users[users[i]._id] = users[i];
			if(!users[i].data) users[i].data={};
			if(!users[i].data.follow) users[i].data.follow={};
			if(!users[i].data.ignore) users[i].data.ignore={};
		}
		window.render.call('users');
		//followers();
	});
	window.core = {
		each: function(obj){
			let arr = [];
			for(let each in obj){
				if(obj[each]) arr.push(each);
			}
			return arr;
		}
	}
}