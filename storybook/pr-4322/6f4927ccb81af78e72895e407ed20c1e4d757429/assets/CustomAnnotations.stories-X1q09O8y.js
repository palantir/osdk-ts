import{j as n}from"./iframe-BvgKvBTT.js";import{B as e}from"./BasePdfViewer-CVotAepM.js";import"./preload-helper-dVfNiIKn.js";import"./index-C6P12W9x.js";import"./BasePdfViewer.module.css-D_AVwnz2.js";import"./PdfViewerAnnotationLayer-_vtoMZa7.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BinLz001.js";import"./PdfViewerOutlineSidebar-DvJuwVu2.js";import"./PdfViewerSidebarHeader-D0wD_mGs.js";import"./useRenderElement-BFIknrE2.js";import"./useControlled-B2MP0s-G.js";import"./CompositeRoot-BLHVQZq-.js";import"./CompositeItem-xDL0fAk1.js";import"./ToolbarRootContext-C5CAj_EH.js";import"./composite-DfJtFIGD.js";import"./useBaseUiId-DWfZ2Kad.js";import"./svgIconContainer-BZvKBCv0.js";import"./PdfViewerSearchBar-Ci0dBtMR.js";import"./chevron-up-aUqVWteC.js";import"./chevron-down-Df3bql-T.js";import"./cross-Dgfh0hI8.js";import"./PdfViewerSidebar-CQo8AthB.js";import"./index-Da4z4C_A.js";import"./index-yqy4XRqT.js";import"./index-BzjqKOq7.js";import"./PdfViewerToolbar-9Tabbm9V.js";import"./Button-CZUmTkhK.js";import"./chevron-right-BjK6KagD.js";import"./Input-B8f6lg4l.js";import"./search-B95gAtiZ.js";import"./spin-D0KB-hsi.js";import"./error-B-n6_xad.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4322/6f4927ccb81af78e72895e407ed20c1e4d757429/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],Y={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
}`,...(d=(a=o.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};const $=["CustomAnnotation"];export{o as CustomAnnotation,$ as __namedExportsOrder,Y as default};
