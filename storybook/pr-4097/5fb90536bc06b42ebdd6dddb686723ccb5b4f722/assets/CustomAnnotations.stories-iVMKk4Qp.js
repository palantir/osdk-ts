import{j as n}from"./iframe-BLUQ5n2c.js";import{B as e}from"./BasePdfViewer-DmOgeOUP.js";import"./preload-helper-DMlP9NYW.js";import"./index-CsLnk6pi.js";import"./BasePdfViewer.module.css-BlB7-zFD.js";import"./PdfViewerAnnotationLayer-ByS3HU62.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Bl5VAGAE.js";import"./PdfViewerOutlineSidebar-Dvxc56gm.js";import"./PdfViewerSidebarHeader-BqwZct_t.js";import"./useBaseUiId-BeXNNW2Y.js";import"./useControlled-B201dL0t.js";import"./CompositeRoot-wJ1jo6T8.js";import"./CompositeItem-BFmGj5TY.js";import"./ToolbarRootContext-DgTgfzIH.js";import"./composite-DpCo7vDA.js";import"./svgIconContainer-Cp4hDvLL.js";import"./PdfViewerSearchBar-Boj4dn0I.js";import"./chevron-up-BRN7Leh3.js";import"./chevron-down-5sopWHZC.js";import"./cross-lsoPApi8.js";import"./PdfViewerSidebar-CGZ5FuG_.js";import"./index-C0S21z2f.js";import"./index-CRHr79L0.js";import"./index-3ijF1jpZ.js";import"./PdfViewerToolbar-jDYGvS_8.js";import"./Button-SHEnCOjG.js";import"./chevron-right-WupSAL0I.js";import"./Input-CJtdNhxn.js";import"./search-BxVXVDMi.js";import"./spin-PSfYI4Yg.js";import"./error-CimK2De2.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4097/5fb90536bc06b42ebdd6dddb686723ccb5b4f722/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
