const Vue = require('vue');
const axios = require('axios');

window.onload = function( ) {
    let search = new Vue({
        el: '#search',
        data: {
            programmes: [],
            noSuggestions: false,
            searchString: '',
            showResults: false
        },
        methods: {
            getSuggestions: function( ) {
                let searchString = this.searchString;
                if ( searchString !== '') {
                    return axios.get(`/suggest=${searchString}`)
                    .then( ( response ) => {
                        this.programmes = response.data;
                        this.showNoResults( this.programmes );
                        this.showResults = true;
                    });
                }
                return this.showResults = false;
            },

            showNoResults: function ( programmes ) {
                if ( programmes.length  <= 0 ) {
                    return this.noSuggestions = true;
                }
                return this.noSuggestions = false;
            }
        }
    });
}
