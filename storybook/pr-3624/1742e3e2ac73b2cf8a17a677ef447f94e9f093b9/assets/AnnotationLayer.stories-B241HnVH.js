import{j as o}from"./iframe-BeCKStTi.js";import{P as r}from"./PdfViewerAnnotationLayer-fZjGDmfj.js";import"./preload-helper-BICrzKRt.js";import"./index-BfYzXW_3.js";const{fn:y}=__STORYBOOK_MODULE_TEST__,u=[{id:"h1",label:"Highlighted text",page:1,rect:{height:20,width:300,x:50,y:700},type:"highlight"},{id:"u1",page:1,rect:{height:2,width:200,x:50,y:650},type:"underline"},{id:"c1",label:"Review this section",page:1,rect:{height:24,width:24,x:400,y:600},type:"comment"},{id:"p1",label:"Pin marker",page:1,rect:{height:16,width:16,x:300,y:500},type:"pin"}],O={argTypes:{annotations:{control:"object",description:"Array of annotations to render on the page"},pageHeight:{control:{min:1,type:"number"},description:"Height of the PDF page in PDF units (used for coordinate conversion)"},scale:{control:{max:5,min:.25,step:.25,type:"number"},description:"Current zoom scale"}},args:{annotations:u,onAnnotationClick:y(),pageHeight:792,scale:1},component:r,render:e=>o.jsx("div",{style:{background:"#fff",border:"1px solid #ccc",height:`${e.pageHeight*e.scale}px`,position:"relative",width:`${612*e.scale}px`},children:o.jsx(r,{...e,transform:[e.scale,0,0,-e.scale,0,e.pageHeight*e.scale]})}),tags:["beta"],title:"Components/DocumentViewer/Renderers/PdfViewer/Building Blocks/AnnotationLayer"},t={},i={args:{annotations:[{id:"h1",label:"First highlight",page:1,rect:{height:20,width:300,x:50,y:700},type:"highlight"},{id:"h2",label:"Second highlight",page:1,rect:{height:20,width:250,x:50,y:650},type:"highlight"},{color:"#4caf50",id:"h3",label:"Third highlight",page:1,rect:{height:20,width:350,x:50,y:600},type:"highlight"}]}},n={args:{scale:2}};var h,a,s;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(s=(a=t.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var c,g,l;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    annotations: [{
      id: "h1",
      label: "First highlight",
      page: 1,
      rect: {
        height: 20,
        width: 300,
        x: 50,
        y: 700
      },
      type: "highlight"
    }, {
      id: "h2",
      label: "Second highlight",
      page: 1,
      rect: {
        height: 20,
        width: 250,
        x: 50,
        y: 650
      },
      type: "highlight"
    }, {
      color: "#4caf50",
      id: "h3",
      label: "Third highlight",
      page: 1,
      rect: {
        height: 20,
        width: 350,
        x: 50,
        y: 600
      },
      type: "highlight"
    }]
  }
}`,...(l=(g=i.parameters)==null?void 0:g.docs)==null?void 0:l.source}}};var p,d,m;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    scale: 2
  }
}`,...(m=(d=n.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const _=["Default","HighlightsOnly","ZoomedIn"];export{t as Default,i as HighlightsOnly,n as ZoomedIn,_ as __namedExportsOrder,O as default};
