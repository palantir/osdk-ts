import{j as n}from"./iframe-DywpB1hE.js";import{B as e}from"./BasePdfViewer-BONuhKV3.js";import"./preload-helper-C9IGOhE9.js";import"./index-DmgiNEb3.js";import"./BasePdfViewer.module.css-CIqfi5Mc.js";import"./PdfViewerAnnotationLayer-25pg7CAt.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-oHnQtKRF.js";import"./PdfViewerOutlineSidebar-CqS1LzVI.js";import"./PdfViewerSidebarHeader-qEPeLr_r.js";import"./useBaseUiId-J99Ack0x.js";import"./useControlled-vk6jUFHs.js";import"./CompositeRoot-9jjcsh-H.js";import"./CompositeItem-D-O0kvjn.js";import"./ToolbarRootContext-DhYqu86z.js";import"./composite-Cr11nkBG.js";import"./svgIconContainer-BDFx6Zxn.js";import"./PdfViewerSearchBar-DRNb1gyy.js";import"./chevron-up-JlLgHj79.js";import"./chevron-down-B3UYxdX4.js";import"./cross-aTqn6PnT.js";import"./PdfViewerSidebar-DKlrgOTQ.js";import"./index-CiTdpWDW.js";import"./index-BtGsUy0O.js";import"./index-BtfNmnmI.js";import"./PdfViewerToolbar-DHeUyht8.js";import"./Button-Ctxa2jTP.js";import"./chevron-right-2QE4p-Wj.js";import"./Input-DaT49KS2.js";import"./search-DVZ7S7-1.js";import"./spin-GL6FRBR8.js";import"./error-zG4ckKPW.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4323/c829b229d5bd6df80d9315a3432fed4cf5258f7e/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
