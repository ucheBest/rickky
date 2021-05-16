using System;

namespace Hahn.ApplicationProcess.Application.Controllers
{
    public class FormController : Controller
    {
        [HttpGet]
        public IActionResult Task(Asset task) {
          return Ok();
        }

        [HttpPost]
        public IActionResult Task(Asset details) {
          return Ok();
        }
    }
}
