"use strict";(self.webpackChunkgraaf=self.webpackChunkgraaf||[]).push([[860],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),h=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=h(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),c=h(r),u=n,f=c["".concat(p,".").concat(u)]||c[u]||d[u]||s;return r?a.createElement(f,o(o({ref:t},l),{},{components:r})):a.createElement(f,o({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:n,o[1]=i;for(var h=2;h<s;h++)o[h]=r[h];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8186:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>h});var a=r(7462),n=(r(7294),r(3905));const s={},o="BFS Based Shortest Path",i={unversionedId:"algorithms/shortest-path/bfs-based-shortest-path",id:"algorithms/shortest-path/bfs-based-shortest-path",title:"BFS Based Shortest Path",description:"Breadth-First Search (BFS) is a graph traversal algorithm that efficiently finds the shortest",source:"@site/docs/algorithms/shortest-path/bfs-based-shortest-path.md",sourceDirName:"algorithms/shortest-path",slug:"/algorithms/shortest-path/bfs-based-shortest-path",permalink:"/graaf/docs/algorithms/shortest-path/bfs-based-shortest-path",draft:!1,editUrl:"https://github.com/bobluppes/graaf/tree/main/docs/algorithms/shortest-path/bfs-based-shortest-path.md",tags:[],version:"current",frontMatter:{},sidebar:"algorithmSidebar",previous:{title:"Bellman-Ford Shortest Path",permalink:"/graaf/docs/algorithms/shortest-path/bellman-ford"},next:{title:"Dijkstra Shortest Path",permalink:"/graaf/docs/algorithms/shortest-path/dijkstra"}},p={},h=[{value:"Syntax",id:"syntax",level:2}],l={toc:h},c="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"bfs-based-shortest-path"},"BFS Based Shortest Path"),(0,n.kt)("p",null,"Breadth-First Search (BFS) is a graph traversal algorithm that efficiently finds the shortest\npath between two vertices in an ",(0,n.kt)("strong",{parentName:"p"},"unweighted graph")," by exploring vertices level by level,\nguaranteeing the shortest path, and has a time complexity of ",(0,n.kt)("inlineCode",{parentName:"p"},"O(|E| + |V|)"),",\nwhere ",(0,n.kt)("inlineCode",{parentName:"p"},"|V|")," is the number of vertices and ",(0,n.kt)("inlineCode",{parentName:"p"},"|E|")," is the number of edges in the graph.\nBFS uses a queue to iteratively visit neighboring vertices from the source\nvertex, ensuring that the shortest path is discovered before longer paths."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Breadth-first_search"},"wikipedia")),(0,n.kt)("h2",{id:"syntax"},"Syntax"),(0,n.kt)("p",null,"Calculates the shortest path between one start_vertex and one\nend_vertex using BFS. This does not consider edge weights."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"template <typename V, typename E, graph_type T, typename WEIGHT_T = decltype(get_weight(std::declval<E>()))>\nstd::optional<graph_path<WEIGHT_T>> bfs_shortest_path(\n    const graph<V, E, T>& graph, vertex_id_t start_vertex, vertex_id_t end_vertex);\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"graph")," The graph to extract shortest path from."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"start_vertex")," Vertex id where the shortest path should start."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"end_vertex")," Vertex id where the shortest path should end."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"return")," An optional with the shortest path (list of vertices) if found.")))}d.isMDXComponent=!0}}]);