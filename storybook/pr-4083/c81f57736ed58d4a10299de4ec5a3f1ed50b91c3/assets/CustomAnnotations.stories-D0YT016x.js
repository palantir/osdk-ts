import{j as n}from"./iframe-C9OBkxCO.js";import{B as e}from"./BasePdfViewer-BihyW2Fl.js";import"./preload-helper-DzUjaibC.js";import"./index-CFjFkJ-v.js";import"./BasePdfViewer.module.css-BXyGWW9t.js";import"./PdfViewerAnnotationLayer-d3xBcYPR.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DQ-9lMns.js";import"./PdfViewerOutlineSidebar-BRUskyoi.js";import"./PdfViewerSidebarHeader-BiojLjE4.js";import"./useBaseUiId-DrS8qHSd.js";import"./useControlled-B3h0MmL1.js";import"./CompositeRoot-z7aM2QO0.js";import"./CompositeItem-ByNf42qV.js";import"./ToolbarRootContext-BjF8crHV.js";import"./composite-BI-3SHGF.js";import"./svgIconContainer-BvHwqNKP.js";import"./PdfViewerSearchBar-c4gL2PNO.js";import"./chevron-up-Bg5sdZNr.js";import"./chevron-down-CRsfqdiU.js";import"./cross-DLECAn5_.js";import"./PdfViewerSidebar-CwNB9nxC.js";import"./index-N_Ci-Ahv.js";import"./index-Ddu0h4gv.js";import"./index-_alj9X0j.js";import"./PdfViewerToolbar-DfYGPYKX.js";import"./Button-DNW3Z-M9.js";import"./chevron-right-9ACQLWEv.js";import"./Input-DCcVeBLD.js";import"./search-Cdrrqif2.js";import"./spin-Bphr14p4.js";import"./error-uXY_ifTf.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4083/c81f57736ed58d4a10299de4ec5a3f1ed50b91c3/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
