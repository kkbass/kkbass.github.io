// Ryan Siemens is awesome!

function audioApp(){
   var audio = new Audio();
   var audio_folder = 'audio/';
   var audio_ext = '.mp3';
   // var audio_index = 0;
   var is_playing = false;
   var playingtrack;
   var pbutton = document.getElementsByClassName('playbutton');  // pbuttons are automatically put into an array [0,1,2,3]
   var tracks = ['nothing-that-is', 'beep', 'cymbal', 'drum'];


   tracks.forEach(function(track, i) {  // for each item in the tracks array... a function with 2 parameters is passed.
      pbutton[i].id = track;  // i represents an item in the pbutton array
      $('#' + track).on('click', switchTrack);
   });

   audio.addEventListener('ended', function(){
      $('#' + playingtrack + ' i.material-icons').html('play_arrow');
      playingtrack = 'false';
   });

   function switchTrack(event) {  // The function is called switchTrack. Event is used to identify which play button is being pressed
      var $btn = $(event.currentTarget);
      var $icon = $btn.children();

      $('i.material-icons').html('play_arrow');  // reset all icons to play icon

      if (is_playing) {
         if (playingtrack !== event.currentTarget.id) {  // Checks to see if the track you clicked on isn't playing. If it isn't...
           is_playing = true;  // ...then set the argument is_playing to true.
           audio.src = audio_folder + event.currentTarget.id + audio_ext;  // also set the audio source
           audio.play();
           $icon.html('pause');
         } else {
           audio.pause();
           is_playing = false;
           $icon.html('play_arrow');
         }
      } else {
         is_playing = true;
         $icon.html('pause');

         if (playingtrack != event.currentTarget.id) {
          audio.src = audio_folder + event.currentTarget.id + audio_ext;
          audio.play();
         }
      }

      playingtrack = event.currentTarget.id;
   }

}

window.addEventListener('load', audioApp);
