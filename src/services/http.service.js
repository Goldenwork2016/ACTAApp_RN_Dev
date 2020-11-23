export default function http(){
	let domain = 'https://acta.webart.work';
	window.http = {
		post: (url, doc, callback=(resp) => {}, opts={})=>{
			fetch(domain+url, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(doc)
			}).then((resp)=>{
				return resp.json();
			}).then(resp=>{
				callback(resp.body);
			});
		},
		get: (url, callback=(resp) => {}, opts={})=>{
			fetch(domain+url, {
				method: 'GET'
			}).then((resp)=>{
				return resp.json();
			}).then(resp=>{
				callback(resp.body);
			});
		}
	}
}