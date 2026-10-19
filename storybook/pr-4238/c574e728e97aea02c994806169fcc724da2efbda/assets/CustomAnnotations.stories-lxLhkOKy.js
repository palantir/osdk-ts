import{j as n}from"./iframe-D0tV0cI9.js";import{B as e}from"./BasePdfViewer-BgZNeeuo.js";import"./preload-helper-BMejyDSI.js";import"./index--X-dIIbK.js";import"./BasePdfViewer.module.css-BJ0pgmPn.js";import"./PdfViewerAnnotationLayer-DUnCPw6l.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cs9EdiKF.js";import"./PdfViewerOutlineSidebar-BZuHsg7n.js";import"./PdfViewerSidebarHeader-CwSM3hgW.js";import"./useBaseUiId-DOX0bj2Y.js";import"./useControlled-LJkicshM.js";import"./CompositeRoot-Tol4TLHR.js";import"./CompositeItem-Ch1OySWF.js";import"./ToolbarRootContext-BrObQQEc.js";import"./composite-eLTYJf7x.js";import"./svgIconContainer-D4vQ8nMV.js";import"./PdfViewerSearchBar-D2JBGGT6.js";import"./chevron-up-C-76tjxf.js";import"./chevron-down-BYHSUQw3.js";import"./cross-D1A4Ur2n.js";import"./PdfViewerSidebar-r9z-fqCQ.js";import"./index-DUZjOP9_.js";import"./index-PxTuLgQ7.js";import"./index--qRovy9Z.js";import"./PdfViewerToolbar-DUikd8Mx.js";import"./Button-DgOszdIa.js";import"./chevron-right-2D2BiRGZ.js";import"./Input-COsc6IX5.js";import"./search-Cnl0jIoS.js";import"./spin-BYzuX0Ei.js";import"./error-BLp0q_TC.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4238/c574e728e97aea02c994806169fcc724da2efbda/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
