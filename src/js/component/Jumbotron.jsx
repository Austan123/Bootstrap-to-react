import React from 'react';
const Jumbotron = (props) => {
    return (

<div class="p-5 mb-4 bg-light rounded-3">
      <div class="container-fluid py-5">
      <img src="https://images.unsplash.com/photo-1453791052107-5c843da62d97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=60" class="card-img-top" alt="..." />
        <h1 class="display-5 fw-bold">Hello World</h1>
        <p class="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
        <button class="btn btn-primary btn-lg" type="button">Continue</button>
      </div>
    </div>

    );
}
export default Jumbotron;