import{j as n}from"./iframe-DUDgTVFJ.js";import{B as e}from"./BasePdfViewer-DSVWwzrP.js";import"./preload-helper-BVnI7eCi.js";import"./index-BmzW3lpk.js";import"./BasePdfViewer.module.css-BoUmYxgg.js";import"./PdfViewerAnnotationLayer-yBrZduXp.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D-XOJMDx.js";import"./PdfViewerOutlineSidebar-CfHFix6E.js";import"./PdfViewerSidebarHeader-wbw2gQr6.js";import"./useBaseUiId-HT4h8TUv.js";import"./useControlled-CmefEzCZ.js";import"./CompositeRoot-D4jzBbh6.js";import"./CompositeItem-DvLeoEHv.js";import"./ToolbarRootContext-DjTtqRzV.js";import"./composite-CECNeh7S.js";import"./svgIconContainer-ZlCTpn06.js";import"./PdfViewerSearchBar-NMnNg0aU.js";import"./chevron-up-BTxKZ4Su.js";import"./chevron-down-uyo8SlXE.js";import"./cross-BTajFNgg.js";import"./PdfViewerSidebar-d0GxlfLY.js";import"./index-C5bsaNnW.js";import"./index-BvrArIP3.js";import"./index-CRuY3Py7.js";import"./PdfViewerToolbar-pudiqp55.js";import"./Button-CYnqWeJV.js";import"./chevron-right-DiQw-gqp.js";import"./Input-BDNTdkOr.js";import"./search-Bwn6tzKV.js";import"./spin-DkR3V-33.js";import"./error-BKqtxFEE.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4013/bb154627a7822b6568b6560d63c6d18923aba1ca/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
