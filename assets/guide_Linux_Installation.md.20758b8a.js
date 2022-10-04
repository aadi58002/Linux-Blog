import{_ as n,o as s,c as l,a as i,t as r,e,d as a,b as u,r as d}from"./app.78560cc8.js";const I=JSON.parse('{"title":"Installtion of Linux","description":"","frontmatter":{"title":"Installtion of Linux"},"headers":[{"level":2,"title":"WSL ( Windows sub system for Linux )","slug":"wsl-windows-sub-system-for-linux","link":"#wsl-windows-sub-system-for-linux","children":[]},{"level":2,"title":"Virtual Machine","slug":"virtual-machine","link":"#virtual-machine","children":[]},{"level":2,"title":"Dual Booting","slug":"dual-booting","link":"#dual-booting","children":[{"level":3,"title":"Partitioning Notes (Manual Partitioning)","slug":"partitioning-notes-manual-partitioning","link":"#partitioning-notes-manual-partitioning","children":[]}]}],"relativePath":"guide/Linux/Installation.md","lastUpdated":1664891514000}'),c={name:"guide/Linux/Installation.md"},h=a('<nav class="table-of-contents"><ul><li><a href="#wsl-windows-sub-system-for-linux">WSL ( Windows sub system for Linux )</a></li><li><a href="#virtual-machine">Virtual Machine</a></li><li><a href="#dual-booting">Dual Booting</a><ul><li><a href="#partitioning-notes-manual-partitioning">Partitioning Notes (Manual Partitioning)</a></li></ul></li></ul></nav><div class="info custom-block"><p class="custom-block-title"><p style="text-align:center;">Power of linuxing</p></p><p><span style="color:var(--vp-c-brand);"><strong><strong>The ways by which one can access the power of linux may vary in form as well as the feautres and power they provide.</strong></strong></span></p></div><h1 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-hidden="true">#</a></h1><h2 id="wsl-windows-sub-system-for-linux" tabindex="-1">WSL ( Windows sub system for Linux ) <a class="header-anchor" href="#wsl-windows-sub-system-for-linux" aria-hidden="true">#</a></h2><p>It is by far the easiest to get access to power of linux and it is without any risk. Microsoft offical documentation provides a great resource to get started with wsl<br></p>',5),p=i("h2",{id:"virtual-machine",tabindex:"-1"},[u("Virtual Machine "),i("a",{class:"header-anchor",href:"#virtual-machine","aria-hidden":"true"},"#")],-1),m=i("p",null,"It is more featureful implementation of linux. It also has no risk but you might need a more powerful computer to run virtual machines. Minimul resources to run a virtual machine for your computer should be a 4 or more cores and 8 GB of RAM. Recommeneded resources to run a virtual machine for your computer should be a 6 or more cores and 16 GB of RAM.",-1),f=a('<h2 id="dual-booting" tabindex="-1">Dual Booting <a class="header-anchor" href="#dual-booting" aria-hidden="true">#</a></h2><div class="danger custom-block"><p class="custom-block-title">Caution</p><p>Might cause dataloss based on your actions. So don&#39;t proceeed before proper knowlegde or guideance</p></div><p>It is the last as well as being the most difficult of the ways of installation of linux. Here you will install two operating system on the same storage device but only one of them will run at a time so it does not affect the performace of your device. <a href="https://www.makeuseof.com/tag/reasons-dual-boot-linux/" target="_blank" rel="noreferrer">Reasons to Dual boot and Reasons not to as well</a> Instructions for dual booting</p>',3),w=a('<div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Advance stuff ahead</p></div><h3 id="partitioning-notes-manual-partitioning" tabindex="-1">Partitioning Notes (Manual Partitioning) <a class="header-anchor" href="#partitioning-notes-manual-partitioning" aria-hidden="true">#</a></h3><p>At one of the last step in the installation, you&#39;ll be prompted to allocate disk space where you&#39;re going to install the linux distro. Make sure you make the following partitions in case you choose the manual partitioning .</p><ul><li>1 EFI partition <em>[vfat]</em> mounted on <code>/boot/efi</code> (&gt;=500M preferred, shared)</li><li>1 swap partition <em>[swap]</em> mounted as <code>swap</code> (&gt;=RAM)</li><li>1 root partition <em>[ext4]</em> mounted on <code>/</code> (rest of the size)</li></ul><p><em>Linux Mint install with manual paritioning <a href="https://www.youtube.com/watch?v=fOHjqllzTy0" target="_blank" rel="noreferrer">How to Install Linux Mint 20.2 Manual Partition | Installing Linux Mint 20.2 Uma on UEFI based PC</a></em></p><p><em>Note: Detailed Explaination for paritioning and what each parition is required for <br><a href="https://wiki.archlinux.org/title/Partitioning" target="_blank" rel="noreferrer">Arch Wiki: Partitioning</a> &amp; <a href="https://wiki.gentoo.org/wiki/Handbook:AMD64/Full/Installation#Partitioning_the_disk_with_GPT_for_UEFI" target="_blank" rel="noreferrer">Gentoo Wiki: Installation</a></em></p><p><em>Note: Multiple distro install should use seperate swap space, as they are used in hibernation and if reused by another may cause data-loss.</em></p>',7);function g(o,_,b,y,v,x){const t=d("Link");return s(),l("div",null,[i("h1",null,r(o.$frontmatter.title),1),h,e(t,{title:"Wsl Install instructions",url:"https://docs.microsoft.com/en-us/windows/wsl/install"}),e(t,{title:"dummy",url:"https://www.youtube.com/watch?v=wjbbl0TTMeo"}),p,m,e(t,{title:"Installing ubuntu on virtual Machine",url:"https://brb.nci.nih.gov/seqtools/installUbuntu.html"}),e(t,{title:"dummy",url:"https://www.youtube.com/watch?v=wX75Z-4MEoM"}),f,e(t,{title:"Dual Boot Guide",url:"https://www.geeksforgeeks.org/creating-a-dual-boot-system-with-linux-and-windows/"}),e(t,{title:"dummy",url:"https://www.youtube.com/watch?v=yIh37HQDF-w"}),w])}const M=n(c,[["render",g]]);export{I as __pageData,M as default};
