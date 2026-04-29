import{j as r}from"./iframe-Dd1_qWrC.js";import{P as h}from"./PdfViewerAnnotationLayer-C8Ik_dDi.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BKH9cRLq.js";const{fn:y}=__STORYBOOK_MODULE_TEST__,u=[{id:"h1",type:"highlight",page:1,rect:{x:50,y:700,width:300,height:20},label:"Highlighted text"},{id:"u1",type:"underline",page:1,rect:{x:50,y:650,width:200,height:2}},{id:"c1",type:"comment",page:1,rect:{x:400,y:600,width:24,height:24},label:"Review this section"},{id:"p1",type:"pin",page:1,rect:{x:300,y:500,width:16,height:16},label:"Pin marker"}],O={title:"Experimental/PdfViewer/Building Blocks/AnnotationLayer",component:h,args:{annotations:u,pageHeight:792,scale:1,onAnnotationClick:y()},render:e=>r.jsx("div",{style:{position:"relative",width:`${612*e.scale}px`,height:`${e.pageHeight*e.scale}px`,border:"1px solid #ccc",background:"#fff"},children:r.jsx(h,{...e})}),argTypes:{pageHeight:{description:"Height of the PDF page in PDF units (used for coordinate conversion)",control:{type:"number",min:1}},scale:{description:"Current zoom scale",control:{type:"number",min:.25,max:5,step:.25}},annotations:{description:"Array of annotations to render on the page",control:"object"}}},t={},i={args:{annotations:[{id:"h1",type:"highlight",page:1,rect:{x:50,y:700,width:300,height:20},label:"First highlight"},{id:"h2",type:"highlight",page:1,rect:{x:50,y:650,width:250,height:20},label:"Second highlight"},{id:"h3",type:"highlight",page:1,rect:{x:50,y:600,width:350,height:20},label:"Third highlight",color:"#4caf50"}]}},n={args:{scale:2}};var o,a,s;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:"{}",...(s=(a=t.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var g,c,l;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    annotations: [{
      id: "h1",
      type: "highlight",
      page: 1,
      rect: {
        x: 50,
        y: 700,
        width: 300,
        height: 20
      },
      label: "First highlight"
    }, {
      id: "h2",
      type: "highlight",
      page: 1,
      rect: {
        x: 50,
        y: 650,
        width: 250,
        height: 20
      },
      label: "Second highlight"
    }, {
      id: "h3",
      type: "highlight",
      page: 1,
      rect: {
        x: 50,
        y: 600,
        width: 350,
        height: 20
      },
      label: "Third highlight",
      color: "#4caf50"
    }]
  }
}`,...(l=(c=i.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var p,d,m;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    scale: 2.0
  }
}`,...(m=(d=n.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const _=["Default","HighlightsOnly","ZoomedIn"];export{t as Default,i as HighlightsOnly,n as ZoomedIn,_ as __namedExportsOrder,O as default};
