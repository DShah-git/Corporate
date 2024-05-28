<script>
// @ts-nocheck

  let code = ""
  
  let gameData = {code:"",words:[]}
  let password = ""

  async function getBackDoor(){

    if(password=="gadha"){
        const response = await fetch("/new", {
        method: "POST",
        body: JSON.stringify({ code: code }),
        });
        let data = await response.json();
        gameData.words = data.words;
        console.log(data);
        console.log(gameData); 
    }
    else{
        code = "chal bhag"
    }
   
  }
</script>
  
  <section class="container">
    <h1>Corporate</h1>
    <input bind:value={code} type="text" placeholder="code">
    <input bind:value={password} type="text" placeholder="password">
    <button
      on:click={() => {
        getBackDoor();
      }}>Get words</button
    >
  
    <br />
    <br />
    <table>
      <tr>
        <th>Player</th>
        <th>Word</th>
      </tr>
      {#each gameData.words as entry}
        <tr>
          <td
          class="name-col"
          ><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/></svg>{entry.name}</td>
          <td>{entry.word}</td>
        </tr>
      {/each}
    </table>
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
  
    h1 {
      font-size: 2rem;
    }
  
    h3 {
      padding: 0;
      margin: 0;
    }
  
    table {
      border-collapse: collapse;
      width: 60%;
    }
  
    table td,
    table th {
      border: 1px solid #ddd;
      padding: 8px;
      text-align: center;
    }
  
    .name-col{
      display: flex;
      align-items: center;
      justify-content: start;
      padding-left:2rem;
      gap:1rem;
      background-color: aquamarine;
      text-align: left;
    }
  
    tr{
      background-color: #f2f2f2;
    }
  
    table tr:hover {
      background-color: #ddd;
    }
  
    th {
      padding-top: 12px;
      padding-bottom: 12px;
      text-align: left;
      color: white;
      color:black
    }
  
  
      
  </style>
  