<script>
  // @ts-nocheck

  import { onMount } from "svelte";

  let code = "";
  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
  for (let i = 0; i < 6; i++) {
    code += digits[Math.round(Math.random() * (digits.length - 1))];
  }

  let gameData = { code: code, words: [] };

  onMount(() => {
    async function createGame() {
      const response = await fetch("/new", {
        method: "PUT",
        body: JSON.stringify({ code: code }),
      });
      const data = await response.json();
      console.log(data);
    }
    createGame();
  });

  async function refresh() {
    const response = await fetch("/new", {
      method: "POST",
      body: JSON.stringify({ code: code }),
    });
    let data = await response.json();
    gameData.words = data.words;
    console.log(data);
    console.log(gameData);
  }

  let copy_text = "Copy Link"

  function copyLink(){
    let shareLink = window.location.host+"/game/"+code
    navigator.clipboard.writeText(shareLink);
    copy_text="Link Copied"

    setTimeout(()=>{
      copy_text="Copy Link"
    }, 4000);
  }


</script>

<section class="container">
  <h1>Corporate</h1>
  <h3>Your Game Code - {code} <button class="share" on:click={()=>copyLink()}>
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"/></svg>
    {copy_text}
  </button></h3>
  <span>Share this code to players</span>
  <br />
  <span>click on refresh button to see the words added to the game</span>
  <br>
  <button
    on:click={() => {
      refresh();
    }}>Refresh Words</button
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

  .share{
    background-color: transparent;
    padding: 0.25rem;
    margin:auto;
    margin-block:0.25rem;
    color:black;
    display: flex;
    align-items: center;
    justify-content: center;
    gap:0.25rem;


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
