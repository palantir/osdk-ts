import{j as n}from"./iframe-DHBngpjq.js";import{B as e}from"./BasePdfViewer-Doi7QXO_.js";import"./preload-helper-CDXIiz1j.js";import"./index-By-FRoq9.js";import"./BasePdfViewer.module.css-DdXpZH1X.js";import"./PdfViewerAnnotationLayer-DCvMr0HL.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-ELD2ejAK.js";import"./PdfViewerOutlineSidebar-98ba1UzN.js";import"./PdfViewerSidebarHeader-DygSjtW0.js";import"./useBaseUiId-CzQMC21v.js";import"./useControlled-BLsTwB3H.js";import"./CompositeRoot-B0E9Vg7q.js";import"./CompositeItem-CbJoHss2.js";import"./ToolbarRootContext-B_eHvjGz.js";import"./composite-uu2-UFVd.js";import"./svgIconContainer-BAywG5PI.js";import"./PdfViewerSearchBar-C4a3uMvj.js";import"./chevron-up-BhUGSrMQ.js";import"./chevron-down-D5Z6pf30.js";import"./cross-DvvrZ3YV.js";import"./PdfViewerSidebar-CU2OR5FG.js";import"./index-BTrtZCFe.js";import"./index-CTfQVRtO.js";import"./index-DVFITc1l.js";import"./PdfViewerToolbar-B8cC77Gr.js";import"./Button-HCu8xw6G.js";import"./chevron-right-Cib6axWb.js";import"./Input-Br87LXH7.js";import"./search-CiPmNh0i.js";import"./spin-B9fAxL8-.js";import"./error-CH1gecQ4.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3985/fae1a50abbf6f9e08e11a75ba5e47810389aa1cf/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
  return (
    <div style={{ background: "rgba(59, 130, 246, 0.9)", borderRadius: 6, color: "#fff", padding: "4px 8px" }}>
      {annotation.label ?? "Note"}
    </div>
  );
}

const handleAnnotationClick = useCallback((annotation: PdfAnnotation) => {
  console.log("Clicked:", annotation.id);
}, []);

<BasePdfViewer
  src={pdfUrl}
  annotations={[
    {
      id: "tooltip-1",
      type: "custom",
      page: 1,
      rect: { x: 55, y: 400, width: 120, height: 28 },
      label: "Key finding",
      render: TooltipAnnotation,
    },
  ]}
  onAnnotationClick={handleAnnotationClick}
/>`}}}};var r,a,d;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
  return (
    <div style={{ background: "rgba(59, 130, 246, 0.9)", borderRadius: 6, color: "#fff", padding: "4px 8px" }}>
      {annotation.label ?? "Note"}
    </div>
  );
}

const handleAnnotationClick = useCallback((annotation: PdfAnnotation) => {
  console.log("Clicked:", annotation.id);
}, []);

<BasePdfViewer
  src={pdfUrl}
  annotations={[
    {
      id: "tooltip-1",
      type: "custom",
      page: 1,
      rect: { x: 55, y: 400, width: 120, height: 28 },
      label: "Key finding",
      render: TooltipAnnotation,
    },
  ]}
  onAnnotationClick={handleAnnotationClick}
/>\`
      }
    }
  }
}`,...(d=(a=o.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};const Y=["CustomAnnotation"];export{o as CustomAnnotation,Y as __namedExportsOrder,F as default};
