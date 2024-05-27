<script>

    let code = ''
    let error = ''
    function newGame(){

        window.location.href = "/new/"
    }

    async function joinGame(){
        console.log(code)
        const response = await fetch("?code="+code, {
            method: 'GET'
        });
        let data = await response.json();
        if(response.status==400){
            error = data.message
        }
        else{
            window.location.href = "/game/"+code
        }
        
        
        console.log(data)
    }
</script>

<section class="container">
    <h1>Corporate</h1>

    <button on:click={()=>newGame()}>Start New Game</button>
    <br>
    <hr>
    <br>
    <h2>Join Existing Game</h2>
    <input bind:value={code} type="text" placeholder="Enter code">
    <p style="color:red">{error}</p>
    <br>
    <button on:click={()=>joinGame()}>Join game</button>  
</section>



<style>
    .container{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        width: 80vw;
        height: 90vh;
        margin-inline:auto;
    }

    hr{
        color:black;
        width: 100%;
        height: 1px;
        background-color: black;
    }

    h1{
        font-size: 4rem;
        margin-bottom:8rem;
    }

</style>