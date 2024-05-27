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
</script>

<section class="container">
  <h1>Corporate</h1>
  <h3>Your Game Code - {code}</h3>
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
        <td>{entry.name}</td>
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
