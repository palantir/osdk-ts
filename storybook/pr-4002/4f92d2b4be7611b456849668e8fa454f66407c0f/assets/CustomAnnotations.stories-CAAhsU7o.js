import{j as n}from"./iframe-ooeZhevd.js";import{B as e}from"./BasePdfViewer-CO6UzYWz.js";import"./preload-helper-BnwSBXhQ.js";import"./index-Opepl_3W.js";import"./BasePdfViewer.module.css-C1rakktn.js";import"./PdfViewerAnnotationLayer-DoQ7D5ug.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-X8NbXy13.js";import"./PdfViewerOutlineSidebar-COcqNTQC.js";import"./PdfViewerSidebarHeader-Bnnlf1vb.js";import"./useBaseUiId-C4sL4iAi.js";import"./useControlled-Gm0PZX0G.js";import"./CompositeRoot-Mhsb_vEB.js";import"./CompositeItem-CeghUTrN.js";import"./ToolbarRootContext-DJcBXYiU.js";import"./composite-DKgZ9LEy.js";import"./svgIconContainer-ibzsHUTw.js";import"./PdfViewerSearchBar-BH_Jgyrx.js";import"./chevron-up-D1TV3JWh.js";import"./chevron-down-BdjihE2B.js";import"./cross-iJZIJRn7.js";import"./PdfViewerSidebar-psSBhm4n.js";import"./index-BYF2kMrC.js";import"./index-CYHbLiIc.js";import"./index-BCos5_Jn.js";import"./PdfViewerToolbar-BlQzwg8Z.js";import"./Button-DqC8xzBf.js";import"./chevron-right-BMB7DVfl.js";import"./Input-ChnU8vn2.js";import"./search-DiIwZt1O.js";import"./spin-CschUGDs.js";import"./error-Cy4V0hs4.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4002/4f92d2b4be7611b456849668e8fa454f66407c0f/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
