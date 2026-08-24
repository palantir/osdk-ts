import{j as o}from"./iframe-D7uYHMK5.js";import{P as a}from"./PdfViewerAnnotationLayer-BOkL3do2.js";import"./preload-helper-DiAZcfZm.js";import"./index-BzC45Lga.js";const{fn:y}=__STORYBOOK_MODULE_TEST__,f=[{id:"h1",type:"highlight",page:1,rect:{x:50,y:700,width:300,height:20},label:"Highlighted text"},{id:"u1",type:"underline",page:1,rect:{x:50,y:650,width:200,height:2}},{id:"c1",type:"comment",page:1,rect:{x:400,y:600,width:24,height:24},label:"Review this section"},{id:"p1",type:"pin",page:1,rect:{x:300,y:500,width:16,height:16},label:"Pin marker"}],b={title:"Components/DocumentViewer/Renderers/PdfViewer/Building Blocks/AnnotationLayer",component:a,tags:["beta"],args:{annotations:f,pageHeight:792,scale:1,onAnnotationClick:y()},render:e=>o.jsx("div",{style:{position:"relative",width:`${612*e.scale}px`,height:`${e.pageHeight*e.scale}px`,border:"1px solid #ccc",background:"#fff"},children:o.jsx(a,{...e,transform:[e.scale,0,0,-e.scale,0,e.pageHeight*e.scale]})}),argTypes:{pageHeight:{description:"Height of the PDF page in PDF units (used for coordinate conversion)",control:{type:"number",min:1}},scale:{description:"Current zoom scale",control:{type:"number",min:.25,max:5,step:.25}},annotations:{description:"Array of annotations to render on the page",control:"object"}}},t={parameters:{docs:{source:{code:`import { PdfViewerAnnotationLayer } from "@osdk/react-components/experimental/pdf-viewer";

// Absolutely positioned over a rendered page. transform is pdf.js's
// viewport.transform, which converts PDF coordinates to CSS pixels.
<PdfViewerAnnotationLayer
  annotations={[
    { id: "h1", type: "highlight", page: 1, rect: { x: 50, y: 700, width: 300, height: 20 }, label: "Highlighted text" },
    { id: "u1", type: "underline", page: 1, rect: { x: 50, y: 650, width: 200, height: 2 } },
    { id: "c1", type: "comment", page: 1, rect: { x: 400, y: 600, width: 24, height: 24 }, label: "Review this section" },
    { id: "p1", type: "pin", page: 1, rect: { x: 300, y: 500, width: 16, height: 16 }, label: "Pin marker" },
  ]}
  pageHeight={792}
  scale={1}
  transform={[1, 0, 0, -1, 0, 792]}
  onAnnotationClick={(annotation) => handleAnnotationClick(annotation)}
/>`}}}},n={args:{annotations:[{id:"h1",type:"highlight",page:1,rect:{x:50,y:700,width:300,height:20},label:"First highlight"},{id:"h2",type:"highlight",page:1,rect:{x:50,y:650,width:250,height:20},label:"Second highlight"},{id:"h3",type:"highlight",page:1,rect:{x:50,y:600,width:350,height:20},label:"Third highlight",color:"#4caf50"}]},parameters:{docs:{source:{code:`import { PdfViewerAnnotationLayer } from "@osdk/react-components/experimental/pdf-viewer";

// Per-annotation color overrides the default highlight fill
<PdfViewerAnnotationLayer
  annotations={[
    { id: "h1", type: "highlight", page: 1, rect: { x: 50, y: 700, width: 300, height: 20 }, label: "First highlight" },
    { id: "h2", type: "highlight", page: 1, rect: { x: 50, y: 650, width: 250, height: 20 }, label: "Second highlight" },
    { id: "h3", type: "highlight", page: 1, rect: { x: 50, y: 600, width: 350, height: 20 }, label: "Third highlight", color: "#4caf50" },
  ]}
  pageHeight={792}
  scale={1}
  transform={[1, 0, 0, -1, 0, 792]}
  onAnnotationClick={(annotation) => handleAnnotationClick(annotation)}
/>`}}}},i={args:{scale:2},parameters:{docs:{source:{code:`import { PdfViewerAnnotationLayer } from "@osdk/react-components/experimental/pdf-viewer";

// scale and transform must move together, otherwise annotations drift off the
// page as the user zooms
<PdfViewerAnnotationLayer
  annotations={annotations}
  pageHeight={792}
  scale={2}
  transform={[2, 0, 0, -2, 0, 792 * 2]}
  onAnnotationClick={(annotation) => handleAnnotationClick(annotation)}
/>`}}}};var r,h,s;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`import { PdfViewerAnnotationLayer } from "@osdk/react-components/experimental/pdf-viewer";

// Absolutely positioned over a rendered page. transform is pdf.js's
// viewport.transform, which converts PDF coordinates to CSS pixels.
<PdfViewerAnnotationLayer
  annotations={[
    { id: "h1", type: "highlight", page: 1, rect: { x: 50, y: 700, width: 300, height: 20 }, label: "Highlighted text" },
    { id: "u1", type: "underline", page: 1, rect: { x: 50, y: 650, width: 200, height: 2 } },
    { id: "c1", type: "comment", page: 1, rect: { x: 400, y: 600, width: 24, height: 24 }, label: "Review this section" },
    { id: "p1", type: "pin", page: 1, rect: { x: 300, y: 500, width: 16, height: 16 }, label: "Pin marker" },
  ]}
  pageHeight={792}
  scale={1}
  transform={[1, 0, 0, -1, 0, 792]}
  onAnnotationClick={(annotation) => handleAnnotationClick(annotation)}
/>\`
      }
    }
  }
}`,...(s=(h=t.parameters)==null?void 0:h.docs)==null?void 0:s.source}}};var l,c,d;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
  },
  parameters: {
    docs: {
      source: {
        code: \`import { PdfViewerAnnotationLayer } from "@osdk/react-components/experimental/pdf-viewer";

// Per-annotation color overrides the default highlight fill
<PdfViewerAnnotationLayer
  annotations={[
    { id: "h1", type: "highlight", page: 1, rect: { x: 50, y: 700, width: 300, height: 20 }, label: "First highlight" },
    { id: "h2", type: "highlight", page: 1, rect: { x: 50, y: 650, width: 250, height: 20 }, label: "Second highlight" },
    { id: "h3", type: "highlight", page: 1, rect: { x: 50, y: 600, width: 350, height: 20 }, label: "Third highlight", color: "#4caf50" },
  ]}
  pageHeight={792}
  scale={1}
  transform={[1, 0, 0, -1, 0, 792]}
  onAnnotationClick={(annotation) => handleAnnotationClick(annotation)}
/>\`
      }
    }
  }
}`,...(d=(c=n.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var g,p,m;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    scale: 2
  },
  parameters: {
    docs: {
      source: {
        code: \`import { PdfViewerAnnotationLayer } from "@osdk/react-components/experimental/pdf-viewer";

// scale and transform must move together, otherwise annotations drift off the
// page as the user zooms
<PdfViewerAnnotationLayer
  annotations={annotations}
  pageHeight={792}
  scale={2}
  transform={[2, 0, 0, -2, 0, 792 * 2]}
  onAnnotationClick={(annotation) => handleAnnotationClick(annotation)}
/>\`
      }
    }
  }
}`,...(m=(p=i.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const k=["Default","HighlightsOnly","ZoomedIn"];export{t as Default,n as HighlightsOnly,i as ZoomedIn,k as __namedExportsOrder,b as default};
