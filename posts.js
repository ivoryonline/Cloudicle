/* ========================================
   YOUR BLOG POSTS
   ========================================
   
   Add new posts to the top of this array.
   
   FORMAT:
   {
       title: "Post Title",
       date: "Month Day, Year",
       content: `Your content here`
   }
   
   FORMATTING IN CONTENT:
   - **text** for bold
   - *text* for italics
   - [text](url) for links
   - {{image_url}} for images
   - Blank lines create paragraphs
   
   ======================================== */

const posts = [
    {
        title: "My First Post",
        date: "December 23, 2025",
        content: `
Here's some **bold text**.
Here's some *italic text* and [a link to something cool](https://example.com).

Here's them ***together!***
{{https://assets.vivwebz.net/b8d52379af61517781f762e03e7ed74f.jpg}}

        `
    },
    {
        title: "Another Great Post",
        date: "December 20, 2025",
        content: `
Here's another post to show how multiple entries look. Each post gets its own card with the gradient header and proper spacing.
The posts appear in chronological order from newest to oldest.
        `
    }
];