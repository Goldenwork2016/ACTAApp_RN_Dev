export default function programs (){
	window.program = {
	 }
	fetch('https://acta.webart.work/api/program/get', {
		method: "GET"
	}).then(resp=>resp.json()).then(resp=>{
		window.program.programs = resp || [];
		 window.render.call('programs');
	});
}