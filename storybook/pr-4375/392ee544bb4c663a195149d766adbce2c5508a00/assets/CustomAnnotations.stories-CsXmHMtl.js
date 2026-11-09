import{j as n}from"./iframe-HL5MQevY.js";import{B as e}from"./BasePdfViewer-CnDmBkBW.js";import"./preload-helper-_Ar_KgCE.js";import"./index-CgN-SBJb.js";import"./BasePdfViewer.module.css-BCotYhMM.js";import"./PdfViewerAnnotationLayer-DesAcXnv.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CxPEHcbV.js";import"./PdfViewerOutlineSidebar-iG4GVZNT.js";import"./PdfViewerSidebarHeader-KiFcL_1j.js";import"./useBaseUiId-DySigJtL.js";import"./useControlled-BtrL0bqk.js";import"./CompositeRoot-DUWp4233.js";import"./CompositeItem-BWnHlDKK.js";import"./ToolbarRootContext-Egv6Ob_q.js";import"./composite-DWznhUuB.js";import"./svgIconContainer-BLMvF_H6.js";import"./PdfViewerSearchBar-DGspY_OG.js";import"./chevron-up-CpKkvq-o.js";import"./chevron-down-BP0kQuP_.js";import"./cross-peQbcr5N.js";import"./PdfViewerSidebar-CxkQtkUv.js";import"./index-D0tF1Jnd.js";import"./index-CrQU1n-1.js";import"./index-f_DjFpxo.js";import"./PdfViewerToolbar-BMFVmCYT.js";import"./Button-CqmZF1Qg.js";import"./chevron-right-DQgtJ94j.js";import"./Input-DgL7dTdA.js";import"./search-BmC04ZEV.js";import"./spin-DoXBpbn_.js";import"./error-CIfjiXVi.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4375/392ee544bb4c663a195149d766adbce2c5508a00/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
