const main = $("#main")

$.ajax({
//    url: "https://api.github.com/users/IamRodion/repos",
    url: "https://run.mocky.io/v3/380cc591-ccbc-4377-b12d-bbf8ee067939",
    method: "GET"
}).then(results => {
    console.log(results)
    for (let i = 0; i < results.length; i++) {
        if (results[i].stargazers_count != 0) {
            let article = "<article><header><h2>" + results[i].name + "</h2></header><p>" + results[i].description + "</p>" +
                "<ul class=actions special><li><a href=" + results[i].html_url + " target=_blank class=button>Github Repo</a></li><li><a href=" + results[i].homepage + " target=_blank class=button>Deployed App</a></li></ul></article>"

            let article2 = '<div class="col col-md-5 col-lg-4 rounded border border-warning"style="padding: 0%; background-color: #ffddc7;"><div class="mb-3"><div><img style="max-width: 100%;"class="bd-placeholder-img card-img-top rounded-top border-bottom border-warning"src="img/Mantis Banner.svg" alt="Mantis Banner"></div><div class="card-body px-3"><p class="h1">'+ results[i].name +'</p><p class="card-text">'+ results[i].description +'</p><div class="d-flex justify-content-between align-items-center"><div class="btn-group"><a type="button" class="btn btn-sm btn-warning" href="#">Ver</a><a type="button" class="btn btn-sm btn-primary"href="'+ results[i].html_url +'"target="_blank">Github</a></div><span class="badge bg-warning">'+ results[i].language +'</span></div></div></div></div>'

            main.append(article2)
        }
    }
})


// <div class="col rounded border border-warning"style="padding: 0%; background-color: #ffddc7;"><div class="mb-3"><div><img style="max-width: 100%;"class="bd-placeholder-img card-img-top rounded-top border-bottom border-warning"src="img/Mantis Banner.svg" alt="Mantis Banner"></div><div class="card-body"><p class="h1">Mantis</p><p class="card-text">Programa web creado en Python con Flask, para la gestión depedidos demicro-empresas, desde la recepción hasta la entrega.</p><div class="d-flex justify-content-between align-items-center px-3"><div class="btn-group"><a type="button" class="btn btn-sm btn-warning" href="#">Ver</a><a type="button" class="btn btn-sm btn-primary"href="https://github.com/IamRodion/Mantis"target="_blank">Github</a></div><span class="badge bg-warning">Python 3</span></div></div></div></div>



// Comprobado

// const main = $(".container");

// $.ajax({
//   url: "https://api.github.com/users/IamRodion/repos",
//   method: "GET"
// }).then((results) => {
//   console.log(results);
//   for (let i = 0; i < results.length; i++) {
//     const repoUrl = results[i].html_url;
//     $.ajax({
//       url: `${repoUrl}/stargazers`,
//       method: "GET"
//     }).then((stargazers) => {
//       const creatorUsername = results[i].owner.login;
//       const isCreatorStargazer = stargazers.some((stargazer) => stargazer.login === creatorUsername);
//       if (results[i].stargazers_count != 0 && isCreatorStargazer) {
//         const article = `<article><header><h2>${results[i].name}</h2></header><p>${results[i].description}</p>` +
//           `<ul class="actions special"><li><a href="${results[i].html_url}" target="_blank" class="button">Github Repo</a></li><li><a href="${results[i].homepage}" target="_blank" class="button">Deployed App</a></li></ul></article>`;
//         main.append(article);
//       }
//     });
//   }
// });