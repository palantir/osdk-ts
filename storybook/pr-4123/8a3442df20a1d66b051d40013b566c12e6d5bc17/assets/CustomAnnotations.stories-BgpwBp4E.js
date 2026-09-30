import{j as n}from"./iframe-B4_LdmvC.js";import{B as e}from"./BasePdfViewer-DUxmae7k.js";import"./preload-helper-NaiMF-0L.js";import"./index-DjXxmUSg.js";import"./BasePdfViewer.module.css-kWcE0zn7.js";import"./PdfViewerAnnotationLayer--6HObKCs.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cggsx4lH.js";import"./PdfViewerOutlineSidebar-ZqTcy-13.js";import"./PdfViewerSidebarHeader-CpWUu1Pn.js";import"./useBaseUiId-D49bnhC0.js";import"./useControlled-BCVYzpl3.js";import"./CompositeRoot-Bqepm-wk.js";import"./CompositeItem-Te1LxRX_.js";import"./ToolbarRootContext-IBMmFjEY.js";import"./composite-C8-JBw2s.js";import"./svgIconContainer-CqdyD_06.js";import"./PdfViewerSearchBar-42zEU0wn.js";import"./chevron-up-sZgoCKpY.js";import"./chevron-down-C6pppJ5O.js";import"./cross-ByyhMC0G.js";import"./PdfViewerSidebar-wXIpSdoi.js";import"./index-Dw8kDIA3.js";import"./index-CDFbUPsJ.js";import"./index-DMnPNpwI.js";import"./PdfViewerToolbar-DeRMs_Kk.js";import"./Button-DMJfC-Jo.js";import"./chevron-right-BaAargzN.js";import"./Input-D84OA9Cn.js";import"./search-CuDduKs4.js";import"./spin-BQeYY4GR.js";import"./error-De7UK8KB.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4123/8a3442df20a1d66b051d40013b566c12e6d5bc17/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
