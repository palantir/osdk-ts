import{j as n}from"./iframe-Dh2xvDPL.js";import{B as e}from"./BasePdfViewer-C0imE5oE.js";import"./preload-helper-SAHcs0zZ.js";import"./index-Dr7bSUf-.js";import"./BasePdfViewer.module.css-CeP4noSc.js";import"./PdfViewerAnnotationLayer-BRe_xVli.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C4kIkDq7.js";import"./PdfViewerOutlineSidebar-D9M3vhAB.js";import"./PdfViewerSidebarHeader-B6ze4E3e.js";import"./useBaseUiId-X9Y2KA52.js";import"./useControlled-Cuxd_f5K.js";import"./CompositeRoot-BaMuCCzO.js";import"./CompositeItem-DLX8hiU0.js";import"./ToolbarRootContext-D8HNRzfl.js";import"./composite-KqTwPrS-.js";import"./svgIconContainer-BHSUSAvD.js";import"./PdfViewerSearchBar-CzMHiuyw.js";import"./chevron-up-BqauzORh.js";import"./chevron-down-Bnx_kJUl.js";import"./cross-ZJLJ2cFd.js";import"./PdfViewerSidebar-CLFHL5NO.js";import"./index-DSLCj2ev.js";import"./index-CT9Bx1MM.js";import"./index-n6Qd_eA8.js";import"./PdfViewerToolbar-mrSEHKwb.js";import"./Button-YpbDPlK1.js";import"./chevron-right-DWBBKeL9.js";import"./Input-D6WeFSc3.js";import"./search-DmyvADcW.js";import"./spin-DBKlp7vO.js";import"./error-DKTxybZv.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4189/9748703ac5bf78caf5865df915a235767fa1321f/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
