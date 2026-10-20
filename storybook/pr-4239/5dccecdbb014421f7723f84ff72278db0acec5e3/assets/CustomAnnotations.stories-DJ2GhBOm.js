import{j as n}from"./iframe-DTW0zbJg.js";import{B as e}from"./BasePdfViewer-B_kmwmhf.js";import"./preload-helper-CHqtrcoH.js";import"./index-C19Cbd9w.js";import"./BasePdfViewer.module.css-CUS_molj.js";import"./PdfViewerAnnotationLayer-BNh4UoKD.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C_-UrzO_.js";import"./PdfViewerOutlineSidebar-DMIC52dx.js";import"./PdfViewerSidebarHeader-BhxjrBYm.js";import"./useBaseUiId-pXEfVnMq.js";import"./useControlled-B9BNpkGu.js";import"./CompositeRoot-CdTRmNxi.js";import"./CompositeItem-B8f4EvZj.js";import"./ToolbarRootContext-D1Ryhi91.js";import"./composite-Ch_TQxW6.js";import"./svgIconContainer-C_NUwc74.js";import"./PdfViewerSearchBar-Bsl0j20k.js";import"./chevron-up-By6wdVuW.js";import"./chevron-down-B_r9FktR.js";import"./cross-DUPbOXnx.js";import"./PdfViewerSidebar-DBPRSR52.js";import"./index-DwQpT-YG.js";import"./index-Dd12A0b5.js";import"./index-BNxdJsoF.js";import"./PdfViewerToolbar-DTh3e5Lr.js";import"./Button-Bl_fb9NZ.js";import"./chevron-right-B9kMVEGI.js";import"./Input-9Y-Iasoe.js";import"./search-DeSIHMGj.js";import"./spin-BwVBiSKR.js";import"./error-DehDfWea.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4239/5dccecdbb014421f7723f84ff72278db0acec5e3/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
