using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNet.Mvc;
using <%= title %>.Server.API.Models;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace <%= title %>.Server.API.Controllers
{
    [Route("api/[controller]")]
    public class ThingsController : Controller
    {
        private readonly Thing[] _things;

        public ThingsController()
        {
            _things = new[]
            {
                new Thing
                {
                    Title = "Bootstrap",
                    Description = "Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web. Bootstrap makes front-end web development faster and easier. It's made for folks of all skill levels, devices of all shapes, and projects of all sizes.",
                    Url = "http://getbootstrap.com/",
                    Logo = "bootstrap.png"
                },
                new Thing
                {
                    Title = "AngularJS",
                    Description = "HTML is great for declaring static documents, but it falters when we try to use it for declaring dynamic views in web-applications. AngularJS lets you extend HTML vocabulary for your application. The resulting environment is extraordinarily expressive, readable, and quick to develop.",
                    Url = "https://angularjs.org/",
                    Logo = "angular.png"
                },
                new Thing
                {
                    Title = "Karma",
                    Description = "The main goal for Karma is to bring a productive testing environment to developers. The environment being one where they don't have to set up loads of configurations, but rather a place where developers can just write the code and get instant feedback from their tests.",
                    Url = "http://karma-runner.github.io/",
                    Logo = "karma.png"
                }
            };
        }

        // GET: api/things
        [HttpGet]
        public IEnumerable<Thing> Get()
        {
            return _things;
        }

        // GET api/things/5
        [HttpGet("{id}")]
        public Thing Get(int id)
        {
            return _things[id];
        }

        // POST api/things
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/things/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/things/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
