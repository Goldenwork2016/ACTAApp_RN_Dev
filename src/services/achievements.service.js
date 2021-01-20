export default function achievements (){
	create: ()=>{
		   window.http.get('/api/achievement/get', resp=>{
      console.log(resp);
      if(resp.length){
        resp[0].name = Date.now().toString();
        window.http.post('/api/achievement/update', resp[0], resp=>{
          console.log(resp);
        });
        if(resp.length>1){
          window.http.post('/api/achievement/delete', resp[1], resp=>{
            console.log(resp);
          });
        }
      }else{
        window.http.post('/api/achievement/create', {}, resp=>{
          console.log(resp);
        });
      }
    });
	},
}