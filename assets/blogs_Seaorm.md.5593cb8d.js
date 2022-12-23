import{_ as e,o as t,c as o,a}from"./app.18657d6b.js";const m=JSON.parse('{"title":"Seaorm","description":"This blog will describe the process of me learning about Seaorm","frontmatter":{"title":"Seaorm","description":"This blog will describe the process of me learning about Seaorm","tags":["podman","database","postgres","rust","seaorm"]},"headers":[{"level":2,"title":"Local Setup","slug":"local-setup","link":"#local-setup","children":[{"level":3,"title":"Setup Postgres Local instance with pgAdmin","slug":"setup-postgres-local-instance-with-pgadmin","link":"#setup-postgres-local-instance-with-pgadmin","children":[]}]}],"relativePath":"blogs/Seaorm.md","lastUpdated":1671811588000}'),s={name:"blogs/Seaorm.md"},r=a('<h1 id="seaorm" tabindex="-1">Seaorm <a class="header-anchor" href="#seaorm" aria-hidden="true">#</a></h1><p>It is a library in rust to do asyncrounous database object mapping.</p><div class="tip custom-block"><p class="custom-block-title">Rest of the blog will assume that you are using the below github repo as a starting point</p><p><a href="https://github.com/aadi58002/seaorm-practice" target="_blank" rel="noreferrer">Project Github</a></p></div><h2 id="local-setup" tabindex="-1">Local Setup <a class="header-anchor" href="#local-setup" aria-hidden="true">#</a></h2><p>I am thinking of using postgres with seaorm</p><ul><li>Read For Reasons to use <a href="https://developer.okta.com/blog/2019/07/19/mysql-vs-postgres" target="_blank" rel="noreferrer">Postgres over mysql</a></li></ul><h3 id="setup-postgres-local-instance-with-pgadmin" tabindex="-1">Setup Postgres Local instance with pgAdmin <a class="header-anchor" href="#setup-postgres-local-instance-with-pgadmin" aria-hidden="true">#</a></h3><p>We will be using podman-compose to run postgres and pgAdmin.<br><a href="https://github.com/khezen/compose-postgres" target="_blank" rel="noreferrer">Postgres compose file with PgAdmin</a></p><p>Steps:-</p><ol><li>Run podman-compose up in</li><li>A prompt will appear for a password. I will use the password -&gt; <code>root</code>.</li><li>You will see a button to add a new server in the start page.</li><li>Now use the command <code>docker inspect postgres_container</code> to get the Ip (in the form of <code>&quot;IPAddress&quot;: &quot;10.89.1.2&quot;</code>)at which the postgres container is running in.</li><li>Use the <code>General &gt; name field</code> to be any name you want but change the Connection &gt; Host name/address to &lt;IP of the docker container&gt; and Connection &gt; password &lt;Your Postgres Password&gt; and Connection &gt; username &lt;Your Postgres Username&gt;.</li></ol>',10),n=[r];function i(l,c,p,d,h,g){return t(),o("div",null,n)}const b=e(s,[["render",i]]);export{m as __pageData,b as default};