import{j as n}from"./iframe-jYOV-b_F.js";import{B as e}from"./BasePdfViewer-Dt5RYuXk.js";import"./preload-helper-DU4dp1aN.js";import"./index-Dy8g3oXx.js";import"./BasePdfViewer.module.css-2iTEepBB.js";import"./PdfViewerAnnotationLayer-D-3OinKp.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DypBEKox.js";import"./PdfViewerOutlineSidebar-Bx118aOl.js";import"./PdfViewerSidebarHeader-DAezCvdu.js";import"./useBaseUiId-D96OAV6j.js";import"./useControlled-BTG7h9NE.js";import"./CompositeRoot-CGLqELS-.js";import"./CompositeItem-kjf0evVY.js";import"./ToolbarRootContext-Cv9is8EX.js";import"./composite-BzmrUUlD.js";import"./svgIconContainer-CA_JwY2G.js";import"./PdfViewerSearchBar-a70vxhB1.js";import"./chevron-up-xJHgAzdd.js";import"./chevron-down-CXyzKCEE.js";import"./cross-CihzmSlG.js";import"./PdfViewerSidebar-Ymv_FWFS.js";import"./index-DpuVJhHU.js";import"./index-BeEj2nqC.js";import"./index-ClDKgmxW.js";import"./PdfViewerToolbar-BHWnaQnO.js";import"./Button-CWhgA2iR.js";import"./chevron-right-xrHWYcRg.js";import"./Input-BMUKzcaw.js";import"./search-D-KgauV4.js";import"./spin-gG8iViN3.js";import"./error-DuFL7DmE.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4030/dc927295a56ea4e1eb91339f46dccec07bb3a9cd/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
