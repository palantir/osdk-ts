import{j as n}from"./iframe-Bln2S2Hd.js";import{B as e}from"./BasePdfViewer-CeIRvMAq.js";import"./preload-helper-D4XaSru4.js";import"./index-D1Ietrlj.js";import"./BasePdfViewer.module.css-0rwYn4UE.js";import"./PdfViewerAnnotationLayer-ClbouhGm.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-hdh9qXSr.js";import"./PdfViewerOutlineSidebar-CR8xbx3b.js";import"./PdfViewerSidebarHeader-k80mBlOw.js";import"./useBaseUiId-DzFDj8Yr.js";import"./useControlled-BG_GY85e.js";import"./CompositeRoot-BAgoEH8y.js";import"./CompositeItem-D6F0jU5J.js";import"./ToolbarRootContext-z7yzW3tg.js";import"./composite-BlSW-C1U.js";import"./svgIconContainer-BTYpKb3Z.js";import"./PdfViewerSearchBar-DVHqnLLh.js";import"./chevron-up-Dzy9tRBv.js";import"./chevron-down-B_NZATAC.js";import"./cross-wcRc-diA.js";import"./PdfViewerSidebar-hnDxYVCe.js";import"./index-BHIpZYxv.js";import"./index-BOpwrJ-W.js";import"./index-CnTqZcox.js";import"./PdfViewerToolbar-CgjUmPDy.js";import"./Button-B9XMX6ms.js";import"./chevron-right-CvbVXkPn.js";import"./Input-CVgkuK1P.js";import"./search-DNt_4LqU.js";import"./spin-ChBg3Ba7.js";import"./error-wBBSXgAg.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3841/03d4d1dd0fe095f79fbc0d67b24dd2db2010fa85/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
