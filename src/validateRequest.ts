
export function validateRequest(req):boolean{
    console.log('inside validate request');
    if(req.body.roll>2)
        return true;

    else
     return false;
}