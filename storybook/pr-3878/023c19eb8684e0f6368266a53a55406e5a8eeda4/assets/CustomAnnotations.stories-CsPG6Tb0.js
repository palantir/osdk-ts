import{j as n}from"./iframe-Y5vGGcvP.js";import{B as e}from"./BasePdfViewer-B3PBNDZs.js";import"./preload-helper-BDwImvib.js";import"./index-BTH20MTv.js";import"./BasePdfViewer.module.css-D_7Xsi2L.js";import"./PdfViewerAnnotationLayer-Cqk5JRmF.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Ya0BxF09.js";import"./PdfViewerOutlineSidebar-BjHmOQRX.js";import"./PdfViewerSidebarHeader-BdSgUBwt.js";import"./useBaseUiId-RL85XbnS.js";import"./useControlled-jE3VG63K.js";import"./CompositeRoot-BchOA9pq.js";import"./CompositeItem-1PZRLRt5.js";import"./ToolbarRootContext-BC-Ed_Oq.js";import"./composite-DfEzUBGr.js";import"./svgIconContainer-BIHKAVWB.js";import"./PdfViewerSearchBar-BHUmyojr.js";import"./chevron-up-oHTOtwsU.js";import"./chevron-down-mTWE-r4G.js";import"./cross-C6XfWSCb.js";import"./PdfViewerSidebar-BRn86Ls7.js";import"./index-CNA7S_DK.js";import"./index-BF11wRFE.js";import"./index-BqEmZbFH.js";import"./PdfViewerToolbar-CRvdUaBM.js";import"./Button--cxRM2vq.js";import"./chevron-right-BQiMrfK2.js";import"./Input-Dw8vFEHs.js";import"./search-DfUtBVkM.js";import"./spin-BJU_nyHX.js";import"./error-DU3E2pjz.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3878/023c19eb8684e0f6368266a53a55406e5a8eeda4/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
