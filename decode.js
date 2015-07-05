function compareAudio() {

    var audio1 = "Baby Sound - Neh - Core.mp3";
    var audio2 = "song2";
    var i,j,d;
    var matching = 0;
    var t = 0;var i,j,d;
    var matching = 0;
    var t = 0;
    var audio1Arr = Array();
    var audio1Len = audio1.length;
    for (i = 1; i<=audio1Len; i++)
    {
        //reverse so its like a stack
        d = audio1.charCodeAt(audio1Len-i);
        for (j = 0; j < 8; j++)
        {
            audio1Arr.push(d%2);
            d = Math.floor(d/2);
        }
    }
    var audio2Len = audio2.length;
    for (i = 1; i<=audio2Len; i++)
    {
        //reverse so its like a stack
        d = audio2.charCodeAt(audio2Len-i);
        for (j = 0; j < 8; j++)
        {
            if(d%2 == audio1Arr[t])
            {
                matching++;
            }
            d = Math.floor(d/2);
            t++;
        }
    }
    var avarage = Number(matching)/((Number(t)+Number(audio1Arr.length))/Number(2))*Number(100);
    console.log('The Matching with the two audio is '+avarage+' %.');
}

compareAudio()
