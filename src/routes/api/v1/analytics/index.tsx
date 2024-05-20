import type { RequestHandler } from "@builder.io/qwik-city";

export const onGet: RequestHandler = async({json}) => {
    try {
    const api = import.meta.env.PUBLIC_VITE_API_URL;
    const res = await fetch(api,{
        headers: {
            'Authorization': `Basic ${import.meta.env.PUBLIC_VITE_JITSU}`,
          }
    })

    // console.log(Buffer.from(username + ':' + password).toString('base64'))
    const tsv = await res.text()
    json(200,({ status:tsv.split('\n')[0]}))




} catch (error:any) {
    console.log(error.message)
     json(500,{message:error.message})
} 
// finally {await client.end();}
  };