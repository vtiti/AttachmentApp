using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Web.Http;

namespace AttachmentAppWeb
{
    [RoutePrefix("api/attachment")]
    public class AttachmentController : ApiController
    {
        [Route("download/{key}")]
        [Route("download")]
        [HttpGet]
        public HttpResponseMessage DownloadItem(string key) 
        {
            var path = System.Web.Hosting.HostingEnvironment.MapPath("~/Content/sample.txt");
            HttpResponseMessage result = new HttpResponseMessage(HttpStatusCode.OK);
            var stream = new FileStream(path, FileMode.Open);
            result.Content = new StreamContent(stream);
            result.Content.Headers.ContentType = new MediaTypeHeaderValue("text/plain");
            return result;
        }
    }
}