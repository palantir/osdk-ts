import{j as n}from"./iframe-s6qt4jCK.js";import{B as e}from"./BasePdfViewer-DyYGcE7p.js";import"./preload-helper-9jiBPXEl.js";import"./index-D6YAKeyS.js";import"./BasePdfViewer.module.css-Bz0nyrVU.js";import"./PdfViewerAnnotationLayer-CiAXFPwj.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-ndBJAqBE.js";import"./PdfViewerOutlineSidebar-LxsDlA0F.js";import"./PdfViewerSidebarHeader-C_k1c0nX.js";import"./useBaseUiId-BIc0eo6T.js";import"./useControlled-CTyuJ7Af.js";import"./CompositeRoot-C2ct-Wg8.js";import"./CompositeItem-cbLDCwSH.js";import"./ToolbarRootContext-nYUUEgez.js";import"./composite-CPpi_uAC.js";import"./svgIconContainer-D4Tr3eBw.js";import"./PdfViewerSearchBar-Bfzb4cq2.js";import"./chevron-up-X0Zf8nEp.js";import"./chevron-down-nr5MnKpi.js";import"./cross-z12JNlD1.js";import"./PdfViewerSidebar-Uc1lV-xX.js";import"./index-D2cPMVS8.js";import"./index-DVF-9r8u.js";import"./index-BcLYVVr4.js";import"./PdfViewerToolbar-DBLZOHyx.js";import"./Button-Kk03FIZS.js";import"./chevron-right-BArg7CUt.js";import"./Input-DP0PAzjj.js";import"./search-CwDPAivc.js";import"./spin-DRT8ANOt.js";import"./error-DrFA3py_.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4354/deebd94b1996ccccb857c6d6c5bbf44fea88468a/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
