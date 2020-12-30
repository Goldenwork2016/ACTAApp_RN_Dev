export default function workout (){
	window.workout = {
	 }

	 fetch('https://acta.webart.work/api/workout/get', {
      method: "GET"
    }).then(resp=>resp.json()).then(resp=>{
    	 window.workout.workouts = resp.body;
      // if(resp.body.length)  window.exercise.exercise = resp.body.shift();
      // if(resp.body.length)  window.exercise.exercises = resp.body;
    });
}