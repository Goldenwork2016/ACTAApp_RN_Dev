export default function render(){
	const places = {};
	window.render = {
		call: (place='')=>{
			if(place && typeof places[place] == 'function') places[place]();
			else if(!place){
				for (let each in places){
				    if(typeof places[each] == 'function') places[each]();
				}
			}
		},
		add: (place, render)=>{
			places[place] = render;
		}
	}
}