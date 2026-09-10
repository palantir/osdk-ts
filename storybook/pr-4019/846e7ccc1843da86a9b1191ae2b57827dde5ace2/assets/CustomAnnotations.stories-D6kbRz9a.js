import{j as n}from"./iframe-D3RGMnav.js";import{B as e}from"./BasePdfViewer-Dr8oVXta.js";import"./preload-helper-BklmKIr_.js";import"./index-nSo8ObpB.js";import"./BasePdfViewer.module.css-COmFybzM.js";import"./PdfViewerAnnotationLayer-zwEUYNwX.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-E0xCmu-U.js";import"./PdfViewerOutlineSidebar-BjjYeLuq.js";import"./PdfViewerSidebarHeader-DgYzs3UJ.js";import"./useBaseUiId-BhJo7SoD.js";import"./useControlled-TK_e7a_Y.js";import"./CompositeRoot-BTjrXehH.js";import"./CompositeItem-Bs8xPD2u.js";import"./ToolbarRootContext-DVajx3A6.js";import"./composite-DtZsoZnS.js";import"./svgIconContainer-nHtSwbNR.js";import"./PdfViewerSearchBar-J2_h0SwC.js";import"./chevron-up-ghPT0Arp.js";import"./chevron-down-Cq6RCzUz.js";import"./cross-DJMZ2_VJ.js";import"./PdfViewerSidebar-5U7lKVXw.js";import"./index-DDdvHcPj.js";import"./index-B1m7fBwG.js";import"./index-BCGsGoWh.js";import"./PdfViewerToolbar-1qAF7MuN.js";import"./Button-DybLmK6C.js";import"./chevron-right-Cg8e44Nl.js";import"./Input-BD3DYMGR.js";import"./search-DhStDycO.js";import"./spin-CTYrUcVi.js";import"./error-BtBmESuY.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4019/846e7ccc1843da86a9b1191ae2b57827dde5ace2/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
