var app = new Vue(
    {
        el: '#root',

        data: {
            message: 'Ciao sono Vue',
            imgClass: '',
            mostraNascondi: 'Mostra',
            image: 'https://media.istockphoto.com/photos/cute-puppy-brown-pug-picture-id1010710424?k=6&m=1010710424&s=170667a&w=0&h=wYYCZ_hGbIluLb1rMhNvCEHWsh5ZRrMaUFORIq_fmcE='
        },

        methods: {
            showImg(){
                if (this.imgClass == ''){
                    this.imgClass = 'block';
                    this.mostraNascondi = 'Nascondi';
                } else {
                    this.imgClass = '';
                    this.mostraNascondi = 'Mostra';
                }
            }
        }
        // test
    });

