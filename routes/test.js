import { prevent, allow } from 'stay-awake';

// do something not so important 

// prevent auto sleep 
prevent((err, data) =>{
    // handle error 
    console.log('%d routines are preventing sleep', data);
});

// do something which needs the computer to stay awake 

// do something async 
doAsync(()=> {
    // do something 
    prevent(()=> {}); // second call 
    // do long processing 
    allow(()=> {}); // this subroutine no longer needs to prevent sleep 
});

// once done allow the computer to sleep as configured in power management 
allow((err, data)=> {
    if(data == 0) {
        console.log('Will sleep automatically');
    }
});