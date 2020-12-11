export default function exercise (){
	window.exercise = {
	 }

	 fetch('https://acta.webart.work/api/exercise/get', {
      method: "GET"
    }).then(resp=>resp.json()).then(resp=>{
      if(resp.body.length)  window.exercise.exercise = resp.body.shift()});
      if(resp.body.length)  window.exercise.exercises: resp.body});
		//window.render.call()
    });
}