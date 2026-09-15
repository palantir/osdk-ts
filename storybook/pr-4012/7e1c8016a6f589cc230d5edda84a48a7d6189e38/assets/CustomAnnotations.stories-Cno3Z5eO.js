import{j as n}from"./iframe-BrWV3VGg.js";import{B as e}from"./BasePdfViewer-jemrxH8M.js";import"./preload-helper-D6ZQDyfK.js";import"./index-DYvdPCiw.js";import"./BasePdfViewer.module.css-l-VbW_Nv.js";import"./PdfViewerAnnotationLayer-BQ8TM-bf.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CX6nxoMM.js";import"./PdfViewerOutlineSidebar-3Y5vqLqN.js";import"./PdfViewerSidebarHeader-BCKxjXBk.js";import"./useBaseUiId-C6P9jJC8.js";import"./useControlled-DP9gX7Yn.js";import"./CompositeRoot-CGQYcdRE.js";import"./CompositeItem-gO6CPQln.js";import"./ToolbarRootContext-C9pKuHkV.js";import"./composite-CPJHb2Y2.js";import"./svgIconContainer-BUmNfWM-.js";import"./PdfViewerSearchBar-PCpDLy8y.js";import"./chevron-up-BABUamT1.js";import"./chevron-down-hd2kSFPo.js";import"./cross-BVo6wQKR.js";import"./PdfViewerSidebar-C5Z53uuF.js";import"./index-BT_S32QN.js";import"./index-D9RcQQYw.js";import"./index-BNPYibjQ.js";import"./PdfViewerToolbar-CWGI6-5U.js";import"./Button-DQPjTYox.js";import"./chevron-right-DKrDmTQK.js";import"./Input-CDM3tu-K.js";import"./search-Bx9ioHBB.js";import"./spin-Yv9ZO4wx.js";import"./error-DAF972ng.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4012/7e1c8016a6f589cc230d5edda84a48a7d6189e38/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
