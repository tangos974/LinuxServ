
<script lang="ts">
    import type { Book } from "../types/Books";

    export let title: string;
    export let books: Book[] = [];
  </script>
  
  <section class="book-list">
      <h3>{title}</h3>
      <ul class="book-list-ul">
          {#each books as book}
              <li class="book-list-li">
                  <a href={book.pdf_link} target="_blank" rel="noopener noreferrer">
                      <strong>{book.title}</strong>
                  </a> by {book.author}: {book.Description}
              </li>
          {/each}
      </ul>
  </section>

  <style>
    .book-list {
      padding: 1.5rem;
    }
  
    .book-list-ul {
      list-style: none;
      padding: 0;
      display: block;
    }
  
    .book-list-li {
      margin: 0.75rem 0;
      display: block;
      width: 100%;
    }
  
    .book-list-li a {
      text-decoration: none;
      color: #007acc;
    }
  
    .book-list-li a:hover {
      text-decoration: underline;
    }
  </style>