document.addEventListener("DOMContentLoaded", function(event) {
    console.log("Namaste javascript");
    let sc = document.createElement('script');
    sc.setAttribute('src', 'https://cdn.tiny.cloud/1/no-api-key/tinymce/5/tinymce.min.js');

    document.head.appendChild(sc);
    sc.onload = () => {
        // tinymce.init({
        //     selector: '#id_content'
        // });



        var useDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

        tinymce.init({
            selector: '#id_content',
            plugins: 'print preview importcss searchreplace autosave autolink visualchars visualblocks directionality save fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist emoticons lists wordcount ',
            //              a11ychecker imagetools textpattern noneditable help formatpainter permanentpen pageembed charmap tinycomments mentions quickbars linkchecker  advtable ',

            menubar: 'file edit view insert format tools table tc help',
            toolbar: 'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist checklist | forecolor backcolor casechange permanentpen formatpainter removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media pageembed template link anchor codesample | a11ycheck ltr rtl | showcomments addcomment',

        });


    }


});