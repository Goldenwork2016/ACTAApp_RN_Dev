//import { AsyncStorage } from 'react-native';
export default function user(){
	const us = {
		is: {},
		data: {},
		users: [],
		update: ()=>{
			window.http.post('/api/user/update', {
				name: us.name,
				data: us.data
			}, (resp)=>{});
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
		set: user=>{
			for(let each in user){
				us[each] = user[each];
			}
			if(!us.data) us.data={};
			if(!us.data.follow) us.data.follow={};
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
			if(!users[i].data) users[i].data={};
			us._users[users[i]._id] = users[i];
		}
		window.render.call('users');
		//window.render.call('sing up');
		//	console.log(us);
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