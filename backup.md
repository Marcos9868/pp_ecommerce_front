NAVBAR

  <section class="navbar">
    <div class="container">
      <nav>
        <ul class="items-navbar">
          <li><a href="#">Playstation 3</a></li>
          <li><a href="#">Playstation 4</a></li>
          <li><a href="#">Playstation 5</a></li>
        </ul>
      </nav>
    </div>
  </section>

// Navbar - Submenu
.navbar {
background-color: #d9d9d9;
nav {
ul {
@include flex(row, start, center);
padding: 2rem 0;
li {
a {
font-weight: 400;
font-size: 1.7rem;
line-height: 2.4rem;
color: black;
padding: 2rem 4rem;
transition: all 0.2s ease-in;
&:hover {
background-color: #c4c4c4;
}
}
}
}
}
}

