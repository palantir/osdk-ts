import{j as n}from"./iframe-CX9YXgSA.js";import{B as e}from"./BasePdfViewer-C7pI1ooC.js";import"./preload-helper-DtqkPlr3.js";import"./index-CHu8oj4z.js";import"./BasePdfViewer.module.css-BaYy5cgk.js";import"./PdfViewerAnnotationLayer-CtdiDUN5.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-pqtUlbPd.js";import"./PdfViewerOutlineSidebar-DuOTwZT2.js";import"./PdfViewerSidebarHeader-CmopLLS9.js";import"./useBaseUiId-CCOn5SM4.js";import"./useControlled-DmxCQxaW.js";import"./CompositeRoot-BB1Obmjv.js";import"./CompositeItem-4eZutR_U.js";import"./ToolbarRootContext-oh9KPlPl.js";import"./composite-Buss17U8.js";import"./svgIconContainer-B6cy_VMV.js";import"./PdfViewerSearchBar-Ki94RveJ.js";import"./chevron-up-IQzmRrJF.js";import"./chevron-down-Dc86wWzz.js";import"./cross-RF9BS1x-.js";import"./PdfViewerSidebar-8XcGj0KC.js";import"./index-DLNO2YQ4.js";import"./index-I5XF2J3w.js";import"./index-CU1lbmk7.js";import"./PdfViewerToolbar-CpAVfzdI.js";import"./Button-CXKnl_XI.js";import"./chevron-right-jyvFOfEX.js";import"./Input-Cz4ERfsw.js";import"./search-N9rV3LuD.js";import"./spin-DbedOtAX.js";import"./error-D_HPKerG.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-1922/8e03fe4667d9b18de525451a2b5aa10cc0071fe2/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
