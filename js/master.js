/* BONUS: Creare una select con tutti i generi dei dischi. 
In base a cosa scegliamo nella select, vedremo i corrispondenti cd.
BONUS 2: Ordinare i dischi per anno di uscita. */
var app = new Vue ({
    el: "#app",

    data: {
        songs: [],
        songsGenre: [],
        selected: '',
    },

    mounted() {
        axios
        .get("https://flynn.boolean.careers/exercises/api/array/music")
        .then( (result) => {
            console.log(result.data.response);
            this.songs = result.data.response;

            if (this.songs.length == 10) {
                this.songs.forEach((element, index) => {
                    if (!this.songsGenre.includes(element.genre)) {
                        this.songsGenre.push(element.genre);
                    };

                });
            }
        });  
    },
});