using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNet.Mvc;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace <%= title %>.Server.API.Controllers
{
    [Route("api/[controller]")]
    public class ThingController : Controller
    {
        private string[] _things;

        public ThingController()
        {
            _things = new string[] { "Foo", "Bar", "Hello", "World", "Yeoman" };
        }
        // GET: api/things
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return _things;
        }

        // GET api/things/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return _things[id];
        }

        // POST api/things
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/things/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/things/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
