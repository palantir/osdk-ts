import{j as n}from"./iframe-DfKl0JGk.js";import{B as e}from"./BasePdfViewer-nl7pyFyI.js";import"./preload-helper-D2qZKtpg.js";import"./index-aB099sio.js";import"./BasePdfViewer.module.css-BAk1_Nvz.js";import"./PdfViewerAnnotationLayer-C6HLhCMT.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DN1G3qXu.js";import"./PdfViewerOutlineSidebar-CdsHkRgg.js";import"./PdfViewerSidebarHeader-DnbmkF3e.js";import"./useBaseUiId-BFnbzIXU.js";import"./useControlled-CuqWKABX.js";import"./CompositeRoot-DRavsj11.js";import"./CompositeItem-DCu8K_u-.js";import"./ToolbarRootContext-Djhkt96c.js";import"./composite-DoivXE_r.js";import"./svgIconContainer-BAQrNZDY.js";import"./PdfViewerSearchBar-BLgaaNQO.js";import"./chevron-up-DPoCXFRN.js";import"./chevron-down-CdRuI-bU.js";import"./cross-BNEnN7HL.js";import"./PdfViewerSidebar-DM3xBGj4.js";import"./index-B1rjjc3Y.js";import"./index-CPvTwKaJ.js";import"./index-Cu8ZN5fR.js";import"./PdfViewerToolbar-DfJLc7eq.js";import"./Button-B7sS73TJ.js";import"./chevron-right-DHxLGT8U.js";import"./Input-DOLGbI8I.js";import"./search-BwIUQD_S.js";import"./spin-DBfYABtQ.js";import"./error-Ci3w5MtL.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4331/fd95bde58df54df83561ea99afb673235c860030/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
