var app= new Vue({
    el: '#totoro',    
    mounted(){
        window.axios.get('https://pokeapi.co/api/v2/pokemon/1/').then(response => {
            console.log(response.data);
            console.log('Le nom du Pokemon est: '+response.data.name);
            this.statistiques = response.data.stats ;
            console.log(this.statistiques) ;
            this.statistiques.forEach(unElement => {
                console.log('Le nom est : '+ unElement.stat.name) ;
                console.log('Qui a pour valeur: '+ unElement.base_stat) ;

        });
            console.log('La stat defense vaut '+this.statistiques[2].base_stat);
    });

    }
});