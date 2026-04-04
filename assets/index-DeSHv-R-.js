import{j as c,u as Ai,A as vl,m as le}from"./animation-DDBbI08W.js";import{a as xl,r as Me,u as Sl,L as pn,N as Ml,b as El,R as yl,c as gi,d as bl,B as Tl}from"./react-vendor-CgVcVTz7.js";import{C as xs,X as Al,M as wl,B as dr,P as Ss,a as yo,A as ss,Z as Ms,N as hr,S as Rl,Y as Cl,E as Os,H as Pl,U as Ll,R as bo,b as Nl,c as Es,d as Dl,e as Ul,f as ys,g as To,h as Ao,i as Il,j as Fl}from"./icons-CTLk1C3W.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();var as={},Bs=xl;as.createRoot=Bs.createRoot,as.hydrateRoot=Bs.hydrateRoot;const Ol=[{to:"/",label:"Home",caption:"Overview",icon:xs},{to:"/concepts",label:"Concepts",caption:"Atlas",icon:dr},{to:"/visualizer",label:"Visualizer",caption:"Lab",icon:Ss},{to:"/numericals",label:"Numericals",caption:"Solvers",icon:yo}];function Bl(){const[n,e]=Me.useState(!1),[t,i]=Me.useState(!1),[r,s]=Me.useState(!1),a=Me.useRef(0),o=Sl();Me.useEffect(()=>{e(!1)},[o.pathname]),Me.useEffect(()=>{const d=()=>{const h=window.scrollY;i(h>12),n||(h>a.current+6&&h>80?s(!0):h<a.current-6&&s(!1)),a.current=h};return window.addEventListener("scroll",d,{passive:!0}),()=>window.removeEventListener("scroll",d)},[n]);const l=r&&!n;return c.jsx("header",{className:`navbar${t?" navbar-scrolled":""}${l?" navbar-hidden":""}`,children:c.jsxs("div",{className:"navbar-shell",children:[c.jsxs(pn,{to:"/",className:"navbar-brand",children:[c.jsx("span",{className:"brand-mark",children:c.jsx(xs,{size:18})}),c.jsxs("span",{className:"brand-copy",children:[c.jsx("span",{className:"brand-title",children:"NetSwitch"}),c.jsx("span",{className:"brand-subtitle",children:"Interactive switching lab"})]})]}),c.jsx("button",{type:"button",className:"navbar-toggle","aria-expanded":n,"aria-label":n?"Close navigation menu":"Open navigation menu",onClick:()=>e(d=>!d),children:n?c.jsx(Al,{size:20}):c.jsx(wl,{size:20})}),c.jsxs("div",{className:`navbar-panel ${n?"open":""}`,children:[c.jsx("nav",{className:"navbar-links","aria-label":"Primary",children:Ol.map(({to:d,label:h,caption:p,icon:m})=>c.jsxs(Ml,{to:d,end:d==="/",className:({isActive:g})=>`nav-link ${g?"active":""}`,children:[c.jsx("span",{className:"nav-icon",children:c.jsx(m,{size:15})}),c.jsxs("span",{className:"nav-copy",children:[c.jsx("strong",{children:h}),c.jsx("small",{children:p})]})]},d))}),c.jsx(pn,{to:"/visualizer",className:"btn btn-primary navbar-cta",children:"Open Lab"})]})]})})}const zs=["Initializing packet router…","Calibrating switching engine…","Loading network topology…","Mapping switching paths…","NetSwitch lab ready."],ks=1800,zl=300;function kl({onDone:n}){const e=Ai(),[t,i]=Me.useState(0),[r,s]=Me.useState(!0),a=Me.useRef(!1);return Me.useEffect(()=>{if(e){a.current||(a.current=!0,n());return}const o=setInterval(()=>{i(d=>Math.min(d+1,zs.length-1))},zl),l=setTimeout(()=>{s(!1)},ks);return()=>{clearInterval(o),clearTimeout(l)}},[e,n]),e?null:c.jsx(vl,{onExitComplete:()=>{a.current||(a.current=!0,n())},children:r&&c.jsx(le.div,{className:"boot-overlay",initial:{opacity:1},exit:{opacity:0},transition:{duration:.55,ease:[.4,0,.2,1]},"aria-hidden":"true",children:c.jsxs("div",{className:"boot-shell",children:[c.jsxs("div",{className:"boot-brand",children:[c.jsx("span",{className:"boot-icon",children:c.jsx(xs,{size:26})}),c.jsx("span",{className:"boot-title",children:"NetSwitch"})]}),c.jsx("div",{className:"boot-meter-wrap",children:c.jsx(le.div,{className:"boot-meter-bar",initial:{scaleX:0},animate:{scaleX:1},transition:{duration:(ks-200)/1e3,ease:"linear"}})}),c.jsx("p",{className:"boot-line mono",children:zs[t]})]})})})}const At={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.55,ease:[.25,.46,.45,.94]}}},vt={hidden:{},visible:{transition:{staggerChildren:.1}}},Gl={hidden:{opacity:0,scale:.92},visible:{opacity:1,scale:1,transition:{duration:.6,ease:[.25,.46,.45,.94]}}},Hl=[{icon:dr,title:"Concept Atlas",desc:"Compare switching models, multiplexing, and transmission ideas with concise explanations and exam-ready examples.",to:"/concepts",badge:"4 core topics",tone:"cyan"},{icon:Ss,title:"Live Visualizer",desc:"Watch packets and dedicated circuits move across the network so the tradeoffs feel obvious instead of abstract.",to:"/visualizer",badge:"Interactive lab",tone:"amber"},{icon:yo,title:"Numerical Solvers",desc:"Work through delay, SNR, throughput, and bandwidth formulas with a cleaner interface built for quick practice.",to:"/numericals",badge:"3 fast solvers",tone:"green"}],Vl=[{icon:Ms,title:"Behavior first",desc:"See store-and-forward, reserved lanes, and traffic bursts before jumping into theory."},{icon:hr,title:"Side-by-side intuition",desc:"Put packet and circuit switching next to each other to understand where each approach wins."},{icon:Rl,title:"Exam-focused practice",desc:"Move from concept recap to formula solving without changing context or mental mode."}],Wl=[{value:"2",label:"switching models"},{value:"Live",label:"simulations"},{value:"4",label:"formula families"}],jl=[{step:"01",title:"Watch the Video",desc:"Start with the embedded tutorial to build a solid understanding of packet switching and how it relates to real-world networking."},{step:"02",title:"Explore Concepts",desc:"Visit the Concept Atlas to review switching models, multiplexing techniques, and transmission fundamentals with interactive cards."},{step:"03",title:"Run Simulations",desc:"Launch the Live Visualizer and watch packets in action. Experiment with different parameters to see how they affect behavior."},{step:"04",title:"Solve Problems",desc:"Use the Numerical Solvers to practice calculating delay, SNR, and throughput and solidify your understanding."},{step:"05",title:"Review References",desc:"Consult the recommended textbooks and technical resources below to deepen your knowledge and prepare for exams."},{step:"06",title:"Share Knowledge",desc:"Use this tool to teach others. The interactive simulations make it easy to explain complex concepts visually."}],Xl=[{title:"Computer Networking: A Top-Down Approach (8th Ed.)",authors:"James F. Kurose, Keith W. Ross",chapters:"Chapter 1.3 & Chapter 4 — Packet Switching and Circuit Switching",href:"https://www.pearson.com/en-us/subject-catalog/p/computer-networking-a-top-down-approach/P200000003427",tags:["Essential","Theory"]},{title:"Data Communications and Networking (5th Ed.)",authors:"Behrouz A. Forouzan",chapters:"Chapter 2 & 3 — Network Models and Switching Techniques",href:"https://www.mheducation.com/highered/product/data-communications-networking-forouzan-5e.html",tags:["Comprehensive","Reference"]},{title:"Computer Networks (5th Ed.)",authors:"Andrew S. Tanenbaum, David J. Wetherall",chapters:"Chapter 1 & 3 — Introduction and Data Link Layer",href:"https://www.pearson.com/en-us/subject-catalog/p/computer-networks/P200000003433",tags:["Advanced","Deep Dive"]}],ql=[{title:"RFC 791 — Internet Protocol (IPv4)",desc:"Official IETF specification for packet-based communication",href:"https://tools.ietf.org/html/rfc791",tag:"Official Spec"},{title:"Cisco Learning Network",desc:"Comprehensive networking tutorials and certification materials",href:"https://learningnetwork.cisco.com/",tag:"Industry Standard"},{title:"MIT OpenCourseWare — Computer Networks",desc:"Free educational materials from MIT covering network fundamentals",href:"https://ocw.mit.edu/search/?q=computer%20networks",tag:"Free Course"},{title:"Virtual Lab — SWE2002 Packet Switching",desc:"Interactive virtual lab for hands-on packet switching experiments developed alongside this project",href:"https://sites.google.com/view/swe2002/virtual-lab?authuser=0",tag:"Virtual Lab"}],Yl=[{q:"How does packet switching differ from circuit switching?",a:"Packet switching dynamically routes individual packets through shared resources, while circuit switching reserves a dedicated connection for the full session. This makes packet switching more efficient for bursty traffic and circuit switching better for consistent real-time communication."},{q:"What are the main advantages of packet switching?",a:"Better resource utilization, no wasted bandwidth on idle connections, automatic rerouting around failures, and cost efficiency. Packets can take different routes and be reassembled correctly at the destination."},{q:"How do routers handle packet routing?",a:"Routers use routing tables and protocols such as OSPF and BGP to determine the best path for each packet. Each router independently makes decisions based on destination IP and current network topology."},{q:"What is network delay and how is it calculated?",a:"Total delay includes transmission delay (packet length ÷ link bandwidth), propagation delay (distance ÷ signal speed), and queuing delay. Use the Numerical Solvers above to compute these values for specific scenarios."},{q:"How can I improve network throughput?",a:"Increase bandwidth capacity, reduce congestion, optimize routing protocols, implement traffic prioritization, and monitor performance regularly. Packet loss directly reduces effective throughput."},{q:"Where can I learn more advanced topics?",a:"Check the references section for textbooks and research papers. MIT OpenCourseWare and Cisco Learning Network offer comprehensive courses on networking and advanced routing protocols."}],$l=[{name:"Dr. Swaminathan Annadurai",role:"Faculty Advisor",details:["Assistant Professor","VIT Chennai"]},{name:"Rakshit Rameshbabu",role:"Student Developer",details:["Reg. No: 24BYB1117","B.Tech CSE in Cybersecurity","VIT Chennai"]},{name:"Harish Naganathan K",role:"Student Developer",details:["Reg. No: 24BYB1086","B.Tech CSE in Cybersecurity","VIT Chennai"]}],Kl=[{title:"Packet switching",summary:"Best when utilization and adaptability matter more than perfectly predictable timing.",points:["Shared links","Adaptive routes","Great for bursty traffic"]},{title:"Circuit switching",summary:"Best when steady timing matters and reserving a dedicated path is worth the setup cost.",points:["Reserved capacity","Fixed path","Great for real-time sessions"]}];function Zl(){const n=El(),e=Ai(),t=e?{}:{initial:"hidden",animate:"visible",variants:vt},i=e?{}:{variants:At},r=e?{}:{initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-60px"}};return c.jsxs("div",{className:"home-page",children:[c.jsxs(le.section,{className:"home-hero card",...t,children:[c.jsxs(le.div,{className:"home-hero-copy",...i,children:[c.jsx("span",{className:"section-eyebrow",children:"Computer Networks · Switching lab"}),c.jsx("h1",{children:"Step inside the network and watch switching choices unfold."}),c.jsx("p",{children:"Learn packet switching and circuit switching through motion, comparison, and guided problem solving instead of static notes alone."}),c.jsxs("div",{className:"home-actions",children:[c.jsxs("button",{type:"button",className:"btn btn-primary",onClick:()=>n("/visualizer"),children:["Launch Visualizer",c.jsx(ss,{size:16})]}),c.jsx("button",{type:"button",className:"btn btn-secondary",onClick:()=>n("/concepts"),children:"Explore Concepts"})]}),c.jsx(le.div,{className:"home-stat-row",...e?{}:{variants:vt},children:Wl.map(s=>c.jsxs(le.div,{className:"data-pill",...i,children:[c.jsx("strong",{children:s.value}),c.jsx("span",{children:s.label})]},s.label))})]}),c.jsx(le.div,{className:"home-hero-visual","aria-hidden":"true",...e?{}:{variants:Gl},children:c.jsxs("div",{className:"radar-board",children:[c.jsx("div",{className:"radar-ring radar-ring-one"}),c.jsx("div",{className:"radar-ring radar-ring-two"}),c.jsx("div",{className:"radar-link radar-link-one"}),c.jsx("div",{className:"radar-link radar-link-two"}),c.jsx("div",{className:"radar-link radar-link-three"}),c.jsx("div",{className:"radar-link radar-link-four"}),c.jsx("div",{className:"radar-node radar-node-a",children:"S"}),c.jsx("div",{className:"radar-node radar-node-b",children:"R1"}),c.jsx("div",{className:"radar-node radar-node-c",children:"R2"}),c.jsx("div",{className:"radar-node radar-node-d",children:"D"}),c.jsxs("div",{className:"signal-card signal-card-packet",children:[c.jsx("span",{children:"Packet path"}),c.jsx("strong",{children:"Adaptive routing"}),c.jsx("small",{children:"Packets may split and regroup at the destination."})]}),c.jsxs("div",{className:"signal-card signal-card-circuit",children:[c.jsx("span",{children:"Circuit lane"}),c.jsx("strong",{children:"Reserved channel"}),c.jsx("small",{children:"Traffic stays on one pre-established route."})]})]})})]}),c.jsxs(le.section,{className:"home-section",...e?{}:{...r,variants:vt},children:[c.jsxs(le.div,{className:"section-heading",...e?{}:{variants:At},children:[c.jsx("span",{className:"section-eyebrow",children:"Learning paths"}),c.jsx("h2",{children:"Move from intuition to mastery without leaving the app."}),c.jsx("p",{children:"Each path is designed to answer a different question: what it is, how it behaves, and how to solve it."})]}),c.jsx(le.div,{className:"home-card-grid",...e?{}:{variants:vt},children:Hl.map(({icon:s,title:a,desc:o,to:l,badge:d,tone:h})=>c.jsxs(le.article,{className:`journey-card journey-card-${h}`,...i,children:[c.jsxs("div",{className:"journey-card-top",children:[c.jsx("span",{className:"journey-icon",children:c.jsx(s,{size:22})}),c.jsx("span",{className:"badge",children:d})]}),c.jsx("h3",{children:a}),c.jsx("p",{children:o}),c.jsxs("button",{type:"button",className:"journey-link",onClick:()=>n(l),children:["Open ",a,c.jsx(ss,{size:15})]})]},l))})]}),c.jsxs(le.section,{className:"home-lower-grid",...e?{}:{...r,variants:vt},children:[c.jsxs(le.div,{className:"home-story card",...i,children:[c.jsxs("div",{className:"section-heading",children:[c.jsx("span",{className:"section-eyebrow",children:"Why it clicks"}),c.jsx("h2",{children:"Turn lecture points into visible network behavior."}),c.jsx("p",{children:"The interface is built like a guided lab: start with the mental model, check the behavior, then solve the numbers while the tradeoffs are still fresh."})]}),c.jsx("div",{className:"signal-grid",children:Vl.map(({icon:s,title:a,desc:o})=>c.jsxs("article",{className:"signal-feature",children:[c.jsx("span",{className:"signal-feature-icon",children:c.jsx(s,{size:18})}),c.jsxs("div",{children:[c.jsx("h3",{children:a}),c.jsx("p",{children:o})]})]},a))})]}),c.jsxs(le.div,{className:"home-compare card",...i,children:[c.jsx("span",{className:"section-eyebrow",children:"Quick lens"}),c.jsx("h2",{children:"Know what changes when the network gets busy."}),c.jsx("div",{className:"compare-card-grid",children:Kl.map(s=>c.jsxs("article",{className:"compare-card",children:[c.jsx("h3",{children:s.title}),c.jsx("p",{children:s.summary}),c.jsx("ul",{children:s.points.map(a=>c.jsx("li",{children:a},a))})]},s.title))})]})]}),c.jsxs(le.section,{className:"home-section",...e?{}:{...r,variants:vt},children:[c.jsxs(le.div,{className:"section-heading",...e?{}:{variants:At},children:[c.jsx("span",{className:"section-eyebrow",children:"Getting started"}),c.jsx("h2",{children:"Six steps from zero to fluent in switching theory."}),c.jsx("p",{children:"Follow this path to move from watching to understanding to solving — without losing momentum."})]}),c.jsx(le.div,{className:"home-steps-grid",...e?{}:{variants:vt},children:jl.map(({step:s,title:a,desc:o})=>c.jsxs(le.article,{className:"step-card card",...e?{}:{variants:At},children:[c.jsx("span",{className:"step-number",children:s}),c.jsx("h3",{children:a}),c.jsx("p",{children:o})]},s))})]}),c.jsxs(le.section,{className:"home-section",...e?{}:{...r,variants:vt},children:[c.jsxs(le.div,{className:"section-heading",...e?{}:{variants:At},children:[c.jsxs("span",{className:"section-eyebrow",children:[c.jsx(Cl,{size:13}),"Video tutorial"]}),c.jsx("h2",{children:"Watch packet switching in action before diving into the lab."}),c.jsx("p",{children:"This video covers packet structure, routing, store-and-forward, delay analysis, and comparison with circuit switching."})]}),c.jsxs(le.div,{className:"home-video-card card",...e?{}:{variants:At},children:[c.jsx("div",{className:"home-video-wrapper",children:c.jsx("iframe",{src:"https://www.youtube.com/embed/G7n8thqwO2c",title:"Understanding Packet Switching Concepts",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerPolicy:"strict-origin-when-cross-origin",allowFullScreen:!0})}),c.jsxs("div",{className:"home-video-info",children:[c.jsx("h3",{children:"Understanding Packet Switching Concepts"}),c.jsx("p",{children:"A comprehensive walkthrough explaining how packets are transmitted, routed through networks, and reassembled at the destination — with real-world tradeoffs compared to circuit switching."}),c.jsx("ul",{className:"home-video-topics",children:["Packet structure and formatting","Routing algorithms and protocols","Store-and-forward mechanism","Network delay and throughput analysis","Comparison with circuit switching"].map(s=>c.jsx("li",{children:s},s))})]})]})]}),c.jsxs(le.section,{className:"home-section",...e?{}:{...r,variants:vt},children:[c.jsxs(le.div,{className:"section-heading",...e?{}:{variants:At},children:[c.jsx("span",{className:"section-eyebrow",children:"Further reading"}),c.jsx("h2",{children:"The textbooks and sites worth bookmarking."}),c.jsx("p",{children:"Start with the textbook references for theoretical foundations, then explore technical websites for implementation depth."})]}),c.jsxs(le.div,{className:"home-refs-block",...e?{}:{variants:vt},children:[c.jsxs(le.div,{...e?{}:{variants:At},children:[c.jsxs("h3",{className:"refs-group-heading",children:[c.jsx(dr,{size:16}),"Textbook references"]}),c.jsx("ul",{className:"home-ref-list",children:Xl.map(({title:s,authors:a,chapters:o,href:l,tags:d})=>c.jsxs("li",{className:"home-ref-item",children:[c.jsxs("div",{className:"home-ref-body",children:[c.jsx("strong",{children:s}),c.jsx("span",{className:"home-ref-authors",children:a}),c.jsx("span",{className:"home-ref-chapters",children:o}),c.jsx("div",{className:"home-ref-tags",children:d.map(h=>c.jsx("span",{className:"home-ref-tag",children:h},h))})]}),c.jsxs("a",{href:l,target:"_blank",rel:"noopener noreferrer",className:"home-ref-link",children:["View resource",c.jsx(Os,{size:13})]})]},s))})]}),c.jsxs(le.div,{...e?{}:{variants:At},children:[c.jsxs("h3",{className:"refs-group-heading",children:[c.jsx(hr,{size:16}),"Online resources"]}),c.jsx("ul",{className:"home-ref-list",children:ql.map(({title:s,desc:a,href:o,tag:l})=>c.jsxs("li",{className:"home-ref-item",children:[c.jsxs("div",{className:"home-ref-body",children:[c.jsx("strong",{children:s}),c.jsx("span",{className:"home-ref-authors",children:a}),c.jsx("div",{className:"home-ref-tags",children:c.jsx("span",{className:"home-ref-tag",children:l})})]}),c.jsxs("a",{href:o,target:"_blank",rel:"noopener noreferrer",className:"home-ref-link",children:["View resource",c.jsx(Os,{size:13})]})]},s))})]})]})]}),c.jsxs(le.section,{className:"home-section",...e?{}:{...r,variants:vt},children:[c.jsxs(le.div,{className:"section-heading",...e?{}:{variants:At},children:[c.jsxs("span",{className:"section-eyebrow",children:[c.jsx(Pl,{size:13}),"FAQ"]}),c.jsx("h2",{children:"Quick answers to the questions that come up most."}),c.jsx("p",{children:"Common stumbling blocks and clarifications for the concepts covered in this lab."})]}),c.jsx(le.div,{className:"home-faq-grid",...e?{}:{variants:vt},children:Yl.map(({q:s,a})=>c.jsxs(le.article,{className:"faq-item card",...e?{}:{variants:At},children:[c.jsx("h3",{children:s}),c.jsx("p",{children:a})]},s))})]}),c.jsxs(le.section,{className:"home-section",...e?{}:{...r,variants:vt},children:[c.jsxs(le.div,{className:"section-heading",...e?{}:{variants:At},children:[c.jsxs("span",{className:"section-eyebrow",children:[c.jsx(Ll,{size:13}),"Developed by"]}),c.jsx("h2",{children:"Computer Networks Lab project — VIT Chennai."}),c.jsx("p",{children:"Built for the SWE2002 course as an interactive educational tool for switching theory."})]}),c.jsx(le.div,{className:"home-team-grid",...e?{}:{variants:vt},children:$l.map(({name:s,role:a,details:o})=>c.jsxs(le.article,{className:"team-member-card card",...e?{}:{variants:At},children:[c.jsx("div",{className:"team-avatar","aria-hidden":"true",children:s.split(" ").filter(Boolean).slice(0,2).map(l=>l[0]).join("")}),c.jsx("h3",{children:s}),c.jsx("span",{className:"team-role",children:a}),c.jsx("ul",{className:"team-details",children:o.map(l=>c.jsx("li",{children:l},l))})]},s))})]})]})}const Jl={delay:{title:"End-to-End Delay",formula:"T_d = T_transmission + T_propagation",description:"Total time for data to travel from source to destination",components:["T_transmission = L / R (packet size in bits / bandwidth)","T_propagation = d / s (distance / propagation speed)"]},throughput:{title:"Throughput",formula:"Throughput = Bandwidth × (1 - Loss Rate)",description:"Actual data transmission rate considering packet loss",components:["Loss Rate = Packets Lost / Total Packets","Affected by congestion and link capacity"]},snr:{title:"Signal-to-Noise Ratio",formula:"SNR_dB = 10 × log₁₀(P_signal / P_noise)",description:"Ratio of desired signal to background noise",components:["Higher SNR = better signal quality","Shannon Capacity = log₂(1 + SNR)"]},bandwidth:{title:"Bandwidth",formula:"C = B × log₂(1 + SNR)",description:"Shannon channel capacity formula",components:["B = bandwidth in Hz","SNR = signal-to-noise ratio (linear)"]},circuitSwitching:{title:"Circuit Switching",characteristics:["Dedicated connection established before data transmission","Resources reserved for entire duration","Guaranteed bandwidth and low latency","Setup and teardown delays","Suitable for real-time traffic (voice, video)","Less efficient for bursty data"]},packetSwitching:{title:"Packet Switching",characteristics:["Data divided into packets with headers","Each packet routed independently","Resources shared dynamically","Variable latency","Better for bursty traffic","More efficient overall network utilization","Packets may arrive out of order"]}},wo=[{id:1,title:"Circuit Switching",description:"Dedicated connection model used in traditional telephone networks",details:["Establishes dedicated end-to-end connection","Resources reserved for entire call duration","Guaranteed bandwidth","Low and predictable latency","Setup and teardown overhead","Inefficient for data traffic"],examples:["Traditional phone networks","ISDN","Video conferencing"]},{id:2,title:"Packet Switching",description:"Data is divided into packets routed independently",details:["Connectionless or connection-oriented","Packets include addressing and sequencing","Dynamic resource allocation","Better bandwidth utilization","Variable latency","Scalable architecture"],examples:["Internet (TCP/IP)","Ethernet","Frame Relay"]},{id:3,title:"Message Switching",description:"Store-and-forward approach for entire messages",details:["Messages stored at intermediate nodes","Forwarded when full message received","High latency","Requires large storage","Error checking per message","Used in email, SMS"],examples:["Email systems","SMS networks","Historical telegraph"]},{id:4,title:"Multiplexing",description:"Technique to combine multiple signals over single medium",details:["Frequency Division Multiplexing (FDM)","Time Division Multiplexing (TDM)","Code Division Multiplexing (CDM)","Wavelength Division Multiplexing (WDM)","Increases link utilization","Reduces cost"],examples:["Telephone networks","Radio broadcasting","Fiber optics"]}],It={hidden:{opacity:0,y:18},visible:{opacity:1,y:0,transition:{duration:.5,ease:[.25,.46,.45,.94]}}},an={hidden:{},visible:{transition:{staggerChildren:.09}}},Ql={once:!0,margin:"-50px"},Ro=["delay","throughput","snr","bandwidth"],ec=[{value:"8",label:"comparison angles"},{value:String(wo.length),label:"core concepts"},{value:String(Ro.length),label:"formula cards"}],tc=[{icon:Ms,title:"Store-and-forward",description:"Packet switching stores each packet at an intermediate router before forwarding it to the next hop."},{icon:bo,title:"Resource reservation",description:"Circuit switching keeps capacity reserved for the whole session, even when no data is flowing for a moment."},{icon:Nl,title:"Routing behavior",description:"Packets may take different routes and arrive out of order, which is why headers and sequencing matter."},{icon:dr,title:"Modern usage",description:"The internet is packet-switched, while dedicated circuits still matter where timing guarantees are critical."}],nc=Ro.map(n=>({key:n,...Jl[n]}));function ic(){const n=Ai(),e=t=>n?{}:{initial:"hidden",whileInView:"visible",viewport:Ql,variants:t};return c.jsxs("div",{className:"concepts-page",children:[c.jsxs(le.section,{className:"page-hero concepts-hero",...n?{}:{initial:"hidden",animate:"visible",variants:an},children:[c.jsx(le.span,{className:"section-eyebrow",...n?{}:{variants:It},children:"Concept atlas"}),c.jsx(le.h1,{...n?{}:{variants:It},children:"Understand when each switching model actually wins."}),c.jsx(le.p,{...n?{}:{variants:It},children:"Use this page as the mental map for the whole app: compare behaviors, scan the formulas, then jump into the simulator or solver when you want to see the ideas in action."}),c.jsx(le.div,{className:"concepts-stat-row",...n?{}:{variants:an},children:ec.map(t=>c.jsxs(le.div,{className:"data-pill",...n?{}:{variants:It},children:[c.jsx("strong",{children:t.value}),c.jsx("span",{children:t.label})]},t.label))})]}),c.jsxs(le.section,{className:"comparison-section card",...e(It),children:[c.jsxs("div",{className:"section-heading",children:[c.jsx("span",{className:"section-eyebrow",children:"Main comparison"}),c.jsx("h2",{children:"Circuit switching optimizes predictability. Packet switching optimizes sharing."}),c.jsx("p",{children:"Read the table as a tradeoff matrix: one model reserves a path for smooth real-time delivery, the other keeps links flexible and efficient for bursty traffic."})]}),c.jsxs("div",{className:"comparison-intro-grid",children:[c.jsxs("article",{className:"comparison-intro-card",children:[c.jsx("h3",{children:"Circuit switching"}),c.jsx("p",{children:"Reserve the lane first, then enjoy steady transfer with predictable timing."})]}),c.jsxs("article",{className:"comparison-intro-card",children:[c.jsx("h3",{children:"Packet switching"}),c.jsx("p",{children:"Split the message into packets and let the network share links dynamically as conditions change."})]})]}),c.jsx("div",{className:"comparison-table-shell",children:c.jsxs("table",{children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"Aspect"}),c.jsx("th",{children:"Circuit Switching"}),c.jsx("th",{children:"Packet Switching"})]})}),c.jsxs("tbody",{children:[c.jsxs("tr",{children:[c.jsx("td",{children:"Connection Type"}),c.jsx("td",{children:"Dedicated channel"}),c.jsx("td",{children:"Connectionless or connection-oriented"})]}),c.jsxs("tr",{children:[c.jsx("td",{children:"Bandwidth"}),c.jsx("td",{children:"Guaranteed"}),c.jsx("td",{children:"Dynamic allocation"})]}),c.jsxs("tr",{children:[c.jsx("td",{children:"Latency"}),c.jsx("td",{children:"Predictable and low"}),c.jsx("td",{children:"Variable under load"})]}),c.jsxs("tr",{children:[c.jsx("td",{children:"Setup Time"}),c.jsx("td",{children:"Required before transfer"}),c.jsx("td",{children:"Minimal or none"})]}),c.jsxs("tr",{children:[c.jsx("td",{children:"Resource Utilization"}),c.jsx("td",{children:"Lower during idle periods"}),c.jsx("td",{children:"Higher through sharing"})]}),c.jsxs("tr",{children:[c.jsx("td",{children:"Best For"}),c.jsx("td",{children:"Real-time sessions"}),c.jsx("td",{children:"General data transfer"})]}),c.jsxs("tr",{children:[c.jsx("td",{children:"Examples"}),c.jsx("td",{children:"Phone networks, ISDN"}),c.jsx("td",{children:"Internet, TCP/IP"})]}),c.jsxs("tr",{children:[c.jsx("td",{children:"Scalability"}),c.jsx("td",{children:"Limited by reserved resources"}),c.jsx("td",{children:"Highly scalable"})]})]})]})})]}),c.jsxs(le.section,{className:"concepts-section",...e(an),children:[c.jsxs(le.div,{className:"section-heading",...n?{}:{variants:It},children:[c.jsx("span",{className:"section-eyebrow",children:"Core ideas"}),c.jsx("h2",{children:"Use the cards below as your conceptual checklist."}),c.jsx("p",{children:"Each card distills the definition, the important characteristics, and a few memorable examples."})]}),c.jsx(le.div,{className:"concepts-grid",...n?{}:{variants:an},children:wo.map(t=>c.jsxs(le.article,{className:"concept-card card",...n?{}:{variants:It},children:[c.jsxs("div",{className:"concept-card-header",children:[c.jsx("span",{className:"concept-index",children:String(t.id).padStart(2,"0")}),c.jsx("h3",{children:t.title})]}),c.jsx("p",{className:"concept-description",children:t.description}),c.jsxs("div",{className:"concept-section",children:[c.jsx("h4",{children:"Key characteristics"}),c.jsx("ul",{children:t.details.map(i=>c.jsx("li",{children:i},i))})]}),t.examples&&c.jsxs("div",{className:"concept-section",children:[c.jsx("h4",{children:"Examples"}),c.jsx("div",{className:"examples-list",children:t.examples.map(i=>c.jsx("span",{className:"example-tag",children:i},i))})]})]},t.id))})]}),c.jsxs(le.section,{className:"formulas-section",...e(an),children:[c.jsxs(le.div,{className:"section-heading",...n?{}:{variants:It},children:[c.jsx("span",{className:"section-eyebrow",children:"Formula reference"}),c.jsx("h2",{children:"Keep the equations nearby while you work the numbers."}),c.jsx("p",{children:"These cards are designed to bridge the conceptual page and the numerical solver page."})]}),c.jsx(le.div,{className:"formulas-grid",...n?{}:{variants:an},children:nc.map((t,i)=>c.jsxs(le.article,{className:"formula-card card",...n?{}:{variants:It},children:[c.jsxs("div",{className:"formula-card-header",children:[c.jsx("span",{className:"formula-index",children:String(i+1).padStart(2,"0")}),c.jsxs("div",{children:[c.jsx("h3",{children:t.title}),c.jsx("p",{children:t.description})]})]}),c.jsx("code",{className:"formula",children:t.formula}),c.jsx("ul",{children:t.components.map(r=>c.jsx("li",{children:r},r))})]},t.key))})]}),c.jsxs(le.section,{className:"quick-facts card",...e(an),children:[c.jsxs(le.div,{className:"section-heading",...n?{}:{variants:It},children:[c.jsx("span",{className:"section-eyebrow",children:"Quick facts"}),c.jsx("h2",{children:"Memorable reminders for revision day."}),c.jsx("p",{children:"Use these as short verbal cues when you want to recall the core behavior fast."})]}),c.jsx(le.div,{className:"facts-grid",...n?{}:{variants:an},children:tc.map(({icon:t,title:i,description:r})=>c.jsxs(le.article,{className:"fact-item",...n?{}:{variants:It},children:[c.jsx("span",{className:"fact-icon",children:c.jsx(t,{size:20})}),c.jsx("h3",{children:i}),c.jsx("p",{children:r})]},i))})]})]})}const rc=[[0,1],[1,2],[2,3],[4,5],[5,6],[6,7],[0,4],[1,5],[2,6],[3,7]],bi=[[0,1,2,3,7],[0,4,5,6,7],[0,1,5,6,7],[0,4,5,1,2,6,7]];function sc(n,e,t,i,r,s={}){if(!n)return;n.clearRect(0,0,e,t),lc(n,e,t,r),cc(n,e,t,r);const a=Co(e,t),o=bi.map(d=>d.map(h=>a[h])),l=oc(i);dc(n,a,l,r),uc(n,i,o,e),hc(n,a),fc(n,e,t,i,r,s)}function ac(n,e,t,i){const r=Co(i.width,i.height);for(const s of r)if(ir({x:n,y:e},s)<=28)return{type:"node"};if(t&&t.packets&&t.packets.length>0)for(const s of t.packets){const a=bi[s.routeIndex%bi.length].map(l=>r[l]),o=os(a,s.progress);if(o&&ir({x:n,y:e},o)<=18)return{type:"packet"}}return null}function Co(n,e){const t=n*.12,i=n*.88,r=e*.28,s=e*.7,a=(i-t)/3;return[{x:t,y:r,label:"A",role:"source"},{x:t+a,y:r,label:"B"},{x:t+a*2,y:r,label:"C"},{x:i,y:r,label:"D"},{x:t,y:s,label:"E"},{x:t+a,y:s,label:"F"},{x:t+a*2,y:s,label:"G"},{x:i,y:s,label:"H",role:"destination"}]}function oc(n){const e=new Map;return n.forEach(t=>{const i=bi[t.routeIndex%bi.length];for(let r=0;r<i.length-1;r+=1){const s=Lo(i[r],i[r+1]);e.set(s,(e.get(s)||0)+1)}}),e}function lc(n,e,t,i){const r=n.createLinearGradient(0,0,e,t);r.addColorStop(0,"#030712"),r.addColorStop(.5,"#050d1a"),r.addColorStop(1,"#020510"),n.fillStyle=r,n.fillRect(0,0,e,t);const s=n.createRadialGradient(e*.28,t*.1,10,e*.28,t*.1,e*.6);s.addColorStop(0,"rgba(34, 211, 238, 0.14)"),s.addColorStop(.5,"rgba(6, 182, 212, 0.06)"),s.addColorStop(1,"rgba(0, 0, 0, 0)"),n.fillStyle=s,n.fillRect(0,0,e,t);const a=n.createRadialGradient(e*.82,t,10,e*.82,t,e*.55);a.addColorStop(0,"rgba(167, 139, 250, 0.12)"),a.addColorStop(1,"rgba(0, 0, 0, 0)"),n.fillStyle=a,n.fillRect(0,0,e,t),n.fillStyle="rgba(34, 211, 238, 0.05)";const o=e*(.22+(Math.sin(i*.35)+1)*.08),l=t*(.18+(Math.cos(i*.3)+1)*.04);n.beginPath(),n.arc(o,l,e*.18,0,Math.PI*2),n.fill()}function cc(n,e,t,i){n.save(),n.strokeStyle="rgba(34, 211, 238, 0.06)",n.lineWidth=1;const r=Math.max(42,e/16),s=i*18%r;for(let a=-r+s;a<=e+r;a+=r)n.beginPath(),n.moveTo(a,0),n.lineTo(a,t),n.stroke();for(let a=0;a<=t+r;a+=r)n.beginPath(),n.moveTo(0,a),n.lineTo(e,a),n.stroke();n.restore()}function dc(n,e,t,i){rc.forEach(([r,s],a)=>{const o=e[r],l=e[s],d=t.get(Lo(r,s))||0;n.save(),n.strokeStyle="rgba(34, 211, 238, 0.1)",n.lineWidth=2,n.beginPath(),n.moveTo(o.x,o.y),n.lineTo(l.x,l.y),n.stroke();const h=.28+Math.min(d,5)*.12;n.strokeStyle=`rgba(34, 211, 238, ${h})`,n.lineWidth=1.8+Math.min(d,4)*.45,n.setLineDash([14,14]),n.lineDashOffset=-i*22-a*7,n.shadowColor="rgba(34, 211, 238, 0.55)",n.shadowBlur=d>0?18:5,n.beginPath(),n.moveTo(o.x,o.y),n.lineTo(l.x,l.y),n.stroke(),n.restore()})}function hc(n,e){e.forEach(t=>{const i=t.role==="destination"?"#f59e0b":t.role==="source"?"#22d3ee":"#a78bfa",r=t.role==="destination"?"#fde68a":t.role==="source"?"#cffafe":"#ede9fe";n.save(),n.shadowColor=gn(i,.7),n.shadowBlur=22,n.fillStyle=gn(i,.16),n.beginPath(),n.arc(t.x,t.y,28,0,Math.PI*2),n.fill(),n.shadowBlur=0,n.strokeStyle=gn(i,.9),n.lineWidth=2.5,n.beginPath(),n.arc(t.x,t.y,22,0,Math.PI*2),n.stroke(),n.fillStyle=i,n.beginPath(),n.arc(t.x,t.y,9,0,Math.PI*2),n.fill(),n.fillStyle=r,n.font="700 13px Inter, sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillText(t.label,t.x,t.y),t.role&&Po(n,t.x,t.y+34,t.role==="source"?"Source":"Destination",i),n.restore()})}function uc(n,e,t,i){e.forEach(r=>{const s=t[r.routeIndex%t.length],a=os(s,r.progress),o=os(s,Math.max(0,r.progress-.04));if(!a||!o)return;n.save(),n.strokeStyle=gn(r.color,.4),n.lineWidth=3,n.beginPath(),n.moveTo(o.x,o.y),n.lineTo(a.x,a.y),n.stroke();const l=Math.max(10,Math.min(16,10+r.size/128));n.shadowColor=gn(r.color,.7),n.shadowBlur=16,n.fillStyle=gn(r.color,.95),n.fillRect(a.x-l/2,a.y-l/2,l,l),n.shadowBlur=0,n.fillStyle="rgba(239, 246, 255, 0.9)",n.fillRect(a.x-2,a.y-2,4,4),e.length<=10&&i>720&&Po(n,a.x,a.y-18,`P${r.id+1}`,r.color,{backgroundAlpha:.2,font:"600 10px JetBrains Mono, monospace"}),n.restore()})}function fc(n,e,t,i,r,s){const a=i.length,o=a>0&&s.packetSize?(s.dataSize/(a*s.packetSize)*100).toFixed(1):"100.0";Mr(n,24,22,"Packet Switching",{background:"rgba(3, 7, 18, 0.92)",border:"rgba(34, 211, 238, 0.4)",color:"#67e8f9"}),Mr(n,190,22,`${a} packets in flight`,{background:"rgba(5, 8, 24, 0.82)",border:"rgba(167, 139, 250, 0.4)",color:"#c4b5fd"}),Mr(n,e-24,22,"Shared links / adaptive routes",{align:"right",background:"rgba(5, 10, 24, 0.82)",border:"rgba(148, 163, 184, 0.28)",color:"#e2e8f0"}),n.save(),n.fillStyle="rgba(186, 230, 253, 0.82)",n.font="500 12px JetBrains Mono, monospace",n.textAlign="left",n.fillText(`t=${r.toFixed(1)}s  |  ${s.dataSize??0} bytes split into ${a} packets  |  payload efficiency ${o}%`,24,t-26),n.restore()}function Mr(n,e,t,i,r={}){n.save(),n.font=r.font||"600 12px Inter, sans-serif";const o=n.measureText(i).width+12*2,l=30,d=r.align==="right"?e-o:e;No(n,d,t,o,l,999),n.fillStyle=r.background||"rgba(15, 23, 42, 0.75)",n.fill(),n.strokeStyle=r.border||"rgba(71, 85, 105, 0.55)",n.lineWidth=1,n.stroke(),n.fillStyle=r.color||"#e2e8f0",n.textAlign="center",n.textBaseline="middle",n.fillText(i,d+o/2,t+l/2+.5),n.restore()}function Po(n,e,t,i,r,s={}){n.save(),n.font=s.font||"600 10px Inter, sans-serif";const l=n.measureText(i).width+8*2,d=22;No(n,e-l/2,t-d/2,l,d,999),n.fillStyle=gn(r,s.backgroundAlpha??.16),n.fill(),n.strokeStyle=gn(r,.35),n.lineWidth=1,n.stroke(),n.fillStyle="#f8fafc",n.textAlign="center",n.textBaseline="middle",n.fillText(i,e,t+.5),n.restore()}function os(n,e){if(!n.length)return null;const t=Math.min(1,Math.max(0,Number.isFinite(e)?e:0)),r=pc(n)*t;let s=0;for(let a=0;a<n.length-1;a+=1){const o=n[a],l=n[a+1],d=ir(o,l);if(s+d>=r){const h=d===0?0:(r-s)/d;return{x:o.x+(l.x-o.x)*h,y:o.y+(l.y-o.y)*h}}s+=d}return n[n.length-1]}function pc(n){return n.reduce((e,t,i)=>i===n.length-1?e:e+ir(t,n[i+1]),0)}function ir(n,e){return Math.hypot(e.x-n.x,e.y-n.y)}function Lo(n,e){return[n,e].sort((t,i)=>t-i).join("-")}function No(n,e,t,i,r,s){const a=Math.min(s,i/2,r/2);n.beginPath(),n.moveTo(e+a,t),n.lineTo(e+i-a,t),n.quadraticCurveTo(e+i,t,e+i,t+a),n.lineTo(e+i,t+r-a),n.quadraticCurveTo(e+i,t+r,e+i-a,t+r),n.lineTo(e+a,t+r),n.quadraticCurveTo(e,t+r,e,t+r-a),n.lineTo(e,t+a),n.quadraticCurveTo(e,t,e+a,t),n.closePath()}function gn(n,e){const t=n.replace("#",""),i=t.length===3?t.split("").map(o=>`${o}${o}`).join(""):t,r=Number.parseInt(i.slice(0,2),16),s=Number.parseInt(i.slice(2,4),16),a=Number.parseInt(i.slice(4,6),16);return`rgba(${r}, ${s}, ${a}, ${e})`}const Gs=["#22d3ee","#a78bfa","#34d399","#fb7185","#f59e0b","#60a5fa"],mc=16/10,Hs=960;function gc({isRunning:n,speed:e,packetSize:t,dataSize:i,resetToken:r=0,onComplete:s,onHover:a}){const o=Me.useRef(null),l=Me.useRef(null),d=Me.useRef(Vs(t,i)),h=Me.useRef(!1),p=Me.useRef(s),m=Me.useRef(a);return Me.useEffect(()=>{p.current=s},[s]),Me.useEffect(()=>{m.current=a},[a]),Me.useEffect(()=>{d.current=Vs(t,i),h.current=!1},[t,i,r]),Me.useEffect(()=>{const g=o.current;if(!g)return;const v=g.getContext("2d");if(!v)return;let M=0;const f=u=>{var P;const b=M===0?0:Math.min((u-M)/1e3,.05);M=u;const S=_c(g,v),w=d.current;n&&!h.current&&(w.time+=b*e,w.packets=w.packets.map(A=>({...A,progress:Math.min(1,A.progress+b*e*A.velocity)})),w.packets.every(A=>A.progress>=1)&&(h.current=!0,(P=p.current)==null||P.call(p))),sc(v,S.width,S.height,w.packets,w.time,{packetSize:t,dataSize:i}),l.current=requestAnimationFrame(f)};return l.current=requestAnimationFrame(f),()=>{l.current&&cancelAnimationFrame(l.current)}},[n,e,t,i,r]),Me.useEffect(()=>{const g=o.current;if(!g)return;const v=f=>{var R,A;const u=g.getBoundingClientRect(),b=f.clientX-u.left,S=f.clientY-u.top,w={width:u.width,height:u.height},P=ac(b,S,d.current,w);P?(R=m.current)==null||R.call(m,{x:f.clientX,y:f.clientY,type:P.type}):(A=m.current)==null||A.call(m,null)},M=()=>{var f;(f=m.current)==null||f.call(m,null)};return g.addEventListener("mousemove",v),g.addEventListener("mouseleave",M),()=>{g.removeEventListener("mousemove",v),g.removeEventListener("mouseleave",M)}},[]),c.jsx("canvas",{ref:o,className:"visualizer-canvas","aria-label":"Packet switching visualizer"})}function Vs(n,e){const t=Ws(e,256,64,4096,64),i=Ws(n,64,16,Math.max(16,t),16),r=Math.max(1,Math.ceil(t/i));return{time:0,packets:Array.from({length:r},(s,a)=>({id:a,size:a===r-1&&t-i*(r-1)||i,routeIndex:a%4,progress:(a/r*.9+a%3*.06)%1,velocity:.09+a%4*.02,color:Gs[a%Gs.length]}))}}function _c(n,e){var a;const t=((a=n.parentElement)==null?void 0:a.clientWidth)||Hs,i=Math.max(320,Math.min(Hs,Math.floor(t))),r=Math.max(300,Math.floor(i/mc)),s=window.devicePixelRatio||1;return(n.width!==Math.floor(i*s)||n.height!==Math.floor(r*s))&&(n.width=Math.floor(i*s),n.height=Math.floor(r*s),n.style.width=`${i}px`,n.style.height=`${r}px`),e.setTransform(s,0,0,s,0,0),{width:i,height:r}}function Ws(n,e,t,i,r=1){const s=Number(n);if(!Number.isFinite(s))return e;const a=Math.min(i,Math.max(t,s)),o=r>1?Math.round(a/r)*r:a;return Math.min(i,Math.max(t,o))}const js=["#1f5e69","#24546f","#34d399","#f59e0b","#fb7185","#a78bfa"];function vc(n,e,t,i,r,s={}){if(!n)return;n.clearRect(0,0,e,t),Sc(n,e,t,r),Mc(n,e,t,r);const a=xc(e,t,i.length);Ec(n,a.core),yc(n,a),bc(n,a,i,r),wc(n,e,t,i,r,s)}function xc(n,e,t){const i={x:n*.12,y:e*.5,label:"Source"},r={x:n*.88,y:e*.5,label:"Destination"},s={x:n*.5-n*.12,y:e*.22,width:n*.24,height:e*.56},a=Array.from({length:t},(o,l)=>{const d=e*.24+e*.52/Math.max(t-1,1)*l;return{y:t===1?e*.5:d,label:`Call ${l+1}`}});return{source:i,destination:r,core:s,lanes:a}}function Sc(n,e,t,i){const r=n.createLinearGradient(0,0,e,t);r.addColorStop(0,"#071521"),r.addColorStop(.55,"#092433"),r.addColorStop(1,"#071019"),n.fillStyle=r,n.fillRect(0,0,e,t);const s=n.createRadialGradient(e*.52,t*.5,20,e*.52,t*.5,e*.5);s.addColorStop(0,"rgba(52, 211, 153, 0.16)"),s.addColorStop(.45,"rgba(31, 96, 112, 0.08)"),s.addColorStop(1,"rgba(0, 0, 0, 0)"),n.fillStyle=s,n.fillRect(0,0,e,t),n.fillStyle="rgba(31, 96, 112, 0.05)",n.beginPath(),n.arc(e*.82,t*(.3+Math.sin(i*.25)*.05),e*.17,0,Math.PI*2),n.fill()}function Mc(n,e,t,i){n.save(),n.strokeStyle="rgba(148, 163, 184, 0.06)",n.lineWidth=1;const r=Math.max(44,e/15),s=i*16%r;for(let a=0;a<=e;a+=r)n.beginPath(),n.moveTo(a,0),n.lineTo(a+s*.08,t),n.stroke();for(let a=-r+s;a<=t+r;a+=r)n.beginPath(),n.moveTo(0,a),n.lineTo(e,a),n.stroke();n.restore()}function Ec(n,e){n.save(),bs(n,e.x,e.y,e.width,e.height,28),n.fillStyle="rgba(8, 28, 38, 0.82)",n.fill(),n.strokeStyle="rgba(45, 212, 191, 0.25)",n.lineWidth=1.5,n.stroke();const t=6,i=e.height/(t+1);for(let r=1;r<=t;r+=1){const s=e.y+i*r;n.strokeStyle="rgba(125, 211, 252, 0.09)",n.lineWidth=1,n.beginPath(),n.moveTo(e.x+16,s),n.lineTo(e.x+e.width-16,s),n.stroke()}n.fillStyle="#ccfbf1",n.font="700 14px Inter, sans-serif",n.textAlign="center",n.fillText("Circuit Core",e.x+e.width/2,e.y-18),n.restore()}function yc(n,e){Xs(n,e.source.x,e.source.y,e.source.label,"#1f5e69"),Xs(n,e.destination.x,e.destination.y,e.destination.label,"#f59e0b")}function Xs(n,e,t,i,r){n.save(),n.fillStyle=nn(r,.14),n.beginPath(),n.arc(e,t,34,0,Math.PI*2),n.fill(),n.strokeStyle=nn(r,.8),n.lineWidth=2.5,n.beginPath(),n.arc(e,t,28,0,Math.PI*2),n.stroke(),n.fillStyle=r,n.beginPath(),n.arc(e,t,12,0,Math.PI*2),n.fill(),n.fillStyle="#f8fafc",n.font="700 12px Inter, sans-serif",n.textAlign="center",n.fillText(i,e,t+52),n.restore()}function bc(n,e,t,i){t.forEach((r,s)=>{const a=e.lanes[s],o=r.color||js[s%js.length],l=Tc(e,a.y),d=ls(r.progress),h=Ys(l,d),p=Ys(l,ls(d-.18));!h||!p||(Ac(n,l,a.label,o,i,d),qs(n,h,o,10),qs(n,p,o,6,.35))})}function Tc(n,e){return[{x:n.source.x+28,y:n.source.y},{x:n.source.x+54,y:e},{x:n.core.x,y:e},{x:n.core.x+n.core.width,y:e},{x:n.destination.x-54,y:e},{x:n.destination.x-28,y:n.destination.y}]}function Ac(n,e,t,i,r,s){const a=e[1];n.save(),n.strokeStyle="rgba(71, 85, 105, 0.4)",n.lineWidth=9,n.lineCap="round",yr(n,e),n.stroke(),n.strokeStyle=nn(i,.75),n.shadowColor=nn(i,.4),n.shadowBlur=10,n.lineWidth=4,n.setLineDash([26,14]),n.lineDashOffset=-r*24,yr(n,e),n.stroke(),n.setLineDash([]),n.strokeStyle=nn(i,.18+s*.16),n.lineWidth=14,yr(n,e),n.stroke(),Rc(n,a.x+16,a.y-18,t,i),n.restore()}function qs(n,e,t,i,r=.55){n.save(),n.fillStyle=nn(t,r),n.shadowColor=nn(t,.85),n.shadowBlur=18,n.beginPath(),n.arc(e.x,e.y,i,0,Math.PI*2),n.fill(),n.shadowBlur=0,n.fillStyle="#f8fafc",n.beginPath(),n.arc(e.x,e.y,Math.max(2,i*.28),0,Math.PI*2),n.fill(),n.restore()}function wc(n,e,t,i,r,s){const a=i.reduce((o,l)=>o+(l.bandwidth||64),0);Er(n,24,22,"Circuit Switching",{background:"rgba(8, 22, 29, 0.88)",border:"rgba(45, 212, 191, 0.35)",color:"#ccfbf1"}),Er(n,196,22,`${i.length} reserved lanes`,{background:"rgba(8, 27, 41, 0.72)",border:"rgba(31, 78, 104, 0.3)",color:"#a9bfd2"}),Er(n,e-24,22,"Setup first, then steady transfer",{align:"right",background:"rgba(15, 23, 42, 0.72)",border:"rgba(148, 163, 184, 0.22)",color:"#e2e8f0"}),n.save(),n.fillStyle="rgba(226, 232, 240, 0.88)",n.font="500 12px JetBrains Mono, monospace",n.textAlign="left",n.fillText(`t=${r.toFixed(1)}s  |  ${i.length} active circuits  |  reserved bandwidth ${a} kbps  |  ${s.label||"dedicated path"}`,24,t-26),n.restore()}function Er(n,e,t,i,r={}){n.save(),n.font=r.font||"600 12px Inter, sans-serif";const o=n.measureText(i).width+12*2,l=30,d=r.align==="right"?e-o:e;bs(n,d,t,o,l,999),n.fillStyle=r.background||"rgba(15, 23, 42, 0.75)",n.fill(),n.strokeStyle=r.border||"rgba(71, 85, 105, 0.55)",n.lineWidth=1,n.stroke(),n.fillStyle=r.color||"#e2e8f0",n.textAlign="center",n.textBaseline="middle",n.fillText(i,d+o/2,t+l/2+.5),n.restore()}function Rc(n,e,t,i,r){n.save(),n.font="600 10px Inter, sans-serif";const a=n.measureText(i).width+16,o=22;bs(n,e-a/2,t-o/2,a,o,999),n.fillStyle=nn(r,.16),n.fill(),n.strokeStyle=nn(r,.32),n.lineWidth=1,n.stroke(),n.fillStyle="#f8fafc",n.textAlign="center",n.textBaseline="middle",n.fillText(i,e,t+.5),n.restore()}function Ys(n,e){const t=ls(e),i=Cc(n)*t;let r=0;for(let s=0;s<n.length-1;s+=1){const a=n[s],o=n[s+1],l=Do(a,o);if(r+l>=i){const d=l===0?0:(i-r)/l;return{x:a.x+(o.x-a.x)*d,y:a.y+(o.y-a.y)*d}}r+=l}return n[n.length-1]}function Cc(n){return n.reduce((e,t,i)=>i===n.length-1?e:e+Do(t,n[i+1]),0)}function Do(n,e){return Math.hypot(e.x-n.x,e.y-n.y)}function ls(n){return Number.isFinite(n)?(n%1+1)%1:0}function yr(n,e){n.beginPath(),n.moveTo(e[0].x,e[0].y),e.slice(1).forEach(t=>n.lineTo(t.x,t.y))}function bs(n,e,t,i,r,s){const a=Math.min(s,i/2,r/2);n.beginPath(),n.moveTo(e+a,t),n.lineTo(e+i-a,t),n.quadraticCurveTo(e+i,t,e+i,t+a),n.lineTo(e+i,t+r-a),n.quadraticCurveTo(e+i,t+r,e+i-a,t+r),n.lineTo(e+a,t+r),n.quadraticCurveTo(e,t+r,e,t+r-a),n.lineTo(e,t+a),n.quadraticCurveTo(e,t,e+a,t),n.closePath()}function nn(n,e){const t=n.replace("#",""),i=t.length===3?t.split("").map(o=>`${o}${o}`).join(""):t,r=Number.parseInt(i.slice(0,2),16),s=Number.parseInt(i.slice(2,4),16),a=Number.parseInt(i.slice(4,6),16);return`rgba(${r}, ${s}, ${a}, ${e})`}const $s=["#1f5e69","#24546f","#34d399","#f59e0b","#fb7185","#a78bfa"],Ks=[64,128,128,256,256,512],Pc=16/10,Zs=960;function Lc({isRunning:n,speed:e,numCalls:t,resetToken:i=0}){const r=Me.useRef(null),s=Me.useRef(null),a=Me.useRef(Js(t));return Me.useEffect(()=>{a.current=Js(t)},[t,i]),Me.useEffect(()=>{const o=r.current;if(!o)return;const l=o.getContext("2d");if(!l)return;let d=0;const h=p=>{const m=d===0?0:Math.min((p-d)/1e3,.05);d=p;const g=Nc(o,l),v=a.current;n&&(v.time+=m*e,v.calls=v.calls.map(M=>({...M,progress:Uc(M.progress+m*e*M.velocity)}))),vc(l,g.width,g.height,v.calls,v.time,{label:"bandwidth remains reserved even while traffic is bursty"}),s.current=requestAnimationFrame(h)};return s.current=requestAnimationFrame(h),()=>{s.current&&cancelAnimationFrame(s.current)}},[n,e,t,i]),c.jsx("canvas",{ref:r,className:"visualizer-canvas","aria-label":"Circuit switching visualizer"})}function Js(n){const e=Dc(n,3,1,6);return{time:0,calls:Array.from({length:e},(t,i)=>({id:i,progress:i*.19%1,velocity:.12+i%3*.03,bandwidth:Ks[i%Ks.length],color:$s[i%$s.length]}))}}function Nc(n,e){var a;const t=((a=n.parentElement)==null?void 0:a.clientWidth)||Zs,i=Math.max(320,Math.min(Zs,Math.floor(t))),r=Math.max(300,Math.floor(i/Pc)),s=window.devicePixelRatio||1;return(n.width!==Math.floor(i*s)||n.height!==Math.floor(r*s))&&(n.width=Math.floor(i*s),n.height=Math.floor(r*s),n.style.width=`${i}px`,n.style.height=`${r}px`),e.setTransform(s,0,0,s,0,0),{width:i,height:r}}function Dc(n,e,t,i){const r=Number(n);return Number.isFinite(r)?Math.min(i,Math.max(t,Math.round(r))):e}function Uc(n){return(n%1+1)%1}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ts="162",Ic=0,Qs=1,Fc=2,Uo=1,Oc=2,Qt=3,Sn=0,yt=1,Ut=2,_n=0,ai=1,ea=2,ta=3,na=4,Bc=5,Un=100,zc=101,kc=102,ia=103,ra=104,Gc=200,Hc=201,Vc=202,Wc=203,cs=204,ds=205,jc=206,Xc=207,qc=208,Yc=209,$c=210,Kc=211,Zc=212,Jc=213,Qc=214,ed=0,td=1,nd=2,rr=3,id=4,rd=5,sd=6,ad=7,Io=0,od=1,ld=2,vn=0,cd=1,dd=2,hd=3,ud=4,fd=5,pd=6,md=7,Fo=300,li=301,ci=302,hs=303,us=304,ur=306,fs=1e3,kt=1001,ps=1002,_t=1003,sa=1004,_i=1005,St=1006,br=1007,On=1008,xn=1009,gd=1010,_d=1011,As=1012,Oo=1013,mn=1014,en=1015,Ti=1016,Bo=1017,zo=1018,Bn=1020,vd=1021,Gt=1023,xd=1024,Sd=1025,zn=1026,di=1027,Md=1028,ko=1029,Ed=1030,Go=1031,Ho=1033,Tr=33776,Ar=33777,wr=33778,Rr=33779,aa=35840,oa=35841,la=35842,ca=35843,Vo=36196,da=37492,ha=37496,ua=37808,fa=37809,pa=37810,ma=37811,ga=37812,_a=37813,va=37814,xa=37815,Sa=37816,Ma=37817,Ea=37818,ya=37819,ba=37820,Ta=37821,Cr=36492,Aa=36494,wa=36495,yd=36283,Ra=36284,Ca=36285,Pa=36286,bd=3200,Td=3201,Ad=0,wd=1,fn="",Vt="srgb",En="srgb-linear",ws="display-p3",fr="display-p3-linear",sr="linear",Ke="srgb",ar="rec709",or="p3",Gn=7680,La=519,Rd=512,Cd=513,Pd=514,Wo=515,Ld=516,Nd=517,Dd=518,Ud=519,Na=35044,Da="300 es",ms=1035,tn=2e3,lr=2001;class ui{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Pr=Math.PI/180,gs=180/Math.PI;function wi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ft[n&255]+ft[n>>8&255]+ft[n>>16&255]+ft[n>>24&255]+"-"+ft[e&255]+ft[e>>8&255]+"-"+ft[e>>16&15|64]+ft[e>>24&255]+"-"+ft[t&63|128]+ft[t>>8&255]+"-"+ft[t>>16&255]+ft[t>>24&255]+ft[i&255]+ft[i>>8&255]+ft[i>>16&255]+ft[i>>24&255]).toLowerCase()}function Mt(n,e,t){return Math.max(e,Math.min(t,n))}function Id(n,e){return(n%e+e)%e}function Lr(n,e,t){return(1-t)*n+t*e}function Ua(n){return(n&n-1)===0&&n!==0}function _s(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function vi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function xt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class We{constructor(e=0,t=0){We.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Mt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ie{constructor(e,t,i,r,s,a,o,l,d){Ie.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,d)}set(e,t,i,r,s,a,o,l,d){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],d=i[1],h=i[4],p=i[7],m=i[2],g=i[5],v=i[8],M=r[0],f=r[3],u=r[6],b=r[1],S=r[4],w=r[7],P=r[2],R=r[5],A=r[8];return s[0]=a*M+o*b+l*P,s[3]=a*f+o*S+l*R,s[6]=a*u+o*w+l*A,s[1]=d*M+h*b+p*P,s[4]=d*f+h*S+p*R,s[7]=d*u+h*w+p*A,s[2]=m*M+g*b+v*P,s[5]=m*f+g*S+v*R,s[8]=m*u+g*w+v*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],d=e[7],h=e[8];return t*a*h-t*o*d-i*s*h+i*o*l+r*s*d-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],d=e[7],h=e[8],p=h*a-o*d,m=o*l-h*s,g=d*s-a*l,v=t*p+i*m+r*g;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/v;return e[0]=p*M,e[1]=(r*d-h*i)*M,e[2]=(o*i-r*a)*M,e[3]=m*M,e[4]=(h*t-r*l)*M,e[5]=(r*s-o*t)*M,e[6]=g*M,e[7]=(i*l-d*t)*M,e[8]=(a*t-i*s)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),d=Math.sin(s);return this.set(i*l,i*d,-i*(l*a+d*o)+a+e,-r*d,r*l,-r*(-d*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Nr.makeScale(e,t)),this}rotate(e){return this.premultiply(Nr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Nr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Nr=new Ie;function jo(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function cr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Fd(){const n=cr("canvas");return n.style.display="block",n}const Ia={};function Od(n){n in Ia||(Ia[n]=!0,console.warn(n))}const Fa=new Ie().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Oa=new Ie().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ni={[En]:{transfer:sr,primaries:ar,toReference:n=>n,fromReference:n=>n},[Vt]:{transfer:Ke,primaries:ar,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[fr]:{transfer:sr,primaries:or,toReference:n=>n.applyMatrix3(Oa),fromReference:n=>n.applyMatrix3(Fa)},[ws]:{transfer:Ke,primaries:or,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Oa),fromReference:n=>n.applyMatrix3(Fa).convertLinearToSRGB()}},Bd=new Set([En,fr]),Xe={enabled:!0,_workingColorSpace:En,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Bd.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Ni[e].toReference,r=Ni[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Ni[n].primaries},getTransfer:function(n){return n===fn?sr:Ni[n].transfer}};function oi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Dr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Hn;class Xo{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Hn===void 0&&(Hn=cr("canvas")),Hn.width=e.width,Hn.height=e.height;const i=Hn.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Hn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=cr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=oi(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(oi(t[i]/255)*255):t[i]=oi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let zd=0;class qo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zd++}),this.uuid=wi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ur(r[a].image)):s.push(Ur(r[a]))}else s=Ur(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Ur(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Xo.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let kd=0;class bt extends ui{constructor(e=bt.DEFAULT_IMAGE,t=bt.DEFAULT_MAPPING,i=kt,r=kt,s=St,a=On,o=Gt,l=xn,d=bt.DEFAULT_ANISOTROPY,h=fn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kd++}),this.uuid=wi(),this.name="",this.source=new qo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=d,this.format=o,this.internalFormat=null,this.type=l,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Fo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fs:e.x=e.x-Math.floor(e.x);break;case kt:e.x=e.x<0?0:1;break;case ps:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fs:e.y=e.y-Math.floor(e.y);break;case kt:e.y=e.y<0?0:1;break;case ps:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}bt.DEFAULT_IMAGE=null;bt.DEFAULT_MAPPING=Fo;bt.DEFAULT_ANISOTROPY=1;class ht{constructor(e=0,t=0,i=0,r=1){ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,d=l[0],h=l[4],p=l[8],m=l[1],g=l[5],v=l[9],M=l[2],f=l[6],u=l[10];if(Math.abs(h-m)<.01&&Math.abs(p-M)<.01&&Math.abs(v-f)<.01){if(Math.abs(h+m)<.1&&Math.abs(p+M)<.1&&Math.abs(v+f)<.1&&Math.abs(d+g+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(d+1)/2,w=(g+1)/2,P=(u+1)/2,R=(h+m)/4,A=(p+M)/4,H=(v+f)/4;return S>w&&S>P?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=R/i,s=A/i):w>P?w<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(w),i=R/r,s=H/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=A/s,r=H/s),this.set(i,r,s,t),this}let b=Math.sqrt((f-v)*(f-v)+(p-M)*(p-M)+(m-h)*(m-h));return Math.abs(b)<.001&&(b=1),this.x=(f-v)/b,this.y=(p-M)/b,this.z=(m-h)/b,this.w=Math.acos((d+g+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Gd extends ui{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:St,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);const s=new bt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new qo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class kn extends Gd{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Yo extends bt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=_t,this.minFilter=_t,this.wrapR=kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hd extends bt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=_t,this.minFilter=_t,this.wrapR=kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ri{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],d=i[r+1],h=i[r+2],p=i[r+3];const m=s[a+0],g=s[a+1],v=s[a+2],M=s[a+3];if(o===0){e[t+0]=l,e[t+1]=d,e[t+2]=h,e[t+3]=p;return}if(o===1){e[t+0]=m,e[t+1]=g,e[t+2]=v,e[t+3]=M;return}if(p!==M||l!==m||d!==g||h!==v){let f=1-o;const u=l*m+d*g+h*v+p*M,b=u>=0?1:-1,S=1-u*u;if(S>Number.EPSILON){const P=Math.sqrt(S),R=Math.atan2(P,u*b);f=Math.sin(f*R)/P,o=Math.sin(o*R)/P}const w=o*b;if(l=l*f+m*w,d=d*f+g*w,h=h*f+v*w,p=p*f+M*w,f===1-o){const P=1/Math.sqrt(l*l+d*d+h*h+p*p);l*=P,d*=P,h*=P,p*=P}}e[t]=l,e[t+1]=d,e[t+2]=h,e[t+3]=p}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],d=i[r+2],h=i[r+3],p=s[a],m=s[a+1],g=s[a+2],v=s[a+3];return e[t]=o*v+h*p+l*g-d*m,e[t+1]=l*v+h*m+d*p-o*g,e[t+2]=d*v+h*g+o*m-l*p,e[t+3]=h*v-o*p-l*m-d*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,d=o(i/2),h=o(r/2),p=o(s/2),m=l(i/2),g=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=m*h*p+d*g*v,this._y=d*g*p-m*h*v,this._z=d*h*v+m*g*p,this._w=d*h*p-m*g*v;break;case"YXZ":this._x=m*h*p+d*g*v,this._y=d*g*p-m*h*v,this._z=d*h*v-m*g*p,this._w=d*h*p+m*g*v;break;case"ZXY":this._x=m*h*p-d*g*v,this._y=d*g*p+m*h*v,this._z=d*h*v+m*g*p,this._w=d*h*p-m*g*v;break;case"ZYX":this._x=m*h*p-d*g*v,this._y=d*g*p+m*h*v,this._z=d*h*v-m*g*p,this._w=d*h*p+m*g*v;break;case"YZX":this._x=m*h*p+d*g*v,this._y=d*g*p+m*h*v,this._z=d*h*v-m*g*p,this._w=d*h*p-m*g*v;break;case"XZY":this._x=m*h*p-d*g*v,this._y=d*g*p-m*h*v,this._z=d*h*v+m*g*p,this._w=d*h*p+m*g*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],d=t[2],h=t[6],p=t[10],m=i+o+p;if(m>0){const g=.5/Math.sqrt(m+1);this._w=.25/g,this._x=(h-l)*g,this._y=(s-d)*g,this._z=(a-r)*g}else if(i>o&&i>p){const g=2*Math.sqrt(1+i-o-p);this._w=(h-l)/g,this._x=.25*g,this._y=(r+a)/g,this._z=(s+d)/g}else if(o>p){const g=2*Math.sqrt(1+o-i-p);this._w=(s-d)/g,this._x=(r+a)/g,this._y=.25*g,this._z=(l+h)/g}else{const g=2*Math.sqrt(1+p-i-o);this._w=(a-r)/g,this._x=(s+d)/g,this._y=(l+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,d=t._z,h=t._w;return this._x=i*h+a*o+r*d-s*l,this._y=r*h+a*l+s*o-i*d,this._z=s*h+a*d+i*l-r*o,this._w=a*h-i*o-r*l-s*d,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const g=1-t;return this._w=g*a+t*this._w,this._x=g*i+t*this._x,this._y=g*r+t*this._y,this._z=g*s+t*this._z,this.normalize(),this}const d=Math.sqrt(l),h=Math.atan2(d,o),p=Math.sin((1-t)*h)/d,m=Math.sin(t*h)/d;return this._w=a*p+this._w*m,this._x=i*p+this._x*m,this._y=r*p+this._y*m,this._z=s*p+this._z*m,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,i=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ba.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ba.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,d=2*(a*r-o*i),h=2*(o*t-s*r),p=2*(s*i-a*t);return this.x=t+l*d+a*p-o*h,this.y=i+l*h+o*d-s*p,this.z=r+l*p+s*h-a*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ir.copy(this).projectOnVector(e),this.sub(Ir)}reflect(e){return this.sub(Ir.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Mt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ir=new I,Ba=new Ri;class Ci{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ft.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ft.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Ft.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Ft):Ft.fromBufferAttribute(s,a),Ft.applyMatrix4(e.matrixWorld),this.expandByPoint(Ft);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Di.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Di.copy(i.boundingBox)),Di.applyMatrix4(e.matrixWorld),this.union(Di)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ft),Ft.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xi),Ui.subVectors(this.max,xi),Vn.subVectors(e.a,xi),Wn.subVectors(e.b,xi),jn.subVectors(e.c,xi),on.subVectors(Wn,Vn),ln.subVectors(jn,Wn),Tn.subVectors(Vn,jn);let t=[0,-on.z,on.y,0,-ln.z,ln.y,0,-Tn.z,Tn.y,on.z,0,-on.x,ln.z,0,-ln.x,Tn.z,0,-Tn.x,-on.y,on.x,0,-ln.y,ln.x,0,-Tn.y,Tn.x,0];return!Fr(t,Vn,Wn,jn,Ui)||(t=[1,0,0,0,1,0,0,0,1],!Fr(t,Vn,Wn,jn,Ui))?!1:(Ii.crossVectors(on,ln),t=[Ii.x,Ii.y,Ii.z],Fr(t,Vn,Wn,jn,Ui))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ft).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ft).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Yt=[new I,new I,new I,new I,new I,new I,new I,new I],Ft=new I,Di=new Ci,Vn=new I,Wn=new I,jn=new I,on=new I,ln=new I,Tn=new I,xi=new I,Ui=new I,Ii=new I,An=new I;function Fr(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){An.fromArray(n,s);const o=r.x*Math.abs(An.x)+r.y*Math.abs(An.y)+r.z*Math.abs(An.z),l=e.dot(An),d=t.dot(An),h=i.dot(An);if(Math.max(-Math.max(l,d,h),Math.min(l,d,h))>o)return!1}return!0}const Vd=new Ci,Si=new I,Or=new I;class Rs{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Vd.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Si.subVectors(e,this.center);const t=Si.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Si,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Or.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Si.copy(e.center).add(Or)),this.expandByPoint(Si.copy(e.center).sub(Or))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $t=new I,Br=new I,Fi=new I,cn=new I,zr=new I,Oi=new I,kr=new I;class Wd{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$t)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=$t.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($t.copy(this.origin).addScaledVector(this.direction,t),$t.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Br.copy(e).add(t).multiplyScalar(.5),Fi.copy(t).sub(e).normalize(),cn.copy(this.origin).sub(Br);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Fi),o=cn.dot(this.direction),l=-cn.dot(Fi),d=cn.lengthSq(),h=Math.abs(1-a*a);let p,m,g,v;if(h>0)if(p=a*l-o,m=a*o-l,v=s*h,p>=0)if(m>=-v)if(m<=v){const M=1/h;p*=M,m*=M,g=p*(p+a*m+2*o)+m*(a*p+m+2*l)+d}else m=s,p=Math.max(0,-(a*m+o)),g=-p*p+m*(m+2*l)+d;else m=-s,p=Math.max(0,-(a*m+o)),g=-p*p+m*(m+2*l)+d;else m<=-v?(p=Math.max(0,-(-a*s+o)),m=p>0?-s:Math.min(Math.max(-s,-l),s),g=-p*p+m*(m+2*l)+d):m<=v?(p=0,m=Math.min(Math.max(-s,-l),s),g=m*(m+2*l)+d):(p=Math.max(0,-(a*s+o)),m=p>0?s:Math.min(Math.max(-s,-l),s),g=-p*p+m*(m+2*l)+d);else m=a>0?-s:s,p=Math.max(0,-(a*m+o)),g=-p*p+m*(m+2*l)+d;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(Br).addScaledVector(Fi,m),g}intersectSphere(e,t){$t.subVectors(e.center,this.origin);const i=$t.dot(this.direction),r=$t.dot($t)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const d=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,m=this.origin;return d>=0?(i=(e.min.x-m.x)*d,r=(e.max.x-m.x)*d):(i=(e.max.x-m.x)*d,r=(e.min.x-m.x)*d),h>=0?(s=(e.min.y-m.y)*h,a=(e.max.y-m.y)*h):(s=(e.max.y-m.y)*h,a=(e.min.y-m.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),p>=0?(o=(e.min.z-m.z)*p,l=(e.max.z-m.z)*p):(o=(e.max.z-m.z)*p,l=(e.min.z-m.z)*p),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,$t)!==null}intersectTriangle(e,t,i,r,s){zr.subVectors(t,e),Oi.subVectors(i,e),kr.crossVectors(zr,Oi);let a=this.direction.dot(kr),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;cn.subVectors(this.origin,e);const l=o*this.direction.dot(Oi.crossVectors(cn,Oi));if(l<0)return null;const d=o*this.direction.dot(zr.cross(cn));if(d<0||l+d>a)return null;const h=-o*cn.dot(kr);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rt{constructor(e,t,i,r,s,a,o,l,d,h,p,m,g,v,M,f){rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,d,h,p,m,g,v,M,f)}set(e,t,i,r,s,a,o,l,d,h,p,m,g,v,M,f){const u=this.elements;return u[0]=e,u[4]=t,u[8]=i,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=l,u[2]=d,u[6]=h,u[10]=p,u[14]=m,u[3]=g,u[7]=v,u[11]=M,u[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Xn.setFromMatrixColumn(e,0).length(),s=1/Xn.setFromMatrixColumn(e,1).length(),a=1/Xn.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),d=Math.sin(r),h=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const m=a*h,g=a*p,v=o*h,M=o*p;t[0]=l*h,t[4]=-l*p,t[8]=d,t[1]=g+v*d,t[5]=m-M*d,t[9]=-o*l,t[2]=M-m*d,t[6]=v+g*d,t[10]=a*l}else if(e.order==="YXZ"){const m=l*h,g=l*p,v=d*h,M=d*p;t[0]=m+M*o,t[4]=v*o-g,t[8]=a*d,t[1]=a*p,t[5]=a*h,t[9]=-o,t[2]=g*o-v,t[6]=M+m*o,t[10]=a*l}else if(e.order==="ZXY"){const m=l*h,g=l*p,v=d*h,M=d*p;t[0]=m-M*o,t[4]=-a*p,t[8]=v+g*o,t[1]=g+v*o,t[5]=a*h,t[9]=M-m*o,t[2]=-a*d,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const m=a*h,g=a*p,v=o*h,M=o*p;t[0]=l*h,t[4]=v*d-g,t[8]=m*d+M,t[1]=l*p,t[5]=M*d+m,t[9]=g*d-v,t[2]=-d,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const m=a*l,g=a*d,v=o*l,M=o*d;t[0]=l*h,t[4]=M-m*p,t[8]=v*p+g,t[1]=p,t[5]=a*h,t[9]=-o*h,t[2]=-d*h,t[6]=g*p+v,t[10]=m-M*p}else if(e.order==="XZY"){const m=a*l,g=a*d,v=o*l,M=o*d;t[0]=l*h,t[4]=-p,t[8]=d*h,t[1]=m*p+M,t[5]=a*h,t[9]=g*p-v,t[2]=v*p-g,t[6]=o*h,t[10]=M*p+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jd,e,Xd)}lookAt(e,t,i){const r=this.elements;return wt.subVectors(e,t),wt.lengthSq()===0&&(wt.z=1),wt.normalize(),dn.crossVectors(i,wt),dn.lengthSq()===0&&(Math.abs(i.z)===1?wt.x+=1e-4:wt.z+=1e-4,wt.normalize(),dn.crossVectors(i,wt)),dn.normalize(),Bi.crossVectors(wt,dn),r[0]=dn.x,r[4]=Bi.x,r[8]=wt.x,r[1]=dn.y,r[5]=Bi.y,r[9]=wt.y,r[2]=dn.z,r[6]=Bi.z,r[10]=wt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],d=i[12],h=i[1],p=i[5],m=i[9],g=i[13],v=i[2],M=i[6],f=i[10],u=i[14],b=i[3],S=i[7],w=i[11],P=i[15],R=r[0],A=r[4],H=r[8],K=r[12],x=r[1],T=r[5],G=r[9],$=r[13],L=r[2],X=r[6],W=r[10],q=r[14],j=r[3],k=r[7],te=r[11],Q=r[15];return s[0]=a*R+o*x+l*L+d*j,s[4]=a*A+o*T+l*X+d*k,s[8]=a*H+o*G+l*W+d*te,s[12]=a*K+o*$+l*q+d*Q,s[1]=h*R+p*x+m*L+g*j,s[5]=h*A+p*T+m*X+g*k,s[9]=h*H+p*G+m*W+g*te,s[13]=h*K+p*$+m*q+g*Q,s[2]=v*R+M*x+f*L+u*j,s[6]=v*A+M*T+f*X+u*k,s[10]=v*H+M*G+f*W+u*te,s[14]=v*K+M*$+f*q+u*Q,s[3]=b*R+S*x+w*L+P*j,s[7]=b*A+S*T+w*X+P*k,s[11]=b*H+S*G+w*W+P*te,s[15]=b*K+S*$+w*q+P*Q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],d=e[13],h=e[2],p=e[6],m=e[10],g=e[14],v=e[3],M=e[7],f=e[11],u=e[15];return v*(+s*l*p-r*d*p-s*o*m+i*d*m+r*o*g-i*l*g)+M*(+t*l*g-t*d*m+s*a*m-r*a*g+r*d*h-s*l*h)+f*(+t*d*p-t*o*g-s*a*p+i*a*g+s*o*h-i*d*h)+u*(-r*o*h-t*l*p+t*o*m+r*a*p-i*a*m+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],d=e[7],h=e[8],p=e[9],m=e[10],g=e[11],v=e[12],M=e[13],f=e[14],u=e[15],b=p*f*d-M*m*d+M*l*g-o*f*g-p*l*u+o*m*u,S=v*m*d-h*f*d-v*l*g+a*f*g+h*l*u-a*m*u,w=h*M*d-v*p*d+v*o*g-a*M*g-h*o*u+a*p*u,P=v*p*l-h*M*l-v*o*m+a*M*m+h*o*f-a*p*f,R=t*b+i*S+r*w+s*P;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return e[0]=b*A,e[1]=(M*m*s-p*f*s-M*r*g+i*f*g+p*r*u-i*m*u)*A,e[2]=(o*f*s-M*l*s+M*r*d-i*f*d-o*r*u+i*l*u)*A,e[3]=(p*l*s-o*m*s-p*r*d+i*m*d+o*r*g-i*l*g)*A,e[4]=S*A,e[5]=(h*f*s-v*m*s+v*r*g-t*f*g-h*r*u+t*m*u)*A,e[6]=(v*l*s-a*f*s-v*r*d+t*f*d+a*r*u-t*l*u)*A,e[7]=(a*m*s-h*l*s+h*r*d-t*m*d-a*r*g+t*l*g)*A,e[8]=w*A,e[9]=(v*p*s-h*M*s-v*i*g+t*M*g+h*i*u-t*p*u)*A,e[10]=(a*M*s-v*o*s+v*i*d-t*M*d-a*i*u+t*o*u)*A,e[11]=(h*o*s-a*p*s-h*i*d+t*p*d+a*i*g-t*o*g)*A,e[12]=P*A,e[13]=(h*M*r-v*p*r+v*i*m-t*M*m-h*i*f+t*p*f)*A,e[14]=(v*o*r-a*M*r-v*i*l+t*M*l+a*i*f-t*o*f)*A,e[15]=(a*p*r-h*o*r+h*i*l-t*p*l-a*i*m+t*o*m)*A,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,d=s*a,h=s*o;return this.set(d*a+i,d*o-r*l,d*l+r*o,0,d*o+r*l,h*o+i,h*l-r*a,0,d*l-r*o,h*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,d=s+s,h=a+a,p=o+o,m=s*d,g=s*h,v=s*p,M=a*h,f=a*p,u=o*p,b=l*d,S=l*h,w=l*p,P=i.x,R=i.y,A=i.z;return r[0]=(1-(M+u))*P,r[1]=(g+w)*P,r[2]=(v-S)*P,r[3]=0,r[4]=(g-w)*R,r[5]=(1-(m+u))*R,r[6]=(f+b)*R,r[7]=0,r[8]=(v+S)*A,r[9]=(f-b)*A,r[10]=(1-(m+M))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Xn.set(r[0],r[1],r[2]).length();const a=Xn.set(r[4],r[5],r[6]).length(),o=Xn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ot.copy(this);const d=1/s,h=1/a,p=1/o;return Ot.elements[0]*=d,Ot.elements[1]*=d,Ot.elements[2]*=d,Ot.elements[4]*=h,Ot.elements[5]*=h,Ot.elements[6]*=h,Ot.elements[8]*=p,Ot.elements[9]*=p,Ot.elements[10]*=p,t.setFromRotationMatrix(Ot),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=tn){const l=this.elements,d=2*s/(t-e),h=2*s/(i-r),p=(t+e)/(t-e),m=(i+r)/(i-r);let g,v;if(o===tn)g=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===lr)g=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=h,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=tn){const l=this.elements,d=1/(t-e),h=1/(i-r),p=1/(a-s),m=(t+e)*d,g=(i+r)*h;let v,M;if(o===tn)v=(a+s)*p,M=-2*p;else if(o===lr)v=s*p,M=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*d,l[4]=0,l[8]=0,l[12]=-m,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=M,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Xn=new I,Ot=new rt,jd=new I(0,0,0),Xd=new I(1,1,1),dn=new I,Bi=new I,wt=new I,za=new rt,ka=new Ri;class rn{constructor(e=0,t=0,i=0,r=rn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],d=r[5],h=r[9],p=r[2],m=r[6],g=r[10];switch(t){case"XYZ":this._y=Math.asin(Mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(m,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(l,d)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-p,g),this._z=Math.atan2(-a,d)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Mt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(m,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,d));break;case"YZX":this._z=Math.asin(Mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,d),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-Mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(m,d),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return za.makeRotationFromQuaternion(e),this.setFromRotationMatrix(za,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ka.setFromEuler(this),this.setFromQuaternion(ka,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}rn.DEFAULT_ORDER="XYZ";class $o{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let qd=0;const Ga=new I,qn=new Ri,Kt=new rt,zi=new I,Mi=new I,Yd=new I,$d=new Ri,Ha=new I(1,0,0),Va=new I(0,1,0),Wa=new I(0,0,1),Kd={type:"added"},Zd={type:"removed"},Gr={type:"childadded",child:null},Hr={type:"childremoved",child:null};class Ct extends ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=wi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ct.DEFAULT_UP.clone();const e=new I,t=new rn,i=new Ri,r=new I(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new rt},normalMatrix:{value:new Ie}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=Ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $o,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return qn.setFromAxisAngle(e,t),this.quaternion.multiply(qn),this}rotateOnWorldAxis(e,t){return qn.setFromAxisAngle(e,t),this.quaternion.premultiply(qn),this}rotateX(e){return this.rotateOnAxis(Ha,e)}rotateY(e){return this.rotateOnAxis(Va,e)}rotateZ(e){return this.rotateOnAxis(Wa,e)}translateOnAxis(e,t){return Ga.copy(e).applyQuaternion(this.quaternion),this.position.add(Ga.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ha,e)}translateY(e){return this.translateOnAxis(Va,e)}translateZ(e){return this.translateOnAxis(Wa,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Kt.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?zi.copy(e):zi.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Mi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kt.lookAt(Mi,zi,this.up):Kt.lookAt(zi,Mi,this.up),this.quaternion.setFromRotationMatrix(Kt),r&&(Kt.extractRotation(r.matrixWorld),qn.setFromRotationMatrix(Kt),this.quaternion.premultiply(qn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Kd),Gr.child=e,this.dispatchEvent(Gr),Gr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Zd),Hr.child=e,this.dispatchEvent(Hr),Hr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Kt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Kt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Kt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mi,e,Yd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mi,$d,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let d=0,h=l.length;d<h;d++){const p=l[d];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,d=this.material.length;l<d;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),d=a(e.textures),h=a(e.images),p=a(e.shapes),m=a(e.skeletons),g=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),d.length>0&&(i.textures=d),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),m.length>0&&(i.skeletons=m),g.length>0&&(i.animations=g),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(o){const l=[];for(const d in o){const h=o[d];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ct.DEFAULT_UP=new I(0,1,0);Ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Bt=new I,Zt=new I,Vr=new I,Jt=new I,Yn=new I,$n=new I,ja=new I,Wr=new I,jr=new I,Xr=new I;class jt{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Bt.subVectors(e,t),r.cross(Bt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Bt.subVectors(r,t),Zt.subVectors(i,t),Vr.subVectors(e,t);const a=Bt.dot(Bt),o=Bt.dot(Zt),l=Bt.dot(Vr),d=Zt.dot(Zt),h=Zt.dot(Vr),p=a*d-o*o;if(p===0)return s.set(0,0,0),null;const m=1/p,g=(d*l-o*h)*m,v=(a*h-o*l)*m;return s.set(1-g-v,v,g)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Jt)===null?!1:Jt.x>=0&&Jt.y>=0&&Jt.x+Jt.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Jt)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Jt.x),l.addScaledVector(a,Jt.y),l.addScaledVector(o,Jt.z),l)}static isFrontFacing(e,t,i,r){return Bt.subVectors(i,t),Zt.subVectors(e,t),Bt.cross(Zt).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bt.subVectors(this.c,this.b),Zt.subVectors(this.a,this.b),Bt.cross(Zt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return jt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return jt.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return jt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Yn.subVectors(r,i),$n.subVectors(s,i),Wr.subVectors(e,i);const l=Yn.dot(Wr),d=$n.dot(Wr);if(l<=0&&d<=0)return t.copy(i);jr.subVectors(e,r);const h=Yn.dot(jr),p=$n.dot(jr);if(h>=0&&p<=h)return t.copy(r);const m=l*p-h*d;if(m<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(Yn,a);Xr.subVectors(e,s);const g=Yn.dot(Xr),v=$n.dot(Xr);if(v>=0&&g<=v)return t.copy(s);const M=g*d-l*v;if(M<=0&&d>=0&&v<=0)return o=d/(d-v),t.copy(i).addScaledVector($n,o);const f=h*v-g*p;if(f<=0&&p-h>=0&&g-v>=0)return ja.subVectors(s,r),o=(p-h)/(p-h+(g-v)),t.copy(r).addScaledVector(ja,o);const u=1/(f+M+m);return a=M*u,o=m*u,t.copy(i).addScaledVector(Yn,a).addScaledVector($n,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ko={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hn={h:0,s:0,l:0},ki={h:0,s:0,l:0};function qr(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class qe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=i,Xe.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Xe.workingColorSpace){if(e=Id(e,1),t=Mt(t,0,1),i=Mt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=qr(a,s,e+1/3),this.g=qr(a,s,e),this.b=qr(a,s,e-1/3)}return Xe.toWorkingColorSpace(this,r),this}setStyle(e,t=Vt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vt){const i=Ko[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=oi(e.r),this.g=oi(e.g),this.b=oi(e.b),this}copyLinearToSRGB(e){return this.r=Dr(e.r),this.g=Dr(e.g),this.b=Dr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vt){return Xe.fromWorkingColorSpace(pt.copy(this),e),Math.round(Mt(pt.r*255,0,255))*65536+Math.round(Mt(pt.g*255,0,255))*256+Math.round(Mt(pt.b*255,0,255))}getHexString(e=Vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.fromWorkingColorSpace(pt.copy(this),t);const i=pt.r,r=pt.g,s=pt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,d;const h=(o+a)/2;if(o===a)l=0,d=0;else{const p=a-o;switch(d=h<=.5?p/(a+o):p/(2-a-o),a){case i:l=(r-s)/p+(r<s?6:0);break;case r:l=(s-i)/p+2;break;case s:l=(i-r)/p+4;break}l/=6}return e.h=l,e.s=d,e.l=h,e}getRGB(e,t=Xe.workingColorSpace){return Xe.fromWorkingColorSpace(pt.copy(this),t),e.r=pt.r,e.g=pt.g,e.b=pt.b,e}getStyle(e=Vt){Xe.fromWorkingColorSpace(pt.copy(this),e);const t=pt.r,i=pt.g,r=pt.b;return e!==Vt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(hn),this.setHSL(hn.h+e,hn.s+t,hn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(hn),e.getHSL(ki);const i=Lr(hn.h,ki.h,t),r=Lr(hn.s,ki.s,t),s=Lr(hn.l,ki.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pt=new qe;qe.NAMES=Ko;let Jd=0;class pr extends ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=wi(),this.name="",this.type="Material",this.blending=ai,this.side=Sn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cs,this.blendDst=ds,this.blendEquation=Un,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=rr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=La,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gn,this.stencilZFail=Gn,this.stencilZPass=Gn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ai&&(i.blending=this.blending),this.side!==Sn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==cs&&(i.blendSrc=this.blendSrc),this.blendDst!==ds&&(i.blendDst=this.blendDst),this.blendEquation!==Un&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==rr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==La&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Gn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Gn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class In extends pr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.combine=Io,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const it=new I,Gi=new We;class Xt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Na,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=en,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Od("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Gi.fromBufferAttribute(this,t),Gi.applyMatrix3(e),this.setXY(t,Gi.x,Gi.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)it.fromBufferAttribute(this,t),it.applyMatrix3(e),this.setXYZ(t,it.x,it.y,it.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)it.fromBufferAttribute(this,t),it.applyMatrix4(e),this.setXYZ(t,it.x,it.y,it.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)it.fromBufferAttribute(this,t),it.applyNormalMatrix(e),this.setXYZ(t,it.x,it.y,it.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)it.fromBufferAttribute(this,t),it.transformDirection(e),this.setXYZ(t,it.x,it.y,it.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=vi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=xt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=vi(t,this.array)),t}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=vi(t,this.array)),t}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=vi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=vi(t,this.array)),t}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),i=xt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),i=xt(i,this.array),r=xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),i=xt(i,this.array),r=xt(r,this.array),s=xt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Na&&(e.usage=this.usage),e}}class Zo extends Xt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Jo extends Xt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Pt extends Xt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Qd=0;const Dt=new rt,Yr=new Ct,Kn=new I,Rt=new Ci,Ei=new Ci,lt=new I;class sn extends ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qd++}),this.uuid=wi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jo(e)?Jo:Zo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ie().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Dt.makeRotationFromQuaternion(e),this.applyMatrix4(Dt),this}rotateX(e){return Dt.makeRotationX(e),this.applyMatrix4(Dt),this}rotateY(e){return Dt.makeRotationY(e),this.applyMatrix4(Dt),this}rotateZ(e){return Dt.makeRotationZ(e),this.applyMatrix4(Dt),this}translate(e,t,i){return Dt.makeTranslation(e,t,i),this.applyMatrix4(Dt),this}scale(e,t,i){return Dt.makeScale(e,t,i),this.applyMatrix4(Dt),this}lookAt(e){return Yr.lookAt(e),Yr.updateMatrix(),this.applyMatrix4(Yr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Kn).negate(),this.translate(Kn.x,Kn.y,Kn.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Pt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ci);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Rt.setFromBufferAttribute(s),this.morphTargetsRelative?(lt.addVectors(this.boundingBox.min,Rt.min),this.boundingBox.expandByPoint(lt),lt.addVectors(this.boundingBox.max,Rt.max),this.boundingBox.expandByPoint(lt)):(this.boundingBox.expandByPoint(Rt.min),this.boundingBox.expandByPoint(Rt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(Rt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Ei.setFromBufferAttribute(o),this.morphTargetsRelative?(lt.addVectors(Rt.min,Ei.min),Rt.expandByPoint(lt),lt.addVectors(Rt.max,Ei.max),Rt.expandByPoint(lt)):(Rt.expandByPoint(Ei.min),Rt.expandByPoint(Ei.max))}Rt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)lt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(lt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let d=0,h=o.count;d<h;d++)lt.fromBufferAttribute(o,d),l&&(Kn.fromBufferAttribute(e,d),lt.add(Kn)),r=Math.max(r,i.distanceToSquared(lt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xt(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let H=0;H<i.count;H++)o[H]=new I,l[H]=new I;const d=new I,h=new I,p=new I,m=new We,g=new We,v=new We,M=new I,f=new I;function u(H,K,x){d.fromBufferAttribute(i,H),h.fromBufferAttribute(i,K),p.fromBufferAttribute(i,x),m.fromBufferAttribute(s,H),g.fromBufferAttribute(s,K),v.fromBufferAttribute(s,x),h.sub(d),p.sub(d),g.sub(m),v.sub(m);const T=1/(g.x*v.y-v.x*g.y);isFinite(T)&&(M.copy(h).multiplyScalar(v.y).addScaledVector(p,-g.y).multiplyScalar(T),f.copy(p).multiplyScalar(g.x).addScaledVector(h,-v.x).multiplyScalar(T),o[H].add(M),o[K].add(M),o[x].add(M),l[H].add(f),l[K].add(f),l[x].add(f))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let H=0,K=b.length;H<K;++H){const x=b[H],T=x.start,G=x.count;for(let $=T,L=T+G;$<L;$+=3)u(e.getX($+0),e.getX($+1),e.getX($+2))}const S=new I,w=new I,P=new I,R=new I;function A(H){P.fromBufferAttribute(r,H),R.copy(P);const K=o[H];S.copy(K),S.sub(P.multiplyScalar(P.dot(K))).normalize(),w.crossVectors(R,K);const T=w.dot(l[H])<0?-1:1;a.setXYZW(H,S.x,S.y,S.z,T)}for(let H=0,K=b.length;H<K;++H){const x=b[H],T=x.start,G=x.count;for(let $=T,L=T+G;$<L;$+=3)A(e.getX($+0)),A(e.getX($+1)),A(e.getX($+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Xt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let m=0,g=i.count;m<g;m++)i.setXYZ(m,0,0,0);const r=new I,s=new I,a=new I,o=new I,l=new I,d=new I,h=new I,p=new I;if(e)for(let m=0,g=e.count;m<g;m+=3){const v=e.getX(m+0),M=e.getX(m+1),f=e.getX(m+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,M),a.fromBufferAttribute(t,f),h.subVectors(a,s),p.subVectors(r,s),h.cross(p),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,M),d.fromBufferAttribute(i,f),o.add(h),l.add(h),d.add(h),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(f,d.x,d.y,d.z)}else for(let m=0,g=t.count;m<g;m+=3)r.fromBufferAttribute(t,m+0),s.fromBufferAttribute(t,m+1),a.fromBufferAttribute(t,m+2),h.subVectors(a,s),p.subVectors(r,s),h.cross(p),i.setXYZ(m+0,h.x,h.y,h.z),i.setXYZ(m+1,h.x,h.y,h.z),i.setXYZ(m+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)lt.fromBufferAttribute(e,t),lt.normalize(),e.setXYZ(t,lt.x,lt.y,lt.z)}toNonIndexed(){function e(o,l){const d=o.array,h=o.itemSize,p=o.normalized,m=new d.constructor(l.length*h);let g=0,v=0;for(let M=0,f=l.length;M<f;M++){o.isInterleavedBufferAttribute?g=l[M]*o.data.stride+o.offset:g=l[M]*h;for(let u=0;u<h;u++)m[v++]=d[g++]}return new Xt(m,h,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new sn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],d=e(l,i);t.setAttribute(o,d)}const s=this.morphAttributes;for(const o in s){const l=[],d=s[o];for(let h=0,p=d.length;h<p;h++){const m=d[h],g=e(m,i);l.push(g)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const d=a[o];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const d in l)l[d]!==void 0&&(e[d]=l[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const d=i[l];e.data.attributes[l]=d.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const d=this.morphAttributes[l],h=[];for(let p=0,m=d.length;p<m;p++){const g=d[p];h.push(g.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const d in r){const h=r[d];this.setAttribute(d,h.clone(t))}const s=e.morphAttributes;for(const d in s){const h=[],p=s[d];for(let m=0,g=p.length;m<g;m++)h.push(p[m].clone(t));this.morphAttributes[d]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let d=0,h=a.length;d<h;d++){const p=a[d];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xa=new rt,wn=new Wd,Hi=new Rs,qa=new I,Zn=new I,Jn=new I,Qn=new I,$r=new I,Vi=new I,Wi=new We,ji=new We,Xi=new We,Ya=new I,$a=new I,Ka=new I,qi=new I,Yi=new I;class Et extends Ct{constructor(e=new sn,t=new In){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Vi.set(0,0,0);for(let l=0,d=s.length;l<d;l++){const h=o[l],p=s[l];h!==0&&($r.fromBufferAttribute(p,e),a?Vi.addScaledVector($r,h):Vi.addScaledVector($r.sub(t),h))}t.add(Vi)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Hi.copy(i.boundingSphere),Hi.applyMatrix4(s),wn.copy(e.ray).recast(e.near),!(Hi.containsPoint(wn.origin)===!1&&(wn.intersectSphere(Hi,qa)===null||wn.origin.distanceToSquared(qa)>(e.far-e.near)**2))&&(Xa.copy(s).invert(),wn.copy(e.ray).applyMatrix4(Xa),!(i.boundingBox!==null&&wn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,wn)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,d=s.attributes.uv,h=s.attributes.uv1,p=s.attributes.normal,m=s.groups,g=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,M=m.length;v<M;v++){const f=m[v],u=a[f.materialIndex],b=Math.max(f.start,g.start),S=Math.min(o.count,Math.min(f.start+f.count,g.start+g.count));for(let w=b,P=S;w<P;w+=3){const R=o.getX(w),A=o.getX(w+1),H=o.getX(w+2);r=$i(this,u,e,i,d,h,p,R,A,H),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=f.materialIndex,t.push(r))}}else{const v=Math.max(0,g.start),M=Math.min(o.count,g.start+g.count);for(let f=v,u=M;f<u;f+=3){const b=o.getX(f),S=o.getX(f+1),w=o.getX(f+2);r=$i(this,a,e,i,d,h,p,b,S,w),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,M=m.length;v<M;v++){const f=m[v],u=a[f.materialIndex],b=Math.max(f.start,g.start),S=Math.min(l.count,Math.min(f.start+f.count,g.start+g.count));for(let w=b,P=S;w<P;w+=3){const R=w,A=w+1,H=w+2;r=$i(this,u,e,i,d,h,p,R,A,H),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=f.materialIndex,t.push(r))}}else{const v=Math.max(0,g.start),M=Math.min(l.count,g.start+g.count);for(let f=v,u=M;f<u;f+=3){const b=f,S=f+1,w=f+2;r=$i(this,a,e,i,d,h,p,b,S,w),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}}}}function eh(n,e,t,i,r,s,a,o){let l;if(e.side===yt?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Sn,o),l===null)return null;Yi.copy(o),Yi.applyMatrix4(n.matrixWorld);const d=t.ray.origin.distanceTo(Yi);return d<t.near||d>t.far?null:{distance:d,point:Yi.clone(),object:n}}function $i(n,e,t,i,r,s,a,o,l,d){n.getVertexPosition(o,Zn),n.getVertexPosition(l,Jn),n.getVertexPosition(d,Qn);const h=eh(n,e,t,i,Zn,Jn,Qn,qi);if(h){r&&(Wi.fromBufferAttribute(r,o),ji.fromBufferAttribute(r,l),Xi.fromBufferAttribute(r,d),h.uv=jt.getInterpolation(qi,Zn,Jn,Qn,Wi,ji,Xi,new We)),s&&(Wi.fromBufferAttribute(s,o),ji.fromBufferAttribute(s,l),Xi.fromBufferAttribute(s,d),h.uv1=jt.getInterpolation(qi,Zn,Jn,Qn,Wi,ji,Xi,new We)),a&&(Ya.fromBufferAttribute(a,o),$a.fromBufferAttribute(a,l),Ka.fromBufferAttribute(a,d),h.normal=jt.getInterpolation(qi,Zn,Jn,Qn,Ya,$a,Ka,new I),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const p={a:o,b:l,c:d,normal:new I,materialIndex:0};jt.getNormal(Zn,Jn,Qn,p.normal),h.face=p}return h}class fi extends sn{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],d=[],h=[],p=[];let m=0,g=0;v("z","y","x",-1,-1,i,t,e,a,s,0),v("z","y","x",1,-1,i,t,-e,a,s,1),v("x","z","y",1,1,e,i,t,r,a,2),v("x","z","y",1,-1,e,i,-t,r,a,3),v("x","y","z",1,-1,e,t,i,r,s,4),v("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Pt(d,3)),this.setAttribute("normal",new Pt(h,3)),this.setAttribute("uv",new Pt(p,2));function v(M,f,u,b,S,w,P,R,A,H,K){const x=w/A,T=P/H,G=w/2,$=P/2,L=R/2,X=A+1,W=H+1;let q=0,j=0;const k=new I;for(let te=0;te<W;te++){const Q=te*T-$;for(let ce=0;ce<X;ce++){const pe=ce*x-G;k[M]=pe*b,k[f]=Q*S,k[u]=L,d.push(k.x,k.y,k.z),k[M]=0,k[f]=0,k[u]=R>0?1:-1,h.push(k.x,k.y,k.z),p.push(ce/A),p.push(1-te/H),q+=1}}for(let te=0;te<H;te++)for(let Q=0;Q<A;Q++){const ce=m+Q+X*te,pe=m+Q+X*(te+1),z=m+(Q+1)+X*(te+1),J=m+(Q+1)+X*te;l.push(ce,pe,J),l.push(pe,z,J),j+=6}o.addGroup(g,j,K),g+=j,m+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function hi(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function gt(n){const e={};for(let t=0;t<n.length;t++){const i=hi(n[t]);for(const r in i)e[r]=i[r]}return e}function th(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Qo(n){return n.getRenderTarget()===null?n.outputColorSpace:Xe.workingColorSpace}const nh={clone:hi,merge:gt};var ih=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mn extends pr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ih,this.fragmentShader=rh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=hi(e.uniforms),this.uniformsGroups=th(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class el extends Ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=tn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const un=new I,Za=new We,Ja=new We;class zt extends el{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=gs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Pr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return gs*2*Math.atan(Math.tan(Pr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){un.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(un.x,un.y).multiplyScalar(-e/un.z),un.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(un.x,un.y).multiplyScalar(-e/un.z)}getViewSize(e,t){return this.getViewBounds(e,Za,Ja),t.subVectors(Ja,Za)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Pr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,d=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/d,r*=a.width/l,i*=a.height/d}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ei=-90,ti=1;class sh extends Ct{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new zt(ei,ti,e,t);r.layers=this.layers,this.add(r);const s=new zt(ei,ti,e,t);s.layers=this.layers,this.add(s);const a=new zt(ei,ti,e,t);a.layers=this.layers,this.add(a);const o=new zt(ei,ti,e,t);o.layers=this.layers,this.add(o);const l=new zt(ei,ti,e,t);l.layers=this.layers,this.add(l);const d=new zt(ei,ti,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const d of t)this.remove(d);if(e===tn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===lr)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,d,h]=this.children,p=e.getRenderTarget(),m=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,d),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(p,m,g),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class tl extends bt{constructor(e,t,i,r,s,a,o,l,d,h){e=e!==void 0?e:[],t=t!==void 0?t:li,super(e,t,i,r,s,a,o,l,d,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ah extends kn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new tl(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:St}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new fi(5,5,5),s=new Mn({name:"CubemapFromEquirect",uniforms:hi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:yt,blending:_n});s.uniforms.tEquirect.value=t;const a=new Et(r,s),o=t.minFilter;return t.minFilter===On&&(t.minFilter=St),new sh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const Kr=new I,oh=new I,lh=new Ie;class Nn{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Kr.subVectors(i,t).cross(oh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Kr),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||lh.getNormalMatrix(e),r=this.coplanarPoint(Kr).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Rn=new Rs,Ki=new I;class nl{constructor(e=new Nn,t=new Nn,i=new Nn,r=new Nn,s=new Nn,a=new Nn){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=tn){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],d=r[4],h=r[5],p=r[6],m=r[7],g=r[8],v=r[9],M=r[10],f=r[11],u=r[12],b=r[13],S=r[14],w=r[15];if(i[0].setComponents(l-s,m-d,f-g,w-u).normalize(),i[1].setComponents(l+s,m+d,f+g,w+u).normalize(),i[2].setComponents(l+a,m+h,f+v,w+b).normalize(),i[3].setComponents(l-a,m-h,f-v,w-b).normalize(),i[4].setComponents(l-o,m-p,f-M,w-S).normalize(),t===tn)i[5].setComponents(l+o,m+p,f+M,w+S).normalize();else if(t===lr)i[5].setComponents(o,p,M,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Rn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Rn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Rn)}intersectsSprite(e){return Rn.center.set(0,0,0),Rn.radius=.7071067811865476,Rn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Rn)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ki.x=r.normal.x>0?e.max.x:e.min.x,Ki.y=r.normal.y>0?e.max.y:e.min.y,Ki.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ki)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function il(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function ch(n,e){const t=e.isWebGL2,i=new WeakMap;function r(d,h){const p=d.array,m=d.usage,g=p.byteLength,v=n.createBuffer();n.bindBuffer(h,v),n.bufferData(h,p,m),d.onUploadCallback();let M;if(p instanceof Float32Array)M=n.FLOAT;else if(p instanceof Uint16Array)if(d.isFloat16BufferAttribute)if(t)M=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else M=n.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=n.SHORT;else if(p instanceof Uint32Array)M=n.UNSIGNED_INT;else if(p instanceof Int32Array)M=n.INT;else if(p instanceof Int8Array)M=n.BYTE;else if(p instanceof Uint8Array)M=n.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:g}}function s(d,h,p){const m=h.array,g=h._updateRange,v=h.updateRanges;if(n.bindBuffer(p,d),g.count===-1&&v.length===0&&n.bufferSubData(p,0,m),v.length!==0){for(let M=0,f=v.length;M<f;M++){const u=v[M];t?n.bufferSubData(p,u.start*m.BYTES_PER_ELEMENT,m,u.start,u.count):n.bufferSubData(p,u.start*m.BYTES_PER_ELEMENT,m.subarray(u.start,u.start+u.count))}h.clearUpdateRanges()}g.count!==-1&&(t?n.bufferSubData(p,g.offset*m.BYTES_PER_ELEMENT,m,g.offset,g.count):n.bufferSubData(p,g.offset*m.BYTES_PER_ELEMENT,m.subarray(g.offset,g.offset+g.count)),g.count=-1),h.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),i.get(d)}function o(d){d.isInterleavedBufferAttribute&&(d=d.data);const h=i.get(d);h&&(n.deleteBuffer(h.buffer),i.delete(d))}function l(d,h){if(d.isGLBufferAttribute){const m=i.get(d);(!m||m.version<d.version)&&i.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}d.isInterleavedBufferAttribute&&(d=d.data);const p=i.get(d);if(p===void 0)i.set(d,r(d,h));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,h),p.version=d.version}}return{get:a,remove:o,update:l}}class mr extends sn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),d=o+1,h=l+1,p=e/o,m=t/l,g=[],v=[],M=[],f=[];for(let u=0;u<h;u++){const b=u*m-a;for(let S=0;S<d;S++){const w=S*p-s;v.push(w,-b,0),M.push(0,0,1),f.push(S/o),f.push(1-u/l)}}for(let u=0;u<l;u++)for(let b=0;b<o;b++){const S=b+d*u,w=b+d*(u+1),P=b+1+d*(u+1),R=b+1+d*u;g.push(S,w,R),g.push(w,P,R)}this.setIndex(g),this.setAttribute("position",new Pt(v,3)),this.setAttribute("normal",new Pt(M,3)),this.setAttribute("uv",new Pt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mr(e.width,e.height,e.widthSegments,e.heightSegments)}}var dh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,uh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ph=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,_h=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vh=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,xh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Sh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Eh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,yh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Th=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ah=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ch=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ph=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Lh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Nh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Dh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Uh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ih=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Fh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Oh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gh=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Hh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Vh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Wh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,jh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,qh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$h=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Kh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Jh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Qh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,eu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,iu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ru=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,su=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,au=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ou=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,cu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,du=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,hu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,uu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,gu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,_u=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Su=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Eu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bu=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Tu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Au=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,wu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Ru=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Cu=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Pu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Du=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Uu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Iu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Fu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ou=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Bu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ku=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ju=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xu=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,qu=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Yu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,$u=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ku=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zu=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ju=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qu=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ef=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,sf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,af=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,of=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,df=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,uf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ff=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_f=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,vf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,xf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Sf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Mf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ef=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Tf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Af=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Pf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Nf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Df=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Uf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,If=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ff=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Of=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,kf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Vf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Wf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ue={alphahash_fragment:dh,alphahash_pars_fragment:hh,alphamap_fragment:uh,alphamap_pars_fragment:fh,alphatest_fragment:ph,alphatest_pars_fragment:mh,aomap_fragment:gh,aomap_pars_fragment:_h,batching_pars_vertex:vh,batching_vertex:xh,begin_vertex:Sh,beginnormal_vertex:Mh,bsdfs:Eh,iridescence_fragment:yh,bumpmap_pars_fragment:bh,clipping_planes_fragment:Th,clipping_planes_pars_fragment:Ah,clipping_planes_pars_vertex:wh,clipping_planes_vertex:Rh,color_fragment:Ch,color_pars_fragment:Ph,color_pars_vertex:Lh,color_vertex:Nh,common:Dh,cube_uv_reflection_fragment:Uh,defaultnormal_vertex:Ih,displacementmap_pars_vertex:Fh,displacementmap_vertex:Oh,emissivemap_fragment:Bh,emissivemap_pars_fragment:zh,colorspace_fragment:kh,colorspace_pars_fragment:Gh,envmap_fragment:Hh,envmap_common_pars_fragment:Vh,envmap_pars_fragment:Wh,envmap_pars_vertex:jh,envmap_physical_pars_fragment:iu,envmap_vertex:Xh,fog_vertex:qh,fog_pars_vertex:Yh,fog_fragment:$h,fog_pars_fragment:Kh,gradientmap_pars_fragment:Zh,lightmap_fragment:Jh,lightmap_pars_fragment:Qh,lights_lambert_fragment:eu,lights_lambert_pars_fragment:tu,lights_pars_begin:nu,lights_toon_fragment:ru,lights_toon_pars_fragment:su,lights_phong_fragment:au,lights_phong_pars_fragment:ou,lights_physical_fragment:lu,lights_physical_pars_fragment:cu,lights_fragment_begin:du,lights_fragment_maps:hu,lights_fragment_end:uu,logdepthbuf_fragment:fu,logdepthbuf_pars_fragment:pu,logdepthbuf_pars_vertex:mu,logdepthbuf_vertex:gu,map_fragment:_u,map_pars_fragment:vu,map_particle_fragment:xu,map_particle_pars_fragment:Su,metalnessmap_fragment:Mu,metalnessmap_pars_fragment:Eu,morphinstance_vertex:yu,morphcolor_vertex:bu,morphnormal_vertex:Tu,morphtarget_pars_vertex:Au,morphtarget_vertex:wu,normal_fragment_begin:Ru,normal_fragment_maps:Cu,normal_pars_fragment:Pu,normal_pars_vertex:Lu,normal_vertex:Nu,normalmap_pars_fragment:Du,clearcoat_normal_fragment_begin:Uu,clearcoat_normal_fragment_maps:Iu,clearcoat_pars_fragment:Fu,iridescence_pars_fragment:Ou,opaque_fragment:Bu,packing:zu,premultiplied_alpha_fragment:ku,project_vertex:Gu,dithering_fragment:Hu,dithering_pars_fragment:Vu,roughnessmap_fragment:Wu,roughnessmap_pars_fragment:ju,shadowmap_pars_fragment:Xu,shadowmap_pars_vertex:qu,shadowmap_vertex:Yu,shadowmask_pars_fragment:$u,skinbase_vertex:Ku,skinning_pars_vertex:Zu,skinning_vertex:Ju,skinnormal_vertex:Qu,specularmap_fragment:ef,specularmap_pars_fragment:tf,tonemapping_fragment:nf,tonemapping_pars_fragment:rf,transmission_fragment:sf,transmission_pars_fragment:af,uv_pars_fragment:of,uv_pars_vertex:lf,uv_vertex:cf,worldpos_vertex:df,background_vert:hf,background_frag:uf,backgroundCube_vert:ff,backgroundCube_frag:pf,cube_vert:mf,cube_frag:gf,depth_vert:_f,depth_frag:vf,distanceRGBA_vert:xf,distanceRGBA_frag:Sf,equirect_vert:Mf,equirect_frag:Ef,linedashed_vert:yf,linedashed_frag:bf,meshbasic_vert:Tf,meshbasic_frag:Af,meshlambert_vert:wf,meshlambert_frag:Rf,meshmatcap_vert:Cf,meshmatcap_frag:Pf,meshnormal_vert:Lf,meshnormal_frag:Nf,meshphong_vert:Df,meshphong_frag:Uf,meshphysical_vert:If,meshphysical_frag:Ff,meshtoon_vert:Of,meshtoon_frag:Bf,points_vert:zf,points_frag:kf,shadow_vert:Gf,shadow_frag:Hf,sprite_vert:Vf,sprite_frag:Wf},re={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ie}},envmap:{envMap:{value:null},envMapRotation:{value:new Ie},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ie},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0},uvTransform:{value:new Ie}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}}},Wt={basic:{uniforms:gt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:gt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new qe(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:gt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:gt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:gt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new qe(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:gt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:gt([re.points,re.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:gt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:gt([re.common,re.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:gt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:gt([re.sprite,re.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ie}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:gt([re.common,re.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:gt([re.lights,re.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};Wt.physical={uniforms:gt([Wt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ie},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ie},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ie},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ie},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ie},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ie},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ie}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const Zi={r:0,b:0,g:0},Cn=new rn,jf=new rt;function Xf(n,e,t,i,r,s,a){const o=new qe(0);let l=s===!0?0:1,d,h,p=null,m=0,g=null;function v(f,u){let b=!1,S=u.isScene===!0?u.background:null;S&&S.isTexture&&(S=(u.backgroundBlurriness>0?t:e).get(S)),S===null?M(o,l):S&&S.isColor&&(M(S,1),b=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||b)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),S&&(S.isCubeTexture||S.mapping===ur)?(h===void 0&&(h=new Et(new fi(1,1,1),new Mn({name:"BackgroundCubeMaterial",uniforms:hi(Wt.backgroundCube.uniforms),vertexShader:Wt.backgroundCube.vertexShader,fragmentShader:Wt.backgroundCube.fragmentShader,side:yt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Cn.copy(u.backgroundRotation),Cn.x*=-1,Cn.y*=-1,Cn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Cn.y*=-1,Cn.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(jf.makeRotationFromEuler(Cn)),h.material.toneMapped=Xe.getTransfer(S.colorSpace)!==Ke,(p!==S||m!==S.version||g!==n.toneMapping)&&(h.material.needsUpdate=!0,p=S,m=S.version,g=n.toneMapping),h.layers.enableAll(),f.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(d===void 0&&(d=new Et(new mr(2,2),new Mn({name:"BackgroundMaterial",uniforms:hi(Wt.background.uniforms),vertexShader:Wt.background.vertexShader,fragmentShader:Wt.background.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(d)),d.material.uniforms.t2D.value=S,d.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,d.material.toneMapped=Xe.getTransfer(S.colorSpace)!==Ke,S.matrixAutoUpdate===!0&&S.updateMatrix(),d.material.uniforms.uvTransform.value.copy(S.matrix),(p!==S||m!==S.version||g!==n.toneMapping)&&(d.material.needsUpdate=!0,p=S,m=S.version,g=n.toneMapping),d.layers.enableAll(),f.unshift(d,d.geometry,d.material,0,0,null))}function M(f,u){f.getRGB(Zi,Qo(n)),i.buffers.color.setClear(Zi.r,Zi.g,Zi.b,u,a)}return{getClearColor:function(){return o},setClearColor:function(f,u=1){o.set(f),l=u,M(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(f){l=f,M(o,l)},render:v}}function qf(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=f(null);let d=l,h=!1;function p(L,X,W,q,j){let k=!1;if(a){const te=M(q,W,X);d!==te&&(d=te,g(d.object)),k=u(L,q,W,j),k&&b(L,q,W,j)}else{const te=X.wireframe===!0;(d.geometry!==q.id||d.program!==W.id||d.wireframe!==te)&&(d.geometry=q.id,d.program=W.id,d.wireframe=te,k=!0)}j!==null&&t.update(j,n.ELEMENT_ARRAY_BUFFER),(k||h)&&(h=!1,H(L,X,W,q),j!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function m(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function g(L){return i.isWebGL2?n.bindVertexArray(L):s.bindVertexArrayOES(L)}function v(L){return i.isWebGL2?n.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function M(L,X,W){const q=W.wireframe===!0;let j=o[L.id];j===void 0&&(j={},o[L.id]=j);let k=j[X.id];k===void 0&&(k={},j[X.id]=k);let te=k[q];return te===void 0&&(te=f(m()),k[q]=te),te}function f(L){const X=[],W=[],q=[];for(let j=0;j<r;j++)X[j]=0,W[j]=0,q[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:W,attributeDivisors:q,object:L,attributes:{},index:null}}function u(L,X,W,q){const j=d.attributes,k=X.attributes;let te=0;const Q=W.getAttributes();for(const ce in Q)if(Q[ce].location>=0){const z=j[ce];let J=k[ce];if(J===void 0&&(ce==="instanceMatrix"&&L.instanceMatrix&&(J=L.instanceMatrix),ce==="instanceColor"&&L.instanceColor&&(J=L.instanceColor)),z===void 0||z.attribute!==J||J&&z.data!==J.data)return!0;te++}return d.attributesNum!==te||d.index!==q}function b(L,X,W,q){const j={},k=X.attributes;let te=0;const Q=W.getAttributes();for(const ce in Q)if(Q[ce].location>=0){let z=k[ce];z===void 0&&(ce==="instanceMatrix"&&L.instanceMatrix&&(z=L.instanceMatrix),ce==="instanceColor"&&L.instanceColor&&(z=L.instanceColor));const J={};J.attribute=z,z&&z.data&&(J.data=z.data),j[ce]=J,te++}d.attributes=j,d.attributesNum=te,d.index=q}function S(){const L=d.newAttributes;for(let X=0,W=L.length;X<W;X++)L[X]=0}function w(L){P(L,0)}function P(L,X){const W=d.newAttributes,q=d.enabledAttributes,j=d.attributeDivisors;W[L]=1,q[L]===0&&(n.enableVertexAttribArray(L),q[L]=1),j[L]!==X&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,X),j[L]=X)}function R(){const L=d.newAttributes,X=d.enabledAttributes;for(let W=0,q=X.length;W<q;W++)X[W]!==L[W]&&(n.disableVertexAttribArray(W),X[W]=0)}function A(L,X,W,q,j,k,te){te===!0?n.vertexAttribIPointer(L,X,W,j,k):n.vertexAttribPointer(L,X,W,q,j,k)}function H(L,X,W,q){if(i.isWebGL2===!1&&(L.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;S();const j=q.attributes,k=W.getAttributes(),te=X.defaultAttributeValues;for(const Q in k){const ce=k[Q];if(ce.location>=0){let pe=j[Q];if(pe===void 0&&(Q==="instanceMatrix"&&L.instanceMatrix&&(pe=L.instanceMatrix),Q==="instanceColor"&&L.instanceColor&&(pe=L.instanceColor)),pe!==void 0){const z=pe.normalized,J=pe.itemSize,ue=t.get(pe);if(ue===void 0)continue;const Ae=ue.buffer,ve=ue.type,fe=ue.bytesPerElement,je=i.isWebGL2===!0&&(ve===n.INT||ve===n.UNSIGNED_INT||pe.gpuType===Oo);if(pe.isInterleavedBufferAttribute){const we=pe.data,D=we.stride,ct=pe.offset;if(we.isInstancedInterleavedBuffer){for(let Se=0;Se<ce.locationSize;Se++)P(ce.location+Se,we.meshPerAttribute);L.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=we.meshPerAttribute*we.count)}else for(let Se=0;Se<ce.locationSize;Se++)w(ce.location+Se);n.bindBuffer(n.ARRAY_BUFFER,Ae);for(let Se=0;Se<ce.locationSize;Se++)A(ce.location+Se,J/ce.locationSize,ve,z,D*fe,(ct+J/ce.locationSize*Se)*fe,je)}else{if(pe.isInstancedBufferAttribute){for(let we=0;we<ce.locationSize;we++)P(ce.location+we,pe.meshPerAttribute);L.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let we=0;we<ce.locationSize;we++)w(ce.location+we);n.bindBuffer(n.ARRAY_BUFFER,Ae);for(let we=0;we<ce.locationSize;we++)A(ce.location+we,J/ce.locationSize,ve,z,J*fe,J/ce.locationSize*we*fe,je)}}else if(te!==void 0){const z=te[Q];if(z!==void 0)switch(z.length){case 2:n.vertexAttrib2fv(ce.location,z);break;case 3:n.vertexAttrib3fv(ce.location,z);break;case 4:n.vertexAttrib4fv(ce.location,z);break;default:n.vertexAttrib1fv(ce.location,z)}}}}R()}function K(){G();for(const L in o){const X=o[L];for(const W in X){const q=X[W];for(const j in q)v(q[j].object),delete q[j];delete X[W]}delete o[L]}}function x(L){if(o[L.id]===void 0)return;const X=o[L.id];for(const W in X){const q=X[W];for(const j in q)v(q[j].object),delete q[j];delete X[W]}delete o[L.id]}function T(L){for(const X in o){const W=o[X];if(W[L.id]===void 0)continue;const q=W[L.id];for(const j in q)v(q[j].object),delete q[j];delete W[L.id]}}function G(){$(),h=!0,d!==l&&(d=l,g(d.object))}function $(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:G,resetDefaultState:$,dispose:K,releaseStatesOfGeometry:x,releaseStatesOfProgram:T,initAttributes:S,enableAttribute:w,disableUnusedAttributes:R}}function Yf(n,e,t,i){const r=i.isWebGL2;let s;function a(h){s=h}function o(h,p){n.drawArrays(s,h,p),t.update(p,s,1)}function l(h,p,m){if(m===0)return;let g,v;if(r)g=n,v="drawArraysInstanced";else if(g=e.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",g===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[v](s,h,p,m),t.update(p,s,m)}function d(h,p,m){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let v=0;v<m;v++)this.render(h[v],p[v]);else{g.multiDrawArraysWEBGL(s,h,0,p,0,m);let v=0;for(let M=0;M<m;M++)v+=p[M];t.update(v,s,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=d}function $f(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const d=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),M=n.getParameter(n.MAX_VERTEX_ATTRIBS),f=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),u=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=m>0,w=a||e.has("OES_texture_float"),P=S&&w,R=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:d,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:h,maxTextures:p,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:v,maxAttributes:M,maxVertexUniforms:f,maxVaryings:u,maxFragmentUniforms:b,vertexTextures:S,floatFragmentTextures:w,floatVertexTextures:P,maxSamples:R}}function Kf(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Nn,o=new Ie,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,m){const g=p.length!==0||m||i!==0||r;return r=m,i=p.length,g},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,m){t=h(p,m,0)},this.setState=function(p,m,g){const v=p.clippingPlanes,M=p.clipIntersection,f=p.clipShadows,u=n.get(p);if(!r||v===null||v.length===0||s&&!f)s?h(null):d();else{const b=s?0:i,S=b*4;let w=u.clippingState||null;l.value=w,w=h(v,m,S,g);for(let P=0;P!==S;++P)w[P]=t[P];u.clippingState=w,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=b}};function d(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(p,m,g,v){const M=p!==null?p.length:0;let f=null;if(M!==0){if(f=l.value,v!==!0||f===null){const u=g+M*4,b=m.matrixWorldInverse;o.getNormalMatrix(b),(f===null||f.length<u)&&(f=new Float32Array(u));for(let S=0,w=g;S!==M;++S,w+=4)a.copy(p[S]).applyMatrix4(b,o),a.normal.toArray(f,w),f[w+3]=a.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,f}}function Zf(n){let e=new WeakMap;function t(a,o){return o===hs?a.mapping=li:o===us&&(a.mapping=ci),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===hs||o===us)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const d=new ah(l.height);return d.fromEquirectangularTexture(n,a),e.set(a,d),a.addEventListener("dispose",r),t(d.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class rl extends el{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=d*this.view.offsetX,a=s+d*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ri=4,Qa=[.125,.215,.35,.446,.526,.582],Fn=20,Zr=new rl,eo=new qe;let Jr=null,Qr=0,es=0;const Dn=(1+Math.sqrt(5))/2,ni=1/Dn,to=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,Dn,ni),new I(0,Dn,-ni),new I(ni,0,Dn),new I(-ni,0,Dn),new I(Dn,ni,0),new I(-Dn,ni,0)];class no{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Jr=this._renderer.getRenderTarget(),Qr=this._renderer.getActiveCubeFace(),es=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=so(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ro(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Jr,Qr,es),e.scissorTest=!1,Ji(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===li||e.mapping===ci?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Jr=this._renderer.getRenderTarget(),Qr=this._renderer.getActiveCubeFace(),es=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:St,minFilter:St,generateMipmaps:!1,type:Ti,format:Gt,colorSpace:En,depthBuffer:!1},r=io(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=io(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Jf(s)),this._blurMaterial=Qf(s,e,t)}return r}_compileMaterial(e){const t=new Et(this._lodPlanes[0],e);this._renderer.compile(t,Zr)}_sceneToCubeUV(e,t,i,r){const o=new zt(90,1,t,i),l=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,p=h.autoClear,m=h.toneMapping;h.getClearColor(eo),h.toneMapping=vn,h.autoClear=!1;const g=new In({name:"PMREM.Background",side:yt,depthWrite:!1,depthTest:!1}),v=new Et(new fi,g);let M=!1;const f=e.background;f?f.isColor&&(g.color.copy(f),e.background=null,M=!0):(g.color.copy(eo),M=!0);for(let u=0;u<6;u++){const b=u%3;b===0?(o.up.set(0,l[u],0),o.lookAt(d[u],0,0)):b===1?(o.up.set(0,0,l[u]),o.lookAt(0,d[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,d[u]));const S=this._cubeSize;Ji(r,b*S,u>2?S:0,S,S),h.setRenderTarget(r),M&&h.render(v,o),h.render(e,o)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=m,h.autoClear=p,e.background=f}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===li||e.mapping===ci;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=so()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ro());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Et(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Ji(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Zr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=to[(r-1)%to.length];this._blur(e,r-1,r,s,a)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,d=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,p=new Et(this._lodPlanes[r],d),m=d.uniforms,g=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*Fn-1),M=s/v,f=isFinite(s)?1+Math.floor(h*M):Fn;f>Fn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Fn}`);const u=[];let b=0;for(let A=0;A<Fn;++A){const H=A/M,K=Math.exp(-H*H/2);u.push(K),A===0?b+=K:A<f&&(b+=2*K)}for(let A=0;A<u.length;A++)u[A]=u[A]/b;m.envMap.value=e.texture,m.samples.value=f,m.weights.value=u,m.latitudinal.value=a==="latitudinal",o&&(m.poleAxis.value=o);const{_lodMax:S}=this;m.dTheta.value=v,m.mipInt.value=S-i;const w=this._sizeLods[r],P=3*w*(r>S-ri?r-S+ri:0),R=4*(this._cubeSize-w);Ji(t,P,R,3*w,2*w),l.setRenderTarget(t),l.render(p,Zr)}}function Jf(n){const e=[],t=[],i=[];let r=n;const s=n-ri+1+Qa.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-ri?l=Qa[a-n+ri-1]:a===0&&(l=0),i.push(l);const d=1/(o-2),h=-d,p=1+d,m=[h,h,p,h,p,p,h,h,p,p,h,p],g=6,v=6,M=3,f=2,u=1,b=new Float32Array(M*v*g),S=new Float32Array(f*v*g),w=new Float32Array(u*v*g);for(let R=0;R<g;R++){const A=R%3*2/3-1,H=R>2?0:-1,K=[A,H,0,A+2/3,H,0,A+2/3,H+1,0,A,H,0,A+2/3,H+1,0,A,H+1,0];b.set(K,M*v*R),S.set(m,f*v*R);const x=[R,R,R,R,R,R];w.set(x,u*v*R)}const P=new sn;P.setAttribute("position",new Xt(b,M)),P.setAttribute("uv",new Xt(S,f)),P.setAttribute("faceIndex",new Xt(w,u)),e.push(P),r>ri&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function io(n,e,t){const i=new kn(n,e,t);return i.texture.mapping=ur,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ji(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Qf(n,e,t){const i=new Float32Array(Fn),r=new I(0,1,0);return new Mn({name:"SphericalGaussianBlur",defines:{n:Fn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Cs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:_n,depthTest:!1,depthWrite:!1})}function ro(){return new Mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:_n,depthTest:!1,depthWrite:!1})}function so(){return new Mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_n,depthTest:!1,depthWrite:!1})}function Cs(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ep(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,d=l===hs||l===us,h=l===li||l===ci;if(d||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let p=e.get(o);return t===null&&(t=new no(n)),p=d?t.fromEquirectangular(o,p):t.fromCubemap(o,p),e.set(o,p),p.texture}else{if(e.has(o))return e.get(o).texture;{const p=o.image;if(d&&p&&p.height>0||h&&p&&r(p)){t===null&&(t=new no(n));const m=d?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,m),o.addEventListener("dispose",s),m.texture}else return null}}}return o}function r(o){let l=0;const d=6;for(let h=0;h<d;h++)o[h]!==void 0&&l++;return l===d}function s(o){const l=o.target;l.removeEventListener("dispose",s);const d=e.get(l);d!==void 0&&(e.delete(l),d.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function tp(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function np(n,e,t,i){const r={},s=new WeakMap;function a(p){const m=p.target;m.index!==null&&e.remove(m.index);for(const v in m.attributes)e.remove(m.attributes[v]);for(const v in m.morphAttributes){const M=m.morphAttributes[v];for(let f=0,u=M.length;f<u;f++)e.remove(M[f])}m.removeEventListener("dispose",a),delete r[m.id];const g=s.get(m);g&&(e.remove(g),s.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function o(p,m){return r[m.id]===!0||(m.addEventListener("dispose",a),r[m.id]=!0,t.memory.geometries++),m}function l(p){const m=p.attributes;for(const v in m)e.update(m[v],n.ARRAY_BUFFER);const g=p.morphAttributes;for(const v in g){const M=g[v];for(let f=0,u=M.length;f<u;f++)e.update(M[f],n.ARRAY_BUFFER)}}function d(p){const m=[],g=p.index,v=p.attributes.position;let M=0;if(g!==null){const b=g.array;M=g.version;for(let S=0,w=b.length;S<w;S+=3){const P=b[S+0],R=b[S+1],A=b[S+2];m.push(P,R,R,A,A,P)}}else if(v!==void 0){const b=v.array;M=v.version;for(let S=0,w=b.length/3-1;S<w;S+=3){const P=S+0,R=S+1,A=S+2;m.push(P,R,R,A,A,P)}}else return;const f=new(jo(m)?Jo:Zo)(m,1);f.version=M;const u=s.get(p);u&&e.remove(u),s.set(p,f)}function h(p){const m=s.get(p);if(m){const g=p.index;g!==null&&m.version<g.version&&d(p)}else d(p);return s.get(p)}return{get:o,update:l,getWireframeAttribute:h}}function ip(n,e,t,i){const r=i.isWebGL2;let s;function a(g){s=g}let o,l;function d(g){o=g.type,l=g.bytesPerElement}function h(g,v){n.drawElements(s,v,o,g*l),t.update(v,s,1)}function p(g,v,M){if(M===0)return;let f,u;if(r)f=n,u="drawElementsInstanced";else if(f=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[u](s,v,o,g*l,M),t.update(v,s,M)}function m(g,v,M){if(M===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let u=0;u<M;u++)this.render(g[u]/l,v[u]);else{f.multiDrawElementsWEBGL(s,v,0,o,g,0,M);let u=0;for(let b=0;b<M;b++)u+=v[b];t.update(u,s,1)}}this.setMode=a,this.setIndex=d,this.render=h,this.renderInstances=p,this.renderMultiDraw=m}function rp(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function sp(n,e){return n[0]-e[0]}function ap(n,e){return Math.abs(e[1])-Math.abs(n[1])}function op(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,a=new ht,o=[];for(let d=0;d<8;d++)o[d]=[d,0];function l(d,h,p){const m=d.morphTargetInfluences;if(e.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=g!==void 0?g.length:0;let M=s.get(h);if(M===void 0||M.count!==v){let G=function(){x.dispose(),s.delete(h),h.removeEventListener("dispose",G)};M!==void 0&&M.texture.dispose();const f=h.morphAttributes.position!==void 0,u=h.morphAttributes.normal!==void 0,b=h.morphAttributes.color!==void 0,S=h.morphAttributes.position||[],w=h.morphAttributes.normal||[],P=h.morphAttributes.color||[];let R=0;f===!0&&(R=1),u===!0&&(R=2),b===!0&&(R=3);let A=h.attributes.position.count*R,H=1;A>e.maxTextureSize&&(H=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const K=new Float32Array(A*H*4*v),x=new Yo(K,A,H,v);x.type=en,x.needsUpdate=!0;const T=R*4;for(let $=0;$<v;$++){const L=S[$],X=w[$],W=P[$],q=A*H*4*$;for(let j=0;j<L.count;j++){const k=j*T;f===!0&&(a.fromBufferAttribute(L,j),K[q+k+0]=a.x,K[q+k+1]=a.y,K[q+k+2]=a.z,K[q+k+3]=0),u===!0&&(a.fromBufferAttribute(X,j),K[q+k+4]=a.x,K[q+k+5]=a.y,K[q+k+6]=a.z,K[q+k+7]=0),b===!0&&(a.fromBufferAttribute(W,j),K[q+k+8]=a.x,K[q+k+9]=a.y,K[q+k+10]=a.z,K[q+k+11]=W.itemSize===4?a.w:1)}}M={count:v,texture:x,size:new We(A,H)},s.set(h,M),h.addEventListener("dispose",G)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)p.getUniforms().setValue(n,"morphTexture",d.morphTexture,t);else{let f=0;for(let b=0;b<m.length;b++)f+=m[b];const u=h.morphTargetsRelative?1:1-f;p.getUniforms().setValue(n,"morphTargetBaseInfluence",u),p.getUniforms().setValue(n,"morphTargetInfluences",m)}p.getUniforms().setValue(n,"morphTargetsTexture",M.texture,t),p.getUniforms().setValue(n,"morphTargetsTextureSize",M.size)}else{const g=m===void 0?0:m.length;let v=i[h.id];if(v===void 0||v.length!==g){v=[];for(let S=0;S<g;S++)v[S]=[S,0];i[h.id]=v}for(let S=0;S<g;S++){const w=v[S];w[0]=S,w[1]=m[S]}v.sort(ap);for(let S=0;S<8;S++)S<g&&v[S][1]?(o[S][0]=v[S][0],o[S][1]=v[S][1]):(o[S][0]=Number.MAX_SAFE_INTEGER,o[S][1]=0);o.sort(sp);const M=h.morphAttributes.position,f=h.morphAttributes.normal;let u=0;for(let S=0;S<8;S++){const w=o[S],P=w[0],R=w[1];P!==Number.MAX_SAFE_INTEGER&&R?(M&&h.getAttribute("morphTarget"+S)!==M[P]&&h.setAttribute("morphTarget"+S,M[P]),f&&h.getAttribute("morphNormal"+S)!==f[P]&&h.setAttribute("morphNormal"+S,f[P]),r[S]=R,u+=R):(M&&h.hasAttribute("morphTarget"+S)===!0&&h.deleteAttribute("morphTarget"+S),f&&h.hasAttribute("morphNormal"+S)===!0&&h.deleteAttribute("morphNormal"+S),r[S]=0)}const b=h.morphTargetsRelative?1:1-u;p.getUniforms().setValue(n,"morphTargetBaseInfluence",b),p.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function lp(n,e,t,i){let r=new WeakMap;function s(l){const d=i.render.frame,h=l.geometry,p=e.get(l,h);if(r.get(p)!==d&&(e.update(p),r.set(p,d)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==d&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,d))),l.isSkinnedMesh){const m=l.skeleton;r.get(m)!==d&&(m.update(),r.set(m,d))}return p}function a(){r=new WeakMap}function o(l){const d=l.target;d.removeEventListener("dispose",o),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:s,dispose:a}}class sl extends bt{constructor(e,t,i,r,s,a,o,l,d,h){if(h=h!==void 0?h:zn,h!==zn&&h!==di)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===zn&&(i=mn),i===void 0&&h===di&&(i=Bn),super(null,r,s,a,o,l,h,i,d),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:_t,this.minFilter=l!==void 0?l:_t,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const al=new bt,ol=new sl(1,1);ol.compareFunction=Wo;const ll=new Yo,cl=new Hd,dl=new tl,ao=[],oo=[],lo=new Float32Array(16),co=new Float32Array(9),ho=new Float32Array(4);function pi(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=ao[r];if(s===void 0&&(s=new Float32Array(r),ao[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function st(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function at(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function gr(n,e){let t=oo[e];t===void 0&&(t=new Int32Array(e),oo[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function cp(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function dp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(st(t,e))return;n.uniform2fv(this.addr,e),at(t,e)}}function hp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(st(t,e))return;n.uniform3fv(this.addr,e),at(t,e)}}function up(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(st(t,e))return;n.uniform4fv(this.addr,e),at(t,e)}}function fp(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(st(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),at(t,e)}else{if(st(t,i))return;ho.set(i),n.uniformMatrix2fv(this.addr,!1,ho),at(t,i)}}function pp(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(st(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),at(t,e)}else{if(st(t,i))return;co.set(i),n.uniformMatrix3fv(this.addr,!1,co),at(t,i)}}function mp(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(st(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),at(t,e)}else{if(st(t,i))return;lo.set(i),n.uniformMatrix4fv(this.addr,!1,lo),at(t,i)}}function gp(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function _p(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(st(t,e))return;n.uniform2iv(this.addr,e),at(t,e)}}function vp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(st(t,e))return;n.uniform3iv(this.addr,e),at(t,e)}}function xp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(st(t,e))return;n.uniform4iv(this.addr,e),at(t,e)}}function Sp(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Mp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(st(t,e))return;n.uniform2uiv(this.addr,e),at(t,e)}}function Ep(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(st(t,e))return;n.uniform3uiv(this.addr,e),at(t,e)}}function yp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(st(t,e))return;n.uniform4uiv(this.addr,e),at(t,e)}}function bp(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?ol:al;t.setTexture2D(e||s,r)}function Tp(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||cl,r)}function Ap(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||dl,r)}function wp(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||ll,r)}function Rp(n){switch(n){case 5126:return cp;case 35664:return dp;case 35665:return hp;case 35666:return up;case 35674:return fp;case 35675:return pp;case 35676:return mp;case 5124:case 35670:return gp;case 35667:case 35671:return _p;case 35668:case 35672:return vp;case 35669:case 35673:return xp;case 5125:return Sp;case 36294:return Mp;case 36295:return Ep;case 36296:return yp;case 35678:case 36198:case 36298:case 36306:case 35682:return bp;case 35679:case 36299:case 36307:return Tp;case 35680:case 36300:case 36308:case 36293:return Ap;case 36289:case 36303:case 36311:case 36292:return wp}}function Cp(n,e){n.uniform1fv(this.addr,e)}function Pp(n,e){const t=pi(e,this.size,2);n.uniform2fv(this.addr,t)}function Lp(n,e){const t=pi(e,this.size,3);n.uniform3fv(this.addr,t)}function Np(n,e){const t=pi(e,this.size,4);n.uniform4fv(this.addr,t)}function Dp(n,e){const t=pi(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Up(n,e){const t=pi(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Ip(n,e){const t=pi(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Fp(n,e){n.uniform1iv(this.addr,e)}function Op(n,e){n.uniform2iv(this.addr,e)}function Bp(n,e){n.uniform3iv(this.addr,e)}function zp(n,e){n.uniform4iv(this.addr,e)}function kp(n,e){n.uniform1uiv(this.addr,e)}function Gp(n,e){n.uniform2uiv(this.addr,e)}function Hp(n,e){n.uniform3uiv(this.addr,e)}function Vp(n,e){n.uniform4uiv(this.addr,e)}function Wp(n,e,t){const i=this.cache,r=e.length,s=gr(t,r);st(i,s)||(n.uniform1iv(this.addr,s),at(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||al,s[a])}function jp(n,e,t){const i=this.cache,r=e.length,s=gr(t,r);st(i,s)||(n.uniform1iv(this.addr,s),at(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||cl,s[a])}function Xp(n,e,t){const i=this.cache,r=e.length,s=gr(t,r);st(i,s)||(n.uniform1iv(this.addr,s),at(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||dl,s[a])}function qp(n,e,t){const i=this.cache,r=e.length,s=gr(t,r);st(i,s)||(n.uniform1iv(this.addr,s),at(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||ll,s[a])}function Yp(n){switch(n){case 5126:return Cp;case 35664:return Pp;case 35665:return Lp;case 35666:return Np;case 35674:return Dp;case 35675:return Up;case 35676:return Ip;case 5124:case 35670:return Fp;case 35667:case 35671:return Op;case 35668:case 35672:return Bp;case 35669:case 35673:return zp;case 5125:return kp;case 36294:return Gp;case 36295:return Hp;case 36296:return Vp;case 35678:case 36198:case 36298:case 36306:case 35682:return Wp;case 35679:case 36299:case 36307:return jp;case 35680:case 36300:case 36308:case 36293:return Xp;case 36289:case 36303:case 36311:case 36292:return qp}}class $p{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Rp(t.type)}}class Kp{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Yp(t.type)}}class Zp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const ts=/(\w+)(\])?(\[|\.)?/g;function uo(n,e){n.seq.push(e),n.map[e.id]=e}function Jp(n,e,t){const i=n.name,r=i.length;for(ts.lastIndex=0;;){const s=ts.exec(i),a=ts.lastIndex;let o=s[1];const l=s[2]==="]",d=s[3];if(l&&(o=o|0),d===void 0||d==="["&&a+2===r){uo(t,d===void 0?new $p(o,n,e):new Kp(o,n,e));break}else{let p=t.map[o];p===void 0&&(p=new Zp(o),uo(t,p)),t=p}}}class nr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);Jp(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function fo(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Qp=37297;let em=0;function tm(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function nm(n){const e=Xe.getPrimaries(Xe.workingColorSpace),t=Xe.getPrimaries(n);let i;switch(e===t?i="":e===or&&t===ar?i="LinearDisplayP3ToLinearSRGB":e===ar&&t===or&&(i="LinearSRGBToLinearDisplayP3"),n){case En:case fr:return[i,"LinearTransferOETF"];case Vt:case ws:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function po(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+tm(n.getShaderSource(e),a)}else return r}function im(n,e){const t=nm(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function rm(n,e){let t;switch(e){case cd:t="Linear";break;case dd:t="Reinhard";break;case hd:t="OptimizedCineon";break;case ud:t="ACESFilmic";break;case pd:t="AgX";break;case md:t="Neutral";break;case fd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function sm(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.alphaToCoverage||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(si).join(`
`)}function am(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(si).join(`
`)}function om(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function lm(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function si(n){return n!==""}function mo(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function go(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const cm=/^[ \t]*#include +<([\w\d./]+)>/gm;function vs(n){return n.replace(cm,hm)}const dm=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function hm(n,e){let t=Ue[e];if(t===void 0){const i=dm.get(e);if(i!==void 0)t=Ue[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return vs(t)}const um=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _o(n){return n.replace(um,fm)}function fm(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function vo(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	`;return n.isWebGL2&&(e+=`precision ${n.precision} sampler3D;
		precision ${n.precision} sampler2DArray;
		precision ${n.precision} sampler2DShadow;
		precision ${n.precision} samplerCubeShadow;
		precision ${n.precision} sampler2DArrayShadow;
		precision ${n.precision} isampler2D;
		precision ${n.precision} isampler3D;
		precision ${n.precision} isamplerCube;
		precision ${n.precision} isampler2DArray;
		precision ${n.precision} usampler2D;
		precision ${n.precision} usampler3D;
		precision ${n.precision} usamplerCube;
		precision ${n.precision} usampler2DArray;
		`),n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function pm(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Uo?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Oc?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Qt&&(e="SHADOWMAP_TYPE_VSM"),e}function mm(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case li:case ci:e="ENVMAP_TYPE_CUBE";break;case ur:e="ENVMAP_TYPE_CUBE_UV";break}return e}function gm(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ci:e="ENVMAP_MODE_REFRACTION";break}return e}function _m(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Io:e="ENVMAP_BLENDING_MULTIPLY";break;case od:e="ENVMAP_BLENDING_MIX";break;case ld:e="ENVMAP_BLENDING_ADD";break}return e}function vm(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function xm(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=pm(t),d=mm(t),h=gm(t),p=_m(t),m=vm(t),g=t.isWebGL2?"":sm(t),v=am(t),M=om(s),f=r.createProgram();let u,b,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(si).join(`
`),u.length>0&&(u+=`
`),b=[g,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(si).join(`
`),b.length>0&&(b+=`
`)):(u=[vo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(si).join(`
`),b=[g,vo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==vn?"#define TONE_MAPPING":"",t.toneMapping!==vn?Ue.tonemapping_pars_fragment:"",t.toneMapping!==vn?rm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,im("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(si).join(`
`)),a=vs(a),a=mo(a,t),a=go(a,t),o=vs(o),o=mo(o,t),o=go(o,t),a=_o(a),o=_o(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,u=[v,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,b=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Da?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Da?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);const w=S+u+a,P=S+b+o,R=fo(r,r.VERTEX_SHADER,w),A=fo(r,r.FRAGMENT_SHADER,P);r.attachShader(f,R),r.attachShader(f,A),t.index0AttributeName!==void 0?r.bindAttribLocation(f,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(f,0,"position"),r.linkProgram(f);function H(G){if(n.debug.checkShaderErrors){const $=r.getProgramInfoLog(f).trim(),L=r.getShaderInfoLog(R).trim(),X=r.getShaderInfoLog(A).trim();let W=!0,q=!0;if(r.getProgramParameter(f,r.LINK_STATUS)===!1)if(W=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,f,R,A);else{const j=po(r,R,"vertex"),k=po(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(f,r.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+$+`
`+j+`
`+k)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(L===""||X==="")&&(q=!1);q&&(G.diagnostics={runnable:W,programLog:$,vertexShader:{log:L,prefix:u},fragmentShader:{log:X,prefix:b}})}r.deleteShader(R),r.deleteShader(A),K=new nr(r,f),x=lm(r,f)}let K;this.getUniforms=function(){return K===void 0&&H(this),K};let x;this.getAttributes=function(){return x===void 0&&H(this),x};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=r.getProgramParameter(f,Qp)),T},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(f),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=em++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=R,this.fragmentShader=A,this}let Sm=0;class Mm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Em(e),t.set(e,i)),i}}class Em{constructor(e){this.id=Sm++,this.code=e,this.usedTimes=0}}function ym(n,e,t,i,r,s,a){const o=new $o,l=new Mm,d=new Set,h=[],p=r.isWebGL2,m=r.logarithmicDepthBuffer,g=r.vertexTextures;let v=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return d.add(x),x===0?"uv":`uv${x}`}function u(x,T,G,$,L){const X=$.fog,W=L.geometry,q=x.isMeshStandardMaterial?$.environment:null,j=(x.isMeshStandardMaterial?t:e).get(x.envMap||q),k=j&&j.mapping===ur?j.image.height:null,te=M[x.type];x.precision!==null&&(v=r.getMaxPrecision(x.precision),v!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",v,"instead."));const Q=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ce=Q!==void 0?Q.length:0;let pe=0;W.morphAttributes.position!==void 0&&(pe=1),W.morphAttributes.normal!==void 0&&(pe=2),W.morphAttributes.color!==void 0&&(pe=3);let z,J,ue,Ae;if(te){const Ye=Wt[te];z=Ye.vertexShader,J=Ye.fragmentShader}else z=x.vertexShader,J=x.fragmentShader,l.update(x),ue=l.getVertexShaderID(x),Ae=l.getFragmentShaderID(x);const ve=n.getRenderTarget(),fe=L.isInstancedMesh===!0,je=L.isBatchedMesh===!0,we=!!x.map,D=!!x.matcap,ct=!!j,Se=!!x.aoMap,Be=!!x.lightMap,ye=!!x.bumpMap,He=!!x.normalMap,Fe=!!x.displacementMap,ze=!!x.emissiveMap,et=!!x.metalnessMap,y=!!x.roughnessMap,_=x.anisotropy>0,V=x.clearcoat>0,Y=x.iridescence>0,ee=x.sheen>0,Z=x.transmission>0,Le=_&&!!x.anisotropyMap,be=V&&!!x.clearcoatMap,se=V&&!!x.clearcoatNormalMap,oe=V&&!!x.clearcoatRoughnessMap,Ne=Y&&!!x.iridescenceMap,ne=Y&&!!x.iridescenceThicknessMap,nt=ee&&!!x.sheenColorMap,ke=ee&&!!x.sheenRoughnessMap,xe=!!x.specularMap,me=!!x.specularColorMap,ge=!!x.specularIntensityMap,Ve=Z&&!!x.transmissionMap,Ce=Z&&!!x.thicknessMap,Ze=!!x.gradientMap,C=!!x.alphaMap,ae=x.alphaTest>0,F=!!x.alphaHash,ie=!!x.extensions;let de=vn;x.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(de=n.toneMapping);const Ge={isWebGL2:p,shaderID:te,shaderType:x.type,shaderName:x.name,vertexShader:z,fragmentShader:J,defines:x.defines,customVertexShaderID:ue,customFragmentShaderID:Ae,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:v,batching:je,instancing:fe,instancingColor:fe&&L.instanceColor!==null,instancingMorph:fe&&L.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:ve===null?n.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:En,alphaToCoverage:!!x.alphaToCoverage,map:we,matcap:D,envMap:ct,envMapMode:ct&&j.mapping,envMapCubeUVHeight:k,aoMap:Se,lightMap:Be,bumpMap:ye,normalMap:He,displacementMap:g&&Fe,emissiveMap:ze,normalMapObjectSpace:He&&x.normalMapType===wd,normalMapTangentSpace:He&&x.normalMapType===Ad,metalnessMap:et,roughnessMap:y,anisotropy:_,anisotropyMap:Le,clearcoat:V,clearcoatMap:be,clearcoatNormalMap:se,clearcoatRoughnessMap:oe,iridescence:Y,iridescenceMap:Ne,iridescenceThicknessMap:ne,sheen:ee,sheenColorMap:nt,sheenRoughnessMap:ke,specularMap:xe,specularColorMap:me,specularIntensityMap:ge,transmission:Z,transmissionMap:Ve,thicknessMap:Ce,gradientMap:Ze,opaque:x.transparent===!1&&x.blending===ai&&x.alphaToCoverage===!1,alphaMap:C,alphaTest:ae,alphaHash:F,combine:x.combine,mapUv:we&&f(x.map.channel),aoMapUv:Se&&f(x.aoMap.channel),lightMapUv:Be&&f(x.lightMap.channel),bumpMapUv:ye&&f(x.bumpMap.channel),normalMapUv:He&&f(x.normalMap.channel),displacementMapUv:Fe&&f(x.displacementMap.channel),emissiveMapUv:ze&&f(x.emissiveMap.channel),metalnessMapUv:et&&f(x.metalnessMap.channel),roughnessMapUv:y&&f(x.roughnessMap.channel),anisotropyMapUv:Le&&f(x.anisotropyMap.channel),clearcoatMapUv:be&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:se&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&f(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Ne&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:nt&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:ke&&f(x.sheenRoughnessMap.channel),specularMapUv:xe&&f(x.specularMap.channel),specularColorMapUv:me&&f(x.specularColorMap.channel),specularIntensityMapUv:ge&&f(x.specularIntensityMap.channel),transmissionMapUv:Ve&&f(x.transmissionMap.channel),thicknessMapUv:Ce&&f(x.thicknessMap.channel),alphaMapUv:C&&f(x.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(He||_),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!W.attributes.uv&&(we||C),fog:!!X,useFog:x.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:m,skinning:L.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:pe,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&G.length>0,shadowMapType:n.shadowMap.type,toneMapping:de,useLegacyLights:n._useLegacyLights,decodeVideoTexture:we&&x.map.isVideoTexture===!0&&Xe.getTransfer(x.map.colorSpace)===Ke,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ut,flipSided:x.side===yt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:ie&&x.extensions.derivatives===!0,extensionFragDepth:ie&&x.extensions.fragDepth===!0,extensionDrawBuffers:ie&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:ie&&x.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ie&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ie&&x.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:p||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:p||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:p||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ge.vertexUv1s=d.has(1),Ge.vertexUv2s=d.has(2),Ge.vertexUv3s=d.has(3),d.clear(),Ge}function b(x){const T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(const G in x.defines)T.push(G),T.push(x.defines[G]);return x.isRawShaderMaterial===!1&&(S(T,x),w(T,x),T.push(n.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function S(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function w(x,T){o.disableAll(),T.isWebGL2&&o.enable(0),T.supportsVertexTextures&&o.enable(1),T.instancing&&o.enable(2),T.instancingColor&&o.enable(3),T.instancingMorph&&o.enable(4),T.matcap&&o.enable(5),T.envMap&&o.enable(6),T.normalMapObjectSpace&&o.enable(7),T.normalMapTangentSpace&&o.enable(8),T.clearcoat&&o.enable(9),T.iridescence&&o.enable(10),T.alphaTest&&o.enable(11),T.vertexColors&&o.enable(12),T.vertexAlphas&&o.enable(13),T.vertexUv1s&&o.enable(14),T.vertexUv2s&&o.enable(15),T.vertexUv3s&&o.enable(16),T.vertexTangents&&o.enable(17),T.anisotropy&&o.enable(18),T.alphaHash&&o.enable(19),T.batching&&o.enable(20),x.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.skinning&&o.enable(4),T.morphTargets&&o.enable(5),T.morphNormals&&o.enable(6),T.morphColors&&o.enable(7),T.premultipliedAlpha&&o.enable(8),T.shadowMapEnabled&&o.enable(9),T.useLegacyLights&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.alphaToCoverage&&o.enable(20),x.push(o.mask)}function P(x){const T=M[x.type];let G;if(T){const $=Wt[T];G=nh.clone($.uniforms)}else G=x.uniforms;return G}function R(x,T){let G;for(let $=0,L=h.length;$<L;$++){const X=h[$];if(X.cacheKey===T){G=X,++G.usedTimes;break}}return G===void 0&&(G=new xm(n,T,x,s),h.push(G)),G}function A(x){if(--x.usedTimes===0){const T=h.indexOf(x);h[T]=h[h.length-1],h.pop(),x.destroy()}}function H(x){l.remove(x)}function K(){l.dispose()}return{getParameters:u,getProgramCacheKey:b,getUniforms:P,acquireProgram:R,releaseProgram:A,releaseShaderCache:H,programs:h,dispose:K}}function bm(){let n=new WeakMap;function e(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function t(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function Tm(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function xo(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function So(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(p,m,g,v,M,f){let u=n[e];return u===void 0?(u={id:p.id,object:p,geometry:m,material:g,groupOrder:v,renderOrder:p.renderOrder,z:M,group:f},n[e]=u):(u.id=p.id,u.object=p,u.geometry=m,u.material=g,u.groupOrder=v,u.renderOrder=p.renderOrder,u.z=M,u.group=f),e++,u}function o(p,m,g,v,M,f){const u=a(p,m,g,v,M,f);g.transmission>0?i.push(u):g.transparent===!0?r.push(u):t.push(u)}function l(p,m,g,v,M,f){const u=a(p,m,g,v,M,f);g.transmission>0?i.unshift(u):g.transparent===!0?r.unshift(u):t.unshift(u)}function d(p,m){t.length>1&&t.sort(p||Tm),i.length>1&&i.sort(m||xo),r.length>1&&r.sort(m||xo)}function h(){for(let p=e,m=n.length;p<m;p++){const g=n[p];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:h,sort:d}}function Am(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new So,n.set(i,[a])):r>=s.length?(a=new So,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function wm(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new qe};break;case"SpotLight":t={position:new I,direction:new I,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function Rm(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Cm=0;function Pm(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Lm(n,e){const t=new wm,i=Rm(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new I);const s=new I,a=new rt,o=new rt;function l(h,p){let m=0,g=0,v=0;for(let G=0;G<9;G++)r.probe[G].set(0,0,0);let M=0,f=0,u=0,b=0,S=0,w=0,P=0,R=0,A=0,H=0,K=0;h.sort(Pm);const x=p===!0?Math.PI:1;for(let G=0,$=h.length;G<$;G++){const L=h[G],X=L.color,W=L.intensity,q=L.distance,j=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)m+=X.r*W*x,g+=X.g*W*x,v+=X.b*W*x;else if(L.isLightProbe){for(let k=0;k<9;k++)r.probe[k].addScaledVector(L.sh.coefficients[k],W);K++}else if(L.isDirectionalLight){const k=t.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity*x),L.castShadow){const te=L.shadow,Q=i.get(L);Q.shadowBias=te.bias,Q.shadowNormalBias=te.normalBias,Q.shadowRadius=te.radius,Q.shadowMapSize=te.mapSize,r.directionalShadow[M]=Q,r.directionalShadowMap[M]=j,r.directionalShadowMatrix[M]=L.shadow.matrix,w++}r.directional[M]=k,M++}else if(L.isSpotLight){const k=t.get(L);k.position.setFromMatrixPosition(L.matrixWorld),k.color.copy(X).multiplyScalar(W*x),k.distance=q,k.coneCos=Math.cos(L.angle),k.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),k.decay=L.decay,r.spot[u]=k;const te=L.shadow;if(L.map&&(r.spotLightMap[A]=L.map,A++,te.updateMatrices(L),L.castShadow&&H++),r.spotLightMatrix[u]=te.matrix,L.castShadow){const Q=i.get(L);Q.shadowBias=te.bias,Q.shadowNormalBias=te.normalBias,Q.shadowRadius=te.radius,Q.shadowMapSize=te.mapSize,r.spotShadow[u]=Q,r.spotShadowMap[u]=j,R++}u++}else if(L.isRectAreaLight){const k=t.get(L);k.color.copy(X).multiplyScalar(W),k.halfWidth.set(L.width*.5,0,0),k.halfHeight.set(0,L.height*.5,0),r.rectArea[b]=k,b++}else if(L.isPointLight){const k=t.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity*x),k.distance=L.distance,k.decay=L.decay,L.castShadow){const te=L.shadow,Q=i.get(L);Q.shadowBias=te.bias,Q.shadowNormalBias=te.normalBias,Q.shadowRadius=te.radius,Q.shadowMapSize=te.mapSize,Q.shadowCameraNear=te.camera.near,Q.shadowCameraFar=te.camera.far,r.pointShadow[f]=Q,r.pointShadowMap[f]=j,r.pointShadowMatrix[f]=L.shadow.matrix,P++}r.point[f]=k,f++}else if(L.isHemisphereLight){const k=t.get(L);k.skyColor.copy(L.color).multiplyScalar(W*x),k.groundColor.copy(L.groundColor).multiplyScalar(W*x),r.hemi[S]=k,S++}}b>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=re.LTC_FLOAT_1,r.rectAreaLTC2=re.LTC_FLOAT_2):(r.rectAreaLTC1=re.LTC_HALF_1,r.rectAreaLTC2=re.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=re.LTC_FLOAT_1,r.rectAreaLTC2=re.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=re.LTC_HALF_1,r.rectAreaLTC2=re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=m,r.ambient[1]=g,r.ambient[2]=v;const T=r.hash;(T.directionalLength!==M||T.pointLength!==f||T.spotLength!==u||T.rectAreaLength!==b||T.hemiLength!==S||T.numDirectionalShadows!==w||T.numPointShadows!==P||T.numSpotShadows!==R||T.numSpotMaps!==A||T.numLightProbes!==K)&&(r.directional.length=M,r.spot.length=u,r.rectArea.length=b,r.point.length=f,r.hemi.length=S,r.directionalShadow.length=w,r.directionalShadowMap.length=w,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=w,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=R+A-H,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=H,r.numLightProbes=K,T.directionalLength=M,T.pointLength=f,T.spotLength=u,T.rectAreaLength=b,T.hemiLength=S,T.numDirectionalShadows=w,T.numPointShadows=P,T.numSpotShadows=R,T.numSpotMaps=A,T.numLightProbes=K,r.version=Cm++)}function d(h,p){let m=0,g=0,v=0,M=0,f=0;const u=p.matrixWorldInverse;for(let b=0,S=h.length;b<S;b++){const w=h[b];if(w.isDirectionalLight){const P=r.directional[m];P.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(u),m++}else if(w.isSpotLight){const P=r.spot[v];P.position.setFromMatrixPosition(w.matrixWorld),P.position.applyMatrix4(u),P.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(u),v++}else if(w.isRectAreaLight){const P=r.rectArea[M];P.position.setFromMatrixPosition(w.matrixWorld),P.position.applyMatrix4(u),o.identity(),a.copy(w.matrixWorld),a.premultiply(u),o.extractRotation(a),P.halfWidth.set(w.width*.5,0,0),P.halfHeight.set(0,w.height*.5,0),P.halfWidth.applyMatrix4(o),P.halfHeight.applyMatrix4(o),M++}else if(w.isPointLight){const P=r.point[g];P.position.setFromMatrixPosition(w.matrixWorld),P.position.applyMatrix4(u),g++}else if(w.isHemisphereLight){const P=r.hemi[f];P.direction.setFromMatrixPosition(w.matrixWorld),P.direction.transformDirection(u),f++}}}return{setup:l,setupView:d,state:r}}function Mo(n,e){const t=new Lm(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(p){i.push(p)}function o(p){r.push(p)}function l(p){t.setup(i,p)}function d(p){t.setupView(i,p)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:d,pushLight:a,pushShadow:o}}function Nm(n,e){let t=new WeakMap;function i(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new Mo(n,e),t.set(s,[l])):a>=o.length?(l=new Mo(n,e),o.push(l)):l=o[a],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class Dm extends pr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Um extends pr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Im=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Om(n,e,t){let i=new nl;const r=new We,s=new We,a=new ht,o=new Dm({depthPacking:Td}),l=new Um,d={},h=t.maxTextureSize,p={[Sn]:yt,[yt]:Sn,[Ut]:Ut},m=new Mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:Im,fragmentShader:Fm}),g=m.clone();g.defines.HORIZONTAL_PASS=1;const v=new sn;v.setAttribute("position",new Xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Et(v,m),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uo;let u=this.type;this.render=function(R,A,H){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||R.length===0)return;const K=n.getRenderTarget(),x=n.getActiveCubeFace(),T=n.getActiveMipmapLevel(),G=n.state;G.setBlending(_n),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const $=u!==Qt&&this.type===Qt,L=u===Qt&&this.type!==Qt;for(let X=0,W=R.length;X<W;X++){const q=R[X],j=q.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;r.copy(j.mapSize);const k=j.getFrameExtents();if(r.multiply(k),s.copy(j.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/k.x),r.x=s.x*k.x,j.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/k.y),r.y=s.y*k.y,j.mapSize.y=s.y)),j.map===null||$===!0||L===!0){const Q=this.type!==Qt?{minFilter:_t,magFilter:_t}:{};j.map!==null&&j.map.dispose(),j.map=new kn(r.x,r.y,Q),j.map.texture.name=q.name+".shadowMap",j.camera.updateProjectionMatrix()}n.setRenderTarget(j.map),n.clear();const te=j.getViewportCount();for(let Q=0;Q<te;Q++){const ce=j.getViewport(Q);a.set(s.x*ce.x,s.y*ce.y,s.x*ce.z,s.y*ce.w),G.viewport(a),j.updateMatrices(q,Q),i=j.getFrustum(),w(A,H,j.camera,q,this.type)}j.isPointLightShadow!==!0&&this.type===Qt&&b(j,H),j.needsUpdate=!1}u=this.type,f.needsUpdate=!1,n.setRenderTarget(K,x,T)};function b(R,A){const H=e.update(M);m.defines.VSM_SAMPLES!==R.blurSamples&&(m.defines.VSM_SAMPLES=R.blurSamples,g.defines.VSM_SAMPLES=R.blurSamples,m.needsUpdate=!0,g.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new kn(r.x,r.y)),m.uniforms.shadow_pass.value=R.map.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(A,null,H,m,M,null),g.uniforms.shadow_pass.value=R.mapPass.texture,g.uniforms.resolution.value=R.mapSize,g.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(A,null,H,g,M,null)}function S(R,A,H,K){let x=null;const T=H.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(T!==void 0)x=T;else if(x=H.isPointLight===!0?l:o,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const G=x.uuid,$=A.uuid;let L=d[G];L===void 0&&(L={},d[G]=L);let X=L[$];X===void 0&&(X=x.clone(),L[$]=X,A.addEventListener("dispose",P)),x=X}if(x.visible=A.visible,x.wireframe=A.wireframe,K===Qt?x.side=A.shadowSide!==null?A.shadowSide:A.side:x.side=A.shadowSide!==null?A.shadowSide:p[A.side],x.alphaMap=A.alphaMap,x.alphaTest=A.alphaTest,x.map=A.map,x.clipShadows=A.clipShadows,x.clippingPlanes=A.clippingPlanes,x.clipIntersection=A.clipIntersection,x.displacementMap=A.displacementMap,x.displacementScale=A.displacementScale,x.displacementBias=A.displacementBias,x.wireframeLinewidth=A.wireframeLinewidth,x.linewidth=A.linewidth,H.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const G=n.properties.get(x);G.light=H}return x}function w(R,A,H,K,x){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&x===Qt)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,R.matrixWorld);const $=e.update(R),L=R.material;if(Array.isArray(L)){const X=$.groups;for(let W=0,q=X.length;W<q;W++){const j=X[W],k=L[j.materialIndex];if(k&&k.visible){const te=S(R,k,K,x);R.onBeforeShadow(n,R,A,H,$,te,j),n.renderBufferDirect(H,null,$,te,R,j),R.onAfterShadow(n,R,A,H,$,te,j)}}}else if(L.visible){const X=S(R,L,K,x);R.onBeforeShadow(n,R,A,H,$,X,null),n.renderBufferDirect(H,null,$,X,R,null),R.onAfterShadow(n,R,A,H,$,X,null)}}const G=R.children;for(let $=0,L=G.length;$<L;$++)w(G[$],A,H,K,x)}function P(R){R.target.removeEventListener("dispose",P);for(const H in d){const K=d[H],x=R.target.uuid;x in K&&(K[x].dispose(),delete K[x])}}}function Bm(n,e,t){const i=t.isWebGL2;function r(){let C=!1;const ae=new ht;let F=null;const ie=new ht(0,0,0,0);return{setMask:function(de){F!==de&&!C&&(n.colorMask(de,de,de,de),F=de)},setLocked:function(de){C=de},setClear:function(de,Ge,Ye,dt,Lt){Lt===!0&&(de*=dt,Ge*=dt,Ye*=dt),ae.set(de,Ge,Ye,dt),ie.equals(ae)===!1&&(n.clearColor(de,Ge,Ye,dt),ie.copy(ae))},reset:function(){C=!1,F=null,ie.set(-1,0,0,0)}}}function s(){let C=!1,ae=null,F=null,ie=null;return{setTest:function(de){de?fe(n.DEPTH_TEST):je(n.DEPTH_TEST)},setMask:function(de){ae!==de&&!C&&(n.depthMask(de),ae=de)},setFunc:function(de){if(F!==de){switch(de){case ed:n.depthFunc(n.NEVER);break;case td:n.depthFunc(n.ALWAYS);break;case nd:n.depthFunc(n.LESS);break;case rr:n.depthFunc(n.LEQUAL);break;case id:n.depthFunc(n.EQUAL);break;case rd:n.depthFunc(n.GEQUAL);break;case sd:n.depthFunc(n.GREATER);break;case ad:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}F=de}},setLocked:function(de){C=de},setClear:function(de){ie!==de&&(n.clearDepth(de),ie=de)},reset:function(){C=!1,ae=null,F=null,ie=null}}}function a(){let C=!1,ae=null,F=null,ie=null,de=null,Ge=null,Ye=null,dt=null,Lt=null;return{setTest:function($e){C||($e?fe(n.STENCIL_TEST):je(n.STENCIL_TEST))},setMask:function($e){ae!==$e&&!C&&(n.stencilMask($e),ae=$e)},setFunc:function($e,mt,Ht){(F!==$e||ie!==mt||de!==Ht)&&(n.stencilFunc($e,mt,Ht),F=$e,ie=mt,de=Ht)},setOp:function($e,mt,Ht){(Ge!==$e||Ye!==mt||dt!==Ht)&&(n.stencilOp($e,mt,Ht),Ge=$e,Ye=mt,dt=Ht)},setLocked:function($e){C=$e},setClear:function($e){Lt!==$e&&(n.clearStencil($e),Lt=$e)},reset:function(){C=!1,ae=null,F=null,ie=null,de=null,Ge=null,Ye=null,dt=null,Lt=null}}}const o=new r,l=new s,d=new a,h=new WeakMap,p=new WeakMap;let m={},g={},v=new WeakMap,M=[],f=null,u=!1,b=null,S=null,w=null,P=null,R=null,A=null,H=null,K=new qe(0,0,0),x=0,T=!1,G=null,$=null,L=null,X=null,W=null;const q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,k=0;const te=n.getParameter(n.VERSION);te.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(te)[1]),j=k>=1):te.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),j=k>=2);let Q=null,ce={};const pe=n.getParameter(n.SCISSOR_BOX),z=n.getParameter(n.VIEWPORT),J=new ht().fromArray(pe),ue=new ht().fromArray(z);function Ae(C,ae,F,ie){const de=new Uint8Array(4),Ge=n.createTexture();n.bindTexture(C,Ge),n.texParameteri(C,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(C,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ye=0;Ye<F;Ye++)i&&(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)?n.texImage3D(ae,0,n.RGBA,1,1,ie,0,n.RGBA,n.UNSIGNED_BYTE,de):n.texImage2D(ae+Ye,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,de);return Ge}const ve={};ve[n.TEXTURE_2D]=Ae(n.TEXTURE_2D,n.TEXTURE_2D,1),ve[n.TEXTURE_CUBE_MAP]=Ae(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ve[n.TEXTURE_2D_ARRAY]=Ae(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ve[n.TEXTURE_3D]=Ae(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),d.setClear(0),fe(n.DEPTH_TEST),l.setFunc(rr),Fe(!1),ze(Qs),fe(n.CULL_FACE),ye(_n);function fe(C){m[C]!==!0&&(n.enable(C),m[C]=!0)}function je(C){m[C]!==!1&&(n.disable(C),m[C]=!1)}function we(C,ae){return g[C]!==ae?(n.bindFramebuffer(C,ae),g[C]=ae,i&&(C===n.DRAW_FRAMEBUFFER&&(g[n.FRAMEBUFFER]=ae),C===n.FRAMEBUFFER&&(g[n.DRAW_FRAMEBUFFER]=ae)),!0):!1}function D(C,ae){let F=M,ie=!1;if(C){F=v.get(ae),F===void 0&&(F=[],v.set(ae,F));const de=C.textures;if(F.length!==de.length||F[0]!==n.COLOR_ATTACHMENT0){for(let Ge=0,Ye=de.length;Ge<Ye;Ge++)F[Ge]=n.COLOR_ATTACHMENT0+Ge;F.length=de.length,ie=!0}}else F[0]!==n.BACK&&(F[0]=n.BACK,ie=!0);if(ie)if(t.isWebGL2)n.drawBuffers(F);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(F);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function ct(C){return f!==C?(n.useProgram(C),f=C,!0):!1}const Se={[Un]:n.FUNC_ADD,[zc]:n.FUNC_SUBTRACT,[kc]:n.FUNC_REVERSE_SUBTRACT};if(i)Se[ia]=n.MIN,Se[ra]=n.MAX;else{const C=e.get("EXT_blend_minmax");C!==null&&(Se[ia]=C.MIN_EXT,Se[ra]=C.MAX_EXT)}const Be={[Gc]:n.ZERO,[Hc]:n.ONE,[Vc]:n.SRC_COLOR,[cs]:n.SRC_ALPHA,[$c]:n.SRC_ALPHA_SATURATE,[qc]:n.DST_COLOR,[jc]:n.DST_ALPHA,[Wc]:n.ONE_MINUS_SRC_COLOR,[ds]:n.ONE_MINUS_SRC_ALPHA,[Yc]:n.ONE_MINUS_DST_COLOR,[Xc]:n.ONE_MINUS_DST_ALPHA,[Kc]:n.CONSTANT_COLOR,[Zc]:n.ONE_MINUS_CONSTANT_COLOR,[Jc]:n.CONSTANT_ALPHA,[Qc]:n.ONE_MINUS_CONSTANT_ALPHA};function ye(C,ae,F,ie,de,Ge,Ye,dt,Lt,$e){if(C===_n){u===!0&&(je(n.BLEND),u=!1);return}if(u===!1&&(fe(n.BLEND),u=!0),C!==Bc){if(C!==b||$e!==T){if((S!==Un||R!==Un)&&(n.blendEquation(n.FUNC_ADD),S=Un,R=Un),$e)switch(C){case ai:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ea:n.blendFunc(n.ONE,n.ONE);break;case ta:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case na:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case ai:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ea:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case ta:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case na:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}w=null,P=null,A=null,H=null,K.set(0,0,0),x=0,b=C,T=$e}return}de=de||ae,Ge=Ge||F,Ye=Ye||ie,(ae!==S||de!==R)&&(n.blendEquationSeparate(Se[ae],Se[de]),S=ae,R=de),(F!==w||ie!==P||Ge!==A||Ye!==H)&&(n.blendFuncSeparate(Be[F],Be[ie],Be[Ge],Be[Ye]),w=F,P=ie,A=Ge,H=Ye),(dt.equals(K)===!1||Lt!==x)&&(n.blendColor(dt.r,dt.g,dt.b,Lt),K.copy(dt),x=Lt),b=C,T=!1}function He(C,ae){C.side===Ut?je(n.CULL_FACE):fe(n.CULL_FACE);let F=C.side===yt;ae&&(F=!F),Fe(F),C.blending===ai&&C.transparent===!1?ye(_n):ye(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),l.setFunc(C.depthFunc),l.setTest(C.depthTest),l.setMask(C.depthWrite),o.setMask(C.colorWrite);const ie=C.stencilWrite;d.setTest(ie),ie&&(d.setMask(C.stencilWriteMask),d.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),d.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),y(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?fe(n.SAMPLE_ALPHA_TO_COVERAGE):je(n.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(C){G!==C&&(C?n.frontFace(n.CW):n.frontFace(n.CCW),G=C)}function ze(C){C!==Ic?(fe(n.CULL_FACE),C!==$&&(C===Qs?n.cullFace(n.BACK):C===Fc?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):je(n.CULL_FACE),$=C}function et(C){C!==L&&(j&&n.lineWidth(C),L=C)}function y(C,ae,F){C?(fe(n.POLYGON_OFFSET_FILL),(X!==ae||W!==F)&&(n.polygonOffset(ae,F),X=ae,W=F)):je(n.POLYGON_OFFSET_FILL)}function _(C){C?fe(n.SCISSOR_TEST):je(n.SCISSOR_TEST)}function V(C){C===void 0&&(C=n.TEXTURE0+q-1),Q!==C&&(n.activeTexture(C),Q=C)}function Y(C,ae,F){F===void 0&&(Q===null?F=n.TEXTURE0+q-1:F=Q);let ie=ce[F];ie===void 0&&(ie={type:void 0,texture:void 0},ce[F]=ie),(ie.type!==C||ie.texture!==ae)&&(Q!==F&&(n.activeTexture(F),Q=F),n.bindTexture(C,ae||ve[C]),ie.type=C,ie.texture=ae)}function ee(){const C=ce[Q];C!==void 0&&C.type!==void 0&&(n.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function Z(){try{n.compressedTexImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Le(){try{n.compressedTexImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function be(){try{n.texSubImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function se(){try{n.texSubImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function oe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ne(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ne(){try{n.texStorage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function nt(){try{n.texStorage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ke(){try{n.texImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function xe(){try{n.texImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function me(C){J.equals(C)===!1&&(n.scissor(C.x,C.y,C.z,C.w),J.copy(C))}function ge(C){ue.equals(C)===!1&&(n.viewport(C.x,C.y,C.z,C.w),ue.copy(C))}function Ve(C,ae){let F=p.get(ae);F===void 0&&(F=new WeakMap,p.set(ae,F));let ie=F.get(C);ie===void 0&&(ie=n.getUniformBlockIndex(ae,C.name),F.set(C,ie))}function Ce(C,ae){const ie=p.get(ae).get(C);h.get(ae)!==ie&&(n.uniformBlockBinding(ae,ie,C.__bindingPointIndex),h.set(ae,ie))}function Ze(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),m={},Q=null,ce={},g={},v=new WeakMap,M=[],f=null,u=!1,b=null,S=null,w=null,P=null,R=null,A=null,H=null,K=new qe(0,0,0),x=0,T=!1,G=null,$=null,L=null,X=null,W=null,J.set(0,0,n.canvas.width,n.canvas.height),ue.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),d.reset()}return{buffers:{color:o,depth:l,stencil:d},enable:fe,disable:je,bindFramebuffer:we,drawBuffers:D,useProgram:ct,setBlending:ye,setMaterial:He,setFlipSided:Fe,setCullFace:ze,setLineWidth:et,setPolygonOffset:y,setScissorTest:_,activeTexture:V,bindTexture:Y,unbindTexture:ee,compressedTexImage2D:Z,compressedTexImage3D:Le,texImage2D:ke,texImage3D:xe,updateUBOMapping:Ve,uniformBlockBinding:Ce,texStorage2D:ne,texStorage3D:nt,texSubImage2D:be,texSubImage3D:se,compressedTexSubImage2D:oe,compressedTexSubImage3D:Ne,scissor:me,viewport:ge,reset:Ze}}function zm(n,e,t,i,r,s,a){const o=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new We,p=new WeakMap;let m;const g=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(y,_){return v?new OffscreenCanvas(y,_):cr("canvas")}function f(y,_,V,Y){let ee=1;const Z=et(y);if((Z.width>Y||Z.height>Y)&&(ee=Y/Math.max(Z.width,Z.height)),ee<1||_===!0)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const Le=_?_s:Math.floor,be=Le(ee*Z.width),se=Le(ee*Z.height);m===void 0&&(m=M(be,se));const oe=V?M(be,se):m;return oe.width=be,oe.height=se,oe.getContext("2d").drawImage(y,0,0,be,se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+be+"x"+se+")."),oe}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),y;return y}function u(y){const _=et(y);return Ua(_.width)&&Ua(_.height)}function b(y){return o?!1:y.wrapS!==kt||y.wrapT!==kt||y.minFilter!==_t&&y.minFilter!==St}function S(y,_){return y.generateMipmaps&&_&&y.minFilter!==_t&&y.minFilter!==St}function w(y){n.generateMipmap(y)}function P(y,_,V,Y,ee=!1){if(o===!1)return _;if(y!==null){if(n[y]!==void 0)return n[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let Z=_;if(_===n.RED&&(V===n.FLOAT&&(Z=n.R32F),V===n.HALF_FLOAT&&(Z=n.R16F),V===n.UNSIGNED_BYTE&&(Z=n.R8)),_===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(Z=n.R8UI),V===n.UNSIGNED_SHORT&&(Z=n.R16UI),V===n.UNSIGNED_INT&&(Z=n.R32UI),V===n.BYTE&&(Z=n.R8I),V===n.SHORT&&(Z=n.R16I),V===n.INT&&(Z=n.R32I)),_===n.RG&&(V===n.FLOAT&&(Z=n.RG32F),V===n.HALF_FLOAT&&(Z=n.RG16F),V===n.UNSIGNED_BYTE&&(Z=n.RG8)),_===n.RG_INTEGER&&(V===n.UNSIGNED_BYTE&&(Z=n.RG8UI),V===n.UNSIGNED_SHORT&&(Z=n.RG16UI),V===n.UNSIGNED_INT&&(Z=n.RG32UI),V===n.BYTE&&(Z=n.RG8I),V===n.SHORT&&(Z=n.RG16I),V===n.INT&&(Z=n.RG32I)),_===n.RGBA){const Le=ee?sr:Xe.getTransfer(Y);V===n.FLOAT&&(Z=n.RGBA32F),V===n.HALF_FLOAT&&(Z=n.RGBA16F),V===n.UNSIGNED_BYTE&&(Z=Le===Ke?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function R(y,_,V){return S(y,V)===!0||y.isFramebufferTexture&&y.minFilter!==_t&&y.minFilter!==St?Math.log2(Math.max(_.width,_.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?_.mipmaps.length:1}function A(y){return y===_t||y===sa||y===_i?n.NEAREST:n.LINEAR}function H(y){const _=y.target;_.removeEventListener("dispose",H),x(_),_.isVideoTexture&&p.delete(_)}function K(y){const _=y.target;_.removeEventListener("dispose",K),G(_)}function x(y){const _=i.get(y);if(_.__webglInit===void 0)return;const V=y.source,Y=g.get(V);if(Y){const ee=Y[_.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&T(y),Object.keys(Y).length===0&&g.delete(V)}i.remove(y)}function T(y){const _=i.get(y);n.deleteTexture(_.__webglTexture);const V=y.source,Y=g.get(V);delete Y[_.__cacheKey],a.memory.textures--}function G(y){const _=i.get(y);if(y.depthTexture&&y.depthTexture.dispose(),y.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(_.__webglFramebuffer[Y]))for(let ee=0;ee<_.__webglFramebuffer[Y].length;ee++)n.deleteFramebuffer(_.__webglFramebuffer[Y][ee]);else n.deleteFramebuffer(_.__webglFramebuffer[Y]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[Y])}else{if(Array.isArray(_.__webglFramebuffer))for(let Y=0;Y<_.__webglFramebuffer.length;Y++)n.deleteFramebuffer(_.__webglFramebuffer[Y]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Y=0;Y<_.__webglColorRenderbuffer.length;Y++)_.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[Y]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const V=y.textures;for(let Y=0,ee=V.length;Y<ee;Y++){const Z=i.get(V[Y]);Z.__webglTexture&&(n.deleteTexture(Z.__webglTexture),a.memory.textures--),i.remove(V[Y])}i.remove(y)}let $=0;function L(){$=0}function X(){const y=$;return y>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+r.maxTextures),$+=1,y}function W(y){const _=[];return _.push(y.wrapS),_.push(y.wrapT),_.push(y.wrapR||0),_.push(y.magFilter),_.push(y.minFilter),_.push(y.anisotropy),_.push(y.internalFormat),_.push(y.format),_.push(y.type),_.push(y.generateMipmaps),_.push(y.premultiplyAlpha),_.push(y.flipY),_.push(y.unpackAlignment),_.push(y.colorSpace),_.join()}function q(y,_){const V=i.get(y);if(y.isVideoTexture&&Fe(y),y.isRenderTargetTexture===!1&&y.version>0&&V.__version!==y.version){const Y=y.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ue(V,y,_);return}}t.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+_)}function j(y,_){const V=i.get(y);if(y.version>0&&V.__version!==y.version){ue(V,y,_);return}t.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+_)}function k(y,_){const V=i.get(y);if(y.version>0&&V.__version!==y.version){ue(V,y,_);return}t.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+_)}function te(y,_){const V=i.get(y);if(y.version>0&&V.__version!==y.version){Ae(V,y,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+_)}const Q={[fs]:n.REPEAT,[kt]:n.CLAMP_TO_EDGE,[ps]:n.MIRRORED_REPEAT},ce={[_t]:n.NEAREST,[sa]:n.NEAREST_MIPMAP_NEAREST,[_i]:n.NEAREST_MIPMAP_LINEAR,[St]:n.LINEAR,[br]:n.LINEAR_MIPMAP_NEAREST,[On]:n.LINEAR_MIPMAP_LINEAR},pe={[Rd]:n.NEVER,[Ud]:n.ALWAYS,[Cd]:n.LESS,[Wo]:n.LEQUAL,[Pd]:n.EQUAL,[Dd]:n.GEQUAL,[Ld]:n.GREATER,[Nd]:n.NOTEQUAL};function z(y,_,V){if(_.type===en&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===St||_.magFilter===br||_.magFilter===_i||_.magFilter===On||_.minFilter===St||_.minFilter===br||_.minFilter===_i||_.minFilter===On)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),V?(n.texParameteri(y,n.TEXTURE_WRAP_S,Q[_.wrapS]),n.texParameteri(y,n.TEXTURE_WRAP_T,Q[_.wrapT]),(y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY)&&n.texParameteri(y,n.TEXTURE_WRAP_R,Q[_.wrapR]),n.texParameteri(y,n.TEXTURE_MAG_FILTER,ce[_.magFilter]),n.texParameteri(y,n.TEXTURE_MIN_FILTER,ce[_.minFilter])):(n.texParameteri(y,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(y,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY)&&n.texParameteri(y,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(_.wrapS!==kt||_.wrapT!==kt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(y,n.TEXTURE_MAG_FILTER,A(_.magFilter)),n.texParameteri(y,n.TEXTURE_MIN_FILTER,A(_.minFilter)),_.minFilter!==_t&&_.minFilter!==St&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),_.compareFunction&&(n.texParameteri(y,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(y,n.TEXTURE_COMPARE_FUNC,pe[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===_t||_.minFilter!==_i&&_.minFilter!==On||_.type===en&&e.has("OES_texture_float_linear")===!1||o===!1&&_.type===Ti&&e.has("OES_texture_half_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const Y=e.get("EXT_texture_filter_anisotropic");n.texParameterf(y,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function J(y,_){let V=!1;y.__webglInit===void 0&&(y.__webglInit=!0,_.addEventListener("dispose",H));const Y=_.source;let ee=g.get(Y);ee===void 0&&(ee={},g.set(Y,ee));const Z=W(_);if(Z!==y.__cacheKey){ee[Z]===void 0&&(ee[Z]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,V=!0),ee[Z].usedTimes++;const Le=ee[y.__cacheKey];Le!==void 0&&(ee[y.__cacheKey].usedTimes--,Le.usedTimes===0&&T(_)),y.__cacheKey=Z,y.__webglTexture=ee[Z].texture}return V}function ue(y,_,V){let Y=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Y=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Y=n.TEXTURE_3D);const ee=J(y,_),Z=_.source;t.bindTexture(Y,y.__webglTexture,n.TEXTURE0+V);const Le=i.get(Z);if(Z.version!==Le.__version||ee===!0){t.activeTexture(n.TEXTURE0+V);const be=Xe.getPrimaries(Xe.workingColorSpace),se=_.colorSpace===fn?null:Xe.getPrimaries(_.colorSpace),oe=_.colorSpace===fn||be===se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);const Ne=b(_)&&u(_.image)===!1;let ne=f(_.image,Ne,!1,r.maxTextureSize);ne=ze(_,ne);const nt=u(ne)||o,ke=s.convert(_.format,_.colorSpace);let xe=s.convert(_.type),me=P(_.internalFormat,ke,xe,_.colorSpace,_.isVideoTexture);z(Y,_,nt);let ge;const Ve=_.mipmaps,Ce=o&&_.isVideoTexture!==!0&&me!==Vo,Ze=Le.__version===void 0||ee===!0,C=Z.dataReady,ae=R(_,ne,nt);if(_.isDepthTexture)me=n.DEPTH_COMPONENT,o?_.type===en?me=n.DEPTH_COMPONENT32F:_.type===mn?me=n.DEPTH_COMPONENT24:_.type===Bn?me=n.DEPTH24_STENCIL8:me=n.DEPTH_COMPONENT16:_.type===en&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),_.format===zn&&me===n.DEPTH_COMPONENT&&_.type!==As&&_.type!==mn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),_.type=mn,xe=s.convert(_.type)),_.format===di&&me===n.DEPTH_COMPONENT&&(me=n.DEPTH_STENCIL,_.type!==Bn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),_.type=Bn,xe=s.convert(_.type))),Ze&&(Ce?t.texStorage2D(n.TEXTURE_2D,1,me,ne.width,ne.height):t.texImage2D(n.TEXTURE_2D,0,me,ne.width,ne.height,0,ke,xe,null));else if(_.isDataTexture)if(Ve.length>0&&nt){Ce&&Ze&&t.texStorage2D(n.TEXTURE_2D,ae,me,Ve[0].width,Ve[0].height);for(let F=0,ie=Ve.length;F<ie;F++)ge=Ve[F],Ce?C&&t.texSubImage2D(n.TEXTURE_2D,F,0,0,ge.width,ge.height,ke,xe,ge.data):t.texImage2D(n.TEXTURE_2D,F,me,ge.width,ge.height,0,ke,xe,ge.data);_.generateMipmaps=!1}else Ce?(Ze&&t.texStorage2D(n.TEXTURE_2D,ae,me,ne.width,ne.height),C&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ne.width,ne.height,ke,xe,ne.data)):t.texImage2D(n.TEXTURE_2D,0,me,ne.width,ne.height,0,ke,xe,ne.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ce&&Ze&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ae,me,Ve[0].width,Ve[0].height,ne.depth);for(let F=0,ie=Ve.length;F<ie;F++)ge=Ve[F],_.format!==Gt?ke!==null?Ce?C&&t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,F,0,0,0,ge.width,ge.height,ne.depth,ke,ge.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,F,me,ge.width,ge.height,ne.depth,0,ge.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ce?C&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,F,0,0,0,ge.width,ge.height,ne.depth,ke,xe,ge.data):t.texImage3D(n.TEXTURE_2D_ARRAY,F,me,ge.width,ge.height,ne.depth,0,ke,xe,ge.data)}else{Ce&&Ze&&t.texStorage2D(n.TEXTURE_2D,ae,me,Ve[0].width,Ve[0].height);for(let F=0,ie=Ve.length;F<ie;F++)ge=Ve[F],_.format!==Gt?ke!==null?Ce?C&&t.compressedTexSubImage2D(n.TEXTURE_2D,F,0,0,ge.width,ge.height,ke,ge.data):t.compressedTexImage2D(n.TEXTURE_2D,F,me,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ce?C&&t.texSubImage2D(n.TEXTURE_2D,F,0,0,ge.width,ge.height,ke,xe,ge.data):t.texImage2D(n.TEXTURE_2D,F,me,ge.width,ge.height,0,ke,xe,ge.data)}else if(_.isDataArrayTexture)Ce?(Ze&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ae,me,ne.width,ne.height,ne.depth),C&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,ke,xe,ne.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,me,ne.width,ne.height,ne.depth,0,ke,xe,ne.data);else if(_.isData3DTexture)Ce?(Ze&&t.texStorage3D(n.TEXTURE_3D,ae,me,ne.width,ne.height,ne.depth),C&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,ke,xe,ne.data)):t.texImage3D(n.TEXTURE_3D,0,me,ne.width,ne.height,ne.depth,0,ke,xe,ne.data);else if(_.isFramebufferTexture){if(Ze)if(Ce)t.texStorage2D(n.TEXTURE_2D,ae,me,ne.width,ne.height);else{let F=ne.width,ie=ne.height;for(let de=0;de<ae;de++)t.texImage2D(n.TEXTURE_2D,de,me,F,ie,0,ke,xe,null),F>>=1,ie>>=1}}else if(Ve.length>0&&nt){if(Ce&&Ze){const F=et(Ve[0]);t.texStorage2D(n.TEXTURE_2D,ae,me,F.width,F.height)}for(let F=0,ie=Ve.length;F<ie;F++)ge=Ve[F],Ce?C&&t.texSubImage2D(n.TEXTURE_2D,F,0,0,ke,xe,ge):t.texImage2D(n.TEXTURE_2D,F,me,ke,xe,ge);_.generateMipmaps=!1}else if(Ce){if(Ze){const F=et(ne);t.texStorage2D(n.TEXTURE_2D,ae,me,F.width,F.height)}C&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ke,xe,ne)}else t.texImage2D(n.TEXTURE_2D,0,me,ke,xe,ne);S(_,nt)&&w(Y),Le.__version=Z.version,_.onUpdate&&_.onUpdate(_)}y.__version=_.version}function Ae(y,_,V){if(_.image.length!==6)return;const Y=J(y,_),ee=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,y.__webglTexture,n.TEXTURE0+V);const Z=i.get(ee);if(ee.version!==Z.__version||Y===!0){t.activeTexture(n.TEXTURE0+V);const Le=Xe.getPrimaries(Xe.workingColorSpace),be=_.colorSpace===fn?null:Xe.getPrimaries(_.colorSpace),se=_.colorSpace===fn||Le===be?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);const oe=_.isCompressedTexture||_.image[0].isCompressedTexture,Ne=_.image[0]&&_.image[0].isDataTexture,ne=[];for(let F=0;F<6;F++)!oe&&!Ne?ne[F]=f(_.image[F],!1,!0,r.maxCubemapSize):ne[F]=Ne?_.image[F].image:_.image[F],ne[F]=ze(_,ne[F]);const nt=ne[0],ke=u(nt)||o,xe=s.convert(_.format,_.colorSpace),me=s.convert(_.type),ge=P(_.internalFormat,xe,me,_.colorSpace),Ve=o&&_.isVideoTexture!==!0,Ce=Z.__version===void 0||Y===!0,Ze=ee.dataReady;let C=R(_,nt,ke);z(n.TEXTURE_CUBE_MAP,_,ke);let ae;if(oe){Ve&&Ce&&t.texStorage2D(n.TEXTURE_CUBE_MAP,C,ge,nt.width,nt.height);for(let F=0;F<6;F++){ae=ne[F].mipmaps;for(let ie=0;ie<ae.length;ie++){const de=ae[ie];_.format!==Gt?xe!==null?Ve?Ze&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+F,ie,0,0,de.width,de.height,xe,de.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+F,ie,ge,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?Ze&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+F,ie,0,0,de.width,de.height,xe,me,de.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+F,ie,ge,de.width,de.height,0,xe,me,de.data)}}}else{if(ae=_.mipmaps,Ve&&Ce){ae.length>0&&C++;const F=et(ne[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,C,ge,F.width,F.height)}for(let F=0;F<6;F++)if(Ne){Ve?Ze&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,0,0,ne[F].width,ne[F].height,xe,me,ne[F].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,ge,ne[F].width,ne[F].height,0,xe,me,ne[F].data);for(let ie=0;ie<ae.length;ie++){const Ge=ae[ie].image[F].image;Ve?Ze&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+F,ie+1,0,0,Ge.width,Ge.height,xe,me,Ge.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+F,ie+1,ge,Ge.width,Ge.height,0,xe,me,Ge.data)}}else{Ve?Ze&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,0,0,xe,me,ne[F]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,ge,xe,me,ne[F]);for(let ie=0;ie<ae.length;ie++){const de=ae[ie];Ve?Ze&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+F,ie+1,0,0,xe,me,de.image[F]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+F,ie+1,ge,xe,me,de.image[F])}}}S(_,ke)&&w(n.TEXTURE_CUBE_MAP),Z.__version=ee.version,_.onUpdate&&_.onUpdate(_)}y.__version=_.version}function ve(y,_,V,Y,ee,Z){const Le=s.convert(V.format,V.colorSpace),be=s.convert(V.type),se=P(V.internalFormat,Le,be,V.colorSpace);if(!i.get(_).__hasExternalTextures){const Ne=Math.max(1,_.width>>Z),ne=Math.max(1,_.height>>Z);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,Z,se,Ne,ne,_.depth,0,Le,be,null):t.texImage2D(ee,Z,se,Ne,ne,0,Le,be,null)}t.bindFramebuffer(n.FRAMEBUFFER,y),He(_)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,ee,i.get(V).__webglTexture,0,ye(_)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Y,ee,i.get(V).__webglTexture,Z),t.bindFramebuffer(n.FRAMEBUFFER,null)}function fe(y,_,V){if(n.bindRenderbuffer(n.RENDERBUFFER,y),_.depthBuffer&&!_.stencilBuffer){let Y=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(V||He(_)){const ee=_.depthTexture;ee&&ee.isDepthTexture&&(ee.type===en?Y=n.DEPTH_COMPONENT32F:ee.type===mn&&(Y=n.DEPTH_COMPONENT24));const Z=ye(_);He(_)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Z,Y,_.width,_.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,Z,Y,_.width,_.height)}else n.renderbufferStorage(n.RENDERBUFFER,Y,_.width,_.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,y)}else if(_.depthBuffer&&_.stencilBuffer){const Y=ye(_);V&&He(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Y,n.DEPTH24_STENCIL8,_.width,_.height):He(_)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Y,n.DEPTH24_STENCIL8,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,y)}else{const Y=_.textures;for(let ee=0;ee<Y.length;ee++){const Z=Y[ee],Le=s.convert(Z.format,Z.colorSpace),be=s.convert(Z.type),se=P(Z.internalFormat,Le,be,Z.colorSpace),oe=ye(_);V&&He(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,se,_.width,_.height):He(_)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe,se,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,se,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function je(y,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,y),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),q(_.depthTexture,0);const Y=i.get(_.depthTexture).__webglTexture,ee=ye(_);if(_.depthTexture.format===zn)He(_)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Y,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Y,0);else if(_.depthTexture.format===di)He(_)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Y,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function we(y){const _=i.get(y),V=y.isWebGLCubeRenderTarget===!0;if(y.depthTexture&&!_.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");je(_.__webglFramebuffer,y)}else if(V){_.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[Y]),_.__webglDepthbuffer[Y]=n.createRenderbuffer(),fe(_.__webglDepthbuffer[Y],y,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer=n.createRenderbuffer(),fe(_.__webglDepthbuffer,y,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function D(y,_,V){const Y=i.get(y);_!==void 0&&ve(Y.__webglFramebuffer,y,y.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&we(y)}function ct(y){const _=y.texture,V=i.get(y),Y=i.get(_);y.addEventListener("dispose",K);const ee=y.textures,Z=y.isWebGLCubeRenderTarget===!0,Le=ee.length>1,be=u(y)||o;if(Le||(Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture()),Y.__version=_.version,a.memory.textures++),Z){V.__webglFramebuffer=[];for(let se=0;se<6;se++)if(o&&_.mipmaps&&_.mipmaps.length>0){V.__webglFramebuffer[se]=[];for(let oe=0;oe<_.mipmaps.length;oe++)V.__webglFramebuffer[se][oe]=n.createFramebuffer()}else V.__webglFramebuffer[se]=n.createFramebuffer()}else{if(o&&_.mipmaps&&_.mipmaps.length>0){V.__webglFramebuffer=[];for(let se=0;se<_.mipmaps.length;se++)V.__webglFramebuffer[se]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(Le)if(r.drawBuffers)for(let se=0,oe=ee.length;se<oe;se++){const Ne=i.get(ee[se]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=n.createTexture(),a.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&y.samples>0&&He(y)===!1){V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let se=0;se<ee.length;se++){const oe=ee[se];V.__webglColorRenderbuffer[se]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[se]);const Ne=s.convert(oe.format,oe.colorSpace),ne=s.convert(oe.type),nt=P(oe.internalFormat,Ne,ne,oe.colorSpace,y.isXRRenderTarget===!0),ke=ye(y);n.renderbufferStorageMultisample(n.RENDERBUFFER,ke,nt,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+se,n.RENDERBUFFER,V.__webglColorRenderbuffer[se])}n.bindRenderbuffer(n.RENDERBUFFER,null),y.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),fe(V.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),z(n.TEXTURE_CUBE_MAP,_,be);for(let se=0;se<6;se++)if(o&&_.mipmaps&&_.mipmaps.length>0)for(let oe=0;oe<_.mipmaps.length;oe++)ve(V.__webglFramebuffer[se][oe],y,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,oe);else ve(V.__webglFramebuffer[se],y,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);S(_,be)&&w(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Le){for(let se=0,oe=ee.length;se<oe;se++){const Ne=ee[se],ne=i.get(Ne);t.bindTexture(n.TEXTURE_2D,ne.__webglTexture),z(n.TEXTURE_2D,Ne,be),ve(V.__webglFramebuffer,y,Ne,n.COLOR_ATTACHMENT0+se,n.TEXTURE_2D,0),S(Ne,be)&&w(n.TEXTURE_2D)}t.unbindTexture()}else{let se=n.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(o?se=y.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(se,Y.__webglTexture),z(se,_,be),o&&_.mipmaps&&_.mipmaps.length>0)for(let oe=0;oe<_.mipmaps.length;oe++)ve(V.__webglFramebuffer[oe],y,_,n.COLOR_ATTACHMENT0,se,oe);else ve(V.__webglFramebuffer,y,_,n.COLOR_ATTACHMENT0,se,0);S(_,be)&&w(se),t.unbindTexture()}y.depthBuffer&&we(y)}function Se(y){const _=u(y)||o,V=y.textures;for(let Y=0,ee=V.length;Y<ee;Y++){const Z=V[Y];if(S(Z,_)){const Le=y.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,be=i.get(Z).__webglTexture;t.bindTexture(Le,be),w(Le),t.unbindTexture()}}}function Be(y){if(o&&y.samples>0&&He(y)===!1){const _=y.textures,V=y.width,Y=y.height;let ee=n.COLOR_BUFFER_BIT;const Z=[],Le=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,be=i.get(y),se=_.length>1;if(se)for(let oe=0;oe<_.length;oe++)t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let oe=0;oe<_.length;oe++){Z.push(n.COLOR_ATTACHMENT0+oe),y.depthBuffer&&Z.push(Le);const Ne=be.__ignoreDepthValues!==void 0?be.__ignoreDepthValues:!1;if(Ne===!1&&(y.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),y.stencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),se&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,be.__webglColorRenderbuffer[oe]),Ne===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Le]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Le])),se){const ne=i.get(_[oe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ne,0)}n.blitFramebuffer(0,0,V,Y,0,0,V,Y,ee,n.NEAREST),d&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Z)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),se)for(let oe=0;oe<_.length;oe++){t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,be.__webglColorRenderbuffer[oe]);const Ne=i.get(_[oe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.TEXTURE_2D,Ne,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}}function ye(y){return Math.min(r.maxSamples,y.samples)}function He(y){const _=i.get(y);return o&&y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Fe(y){const _=a.render.frame;p.get(y)!==_&&(p.set(y,_),y.update())}function ze(y,_){const V=y.colorSpace,Y=y.format,ee=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||y.format===ms||V!==En&&V!==fn&&(Xe.getTransfer(V)===Ke?o===!1?e.has("EXT_sRGB")===!0&&Y===Gt?(y.format=ms,y.minFilter=St,y.generateMipmaps=!1):_=Xo.sRGBToLinear(_):(Y!==Gt||ee!==xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),_}function et(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(h.width=y.naturalWidth||y.width,h.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(h.width=y.displayWidth,h.height=y.displayHeight):(h.width=y.width,h.height=y.height),h}this.allocateTextureUnit=X,this.resetTextureUnits=L,this.setTexture2D=q,this.setTexture2DArray=j,this.setTexture3D=k,this.setTextureCube=te,this.rebindTextures=D,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=Se,this.updateMultisampleRenderTarget=Be,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=He}function km(n,e,t){const i=t.isWebGL2;function r(s,a=fn){let o;const l=Xe.getTransfer(a);if(s===xn)return n.UNSIGNED_BYTE;if(s===Bo)return n.UNSIGNED_SHORT_4_4_4_4;if(s===zo)return n.UNSIGNED_SHORT_5_5_5_1;if(s===gd)return n.BYTE;if(s===_d)return n.SHORT;if(s===As)return n.UNSIGNED_SHORT;if(s===Oo)return n.INT;if(s===mn)return n.UNSIGNED_INT;if(s===en)return n.FLOAT;if(s===Ti)return i?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===vd)return n.ALPHA;if(s===Gt)return n.RGBA;if(s===xd)return n.LUMINANCE;if(s===Sd)return n.LUMINANCE_ALPHA;if(s===zn)return n.DEPTH_COMPONENT;if(s===di)return n.DEPTH_STENCIL;if(s===ms)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Md)return n.RED;if(s===ko)return n.RED_INTEGER;if(s===Ed)return n.RG;if(s===Go)return n.RG_INTEGER;if(s===Ho)return n.RGBA_INTEGER;if(s===Tr||s===Ar||s===wr||s===Rr)if(l===Ke)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Tr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ar)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===wr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Rr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Tr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ar)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===wr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Rr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===aa||s===oa||s===la||s===ca)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===aa)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===oa)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===la)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ca)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Vo)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===da||s===ha)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===da)return l===Ke?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===ha)return l===Ke?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ua||s===fa||s===pa||s===ma||s===ga||s===_a||s===va||s===xa||s===Sa||s===Ma||s===Ea||s===ya||s===ba||s===Ta)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===ua)return l===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===fa)return l===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===pa)return l===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ma)return l===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ga)return l===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===_a)return l===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===va)return l===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===xa)return l===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Sa)return l===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ma)return l===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Ea)return l===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ya)return l===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ba)return l===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ta)return l===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Cr||s===Aa||s===wa)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Cr)return l===Ke?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Aa)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===wa)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===yd||s===Ra||s===Ca||s===Pa)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===Cr)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Ra)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ca)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Pa)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Bn?i?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class Gm extends zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Qi extends Ct{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Hm={type:"move"};class ns{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){a=!0;for(const M of e.hand.values()){const f=t.getJointPose(M,i),u=this._getHandJoint(d,M);f!==null&&(u.matrix.fromArray(f.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=f.radius),u.visible=f!==null}const h=d.joints["index-finger-tip"],p=d.joints["thumb-tip"],m=h.position.distanceTo(p.position),g=.02,v=.005;d.inputState.pinching&&m>g+v?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&m<=g-v&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Hm)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),d!==null&&(d.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Qi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Vm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Wm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class jm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new bt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){const i=t.cameras[0].viewport,r=new Mn({extensions:{fragDepth:!0},vertexShader:Vm,fragmentShader:Wm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Et(new mr(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class Xm extends ui{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,d=null,h=null,p=null,m=null,g=null,v=null;const M=new jm,f=t.getContextAttributes();let u=null,b=null;const S=[],w=[],P=new We;let R=null;const A=new zt;A.layers.enable(1),A.viewport=new ht;const H=new zt;H.layers.enable(2),H.viewport=new ht;const K=[A,H],x=new Gm;x.layers.enable(1),x.layers.enable(2);let T=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let J=S[z];return J===void 0&&(J=new ns,S[z]=J),J.getTargetRaySpace()},this.getControllerGrip=function(z){let J=S[z];return J===void 0&&(J=new ns,S[z]=J),J.getGripSpace()},this.getHand=function(z){let J=S[z];return J===void 0&&(J=new ns,S[z]=J),J.getHandSpace()};function $(z){const J=w.indexOf(z.inputSource);if(J===-1)return;const ue=S[J];ue!==void 0&&(ue.update(z.inputSource,z.frame,d||a),ue.dispatchEvent({type:z.type,data:z.inputSource}))}function L(){r.removeEventListener("select",$),r.removeEventListener("selectstart",$),r.removeEventListener("selectend",$),r.removeEventListener("squeeze",$),r.removeEventListener("squeezestart",$),r.removeEventListener("squeezeend",$),r.removeEventListener("end",L),r.removeEventListener("inputsourceschange",X);for(let z=0;z<S.length;z++){const J=w[z];J!==null&&(w[z]=null,S[z].disconnect(J))}T=null,G=null,M.reset(),e.setRenderTarget(u),g=null,m=null,p=null,r=null,b=null,pe.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){s=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){o=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||a},this.setReferenceSpace=function(z){d=z},this.getBaseLayer=function(){return m!==null?m:g},this.getBinding=function(){return p},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(z){if(r=z,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",$),r.addEventListener("selectstart",$),r.addEventListener("selectend",$),r.addEventListener("squeeze",$),r.addEventListener("squeezestart",$),r.addEventListener("squeezeend",$),r.addEventListener("end",L),r.addEventListener("inputsourceschange",X),f.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const J={antialias:r.renderState.layers===void 0?f.antialias:!0,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,t,J),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),b=new kn(g.framebufferWidth,g.framebufferHeight,{format:Gt,type:xn,colorSpace:e.outputColorSpace,stencilBuffer:f.stencil})}else{let J=null,ue=null,Ae=null;f.depth&&(Ae=f.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=f.stencil?di:zn,ue=f.stencil?Bn:mn);const ve={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:s};p=new XRWebGLBinding(r,t),m=p.createProjectionLayer(ve),r.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),b=new kn(m.textureWidth,m.textureHeight,{format:Gt,type:xn,depthTexture:new sl(m.textureWidth,m.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:f.stencil,colorSpace:e.outputColorSpace,samples:f.antialias?4:0});const fe=e.properties.get(b);fe.__ignoreDepthValues=m.ignoreDepthValues}b.isXRRenderTarget=!0,this.setFoveation(l),d=null,a=await r.requestReferenceSpace(o),pe.setContext(r),pe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function X(z){for(let J=0;J<z.removed.length;J++){const ue=z.removed[J],Ae=w.indexOf(ue);Ae>=0&&(w[Ae]=null,S[Ae].disconnect(ue))}for(let J=0;J<z.added.length;J++){const ue=z.added[J];let Ae=w.indexOf(ue);if(Ae===-1){for(let fe=0;fe<S.length;fe++)if(fe>=w.length){w.push(ue),Ae=fe;break}else if(w[fe]===null){w[fe]=ue,Ae=fe;break}if(Ae===-1)break}const ve=S[Ae];ve&&ve.connect(ue)}}const W=new I,q=new I;function j(z,J,ue){W.setFromMatrixPosition(J.matrixWorld),q.setFromMatrixPosition(ue.matrixWorld);const Ae=W.distanceTo(q),ve=J.projectionMatrix.elements,fe=ue.projectionMatrix.elements,je=ve[14]/(ve[10]-1),we=ve[14]/(ve[10]+1),D=(ve[9]+1)/ve[5],ct=(ve[9]-1)/ve[5],Se=(ve[8]-1)/ve[0],Be=(fe[8]+1)/fe[0],ye=je*Se,He=je*Be,Fe=Ae/(-Se+Be),ze=Fe*-Se;J.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(ze),z.translateZ(Fe),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const et=je+Fe,y=we+Fe,_=ye-ze,V=He+(Ae-ze),Y=D*we/y*et,ee=ct*we/y*et;z.projectionMatrix.makePerspective(_,V,Y,ee,et,y),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}function k(z,J){J===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(J.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(r===null)return;M.texture!==null&&(z.near=M.depthNear,z.far=M.depthFar),x.near=H.near=A.near=z.near,x.far=H.far=A.far=z.far,(T!==x.near||G!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),T=x.near,G=x.far,A.near=T,A.far=G,H.near=T,H.far=G,A.updateProjectionMatrix(),H.updateProjectionMatrix(),z.updateProjectionMatrix());const J=z.parent,ue=x.cameras;k(x,J);for(let Ae=0;Ae<ue.length;Ae++)k(ue[Ae],J);ue.length===2?j(x,A,H):x.projectionMatrix.copy(A.projectionMatrix),te(z,x,J)};function te(z,J,ue){ue===null?z.matrix.copy(J.matrixWorld):(z.matrix.copy(ue.matrixWorld),z.matrix.invert(),z.matrix.multiply(J.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(J.projectionMatrix),z.projectionMatrixInverse.copy(J.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=gs*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(m===null&&g===null))return l},this.setFoveation=function(z){l=z,m!==null&&(m.fixedFoveation=z),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=z)},this.hasDepthSensing=function(){return M.texture!==null};let Q=null;function ce(z,J){if(h=J.getViewerPose(d||a),v=J,h!==null){const ue=h.views;g!==null&&(e.setRenderTargetFramebuffer(b,g.framebuffer),e.setRenderTarget(b));let Ae=!1;ue.length!==x.cameras.length&&(x.cameras.length=0,Ae=!0);for(let fe=0;fe<ue.length;fe++){const je=ue[fe];let we=null;if(g!==null)we=g.getViewport(je);else{const ct=p.getViewSubImage(m,je);we=ct.viewport,fe===0&&(e.setRenderTargetTextures(b,ct.colorTexture,m.ignoreDepthValues?void 0:ct.depthStencilTexture),e.setRenderTarget(b))}let D=K[fe];D===void 0&&(D=new zt,D.layers.enable(fe),D.viewport=new ht,K[fe]=D),D.matrix.fromArray(je.transform.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale),D.projectionMatrix.fromArray(je.projectionMatrix),D.projectionMatrixInverse.copy(D.projectionMatrix).invert(),D.viewport.set(we.x,we.y,we.width,we.height),fe===0&&(x.matrix.copy(D.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),Ae===!0&&x.cameras.push(D)}const ve=r.enabledFeatures;if(ve&&ve.includes("depth-sensing")){const fe=p.getDepthInformation(ue[0]);fe&&fe.isValid&&fe.texture&&M.init(e,fe,r.renderState)}}for(let ue=0;ue<S.length;ue++){const Ae=w[ue],ve=S[ue];Ae!==null&&ve!==void 0&&ve.update(Ae,J,d||a)}M.render(e,x),Q&&Q(z,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),v=null}const pe=new il;pe.setAnimationLoop(ce),this.setAnimationLoop=function(z){Q=z},this.dispose=function(){}}}const Pn=new rn,qm=new rt;function Ym(n,e){function t(f,u){f.matrixAutoUpdate===!0&&f.updateMatrix(),u.value.copy(f.matrix)}function i(f,u){u.color.getRGB(f.fogColor.value,Qo(n)),u.isFog?(f.fogNear.value=u.near,f.fogFar.value=u.far):u.isFogExp2&&(f.fogDensity.value=u.density)}function r(f,u,b,S,w){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(f,u):u.isMeshToonMaterial?(s(f,u),p(f,u)):u.isMeshPhongMaterial?(s(f,u),h(f,u)):u.isMeshStandardMaterial?(s(f,u),m(f,u),u.isMeshPhysicalMaterial&&g(f,u,w)):u.isMeshMatcapMaterial?(s(f,u),v(f,u)):u.isMeshDepthMaterial?s(f,u):u.isMeshDistanceMaterial?(s(f,u),M(f,u)):u.isMeshNormalMaterial?s(f,u):u.isLineBasicMaterial?(a(f,u),u.isLineDashedMaterial&&o(f,u)):u.isPointsMaterial?l(f,u,b,S):u.isSpriteMaterial?d(f,u):u.isShadowMaterial?(f.color.value.copy(u.color),f.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(f,u){f.opacity.value=u.opacity,u.color&&f.diffuse.value.copy(u.color),u.emissive&&f.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(f.map.value=u.map,t(u.map,f.mapTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,t(u.alphaMap,f.alphaMapTransform)),u.bumpMap&&(f.bumpMap.value=u.bumpMap,t(u.bumpMap,f.bumpMapTransform),f.bumpScale.value=u.bumpScale,u.side===yt&&(f.bumpScale.value*=-1)),u.normalMap&&(f.normalMap.value=u.normalMap,t(u.normalMap,f.normalMapTransform),f.normalScale.value.copy(u.normalScale),u.side===yt&&f.normalScale.value.negate()),u.displacementMap&&(f.displacementMap.value=u.displacementMap,t(u.displacementMap,f.displacementMapTransform),f.displacementScale.value=u.displacementScale,f.displacementBias.value=u.displacementBias),u.emissiveMap&&(f.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,f.emissiveMapTransform)),u.specularMap&&(f.specularMap.value=u.specularMap,t(u.specularMap,f.specularMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest);const b=e.get(u),S=b.envMap,w=b.envMapRotation;if(S&&(f.envMap.value=S,Pn.copy(w),Pn.x*=-1,Pn.y*=-1,Pn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Pn.y*=-1,Pn.z*=-1),f.envMapRotation.value.setFromMatrix4(qm.makeRotationFromEuler(Pn)),f.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=u.reflectivity,f.ior.value=u.ior,f.refractionRatio.value=u.refractionRatio),u.lightMap){f.lightMap.value=u.lightMap;const P=n._useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=u.lightMapIntensity*P,t(u.lightMap,f.lightMapTransform)}u.aoMap&&(f.aoMap.value=u.aoMap,f.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,f.aoMapTransform))}function a(f,u){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,u.map&&(f.map.value=u.map,t(u.map,f.mapTransform))}function o(f,u){f.dashSize.value=u.dashSize,f.totalSize.value=u.dashSize+u.gapSize,f.scale.value=u.scale}function l(f,u,b,S){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,f.size.value=u.size*b,f.scale.value=S*.5,u.map&&(f.map.value=u.map,t(u.map,f.uvTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,t(u.alphaMap,f.alphaMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest)}function d(f,u){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,f.rotation.value=u.rotation,u.map&&(f.map.value=u.map,t(u.map,f.mapTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,t(u.alphaMap,f.alphaMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest)}function h(f,u){f.specular.value.copy(u.specular),f.shininess.value=Math.max(u.shininess,1e-4)}function p(f,u){u.gradientMap&&(f.gradientMap.value=u.gradientMap)}function m(f,u){f.metalness.value=u.metalness,u.metalnessMap&&(f.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,f.metalnessMapTransform)),f.roughness.value=u.roughness,u.roughnessMap&&(f.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,f.roughnessMapTransform)),e.get(u).envMap&&(f.envMapIntensity.value=u.envMapIntensity)}function g(f,u,b){f.ior.value=u.ior,u.sheen>0&&(f.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),f.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(f.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,f.sheenColorMapTransform)),u.sheenRoughnessMap&&(f.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,f.sheenRoughnessMapTransform))),u.clearcoat>0&&(f.clearcoat.value=u.clearcoat,f.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(f.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,f.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(f.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===yt&&f.clearcoatNormalScale.value.negate())),u.iridescence>0&&(f.iridescence.value=u.iridescence,f.iridescenceIOR.value=u.iridescenceIOR,f.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(f.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,f.iridescenceMapTransform)),u.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),u.transmission>0&&(f.transmission.value=u.transmission,f.transmissionSamplerMap.value=b.texture,f.transmissionSamplerSize.value.set(b.width,b.height),u.transmissionMap&&(f.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,f.transmissionMapTransform)),f.thickness.value=u.thickness,u.thicknessMap&&(f.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=u.attenuationDistance,f.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(f.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(f.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=u.specularIntensity,f.specularColor.value.copy(u.specularColor),u.specularColorMap&&(f.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,f.specularColorMapTransform)),u.specularIntensityMap&&(f.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,f.specularIntensityMapTransform))}function v(f,u){u.matcap&&(f.matcap.value=u.matcap)}function M(f,u){const b=e.get(u).light;f.referencePosition.value.setFromMatrixPosition(b.matrixWorld),f.nearDistance.value=b.shadow.camera.near,f.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function $m(n,e,t,i){let r={},s={},a=[];const o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(b,S){const w=S.program;i.uniformBlockBinding(b,w)}function d(b,S){let w=r[b.id];w===void 0&&(v(b),w=h(b),r[b.id]=w,b.addEventListener("dispose",f));const P=S.program;i.updateUBOMapping(b,P);const R=e.render.frame;s[b.id]!==R&&(m(b),s[b.id]=R)}function h(b){const S=p();b.__bindingPointIndex=S;const w=n.createBuffer(),P=b.__size,R=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,P,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,w),w}function p(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(b){const S=r[b.id],w=b.uniforms,P=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let R=0,A=w.length;R<A;R++){const H=Array.isArray(w[R])?w[R]:[w[R]];for(let K=0,x=H.length;K<x;K++){const T=H[K];if(g(T,R,K,P)===!0){const G=T.__offset,$=Array.isArray(T.value)?T.value:[T.value];let L=0;for(let X=0;X<$.length;X++){const W=$[X],q=M(W);typeof W=="number"||typeof W=="boolean"?(T.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,G+L,T.__data)):W.isMatrix3?(T.__data[0]=W.elements[0],T.__data[1]=W.elements[1],T.__data[2]=W.elements[2],T.__data[3]=0,T.__data[4]=W.elements[3],T.__data[5]=W.elements[4],T.__data[6]=W.elements[5],T.__data[7]=0,T.__data[8]=W.elements[6],T.__data[9]=W.elements[7],T.__data[10]=W.elements[8],T.__data[11]=0):(W.toArray(T.__data,L),L+=q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,G,T.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function g(b,S,w,P){const R=b.value,A=S+"_"+w;if(P[A]===void 0)return typeof R=="number"||typeof R=="boolean"?P[A]=R:P[A]=R.clone(),!0;{const H=P[A];if(typeof R=="number"||typeof R=="boolean"){if(H!==R)return P[A]=R,!0}else if(H.equals(R)===!1)return H.copy(R),!0}return!1}function v(b){const S=b.uniforms;let w=0;const P=16;for(let A=0,H=S.length;A<H;A++){const K=Array.isArray(S[A])?S[A]:[S[A]];for(let x=0,T=K.length;x<T;x++){const G=K[x],$=Array.isArray(G.value)?G.value:[G.value];for(let L=0,X=$.length;L<X;L++){const W=$[L],q=M(W),j=w%P;j!==0&&P-j<q.boundary&&(w+=P-j),G.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=w,w+=q.storage}}}const R=w%P;return R>0&&(w+=P-R),b.__size=w,b.__cache={},this}function M(b){const S={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=48,S.storage=48):b.isMatrix4?(S.boundary=64,S.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),S}function f(b){const S=b.target;S.removeEventListener("dispose",f);const w=a.indexOf(S.__bindingPointIndex);a.splice(w,1),n.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function u(){for(const b in r)n.deleteBuffer(r[b]);a=[],r={},s={}}return{bind:l,update:d,dispose:u}}class hl{constructor(e={}){const{canvas:t=Fd(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:d=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let m;i!==null?m=i.getContextAttributes().alpha:m=a;const g=new Uint32Array(4),v=new Int32Array(4);let M=null,f=null;const u=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Vt,this._useLegacyLights=!1,this.toneMapping=vn,this.toneMappingExposure=1;const S=this;let w=!1,P=0,R=0,A=null,H=-1,K=null;const x=new ht,T=new ht;let G=null;const $=new qe(0);let L=0,X=t.width,W=t.height,q=1,j=null,k=null;const te=new ht(0,0,X,W),Q=new ht(0,0,X,W);let ce=!1;const pe=new nl;let z=!1,J=!1,ue=null;const Ae=new rt,ve=new We,fe=new I,je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function we(){return A===null?q:1}let D=i;function ct(E,N){for(let O=0;O<E.length;O++){const B=E[O],U=t.getContext(B,N);if(U!==null)return U}return null}try{const E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:d,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ts}`),t.addEventListener("webglcontextlost",Ze,!1),t.addEventListener("webglcontextrestored",C,!1),t.addEventListener("webglcontextcreationerror",ae,!1),D===null){const N=["webgl2","webgl","experimental-webgl"];if(S.isWebGL1Renderer===!0&&N.shift(),D=ct(N,E),D===null)throw ct(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&D instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),D.getShaderPrecisionFormat===void 0&&(D.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Se,Be,ye,He,Fe,ze,et,y,_,V,Y,ee,Z,Le,be,se,oe,Ne,ne,nt,ke,xe,me,ge;function Ve(){Se=new tp(D),Be=new $f(D,Se,e),Se.init(Be),xe=new km(D,Se,Be),ye=new Bm(D,Se,Be),He=new rp(D),Fe=new bm,ze=new zm(D,Se,ye,Fe,Be,xe,He),et=new Zf(S),y=new ep(S),_=new ch(D,Be),me=new qf(D,Se,_,Be),V=new np(D,_,He,me),Y=new lp(D,V,_,He),ne=new op(D,Be,ze),se=new Kf(Fe),ee=new ym(S,et,y,Se,Be,me,se),Z=new Ym(S,Fe),Le=new Am,be=new Nm(Se,Be),Ne=new Xf(S,et,y,ye,Y,m,l),oe=new Om(S,Y,Be),ge=new $m(D,He,Be,ye),nt=new Yf(D,Se,He,Be),ke=new ip(D,Se,He,Be),He.programs=ee.programs,S.capabilities=Be,S.extensions=Se,S.properties=Fe,S.renderLists=Le,S.shadowMap=oe,S.state=ye,S.info=He}Ve();const Ce=new Xm(S,D);this.xr=Ce,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const E=Se.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Se.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(E){E!==void 0&&(q=E,this.setSize(X,W,!1))},this.getSize=function(E){return E.set(X,W)},this.setSize=function(E,N,O=!0){if(Ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=E,W=N,t.width=Math.floor(E*q),t.height=Math.floor(N*q),O===!0&&(t.style.width=E+"px",t.style.height=N+"px"),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(X*q,W*q).floor()},this.setDrawingBufferSize=function(E,N,O){X=E,W=N,q=O,t.width=Math.floor(E*O),t.height=Math.floor(N*O),this.setViewport(0,0,E,N)},this.getCurrentViewport=function(E){return E.copy(x)},this.getViewport=function(E){return E.copy(te)},this.setViewport=function(E,N,O,B){E.isVector4?te.set(E.x,E.y,E.z,E.w):te.set(E,N,O,B),ye.viewport(x.copy(te).multiplyScalar(q).round())},this.getScissor=function(E){return E.copy(Q)},this.setScissor=function(E,N,O,B){E.isVector4?Q.set(E.x,E.y,E.z,E.w):Q.set(E,N,O,B),ye.scissor(T.copy(Q).multiplyScalar(q).round())},this.getScissorTest=function(){return ce},this.setScissorTest=function(E){ye.setScissorTest(ce=E)},this.setOpaqueSort=function(E){j=E},this.setTransparentSort=function(E){k=E},this.getClearColor=function(E){return E.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor.apply(Ne,arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha.apply(Ne,arguments)},this.clear=function(E=!0,N=!0,O=!0){let B=0;if(E){let U=!1;if(A!==null){const he=A.texture.format;U=he===Ho||he===Go||he===ko}if(U){const he=A.texture.type,_e=he===xn||he===mn||he===As||he===Bn||he===Bo||he===zo,Ee=Ne.getClearColor(),Te=Ne.getClearAlpha(),Oe=Ee.r,Re=Ee.g,Pe=Ee.b;_e?(g[0]=Oe,g[1]=Re,g[2]=Pe,g[3]=Te,D.clearBufferuiv(D.COLOR,0,g)):(v[0]=Oe,v[1]=Re,v[2]=Pe,v[3]=Te,D.clearBufferiv(D.COLOR,0,v))}else B|=D.COLOR_BUFFER_BIT}N&&(B|=D.DEPTH_BUFFER_BIT),O&&(B|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ze,!1),t.removeEventListener("webglcontextrestored",C,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),Le.dispose(),be.dispose(),Fe.dispose(),et.dispose(),y.dispose(),Y.dispose(),me.dispose(),ge.dispose(),ee.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",Lt),Ce.removeEventListener("sessionend",$e),ue&&(ue.dispose(),ue=null),mt.stop()};function Ze(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function C(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const E=He.autoReset,N=oe.enabled,O=oe.autoUpdate,B=oe.needsUpdate,U=oe.type;Ve(),He.autoReset=E,oe.enabled=N,oe.autoUpdate=O,oe.needsUpdate=B,oe.type=U}function ae(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function F(E){const N=E.target;N.removeEventListener("dispose",F),ie(N)}function ie(E){de(E),Fe.remove(E)}function de(E){const N=Fe.get(E).programs;N!==void 0&&(N.forEach(function(O){ee.releaseProgram(O)}),E.isShaderMaterial&&ee.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,O,B,U,he){N===null&&(N=je);const _e=U.isMesh&&U.matrixWorld.determinant()<0,Ee=pl(E,N,O,B,U);ye.setMaterial(B,_e);let Te=O.index,Oe=1;if(B.wireframe===!0){if(Te=V.getWireframeAttribute(O),Te===void 0)return;Oe=2}const Re=O.drawRange,Pe=O.attributes.position;let tt=Re.start*Oe,Tt=(Re.start+Re.count)*Oe;he!==null&&(tt=Math.max(tt,he.start*Oe),Tt=Math.min(Tt,(he.start+he.count)*Oe)),Te!==null?(tt=Math.max(tt,0),Tt=Math.min(Tt,Te.count)):Pe!=null&&(tt=Math.max(tt,0),Tt=Math.min(Tt,Pe.count));const ot=Tt-tt;if(ot<0||ot===1/0)return;me.setup(U,B,Ee,O,Te);let qt,Qe=nt;if(Te!==null&&(qt=_.get(Te),Qe=ke,Qe.setIndex(qt)),U.isMesh)B.wireframe===!0?(ye.setLineWidth(B.wireframeLinewidth*we()),Qe.setMode(D.LINES)):Qe.setMode(D.TRIANGLES);else if(U.isLine){let De=B.linewidth;De===void 0&&(De=1),ye.setLineWidth(De*we()),U.isLineSegments?Qe.setMode(D.LINES):U.isLineLoop?Qe.setMode(D.LINE_LOOP):Qe.setMode(D.LINE_STRIP)}else U.isPoints?Qe.setMode(D.POINTS):U.isSprite&&Qe.setMode(D.TRIANGLES);if(U.isBatchedMesh)Qe.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else if(U.isInstancedMesh)Qe.renderInstances(tt,ot,U.count);else if(O.isInstancedBufferGeometry){const De=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,_r=Math.min(O.instanceCount,De);Qe.renderInstances(tt,ot,_r)}else Qe.render(tt,ot)};function Ge(E,N,O){E.transparent===!0&&E.side===Ut&&E.forceSinglePass===!1?(E.side=yt,E.needsUpdate=!0,Li(E,N,O),E.side=Sn,E.needsUpdate=!0,Li(E,N,O),E.side=Ut):Li(E,N,O)}this.compile=function(E,N,O=null){O===null&&(O=E),f=be.get(O),f.init(),b.push(f),O.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),E!==O&&E.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),f.setupLights(S._useLegacyLights);const B=new Set;return E.traverse(function(U){const he=U.material;if(he)if(Array.isArray(he))for(let _e=0;_e<he.length;_e++){const Ee=he[_e];Ge(Ee,O,U),B.add(Ee)}else Ge(he,O,U),B.add(he)}),b.pop(),f=null,B},this.compileAsync=function(E,N,O=null){const B=this.compile(E,N,O);return new Promise(U=>{function he(){if(B.forEach(function(_e){Fe.get(_e).currentProgram.isReady()&&B.delete(_e)}),B.size===0){U(E);return}setTimeout(he,10)}Se.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let Ye=null;function dt(E){Ye&&Ye(E)}function Lt(){mt.stop()}function $e(){mt.start()}const mt=new il;mt.setAnimationLoop(dt),typeof self<"u"&&mt.setContext(self),this.setAnimationLoop=function(E){Ye=E,Ce.setAnimationLoop(E),E===null?mt.stop():mt.start()},Ce.addEventListener("sessionstart",Lt),Ce.addEventListener("sessionend",$e),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(N),N=Ce.getCamera()),E.isScene===!0&&E.onBeforeRender(S,E,N,A),f=be.get(E,b.length),f.init(),b.push(f),Ae.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),pe.setFromProjectionMatrix(Ae),J=this.localClippingEnabled,z=se.init(this.clippingPlanes,J),M=Le.get(E,u.length),M.init(),u.push(M),Ht(E,N,0,S.sortObjects),M.finish(),S.sortObjects===!0&&M.sort(j,k),this.info.render.frame++,z===!0&&se.beginShadows();const O=f.state.shadowsArray;if(oe.render(O,E,N),z===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Ce.enabled===!1||Ce.isPresenting===!1||Ce.hasDepthSensing()===!1)&&Ne.render(M,E),f.setupLights(S._useLegacyLights),N.isArrayCamera){const B=N.cameras;for(let U=0,he=B.length;U<he;U++){const _e=B[U];Ls(M,E,_e,_e.viewport)}}else Ls(M,E,N);A!==null&&(ze.updateMultisampleRenderTarget(A),ze.updateRenderTargetMipmap(A)),E.isScene===!0&&E.onAfterRender(S,E,N),me.resetDefaultState(),H=-1,K=null,b.pop(),b.length>0?f=b[b.length-1]:f=null,u.pop(),u.length>0?M=u[u.length-1]:M=null};function Ht(E,N,O,B){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)O=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||pe.intersectsSprite(E)){B&&fe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ae);const _e=Y.update(E),Ee=E.material;Ee.visible&&M.push(E,_e,Ee,O,fe.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||pe.intersectsObject(E))){const _e=Y.update(E),Ee=E.material;if(B&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),fe.copy(E.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),fe.copy(_e.boundingSphere.center)),fe.applyMatrix4(E.matrixWorld).applyMatrix4(Ae)),Array.isArray(Ee)){const Te=_e.groups;for(let Oe=0,Re=Te.length;Oe<Re;Oe++){const Pe=Te[Oe],tt=Ee[Pe.materialIndex];tt&&tt.visible&&M.push(E,_e,tt,O,fe.z,Pe)}}else Ee.visible&&M.push(E,_e,Ee,O,fe.z,null)}}const he=E.children;for(let _e=0,Ee=he.length;_e<Ee;_e++)Ht(he[_e],N,O,B)}function Ls(E,N,O,B){const U=E.opaque,he=E.transmissive,_e=E.transparent;f.setupLightsView(O),z===!0&&se.setGlobalState(S.clippingPlanes,O),he.length>0&&fl(U,he,N,O),B&&ye.viewport(x.copy(B)),U.length>0&&Pi(U,N,O),he.length>0&&Pi(he,N,O),_e.length>0&&Pi(_e,N,O),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function fl(E,N,O,B){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;const he=Be.isWebGL2;ue===null&&(ue=new kn(1,1,{generateMipmaps:!0,type:Se.has("EXT_color_buffer_half_float")?Ti:xn,minFilter:On,samples:he?4:0})),S.getDrawingBufferSize(ve),he?ue.setSize(ve.x,ve.y):ue.setSize(_s(ve.x),_s(ve.y));const _e=S.getRenderTarget();S.setRenderTarget(ue),S.getClearColor($),L=S.getClearAlpha(),L<1&&S.setClearColor(16777215,.5),S.clear();const Ee=S.toneMapping;S.toneMapping=vn,Pi(E,O,B),ze.updateMultisampleRenderTarget(ue),ze.updateRenderTargetMipmap(ue);let Te=!1;for(let Oe=0,Re=N.length;Oe<Re;Oe++){const Pe=N[Oe],tt=Pe.object,Tt=Pe.geometry,ot=Pe.material,qt=Pe.group;if(ot.side===Ut&&tt.layers.test(B.layers)){const Qe=ot.side;ot.side=yt,ot.needsUpdate=!0,Ns(tt,O,B,Tt,ot,qt),ot.side=Qe,ot.needsUpdate=!0,Te=!0}}Te===!0&&(ze.updateMultisampleRenderTarget(ue),ze.updateRenderTargetMipmap(ue)),S.setRenderTarget(_e),S.setClearColor($,L),S.toneMapping=Ee}function Pi(E,N,O){const B=N.isScene===!0?N.overrideMaterial:null;for(let U=0,he=E.length;U<he;U++){const _e=E[U],Ee=_e.object,Te=_e.geometry,Oe=B===null?_e.material:B,Re=_e.group;Ee.layers.test(O.layers)&&Ns(Ee,N,O,Te,Oe,Re)}}function Ns(E,N,O,B,U,he){E.onBeforeRender(S,N,O,B,U,he),E.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),U.onBeforeRender(S,N,O,B,E,he),U.transparent===!0&&U.side===Ut&&U.forceSinglePass===!1?(U.side=yt,U.needsUpdate=!0,S.renderBufferDirect(O,N,B,U,E,he),U.side=Sn,U.needsUpdate=!0,S.renderBufferDirect(O,N,B,U,E,he),U.side=Ut):S.renderBufferDirect(O,N,B,U,E,he),E.onAfterRender(S,N,O,B,U,he)}function Li(E,N,O){N.isScene!==!0&&(N=je);const B=Fe.get(E),U=f.state.lights,he=f.state.shadowsArray,_e=U.state.version,Ee=ee.getParameters(E,U.state,he,N,O),Te=ee.getProgramCacheKey(Ee);let Oe=B.programs;B.environment=E.isMeshStandardMaterial?N.environment:null,B.fog=N.fog,B.envMap=(E.isMeshStandardMaterial?y:et).get(E.envMap||B.environment),B.envMapRotation=B.environment!==null&&E.envMap===null?N.environmentRotation:E.envMapRotation,Oe===void 0&&(E.addEventListener("dispose",F),Oe=new Map,B.programs=Oe);let Re=Oe.get(Te);if(Re!==void 0){if(B.currentProgram===Re&&B.lightsStateVersion===_e)return Us(E,Ee),Re}else Ee.uniforms=ee.getUniforms(E),E.onBuild(O,Ee,S),E.onBeforeCompile(Ee,S),Re=ee.acquireProgram(Ee,Te),Oe.set(Te,Re),B.uniforms=Ee.uniforms;const Pe=B.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Pe.clippingPlanes=se.uniform),Us(E,Ee),B.needsLights=gl(E),B.lightsStateVersion=_e,B.needsLights&&(Pe.ambientLightColor.value=U.state.ambient,Pe.lightProbe.value=U.state.probe,Pe.directionalLights.value=U.state.directional,Pe.directionalLightShadows.value=U.state.directionalShadow,Pe.spotLights.value=U.state.spot,Pe.spotLightShadows.value=U.state.spotShadow,Pe.rectAreaLights.value=U.state.rectArea,Pe.ltc_1.value=U.state.rectAreaLTC1,Pe.ltc_2.value=U.state.rectAreaLTC2,Pe.pointLights.value=U.state.point,Pe.pointLightShadows.value=U.state.pointShadow,Pe.hemisphereLights.value=U.state.hemi,Pe.directionalShadowMap.value=U.state.directionalShadowMap,Pe.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Pe.spotShadowMap.value=U.state.spotShadowMap,Pe.spotLightMatrix.value=U.state.spotLightMatrix,Pe.spotLightMap.value=U.state.spotLightMap,Pe.pointShadowMap.value=U.state.pointShadowMap,Pe.pointShadowMatrix.value=U.state.pointShadowMatrix),B.currentProgram=Re,B.uniformsList=null,Re}function Ds(E){if(E.uniformsList===null){const N=E.currentProgram.getUniforms();E.uniformsList=nr.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function Us(E,N){const O=Fe.get(E);O.outputColorSpace=N.outputColorSpace,O.batching=N.batching,O.instancing=N.instancing,O.instancingColor=N.instancingColor,O.instancingMorph=N.instancingMorph,O.skinning=N.skinning,O.morphTargets=N.morphTargets,O.morphNormals=N.morphNormals,O.morphColors=N.morphColors,O.morphTargetsCount=N.morphTargetsCount,O.numClippingPlanes=N.numClippingPlanes,O.numIntersection=N.numClipIntersection,O.vertexAlphas=N.vertexAlphas,O.vertexTangents=N.vertexTangents,O.toneMapping=N.toneMapping}function pl(E,N,O,B,U){N.isScene!==!0&&(N=je),ze.resetTextureUnits();const he=N.fog,_e=B.isMeshStandardMaterial?N.environment:null,Ee=A===null?S.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:En,Te=(B.isMeshStandardMaterial?y:et).get(B.envMap||_e),Oe=B.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Re=!!O.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Pe=!!O.morphAttributes.position,tt=!!O.morphAttributes.normal,Tt=!!O.morphAttributes.color;let ot=vn;B.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(ot=S.toneMapping);const qt=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Qe=qt!==void 0?qt.length:0,De=Fe.get(B),_r=f.state.lights;if(z===!0&&(J===!0||E!==K)){const Nt=E===K&&B.id===H;se.setState(B,E,Nt)}let Je=!1;B.version===De.__version?(De.needsLights&&De.lightsStateVersion!==_r.state.version||De.outputColorSpace!==Ee||U.isBatchedMesh&&De.batching===!1||!U.isBatchedMesh&&De.batching===!0||U.isInstancedMesh&&De.instancing===!1||!U.isInstancedMesh&&De.instancing===!0||U.isSkinnedMesh&&De.skinning===!1||!U.isSkinnedMesh&&De.skinning===!0||U.isInstancedMesh&&De.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&De.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&De.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&De.instancingMorph===!1&&U.morphTexture!==null||De.envMap!==Te||B.fog===!0&&De.fog!==he||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==se.numPlanes||De.numIntersection!==se.numIntersection)||De.vertexAlphas!==Oe||De.vertexTangents!==Re||De.morphTargets!==Pe||De.morphNormals!==tt||De.morphColors!==Tt||De.toneMapping!==ot||Be.isWebGL2===!0&&De.morphTargetsCount!==Qe)&&(Je=!0):(Je=!0,De.__version=B.version);let yn=De.currentProgram;Je===!0&&(yn=Li(B,N,U));let Is=!1,mi=!1,vr=!1;const ut=yn.getUniforms(),bn=De.uniforms;if(ye.useProgram(yn.program)&&(Is=!0,mi=!0,vr=!0),B.id!==H&&(H=B.id,mi=!0),Is||K!==E){ut.setValue(D,"projectionMatrix",E.projectionMatrix),ut.setValue(D,"viewMatrix",E.matrixWorldInverse);const Nt=ut.map.cameraPosition;Nt!==void 0&&Nt.setValue(D,fe.setFromMatrixPosition(E.matrixWorld)),Be.logarithmicDepthBuffer&&ut.setValue(D,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&ut.setValue(D,"isOrthographic",E.isOrthographicCamera===!0),K!==E&&(K=E,mi=!0,vr=!0)}if(U.isSkinnedMesh){ut.setOptional(D,U,"bindMatrix"),ut.setOptional(D,U,"bindMatrixInverse");const Nt=U.skeleton;Nt&&(Be.floatVertexTextures?(Nt.boneTexture===null&&Nt.computeBoneTexture(),ut.setValue(D,"boneTexture",Nt.boneTexture,ze)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}U.isBatchedMesh&&(ut.setOptional(D,U,"batchingTexture"),ut.setValue(D,"batchingTexture",U._matricesTexture,ze));const xr=O.morphAttributes;if((xr.position!==void 0||xr.normal!==void 0||xr.color!==void 0&&Be.isWebGL2===!0)&&ne.update(U,O,yn),(mi||De.receiveShadow!==U.receiveShadow)&&(De.receiveShadow=U.receiveShadow,ut.setValue(D,"receiveShadow",U.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(bn.envMap.value=Te,bn.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),mi&&(ut.setValue(D,"toneMappingExposure",S.toneMappingExposure),De.needsLights&&ml(bn,vr),he&&B.fog===!0&&Z.refreshFogUniforms(bn,he),Z.refreshMaterialUniforms(bn,B,q,W,ue),nr.upload(D,Ds(De),bn,ze)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(nr.upload(D,Ds(De),bn,ze),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&ut.setValue(D,"center",U.center),ut.setValue(D,"modelViewMatrix",U.modelViewMatrix),ut.setValue(D,"normalMatrix",U.normalMatrix),ut.setValue(D,"modelMatrix",U.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Nt=B.uniformsGroups;for(let Sr=0,_l=Nt.length;Sr<_l;Sr++)if(Be.isWebGL2){const Fs=Nt[Sr];ge.update(Fs,yn),ge.bind(Fs,yn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return yn}function ml(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function gl(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(E,N,O){Fe.get(E.texture).__webglTexture=N,Fe.get(E.depthTexture).__webglTexture=O;const B=Fe.get(E);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=O===void 0,B.__autoAllocateDepthBuffer||Se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,N){const O=Fe.get(E);O.__webglFramebuffer=N,O.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(E,N=0,O=0){A=E,P=N,R=O;let B=!0,U=null,he=!1,_e=!1;if(E){const Te=Fe.get(E);Te.__useDefaultFramebuffer!==void 0?(ye.bindFramebuffer(D.FRAMEBUFFER,null),B=!1):Te.__webglFramebuffer===void 0?ze.setupRenderTarget(E):Te.__hasExternalTextures&&ze.rebindTextures(E,Fe.get(E.texture).__webglTexture,Fe.get(E.depthTexture).__webglTexture);const Oe=E.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(_e=!0);const Re=Fe.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Re[N])?U=Re[N][O]:U=Re[N],he=!0):Be.isWebGL2&&E.samples>0&&ze.useMultisampledRTT(E)===!1?U=Fe.get(E).__webglMultisampledFramebuffer:Array.isArray(Re)?U=Re[O]:U=Re,x.copy(E.viewport),T.copy(E.scissor),G=E.scissorTest}else x.copy(te).multiplyScalar(q).floor(),T.copy(Q).multiplyScalar(q).floor(),G=ce;if(ye.bindFramebuffer(D.FRAMEBUFFER,U)&&Be.drawBuffers&&B&&ye.drawBuffers(E,U),ye.viewport(x),ye.scissor(T),ye.setScissorTest(G),he){const Te=Fe.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+N,Te.__webglTexture,O)}else if(_e){const Te=Fe.get(E.texture),Oe=N||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Te.__webglTexture,O||0,Oe)}H=-1},this.readRenderTargetPixels=function(E,N,O,B,U,he,_e){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=Fe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&_e!==void 0&&(Ee=Ee[_e]),Ee){ye.bindFramebuffer(D.FRAMEBUFFER,Ee);try{const Te=E.texture,Oe=Te.format,Re=Te.type;if(Oe!==Gt&&xe.convert(Oe)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Pe=Re===Ti&&(Se.has("EXT_color_buffer_half_float")||Be.isWebGL2&&Se.has("EXT_color_buffer_float"));if(Re!==xn&&xe.convert(Re)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Re===en&&(Be.isWebGL2||Se.has("OES_texture_float")||Se.has("WEBGL_color_buffer_float")))&&!Pe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-B&&O>=0&&O<=E.height-U&&D.readPixels(N,O,B,U,xe.convert(Oe),xe.convert(Re),he)}finally{const Te=A!==null?Fe.get(A).__webglFramebuffer:null;ye.bindFramebuffer(D.FRAMEBUFFER,Te)}}},this.copyFramebufferToTexture=function(E,N,O=0){const B=Math.pow(2,-O),U=Math.floor(N.image.width*B),he=Math.floor(N.image.height*B);ze.setTexture2D(N,0),D.copyTexSubImage2D(D.TEXTURE_2D,O,0,0,E.x,E.y,U,he),ye.unbindTexture()},this.copyTextureToTexture=function(E,N,O,B=0){const U=N.image.width,he=N.image.height,_e=xe.convert(O.format),Ee=xe.convert(O.type);ze.setTexture2D(O,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,O.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,O.unpackAlignment),N.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,B,E.x,E.y,U,he,_e,Ee,N.image.data):N.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,B,E.x,E.y,N.mipmaps[0].width,N.mipmaps[0].height,_e,N.mipmaps[0].data):D.texSubImage2D(D.TEXTURE_2D,B,E.x,E.y,_e,Ee,N.image),B===0&&O.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),ye.unbindTexture()},this.copyTextureToTexture3D=function(E,N,O,B,U=0){if(S.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const he=Math.round(E.max.x-E.min.x),_e=Math.round(E.max.y-E.min.y),Ee=E.max.z-E.min.z+1,Te=xe.convert(B.format),Oe=xe.convert(B.type);let Re;if(B.isData3DTexture)ze.setTexture3D(B,0),Re=D.TEXTURE_3D;else if(B.isDataArrayTexture||B.isCompressedArrayTexture)ze.setTexture2DArray(B,0),Re=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,B.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,B.unpackAlignment);const Pe=D.getParameter(D.UNPACK_ROW_LENGTH),tt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Tt=D.getParameter(D.UNPACK_SKIP_PIXELS),ot=D.getParameter(D.UNPACK_SKIP_ROWS),qt=D.getParameter(D.UNPACK_SKIP_IMAGES),Qe=O.isCompressedTexture?O.mipmaps[U]:O.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,Qe.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Qe.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,E.min.x),D.pixelStorei(D.UNPACK_SKIP_ROWS,E.min.y),D.pixelStorei(D.UNPACK_SKIP_IMAGES,E.min.z),O.isDataTexture||O.isData3DTexture?D.texSubImage3D(Re,U,N.x,N.y,N.z,he,_e,Ee,Te,Oe,Qe.data):B.isCompressedArrayTexture?D.compressedTexSubImage3D(Re,U,N.x,N.y,N.z,he,_e,Ee,Te,Qe.data):D.texSubImage3D(Re,U,N.x,N.y,N.z,he,_e,Ee,Te,Oe,Qe),D.pixelStorei(D.UNPACK_ROW_LENGTH,Pe),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,tt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Tt),D.pixelStorei(D.UNPACK_SKIP_ROWS,ot),D.pixelStorei(D.UNPACK_SKIP_IMAGES,qt),U===0&&B.generateMipmaps&&D.generateMipmap(Re),ye.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?ze.setTextureCube(E,0):E.isData3DTexture?ze.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?ze.setTexture2DArray(E,0):ze.setTexture2D(E,0),ye.unbindTexture()},this.resetState=function(){P=0,R=0,A=null,ye.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===ws?"display-p3":"srgb",t.unpackColorSpace=Xe.workingColorSpace===fr?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Km extends hl{}Km.prototype.isWebGL1Renderer=!0;class Zm extends Ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new rn,this.environmentRotation=new rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class yi extends sn{constructor(e=.5,t=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);const o=[],l=[],d=[],h=[];let p=e;const m=(t-e)/r,g=new I,v=new We;for(let M=0;M<=r;M++){for(let f=0;f<=i;f++){const u=s+f/i*a;g.x=p*Math.cos(u),g.y=p*Math.sin(u),l.push(g.x,g.y,g.z),d.push(0,0,1),v.x=(g.x/t+1)/2,v.y=(g.y/t+1)/2,h.push(v.x,v.y)}p+=m}for(let M=0;M<r;M++){const f=M*(i+1);for(let u=0;u<i;u++){const b=u+f,S=b,w=b+i+1,P=b+i+2,R=b+1;o.push(S,w,R),o.push(w,P,R)}}this.setIndex(o),this.setAttribute("position",new Pt(l,3)),this.setAttribute("normal",new Pt(d,3)),this.setAttribute("uv",new Pt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yi(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ps extends sn{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let d=0;const h=[],p=new I,m=new I,g=[],v=[],M=[],f=[];for(let u=0;u<=i;u++){const b=[],S=u/i;let w=0;u===0&&a===0?w=.5/t:u===i&&l===Math.PI&&(w=-.5/t);for(let P=0;P<=t;P++){const R=P/t;p.x=-e*Math.cos(r+R*s)*Math.sin(a+S*o),p.y=e*Math.cos(a+S*o),p.z=e*Math.sin(r+R*s)*Math.sin(a+S*o),v.push(p.x,p.y,p.z),m.copy(p).normalize(),M.push(m.x,m.y,m.z),f.push(R+w,1-S),b.push(d++)}h.push(b)}for(let u=0;u<i;u++)for(let b=0;b<t;b++){const S=h[u][b+1],w=h[u][b],P=h[u+1][b],R=h[u+1][b+1];(u!==0||a>0)&&g.push(S,w,R),(u!==i-1||l<Math.PI)&&g.push(w,P,R)}this.setIndex(g),this.setAttribute("position",new Pt(v,3)),this.setAttribute("normal",new Pt(M,3)),this.setAttribute("uv",new Pt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ps(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ts}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ts);function Jm(n){const e=new hl({canvas:n,alpha:!0,antialias:!0,powerPreference:"high-performance"});e.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.setSize(window.innerWidth,window.innerHeight),e.setClearColor(0,0);const t=new Zm,i=new rl(-window.innerWidth/2,window.innerWidth/2,window.innerHeight/2,-window.innerHeight/2,.1,1e3);i.position.z=100;const r=new Ps(22,32,32),s=new In({color:2282478,transparent:!0,opacity:0,wireframe:!1}),a=new Et(r,s);t.add(a);const o=new yi(26,32,48),l=new In({color:2282478,transparent:!0,opacity:0,side:Ut}),d=new Et(o,l);t.add(d);const h=new fi(30,30,30),p=new In({color:10980346,transparent:!0,opacity:0,wireframe:!0}),m=new Et(h,p);t.add(m);const g=new yi(34,36,48),v=new In({color:3462041,transparent:!0,opacity:0,side:Ut}),M=new Et(g,v);t.add(M);const f=new yi(46,48,48),u=new In({color:10980346,transparent:!0,opacity:0,side:Ut}),b=new Et(f,u);t.add(b);let S=0,w=0,P=0,R=0,A=!1,H="node",K=null,x=0,T=0;function G(j,k){S=j-window.innerWidth/2,w=-(k-window.innerHeight/2)}function $(j,k="node"){A=j,H=k}function L(){e.setSize(window.innerWidth,window.innerHeight),i.left=-window.innerWidth/2,i.right=window.innerWidth/2,i.top=window.innerHeight/2,i.bottom=-window.innerHeight/2,i.updateProjectionMatrix()}function X(j){const k=T===0?0:Math.min((j-T)/1e3,.05);T=j,x+=k;const te=1-Math.pow(.08,k*60);P+=(S-P)*te,R+=(w-R)*te;const Q=x,ce=A?1:0,pe=A?8:6;if(H==="node"){const z=.55+Math.sin(Q*4.5)*.18;s.opacity+=(ce*z-s.opacity)*k*pe,s.color.setHex(2282478),a.scale.setScalar(1+Math.sin(Q*3)*.12),a.position.set(P,R,0),l.opacity+=(ce*(z*.45)-l.opacity)*k*pe,l.color.setHex(2282478),d.scale.setScalar(1+Math.sin(Q*2.5+.5)*.15),d.position.set(P,R,0),p.opacity+=(0-p.opacity)*k*pe,v.opacity+=(ce*.55-v.opacity)*k*pe,M.scale.setScalar(1+Math.sin(Q*2)*.2),M.position.set(P,R,0),u.opacity+=(ce*.3-u.opacity)*k*pe,b.scale.setScalar(1+Math.sin(Q*1.5+1)*.25),b.position.set(P,R,0)}else if(H==="packet")p.opacity+=(ce*.85-p.opacity)*k*pe,p.color.setHex(10980346),m.rotation.x=Q*1.8,m.rotation.y=Q*2.4,m.rotation.z=Q*.6,m.position.set(P,R,0),s.opacity+=(ce*.25-s.opacity)*k*pe,s.color.setHex(10980346),a.scale.setScalar(.7),a.position.set(P,R,0),l.opacity+=(0-l.opacity)*k*pe,v.opacity+=(ce*.4-v.opacity)*k*pe,v.color.setHex(10980346),M.scale.setScalar(1+Math.sin(Q*3.5)*.18),M.position.set(P,R,0),u.opacity+=(0-u.opacity)*k*pe;else{const z=.5+Math.sin(Q*5)*.2;s.opacity+=(ce*z*.6-s.opacity)*k*pe,s.color.setHex(16096779),a.scale.setScalar(.8),a.position.set(P,R,0),l.opacity+=(ce*z*.3-l.opacity)*k*pe,l.color.setHex(16096779),d.scale.setScalar(1.2+Math.sin(Q*4)*.1),d.position.set(P,R,0),p.opacity+=(0-p.opacity)*k*pe,v.opacity+=(0-v.opacity)*k*pe,u.opacity+=(0-u.opacity)*k*pe}e.render(t,i),K=requestAnimationFrame(X)}function W(){T=0,K=requestAnimationFrame(X)}function q(){K!==null&&(cancelAnimationFrame(K),K=null),r.dispose(),s.dispose(),o.dispose(),l.dispose(),h.dispose(),p.dispose(),g.dispose(),v.dispose(),f.dispose(),u.dispose(),e.dispose()}return{setPosition:G,setVisible:$,resize:L,start:W,dispose:q}}function Qm({hoverTarget:n}){const e=Me.useRef(null),t=Me.useRef(null);return Me.useEffect(()=>{const i=e.current;if(!i)return;const r=Jm(i);t.current=r,r.start();const s=()=>r.resize();return window.addEventListener("resize",s),()=>{window.removeEventListener("resize",s),r.dispose(),t.current=null}},[]),Me.useEffect(()=>{const i=t.current;i&&(n?(i.setPosition(n.x,n.y),i.setVisible(!0,n.type)):i.setVisible(!1))},[n]),c.jsx("canvas",{ref:e,className:"cursor3d-overlay","aria-hidden":"true"})}const ii={hidden:{opacity:0,y:18},visible:{opacity:1,y:0,transition:{duration:.5,ease:[.25,.46,.45,.94]}}},er={hidden:{},visible:{transition:{staggerChildren:.1}}},eg={once:!0,margin:"-50px"},is={packet:{title:"Packet Switching",badge:"Shared network",description:"Packets are sliced, queued, and forwarded hop by hop through a mesh of routers.",heroDescription:"Multiple packets can share the same links, and each one may take a different route to the destination.",observations:["Each colored block is an independent packet with its own route and timing.","Packets can share links, so utilization stays high even when traffic is bursty.","Delivery order is not guaranteed, which is why reassembly matters at the destination."],notes:["Store-and-forward at every hop","Adaptive routing across shared links","Best for data-heavy, bursty traffic"]},circuit:{title:"Circuit Switching",badge:"Dedicated path",description:"A dedicated lane is reserved before data starts moving, so the path stays fixed end to end.",heroDescription:"This is ideal when consistent timing matters more than squeezing every bit of utilization from the network.",observations:["Each lane is reserved for one call, so there is no route competition after setup.","Traffic moves predictably once the circuit exists, which reduces jitter.","Idle periods still consume reserved capacity, so efficiency drops for bursty transfers."],notes:["Setup required before transfer","Reserved bandwidth for every call","Best for steady real-time sessions"]}};function tg(){const[n,e]=Me.useState("packet"),[t,i]=Me.useState(!1),[r,s]=Me.useState(1.25),[a,o]=Me.useState(128),[l,d]=Me.useState(1024),[h,p]=Me.useState(3),[m,g]=Me.useState(0),[v,M]=Me.useState(null),f=Math.max(1,Math.ceil(l/a)),u=(l/(f*a)*100).toFixed(1),b=is[n],S=Me.useMemo(()=>n==="packet"?[{label:"Packets",value:String(f),accent:"blue"},{label:"Payload Use",value:`${u}%`,accent:"cyan"},{label:"Route Strategy",value:"Dynamic Mesh",accent:"blue"},{label:"Traffic Fit",value:"Burst / Data",accent:"cyan"}]:[{label:"Active Calls",value:String(h),accent:"green"},{label:"Reserved Capacity",value:`${h*128} kbps`,accent:"amber"},{label:"Route Strategy",value:"Fixed Lane",accent:"green"},{label:"Traffic Fit",value:"Voice / Real-time",accent:"amber"}],[n,h,f,u]),w=G=>{G!==n&&(e(G),i(!1),g($=>$+1))},P=()=>i(G=>!G),R=()=>{i(!1),g(G=>G+1)},A=G=>{const $=tr(G,l,64,4096,64);d($),o(L=>tr(Math.min(L,$),L,16,Math.max(16,$),16))},H=G=>{o($=>tr(G,$,16,Math.max(16,l),16))},K=G=>{p(tr(G,h,1,6))},x=Ai(),T=G=>x?{}:{initial:"hidden",whileInView:"visible",viewport:eg,variants:G};return c.jsxs("div",{className:"visualizer-page",children:[c.jsx(Qm,{hoverTarget:v}),c.jsxs(le.section,{className:"visualizer-hero",...x?{}:{initial:"hidden",animate:"visible",variants:er},children:[c.jsxs(le.div,{className:"hero-copy",...x?{}:{variants:ii},children:[c.jsx("span",{className:"hero-kicker",children:"Interactive Lab"}),c.jsx("h1",{children:"See switching behavior instead of just memorizing it."}),c.jsx("p",{children:"Compare how packet switching and circuit switching behave under live traffic, then tune the load to understand the tradeoffs that show up in exams and real networks."})]}),c.jsxs(le.div,{className:"mode-switcher",...x?{}:{variants:er},children:[c.jsxs(le.button,{type:"button",className:`mode-card ${n==="packet"?"active":""}`,onClick:()=>w("packet"),...x?{}:{variants:ii,whileHover:{y:-3},whileTap:{scale:.97}},children:[c.jsxs("div",{className:"mode-card-header",children:[c.jsx("span",{className:"mode-icon packet",children:c.jsx(hr,{size:18})}),c.jsx("span",{className:"mode-badge",children:"Shared"})]}),c.jsx("h2",{children:"Packet Switching"}),c.jsx("p",{children:is.packet.heroDescription})]}),c.jsxs(le.button,{type:"button",className:`mode-card ${n==="circuit"?"active":""}`,onClick:()=>w("circuit"),...x?{}:{variants:ii,whileHover:{y:-3},whileTap:{scale:.97}},children:[c.jsxs("div",{className:"mode-card-header",children:[c.jsx("span",{className:"mode-icon circuit",children:c.jsx(bo,{size:18})}),c.jsx("span",{className:"mode-badge",children:"Dedicated"})]}),c.jsx("h2",{children:"Circuit Switching"}),c.jsx("p",{children:is.circuit.heroDescription})]})]})]}),c.jsxs(le.div,{className:"visualizer-layout",...T(er),children:[c.jsxs(le.section,{className:"stage-card card",...x?{}:{variants:ii},children:[c.jsxs("div",{className:"stage-header",children:[c.jsxs("div",{children:[c.jsx("span",{className:"stage-kicker",children:b.badge}),c.jsx("h2",{children:b.title}),c.jsx("p",{children:b.description})]}),c.jsxs("div",{className:`stage-status ${t?"running":"paused"}`,children:[c.jsx(Es,{size:16}),t?"Simulation running":"Simulation paused"]})]}),c.jsx("div",{className:"canvas-shell",children:n==="packet"?c.jsx(gc,{isRunning:t,speed:r,packetSize:a,dataSize:l,resetToken:m,onComplete:()=>i(!1),onHover:M}):c.jsx(Lc,{isRunning:t,speed:r,numCalls:h,resetToken:m})}),c.jsx("div",{className:"stage-notes",children:b.notes.map(G=>c.jsxs("div",{className:"note-chip",children:[c.jsx(Ms,{size:14}),c.jsx("span",{children:G})]},G))})]}),c.jsxs(le.aside,{className:"control-card card",...x?{}:{variants:ii},children:[c.jsxs("div",{className:"control-block",children:[c.jsx("label",{htmlFor:"speed-slider",children:"Playback Speed"}),c.jsxs("div",{className:"slider-row",children:[c.jsx("input",{id:"speed-slider",type:"range",min:"0.5",max:"2.5",step:"0.25",value:r,onChange:G=>s(Number(G.target.value))}),c.jsxs("span",{className:"value-chip",children:[r.toFixed(2),"x"]})]})]}),n==="packet"?c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"control-block",children:[c.jsx("label",{htmlFor:"data-size-input",children:"Total Data Size (bytes)"}),c.jsx("input",{id:"data-size-input",type:"number",min:"64",max:"4096",step:"64",value:l,disabled:t,onChange:G=>A(G.target.value)}),c.jsx("small",{children:"Adjust before starting the simulation. Disabled while running."})]}),c.jsxs("div",{className:"control-block",children:[c.jsx("label",{htmlFor:"packet-size-input",children:"Packet Size (bytes)"}),c.jsx("input",{id:"packet-size-input",type:"number",min:"16",max:Math.max(16,l),step:"16",value:a,disabled:t,onChange:G=>H(G.target.value)}),c.jsxs("small",{children:[f," packets are generated from the current payload."]})]})]}):c.jsxs("div",{className:"control-block",children:[c.jsx("label",{htmlFor:"calls-input",children:"Concurrent Calls"}),c.jsx("input",{id:"calls-input",type:"number",min:"1",max:"6",step:"1",value:h,disabled:t,onChange:G=>K(G.target.value)}),c.jsxs("small",{children:[h*128," kbps of dedicated capacity is illustrated across the reserved lanes."]})]}),c.jsxs("div",{className:"action-row",children:[c.jsxs("button",{type:"button",className:"btn btn-primary action-button",onClick:P,onMouseEnter:G=>M({x:G.clientX,y:G.clientY,type:"button"}),onMouseMove:G=>M({x:G.clientX,y:G.clientY,type:"button"}),onMouseLeave:()=>M(null),children:[t?c.jsx(Dl,{size:18}):c.jsx(Ss,{size:18}),t?"Pause":"Start"]}),c.jsxs("button",{type:"button",className:"btn btn-secondary action-button",onClick:R,onMouseEnter:G=>M({x:G.clientX,y:G.clientY,type:"button"}),onMouseMove:G=>M({x:G.clientX,y:G.clientY,type:"button"}),onMouseLeave:()=>M(null),children:[c.jsx(Ul,{size:18}),"Reset"]})]}),c.jsxs("div",{className:"insight-panel",children:[c.jsx("h3",{children:"What To Notice"}),c.jsx("div",{className:"insight-list",children:b.observations.map(G=>c.jsxs("div",{className:"insight-item",children:[c.jsx("span",{className:"insight-dot"}),c.jsx("p",{children:G})]},G))})]})]})]}),c.jsx(le.section,{className:"visualizer-stats",...T(er),children:S.map(G=>c.jsx(ng,{prefersReducedMotion:x,...G},G.label))})]})}function ng({label:n,value:e,accent:t,prefersReducedMotion:i}){return c.jsxs(le.div,{className:`stat-card ${t}`,...i?{}:{variants:ii},children:[c.jsx("span",{className:"stat-label",children:n}),c.jsx("span",{className:"stat-value",children:e})]})}function tr(n,e,t,i,r=1){const s=Number(n);if(!Number.isFinite(s))return e;const a=r>1?Math.round(s/r)*r:Math.round(s);return Math.min(i,Math.max(t,a))}function ig(){const[n,e]=Me.useState({packetSize:1e3,bandwidth:1,propagationSpeed:2e5,distance:1e3}),[t,i]=Me.useState(null),[r,s]=Me.useState(""),a=l=>{const{name:d,value:h}=l.target;e(p=>({...p,[d]:Number(h)})),s("")},o=()=>{const{packetSize:l,bandwidth:d,propagationSpeed:h,distance:p}=n;if([l,d,h,p].some(M=>!Number.isFinite(M)||M<=0)){i(null),s("Enter positive values for every field before calculating the delay.");return}const m=l*8/(d*1e6),g=p/h,v=m+g;s(""),i({transmissionDelay:m.toFixed(6),propagationDelay:g.toFixed(6),totalDelay:v.toFixed(6)})};return c.jsxs("div",{className:"calculator calculator--delay",children:[c.jsxs("div",{className:"calculator-header",children:[c.jsxs("div",{children:[c.jsx("span",{className:"section-eyebrow",children:"Transmission + propagation"}),c.jsx("h3",{children:"Delay Calculator"}),c.jsx("p",{children:"Split end-to-end delay into the two pieces most frequently used in networking numericals."})]}),c.jsx("div",{className:"calculator-badge",children:"Td"})]}),c.jsxs("div",{className:"formula-box",children:[c.jsx("p",{children:c.jsx("strong",{children:"Total Delay = Transmission Delay + Propagation Delay"})}),c.jsx("p",{children:"Td = (L / R) + (d / s)"})]}),c.jsxs("div",{className:"field-grid",children:[c.jsxs("div",{className:"input-group",children:[c.jsx("label",{htmlFor:"delay-packet-size",children:"Packet Size (bytes)"}),c.jsx("input",{id:"delay-packet-size",type:"number",name:"packetSize",min:"1",value:n.packetSize,onChange:a,placeholder:"e.g. 1000"}),c.jsx("small",{children:"Use the payload length before serialization."})]}),c.jsxs("div",{className:"input-group",children:[c.jsx("label",{htmlFor:"delay-bandwidth",children:"Bandwidth (Mbps)"}),c.jsx("input",{id:"delay-bandwidth",type:"number",name:"bandwidth",min:"0.1",step:"0.1",value:n.bandwidth,onChange:a,placeholder:"e.g. 1"}),c.jsx("small",{children:"Higher bandwidth reduces transmission delay."})]}),c.jsxs("div",{className:"input-group",children:[c.jsx("label",{htmlFor:"delay-propagation-speed",children:"Propagation Speed (km/s)"}),c.jsx("input",{id:"delay-propagation-speed",type:"number",name:"propagationSpeed",min:"1",value:n.propagationSpeed,onChange:a,placeholder:"e.g. 200000"}),c.jsx("small",{children:"Fiber links are commonly approximated near 200,000 km/s."})]}),c.jsxs("div",{className:"input-group",children:[c.jsx("label",{htmlFor:"delay-distance",children:"Distance (km)"}),c.jsx("input",{id:"delay-distance",type:"number",name:"distance",min:"0.1",step:"0.1",value:n.distance,onChange:a,placeholder:"e.g. 1000"}),c.jsx("small",{children:"Use the end-to-end path length, not just one segment."})]})]}),r?c.jsxs("div",{className:"calculator-alert",role:"alert",children:[c.jsx(ys,{size:18}),c.jsx("span",{children:r})]}):null,c.jsxs("button",{type:"button",className:"btn btn-primary calculator-button",onClick:o,children:[c.jsx(To,{size:18}),"Calculate Delay"]}),t?c.jsxs("div",{className:"result-box","aria-live":"polite",children:[c.jsxs("div",{className:"result-header",children:[c.jsx("span",{className:"section-eyebrow",children:"Result"}),c.jsx("h4",{children:"Total end-to-end delay"})]}),c.jsxs("div",{className:"result-grid",children:[c.jsxs("article",{className:"result-card",children:[c.jsx("span",{children:"Transmission Delay"}),c.jsxs("strong",{children:[t.transmissionDelay,"s"]}),c.jsx("small",{children:"Time required to push the packet onto the link."})]}),c.jsxs("article",{className:"result-card",children:[c.jsx("span",{children:"Propagation Delay"}),c.jsxs("strong",{children:[t.propagationDelay,"s"]}),c.jsx("small",{children:"Time required for the signal to traverse the medium."})]}),c.jsxs("article",{className:"result-card featured",children:[c.jsx("span",{children:"Total Delay"}),c.jsxs("strong",{children:[t.totalDelay,"s"]}),c.jsx("small",{children:"The full source-to-destination delay for this simplified path."})]})]})]}):null]})}function rg(){const[n,e]=Me.useState({signalPower:1,noisePower:.1}),[t,i]=Me.useState(null),[r,s]=Me.useState(""),a=l=>{const{name:d,value:h}=l.target;e(p=>({...p,[d]:Number(h)})),s("")},o=()=>{const{signalPower:l,noisePower:d}=n;if([l,d].some(g=>!Number.isFinite(g)||g<=0)){i(null),s("Enter positive signal and noise power values before calculating SNR.");return}const h=l/d,p=10*Math.log10(h),m=Math.log2(1+h);s(""),i({snrLinear:h.toFixed(4),snrDb:p.toFixed(2),shannonCapacity:m.toFixed(4)})};return c.jsxs("div",{className:"calculator calculator--snr",children:[c.jsxs("div",{className:"calculator-header",children:[c.jsxs("div",{children:[c.jsx("span",{className:"section-eyebrow",children:"Signal quality"}),c.jsx("h3",{children:"SNR Calculator"}),c.jsx("p",{children:"Translate raw power levels into linear SNR, decibels, and the corresponding Shannon capacity."})]}),c.jsx("div",{className:"calculator-badge",children:"SNR"})]}),c.jsxs("div",{className:"formula-box",children:[c.jsx("p",{children:c.jsx("strong",{children:"SNR(dB) = 10 × log10(Signal Power / Noise Power)"})}),c.jsx("p",{children:"Shannon Capacity = log2(1 + SNRlinear)"})]}),c.jsxs("div",{className:"field-grid",children:[c.jsxs("div",{className:"input-group",children:[c.jsx("label",{htmlFor:"snr-signal-power",children:"Signal Power (watts)"}),c.jsx("input",{id:"snr-signal-power",type:"number",name:"signalPower",min:"0.01",step:"0.01",value:n.signalPower,onChange:a,placeholder:"e.g. 1"}),c.jsx("small",{children:"Use the received signal power, not the transmitted one, when the problem provides it."})]}),c.jsxs("div",{className:"input-group",children:[c.jsx("label",{htmlFor:"snr-noise-power",children:"Noise Power (watts)"}),c.jsx("input",{id:"snr-noise-power",type:"number",name:"noisePower",min:"0.01",step:"0.01",value:n.noisePower,onChange:a,placeholder:"e.g. 0.1"}),c.jsx("small",{children:"Noise power must stay above zero for the logarithm to be valid."})]})]}),r?c.jsxs("div",{className:"calculator-alert",role:"alert",children:[c.jsx(ys,{size:18}),c.jsx("span",{children:r})]}):null,c.jsxs("button",{type:"button",className:"btn btn-primary calculator-button",onClick:o,children:[c.jsx(Ao,{size:18}),"Calculate SNR"]}),t?c.jsxs("div",{className:"result-box","aria-live":"polite",children:[c.jsxs("div",{className:"result-header",children:[c.jsx("span",{className:"section-eyebrow",children:"Result"}),c.jsx("h4",{children:"Signal quality summary"})]}),c.jsxs("div",{className:"result-grid",children:[c.jsxs("article",{className:"result-card",children:[c.jsx("span",{children:"SNR (Linear)"}),c.jsx("strong",{children:t.snrLinear}),c.jsx("small",{children:"Useful when plugging the value into Shannon capacity directly."})]}),c.jsxs("article",{className:"result-card",children:[c.jsx("span",{children:"SNR (dB)"}),c.jsxs("strong",{children:[t.snrDb," dB"]}),c.jsx("small",{children:"The logarithmic representation typically requested in exam problems."})]}),c.jsxs("article",{className:"result-card featured",children:[c.jsx("span",{children:"Shannon Capacity"}),c.jsxs("strong",{children:[t.shannonCapacity," bits/Hz"]}),c.jsx("small",{children:"The theoretical information rate supported by this signal quality."})]})]})]}):null]})}function sg(){const[n,e]=Me.useState({bandwidth:10,packetsSent:1e3,packetsLost:5}),[t,i]=Me.useState(null),[r,s]=Me.useState(""),a=l=>{const{name:d,value:h}=l.target;e(p=>({...p,[d]:Number(h)})),s("")},o=()=>{const{bandwidth:l,packetsSent:d,packetsLost:h}=n;if([l,d,h].some(M=>!Number.isFinite(M)||M<0)||l<=0||d<=0||h>d){i(null),s("Use non-negative values, keep bandwidth and packets sent above zero, and ensure packets lost does not exceed packets sent.");return}const m=h/d*100,g=l*(1-h/d),v=d-h;s(""),i({packetLossRate:m.toFixed(2),effectiveThroughput:g.toFixed(2),successfulPackets:v})};return c.jsxs("div",{className:"calculator calculator--throughput",children:[c.jsxs("div",{className:"calculator-header",children:[c.jsxs("div",{children:[c.jsx("span",{className:"section-eyebrow",children:"Delivery efficiency"}),c.jsx("h3",{children:"Throughput Calculator"}),c.jsx("p",{children:"Estimate how much of the raw bandwidth remains useful after packet loss is taken into account."})]}),c.jsx("div",{className:"calculator-badge",children:"Mbps"})]}),c.jsxs("div",{className:"formula-box",children:[c.jsx("p",{children:c.jsx("strong",{children:"Effective Throughput = Bandwidth × (1 - Loss Rate)"})}),c.jsx("p",{children:"Loss Rate = Packets Lost / Total Packets Sent"})]}),c.jsxs("div",{className:"field-grid",children:[c.jsxs("div",{className:"input-group",children:[c.jsx("label",{htmlFor:"throughput-bandwidth",children:"Bandwidth (Mbps)"}),c.jsx("input",{id:"throughput-bandwidth",type:"number",name:"bandwidth",min:"0.1",step:"0.5",value:n.bandwidth,onChange:a,placeholder:"e.g. 10"}),c.jsx("small",{children:"This is the raw link capacity before losses are applied."})]}),c.jsxs("div",{className:"input-group",children:[c.jsx("label",{htmlFor:"throughput-sent",children:"Packets Sent"}),c.jsx("input",{id:"throughput-sent",type:"number",name:"packetsSent",min:"1",value:n.packetsSent,onChange:a,placeholder:"e.g. 1000"}),c.jsx("small",{children:"Use the total packets launched over the observation interval."})]}),c.jsxs("div",{className:"input-group",children:[c.jsx("label",{htmlFor:"throughput-lost",children:"Packets Lost"}),c.jsx("input",{id:"throughput-lost",type:"number",name:"packetsLost",min:"0",value:n.packetsLost,onChange:a,placeholder:"e.g. 5"}),c.jsx("small",{children:"Lost packets cannot exceed the number originally sent."})]})]}),r?c.jsxs("div",{className:"calculator-alert",role:"alert",children:[c.jsx(ys,{size:18}),c.jsx("span",{children:r})]}):null,c.jsxs("button",{type:"button",className:"btn btn-primary calculator-button",onClick:o,children:[c.jsx(Es,{size:18}),"Calculate Throughput"]}),t?c.jsxs("div",{className:"result-box","aria-live":"polite",children:[c.jsxs("div",{className:"result-header",children:[c.jsx("span",{className:"section-eyebrow",children:"Result"}),c.jsx("h4",{children:"Effective throughput summary"})]}),c.jsxs("div",{className:"result-grid",children:[c.jsxs("article",{className:"result-card",children:[c.jsx("span",{children:"Packet Loss Rate"}),c.jsxs("strong",{children:[t.packetLossRate,"%"]}),c.jsx("small",{children:"The portion of the sent packets that never contributed to delivery."})]}),c.jsxs("article",{className:"result-card",children:[c.jsx("span",{children:"Successful Packets"}),c.jsx("strong",{children:t.successfulPackets}),c.jsx("small",{children:"The packets that actually made it through to the destination."})]}),c.jsxs("article",{className:"result-card featured",children:[c.jsx("span",{children:"Effective Throughput"}),c.jsxs("strong",{children:[t.effectiveThroughput," Mbps"]}),c.jsx("small",{children:"The usable data rate after the loss penalty is applied."})]})]})]}):null]})}const Ln={hidden:{opacity:0,y:18},visible:{opacity:1,y:0,transition:{duration:.5,ease:[.25,.46,.45,.94]}}},Eo={hidden:{},visible:{transition:{staggerChildren:.1}}},ag={once:!0,margin:"-50px"},rs=[{id:"delay",label:"Delay",caption:"Transmission + propagation",description:"Break total delay into the parts most often used in networking numericals.",icon:To},{id:"snr",label:"SNR",caption:"Signal + Shannon",description:"Move between linear SNR, decibels, and the resulting Shannon capacity.",icon:Ao},{id:"throughput",label:"Throughput",caption:"Loss-aware delivery",description:"Estimate effective throughput after accounting for packet loss and successful delivery.",icon:Es}],og=[{title:"Delay formula",value:"Td = (L / R) + (d / s)"},{title:"SNR in dB",value:"10 × log10(Ps / Pn)"},{title:"Throughput",value:"Bandwidth × (1 - Loss Rate)"},{title:"Shannon capacity",value:"C = B × log2(1 + SNR)"}];function lg(){const[n,e]=Me.useState("delay"),t=rs.find(s=>s.id===n)??rs[0],i=Ai(),r=s=>i?{}:{initial:"hidden",whileInView:"visible",viewport:ag,variants:s};return c.jsxs("div",{className:"numericals-page",children:[c.jsxs(le.section,{className:"page-hero numericals-hero",...i?{}:{initial:"hidden",animate:"visible",variants:Eo},children:[c.jsx(le.span,{className:"section-eyebrow",...i?{}:{variants:Ln},children:"Problem solving lab"}),c.jsx(le.h1,{...i?{}:{variants:Ln},children:"Practice the formulas without losing the intuition behind them."}),c.jsx(le.p,{...i?{}:{variants:Ln},children:"Pick a solver, enter the values, and get a cleaner read on the result so you can spend time understanding the output instead of wrestling the interface."}),c.jsxs(le.div,{className:"numericals-pill-row",...i?{}:{variants:Eo},children:[c.jsxs(le.div,{className:"data-pill",...i?{}:{variants:Ln},children:[c.jsx("strong",{children:"3"}),c.jsx("span",{children:"active solvers"})]}),c.jsxs(le.div,{className:"data-pill",...i?{}:{variants:Ln},children:[c.jsx("strong",{children:"Live"}),c.jsx("span",{children:"instant recompute flow"})]}),c.jsxs(le.div,{className:"data-pill",...i?{}:{variants:Ln},children:[c.jsx("strong",{children:"Exam"}),c.jsx("span",{children:"focused formulas"})]})]})]}),c.jsxs(le.section,{className:"numericals-shell",...r(Ln),children:[c.jsx("div",{className:"tabs-container",role:"tablist","aria-label":"Numerical solvers",children:rs.map(({id:s,label:a,caption:o,icon:l})=>c.jsxs("button",{type:"button",role:"tab","aria-selected":n===s,className:`tab-button ${n===s?"active":""}`,onClick:()=>e(s),children:[c.jsx("span",{className:"tab-icon",children:c.jsx(l,{size:18})}),c.jsxs("span",{className:"tab-copy",children:[c.jsx("strong",{children:a}),c.jsx("small",{children:o})]})]},s))}),c.jsxs("div",{className:"numericals-layout",children:[c.jsxs("section",{className:"calculator-stage card",children:[c.jsxs("div",{className:"section-heading",children:[c.jsx("span",{className:"section-eyebrow",children:"Active solver"}),c.jsxs("h2",{children:[t.label," calculator"]}),c.jsx("p",{children:t.description})]}),c.jsxs("div",{className:"calculators-section",children:[n==="delay"&&c.jsx(ig,{}),n==="snr"&&c.jsx(rg,{}),n==="throughput"&&c.jsx(sg,{})]})]}),c.jsxs("aside",{className:"reference-card card",children:[c.jsxs("div",{className:"section-heading",children:[c.jsx("span",{className:"section-eyebrow",children:"Quick reference"}),c.jsx("h2",{children:"Keep the equations in view while you solve."}),c.jsx("p",{children:"Use this side panel as a memory scaffold before you commit the formula to paper."})]}),c.jsx("div",{className:"reference-grid",children:og.map(s=>c.jsxs("article",{className:"reference-item",children:[c.jsx("strong",{children:s.title}),c.jsx("code",{children:s.value})]},s.title))})]})]})]})]})}function cg(){const[n,e]=Me.useState(!1);return c.jsxs(c.Fragment,{children:[c.jsx(kl,{onDone:()=>e(!0)}),c.jsxs("div",{className:`app${n?" app-booted":""}`,children:[c.jsx(Bl,{}),c.jsx("main",{className:"main-content",children:c.jsxs(yl,{children:[c.jsx(gi,{path:"/",element:c.jsx(Zl,{})}),c.jsx(gi,{path:"/concepts",element:c.jsx(ic,{})}),c.jsx(gi,{path:"/visualizer",element:c.jsx(tg,{})}),c.jsx(gi,{path:"/numericals",element:c.jsx(lg,{})}),c.jsx(gi,{path:"*",element:c.jsx(dg,{})})]})}),c.jsx("footer",{className:"footer",children:c.jsxs("div",{className:"footer-content",children:[c.jsxs("div",{className:"footer-brand",children:[c.jsx("span",{className:"footer-kicker",children:"NetSwitch Lab"}),c.jsx("h2",{children:"Learn switching the way it behaves in real networks."}),c.jsx("p",{children:"Interactive simulations, formula solvers, and concept breakdowns designed to turn abstract theory into intuition you can actually reuse."})]}),c.jsxs("div",{className:"footer-column",children:[c.jsx("span",{className:"footer-heading",children:"Explore"}),c.jsx(pn,{to:"/",children:"Home"}),c.jsx(pn,{to:"/concepts",children:"Concept Atlas"}),c.jsx(pn,{to:"/visualizer",children:"Visualizer"}),c.jsx(pn,{to:"/numericals",children:"Numericals"})]}),c.jsxs("div",{className:"footer-column",children:[c.jsx("span",{className:"footer-heading",children:"Best For"}),c.jsxs("div",{className:"footer-pill",children:[c.jsx(hr,{size:16}),"Packet and circuit tradeoffs"]}),c.jsxs("div",{className:"footer-pill",children:[c.jsx(Il,{size:16}),"Visual walk-throughs before exams"]}),c.jsxs("div",{className:"footer-pill",children:[c.jsx(Fl,{size:16}),"Fast revision with live formulas"]})]})]})})]})]})}function dg(){return c.jsx("section",{className:"not-found",children:c.jsxs("div",{className:"not-found-content card",children:[c.jsx("span",{className:"section-eyebrow",children:"404 · Route lost"}),c.jsx("h1",{children:"This route fell off the network map."}),c.jsx("p",{children:"The page you requested does not exist, but the main learning paths are all still online."}),c.jsxs("div",{className:"not-found-actions",children:[c.jsxs(pn,{to:"/",className:"btn btn-primary",children:["Go Home",c.jsx(ss,{size:16})]}),c.jsx(pn,{to:"/visualizer",className:"btn btn-secondary",children:"Open Visualizer"})]})]})})}const ul=document.getElementById("root");if(!ul)throw new Error("Root element not found");as.createRoot(ul).render(c.jsx(bl.StrictMode,{children:c.jsx(Tl,{basename:"/packet-switching-app/",children:c.jsx(cg,{})})}));
