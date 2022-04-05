<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light " style="background-color:#06244f;" >
            <a class="navbar-brand"  style="color:#ffffff;">Ricardo Farias</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                   
                    <li class="nav-item">
                        <a class="nav-link"><router-link :to="{name: 'Clubs'}">CLUBS</router-link> </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"><router-link :to="{name: 'Estudaintes'}">DOCENTES</router-link> </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"><router-link :to="{name: 'RegistroAlumno'}">REGISTRAR ALUMNO</router-link> </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"><router-link :to="{name: 'RegistroPago'}">REGISTRAR PAGO</router-link> </a>
                    </li>
                </ul>
                
            </div>

            <form class="form-inline my-2 my-lg-0">
                <button class="btn btn-success my-2 my-sm-0" type="submit"><router-link class="link" :to="{name: 'Login'}"></router-link>  <i class="bi bi-box-arrow-in-right"></i></button>
            </form>

        </nav>
        
    </div>

</template>

<script>
export default {
    name: 'CNavbar'
}
</script>