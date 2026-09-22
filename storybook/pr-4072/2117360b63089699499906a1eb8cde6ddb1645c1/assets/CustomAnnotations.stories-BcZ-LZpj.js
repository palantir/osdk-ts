import{j as n}from"./iframe-DFjxEBRl.js";import{B as e}from"./BasePdfViewer-BzWIkzCE.js";import"./preload-helper-YLQ76DnX.js";import"./index-RHDnv4KE.js";import"./BasePdfViewer.module.css-DNdfhfbd.js";import"./PdfViewerAnnotationLayer-Dzez6ipC.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CW88jXGw.js";import"./PdfViewerOutlineSidebar-Kit_tl20.js";import"./PdfViewerSidebarHeader-B7zXzaM-.js";import"./useBaseUiId-DHc-L81w.js";import"./useControlled-CQ5aYrLf.js";import"./CompositeRoot-BM14AdfU.js";import"./CompositeItem-CAkiPkQz.js";import"./ToolbarRootContext-B6U_uFKg.js";import"./composite-CbdzgRs5.js";import"./svgIconContainer-BJy48zyG.js";import"./PdfViewerSearchBar-B_Xn8mWF.js";import"./chevron-up-BpSC9Zv4.js";import"./chevron-down-Bha1TG_6.js";import"./cross-CCUsZu-F.js";import"./PdfViewerSidebar-BqE7W_3N.js";import"./index-B9cxXn2y.js";import"./index-Ct3A8526.js";import"./index-C1k9WrZP.js";import"./PdfViewerToolbar-CPObxDR2.js";import"./Button-Del4UdCp.js";import"./chevron-right-mNDvHT9l.js";import"./Input-BTdzd0gA.js";import"./search-BBZ2n1GL.js";import"./spin-UYOXwNTw.js";import"./error-WmDbCKs9.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4072/2117360b63089699499906a1eb8cde6ddb1645c1/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
