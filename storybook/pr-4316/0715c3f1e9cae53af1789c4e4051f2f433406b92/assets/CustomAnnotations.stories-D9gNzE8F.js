import{j as n}from"./iframe-C1uIQEe6.js";import{B as e}from"./BasePdfViewer-CYynSaBX.js";import"./preload-helper-DF4UQXjd.js";import"./index-nY9pkPDF.js";import"./BasePdfViewer.module.css-oHl07ucU.js";import"./PdfViewerAnnotationLayer-CxfeC9NQ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DCZFW9Ho.js";import"./PdfViewerOutlineSidebar-ClbxJfsX.js";import"./PdfViewerSidebarHeader-DwrAJ_C6.js";import"./useBaseUiId-CeyDEbyZ.js";import"./useControlled-BLqDTZmr.js";import"./CompositeRoot-CG6nAjLQ.js";import"./CompositeItem-BvnjdHPq.js";import"./ToolbarRootContext-BwNqm28T.js";import"./composite-kICLPGef.js";import"./svgIconContainer-BGeGsGPX.js";import"./PdfViewerSearchBar-Cl58ngzN.js";import"./chevron-up-B7c8m0Vb.js";import"./chevron-down-Bo5GDX8K.js";import"./cross-C9ubRsWO.js";import"./PdfViewerSidebar-DprkVMOA.js";import"./index-BkXU4FNm.js";import"./index-CRvA4CpE.js";import"./index-Bnj0fwTZ.js";import"./PdfViewerToolbar-BwGrfCbD.js";import"./Button-BJ7Nz25q.js";import"./chevron-right-D9cgPWvU.js";import"./Input-Bqj-jOKY.js";import"./search-CfgnKZCI.js";import"./spin-LGZFMd97.js";import"./error-Qui232U8.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4316/0715c3f1e9cae53af1789c4e4051f2f433406b92/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
