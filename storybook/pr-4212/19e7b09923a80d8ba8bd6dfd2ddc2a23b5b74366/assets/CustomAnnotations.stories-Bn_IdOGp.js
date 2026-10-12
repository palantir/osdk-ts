import{j as n}from"./iframe-BSB0HYWK.js";import{B as e}from"./BasePdfViewer-Blif1xSu.js";import"./preload-helper-BkFYvt7D.js";import"./index-CFn7NuDF.js";import"./BasePdfViewer.module.css-BcRArw-e.js";import"./PdfViewerAnnotationLayer-B3beKgDT.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D7CqW36d.js";import"./PdfViewerOutlineSidebar-BTIJ7-MJ.js";import"./PdfViewerSidebarHeader-sDA2zGPG.js";import"./useBaseUiId-DOYgZcYk.js";import"./useControlled-CPd31jrj.js";import"./CompositeRoot-C4garnxN.js";import"./CompositeItem-DFUc4zP3.js";import"./ToolbarRootContext-BHLo6WQV.js";import"./composite-DrFNuPAr.js";import"./svgIconContainer-ZqmkZwCg.js";import"./PdfViewerSearchBar-DgUrl-nQ.js";import"./chevron-up-CFLZDerz.js";import"./chevron-down-eX4f9a69.js";import"./cross-CyBS2Nke.js";import"./PdfViewerSidebar-CrFmbNi8.js";import"./index-DF12onFH.js";import"./index-qi5mcdT7.js";import"./index-UxDU_lnD.js";import"./PdfViewerToolbar-CAnl319g.js";import"./Button-odXi-ust.js";import"./chevron-right-C47bqiVY.js";import"./Input-BwaAEQhC.js";import"./search-DVQNznbm.js";import"./spin-D_tHMjUh.js";import"./error-Bf4UPDqQ.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4212/19e7b09923a80d8ba8bd6dfd2ddc2a23b5b74366/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
