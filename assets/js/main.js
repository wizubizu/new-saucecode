// typed writer

        document.addEventListener('DOMContentLoaded', function(){

            Typed.new("#typed", {
                stringsElement: document.getElementById('typed-strings'),
                typeSpeed: 20,
                backDelay: 600,
                backSpeed: 60,
                loop: true,
                contentType: 'html', // or text
                // defaults to null for infinite loop
                loopCount: null,
               
            });

        });