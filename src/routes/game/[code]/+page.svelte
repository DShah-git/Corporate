<script>
   import { page } from '$app/stores';

   let code = $page.params.code

   console.log(code) 

   let name = ''
   let word = ''

    let success = ''

   async function submitWord(){
        const response = await fetch("/game/"+code, {
            method: "POST",
            body: JSON.stringify({code:code, entry:{ name: name , word:word}}),
        });

        let data = await response.json()

        if(response.status==201){
            success="Word added to game"
            console.log(data)
        }
   }
</script>



<section class="container">
    <h1>Corporate</h1>
    <h3>Your Game Code - {code}</h3>

    {#if success==''}
        <div>
            Name:
            <input bind:value={name} type="text" placeholder="Enter your name here">
        </div>
        <div>
            Word: 
            <input bind:value={word} type="text" placeholder="Enter your word here">
        </div>
        <br>
    
        <br>
        <button
        on:click={() => {
            submitWord();
        }}>Submit Word</button
        >
    {/if}
    {#if success!=''}
        <p>{success}</p>
        <button
        on:click={() => {
           window.location.reload();
        }}>Add new word</button
        >
    {/if}

    
  </section>

  
<style>
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 80vw;
      height: 90vh;
      margin-inline: auto;
      padding-top: 1rem;
    }

    input{
        margin-top: 0.5rem;
    }

    

</style>