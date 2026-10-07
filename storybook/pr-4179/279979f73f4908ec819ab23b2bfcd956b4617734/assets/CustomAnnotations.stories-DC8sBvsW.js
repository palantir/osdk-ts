import{j as n}from"./iframe-Dn-9qR05.js";import{B as e}from"./BasePdfViewer-d7ETrwGD.js";import"./preload-helper-CEUgRBGl.js";import"./index-CShzoPuj.js";import"./BasePdfViewer.module.css-D4fEclra.js";import"./PdfViewerAnnotationLayer-BGf9xS61.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-yYxyDdu_.js";import"./PdfViewerOutlineSidebar-CZDlSadi.js";import"./PdfViewerSidebarHeader-CZ3XMx0-.js";import"./useBaseUiId-DlYLGnbC.js";import"./useControlled-CX6Xi137.js";import"./CompositeRoot-ZIcBBMhy.js";import"./CompositeItem-DUnPjw9m.js";import"./ToolbarRootContext-C6ldVUmb.js";import"./composite-Dam7p1Gi.js";import"./svgIconContainer-DN7hY7wX.js";import"./PdfViewerSearchBar-KBM5us8C.js";import"./chevron-up-CNSvrdQH.js";import"./chevron-down-fpE-PXKH.js";import"./cross-CFJY3pI7.js";import"./PdfViewerSidebar-Bb3ERHNg.js";import"./index-B79Dn3Wp.js";import"./index-siGyqdKv.js";import"./index-Cm5JEtld.js";import"./PdfViewerToolbar-zVDk_g17.js";import"./Button-CD6ruQEI.js";import"./chevron-right-W_6B7z7T.js";import"./Input-Ckj63NR0.js";import"./search-B9RszC_k.js";import"./spin-C3OOqG1O.js";import"./error-Cuq16P9x.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4179/279979f73f4908ec819ab23b2bfcd956b4617734/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
