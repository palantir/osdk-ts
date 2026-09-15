import{j as n}from"./iframe-B2s0ilwM.js";import{B as e}from"./BasePdfViewer-bdNzD6KG.js";import"./preload-helper-MMy8iX7M.js";import"./index-DUMP_Qp6.js";import"./BasePdfViewer.module.css-B5qRKjBV.js";import"./PdfViewerAnnotationLayer-BY6AYxHZ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CgBphcsw.js";import"./PdfViewerOutlineSidebar-BNfOn-5r.js";import"./PdfViewerSidebarHeader-CD2ZKrmM.js";import"./useBaseUiId-BVH4GIbN.js";import"./useControlled-C3oDg3XB.js";import"./CompositeRoot-DAKn7CQy.js";import"./CompositeItem-DNqREtRU.js";import"./ToolbarRootContext-DDaNMj4N.js";import"./composite-DFa6zY9f.js";import"./svgIconContainer-DRCF-NHW.js";import"./PdfViewerSearchBar-BoWatNXc.js";import"./chevron-up-B8XrsyrL.js";import"./chevron-down-CW4_yRhZ.js";import"./cross-DZSba9zk.js";import"./PdfViewerSidebar-B1xAH-Y7.js";import"./index-ClsdzwAW.js";import"./index-mYTbhKt1.js";import"./index-DdqPMtaM.js";import"./PdfViewerToolbar-BjfeBleV.js";import"./Button-Bnx37qOJ.js";import"./chevron-right-Cn_emNUj.js";import"./Input-CjCyxjsG.js";import"./search-De6MFVaz.js";import"./spin-hHZaP7mv.js";import"./error-DeXC2vVV.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4010/0147eddd5530f1619c1202ae98d2a4f321ade171/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
