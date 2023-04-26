import React from 'react'
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div>
      <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">


<a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
    <div class="sidebar-brand-icon rotate-n-15">
        <i class="fas fa-laugh-wink"></i>
    </div>
    <div class="sidebar-brand-text mx-3">Library Management System<sup>2</sup></div>
</a>


<hr class="sidebar-divider my-0"/>


<li class="nav-item active">
    <Link to={"/dashboard"} class="nav-link" >
        <i class="fas fa-fw fa-tachometer-alt"></i>
        <span>Dashboard</span></Link>
</li>





<li class="nav-item">
    <Link class="nav-link collapsed" to={"/books"} data-toggle="collapse" data-target="#collapseTwo"
        aria-expanded="true" aria-controls="collapseTwo">
        <i class="fas fa-fw fa-cog"></i>
        <span>Books</span>
    </Link>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
        <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Custom Components:</h6>
            <a class="collapse-item" href="buttons.html">Buttons</a>
            <a class="collapse-item" href="cards.html">Cards</a>
        </div>
    </div>
</li>





<hr class="sidebar-divider"/>










<hr class="sidebar-divider d-none d-md-block"/>





</ul>
    </div>
  )
}

export default Sidebar;