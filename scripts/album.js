// Example Album
 var albumPicasso = {
     title: 'The Colors',
     artist: 'Pablo Picasso',
     label: 'Cubism',
     year: '1881',
     albumArtUrl: 'assets/images/album_covers/01.png',
     songs: [
         { title: 'Blue', duration: '4:26' },
         { title: 'Green', duration: '3:14' },
         { title: 'Red', duration: '5:01' },
         { title: 'Pink', duration: '3:21'},
         { title: 'Magenta', duration: '2:15'}
     ]
 };
 
 // Another Example Album
  var albumMarconi = {
     title: 'The Telephone',
     artist: 'Guglielmo Marconi',
     label: 'EM',
     year: '1909',
     albumArtUrl: 'assets/images/album_covers/20.png',
     songs: [
         { title: 'Hello, Operator?', duration: '1:01' },
         { title: 'Ring, ring, ring', duration: '5:01' },
         { title: 'Fits in your pocket', duration: '3:21'},
         { title: 'Can you hear me now?', duration: '3:14' },
         { title: 'Wrong phone number', duration: '2:15'}
     ]
 };

<<<<<<< HEAD
 var albumLana = {
     title: 'Born to Die',
     artist: 'Lana Del Rey',
     label: 'Interscope Records',
     year: '2012',
     albumArtUrl: 'assets/images/album_covers/lana.png',
     songs: [
         { title: 'Blue Jeans', duration: '1:01' },
         { title: 'Off to the Races', duration: '5:01' },
         { title: 'Carmen', duration: '3:21'},
         { title: 'Dark Paradise', duration: '3:14' },
         { title: 'Video Games', duration: '2:15'}
     ]
 };

=======

  var albumLana = {
     title: 'Born to Die',
     artist: 'Lana Del Rey',
     label: 'Unknown',
     year: '2007',
     albumArtUrl: 'assets/images/album_covers/lana.png',
     songs: [
         { title: 'Radio', duration: '1:01' },
         { title: 'Blue Jeans', duration: '5:01' },
         { title: 'Born to Die', duration: '3:21'},
         { title: 'National Anthem', duration: '3:14' },
         { title: 'Off to the Races', duration: '2:15'}
     ]
 };


>>>>>>> dom-scripting-album-view
 var createSongRow = function(songNumber, songName, songLength) {
     var template =
        '<tr class="album-view-song-item">'
      + '  <td class="song-item-number">' + songNumber + '</td>'
      + '  <td class="song-item-title">' + songName + '</td>'
      + '  <td class="song-item-duration">' + songLength + '</td>'
      + '</tr>'
      ;
 
     return template;
 };
<<<<<<< HEAD

 var albumTitle = document.getElementsByClassName('album-view-title')[0];
 var albumArtist = document.getElementsByClassName('album-view-artist')[0];
 var albumReleaseInfo = document.getElementsByClassName('album-view-release-info')[0];
 var albumImage = document.getElementsByClassName('album-cover-art')[0];
 var albumSongList = document.getElementsByClassName('album-view-song-list')[0];

 

 var setCurrentAlbum = function(album) {
=======
 
 var albumTitle = document.getElementsByClassName('album-view-title')[0];
 var albumArtist = document.getElementsByClassName('album-view-artist')[0];
 var albumReleaseInfo = document.getElementsByClassName('album-view-release-info')[0];
 var albumImage = document.getElementsByClassName('album-cover-art')[0];
 var albumSongList = document.getElementsByClassName('album-view-song-list')[0];



var setCurrentAlbum = function(album) {
     // #1
   
     // #2
>>>>>>> dom-scripting-album-view
     albumTitle.firstChild.nodeValue = album.title;
     albumArtist.firstChild.nodeValue = album.artist;
     albumReleaseInfo.firstChild.nodeValue = album.year + ' ' + album.label;
     albumImage.setAttribute('src', album.albumArtUrl);
 
     // #3
     albumSongList.innerHTML = '';
 
     // #4
     for (var i = 0; i < album.songs.length; i++) {
         albumSongList.innerHTML += createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
     }
 };
 
 window.onload = function() {

     setCurrentAlbum(albumPicasso);

<<<<<<< HEAD
     var albums = [albumPicasso, albumMarconi, albumLana];
     var index = 1;

     albumImage.addEventListener("click", function(event) {
        setCurrentAlbum(albums[index]);
        index ++;
        if (index == albums.length) {
=======

 var albums = [albumPicasso, albumMarconi, albumLana];
 var index = 1;

     albumImage.addEventListener("click", function(event) {
        setCurrentAlbum(albums[index]);
        index++;
        if (index == album.length) {
>>>>>>> dom-scripting-album-view
            index = 0;
        }

     });
<<<<<<< HEAD

 };
=======
 };


>>>>>>> dom-scripting-album-view
