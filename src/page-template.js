const genCards = teamData => { 

    const manager = teamData.manager.map(function(position) {
        let managerHtml = `
        <div class="col-sm-4 pb-sm-4">
            <div class="card border-success shadow">
                <h5 class="card-header bg-success">Manager <i class="fas fa-briefcase"></i></h5>
                <div class="card-body">
                    <dl class="row">
                        <dt class="col-sm-3">Name:</dt>
                        <dd class="col-sm-9">${position.name}</dd>
                        
                        <dt class="col-sm-3">ID:</dt>
                        <dd class="col-sm-9">${position.id}</dd>
                        
                        <dt class="col-sm-3">Email:</dt>
                        <dd class="col-sm-9">
                            <a href="mailto:${position.email}">${position.email}</a>
                        </dd>
                        
                        <dt class="col-sm-3 text-truncate"><i class="fas fa-phone"></i> :</dt>
                        <dd class="col-sm-9">${position.officeNumber}</dd>
                    </dl>
                </div>
            </div>
        </div>
        `
        return managerHtml
    });

    const engineer = teamData.engineer.map(function(position) {
        let engineerHtml =  `
        <div class="col-sm-4 pb-sm-4">
            <div class="card border-warning shadow">
                <h5 class="card-header bg-warning">Engineer <i class="fas fa-tools"></i></h5>
                <div class="card-body">
                    <dl class="row">
                        <dt class="col-sm-3">Name:</dt>
                        <dd class="col-sm-9">${position.name}</dd>
                        
                        <dt class="col-sm-3">ID:</dt>
                        <dd class="col-sm-9">${position.id}</dd>
                        
                        <dt class="col-sm-3">Email:</dt>
                        <dd class="col-sm-9">
                            <a href="mailto:${position.email}">${position.email}</a>
                        </dd>
                        
                        <dt class="col-sm-3 text-truncate"><i class="fab fa-github"> :</i></dt>
                        <dd class="col-sm-9">
                            <a href="https://github.com/${position.github}" target="_blank">${position.github}</a>
                        </dd>
                    </dl>
                </div>
            </div>
        </div>
        `
        return engineerHtml
    });

    const intern = teamData.intern.map(function(position) {
        let internHtml = `
        <div class="col-sm-4 pb-sm-4">
            <div class="card border-danger shadow">
                <h5 class="card-header bg-danger">Intern <i class="fas fa-clipboard-list"></i></h5>
                <div class="card-body">
                    <dl class="row">
                        <dt class="col-sm-3">Name:</dt>
                        <dd class="col-sm-9">${position.name}</dd>
                        
                        <dt class="col-sm-3">ID:</dt>
                        <dd class="col-sm-9">${position.id}</dd>
                        
                        <dt class="col-sm-3">Email:</dt>
                        <dd class="col-sm-9">
                            <a href="mailto:${position.email}">${position.email}</a>
                        </dd>
                        
                        <dt class="col-sm-3 text-truncate"><i class="fas fa-graduation-cap"> :</i></dt>
                        <dd class="col-sm-9">${position.school}</dd>
                    </dl>
                </div>
            </div>
        </div>
        `
        return internHtml
    });

    return [manager,engineer,intern]

}

module.exports = templateData => {

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <script src="https://kit.fontawesome.com/5ea44a3d9c.js" crossorigin="anonymous"></script>
        <title>Team Profile</title>
    </head>
    <body>
        <div class="jumbotron jumbotron-fluid text-white bg-info">
        <div class="container">
            <h1 class="display-4">Team Profile</h1>
            <p class="lead">Welcome to our employee page, feel free to take a look around!</p>
        </div>
        </div>
        
        <div class= "container">
            <div class= "row">
                ${genCards(templateData)}
            </div>
        </div>

        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    </body>
    </html>
    `
}



