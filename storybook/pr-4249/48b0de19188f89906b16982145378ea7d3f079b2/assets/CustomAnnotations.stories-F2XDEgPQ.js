import{j as n}from"./iframe-GU9uuCxz.js";import{B as e}from"./BasePdfViewer-BeY_2pVz.js";import"./preload-helper-DiuBXggc.js";import"./index-wbqNQUCN.js";import"./BasePdfViewer.module.css-kqU8J_AH.js";import"./PdfViewerAnnotationLayer-8MtwoGrB.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Dw-VnRAQ.js";import"./PdfViewerOutlineSidebar-BbSu7SF7.js";import"./PdfViewerSidebarHeader-CEtyFSem.js";import"./useBaseUiId-izgrlbm8.js";import"./useControlled-DeKlo4Fr.js";import"./CompositeRoot-kmIDf_th.js";import"./CompositeItem-Cx8rt4Os.js";import"./ToolbarRootContext-CAN5koek.js";import"./composite-D5bxH43Y.js";import"./svgIconContainer-lMVp7Q5D.js";import"./PdfViewerSearchBar-onjHtCUJ.js";import"./chevron-up-Cj-U_sFG.js";import"./chevron-down-TCTUxLeS.js";import"./cross-lUtkcXvq.js";import"./PdfViewerSidebar-D7B7fTLD.js";import"./index-C3igxD5N.js";import"./index-BiQmph9i.js";import"./index-CWdNU6XI.js";import"./PdfViewerToolbar-DhsX0_sK.js";import"./Button-BfmdkMAB.js";import"./chevron-right-Cn-Ar5z3.js";import"./Input-D7wHTW3A.js";import"./search-BwM3LpYv.js";import"./spin-k19-TIdf.js";import"./error-BZwp4K-_.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4249/48b0de19188f89906b16982145378ea7d3f079b2/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
