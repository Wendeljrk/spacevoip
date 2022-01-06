<html lang="pt-br">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel='stylesheet' href='style.css'>
	<script>

		function voltar() {
		window.history.back();
				}
	</script>
</head>
	<body>
			
	<nav id="menu">
        <ul>
            <li><img src="logo.png" width="200" href="index.html"></li>
            <li><a href="index.html">Inicio</a></li>
            <li><a href="game.html">Game</a></li>
            <li><a href="#">Sobre</a></li>
        </ul>
    </nav>
	<br>
		<br>
			<?php

				if ( ! empty( $_POST ) ) {
					
					echo 'Mensagem enviada para ', $_POST['celular'], ' com sucesso' ;

				}

			?> 
		<br>
		<br>
		<button onclick="voltar()">Voltar </button>
	</body>



</html>