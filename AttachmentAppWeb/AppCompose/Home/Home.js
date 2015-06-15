/// <reference path="../App.js" />

(function () {
    'use strict';

    // The initialize function must be run each time a new page is loaded
    Office.initialize = function (reason) {
        $(document).ready(function () {
            app.initialize();

            var http = location.protocol;
            var slashes = http.concat("//");
            var host = slashes.concat(window.location.hostname);
            var url1 = "/api/attachment/download?key=1111";
            var url2 = "/api/attachment/download/1111";
            var url3 = "/Content/sample.txt";

            $("#attachurl1").html(url1);
            $("#attachurl1").attr("href", host + url1);
            $("#add-attachment-queryString").click(host + url1, addAttachment);

            $("#attachurl2").html(url2);
            $("#attachurl2").attr("href", host + url2);
            $("#add-attachment-url").click(host + url2, addAttachment);

            $("#attachurl3").html(url3);
            $("#attachurl3").attr("href", host + url3);
            $("#add-attachment-static").click(host + url3, addAttachment);
        });
    };

    var addAttachment = function (event) {

        var message = Office.context.mailbox.item;
        message.addFileAttachmentAsync(event.data, "a.txt",
            function (asyncResult) {
            
            });
    };
})();