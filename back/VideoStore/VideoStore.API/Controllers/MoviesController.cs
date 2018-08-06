﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Runtime.InteropServices;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using VideoStore.API.Models;

namespace VideoStore.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MoviesController : ControllerBase
    {
        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            var stub = new List<MovieViewModel>()
            {
                new MovieViewModel()
                {
                    Name = "Jackie Chan et Michel Ange",
                    Category = "Regular",
                    Description = "This is a contact movie",
                    Id = 1
                },
                new MovieViewModel()
                {
                    Name = "Bloody Mary",
                    Category = "Child",
                    Description = "Is this really a movie ?",
                    Id = 2
                },

            };

            return Ok(stub);
        }
    }
}
