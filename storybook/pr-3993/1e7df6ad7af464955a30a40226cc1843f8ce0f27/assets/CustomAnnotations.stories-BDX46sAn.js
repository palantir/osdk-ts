import{j as n}from"./iframe-K0TCdsde.js";import{B as e}from"./BasePdfViewer-ugVOo0gn.js";import"./preload-helper-Dwgne7Il.js";import"./index-DItHkTgY.js";import"./BasePdfViewer.module.css-FSEMHYKZ.js";import"./PdfViewerAnnotationLayer-BEPaUH3O.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CrM-MYKh.js";import"./PdfViewerOutlineSidebar-DPHbsx0K.js";import"./PdfViewerSidebarHeader-DmfY-ZmZ.js";import"./useBaseUiId-BMvE3UAz.js";import"./useControlled-CpHTfHM_.js";import"./CompositeRoot-Cs1rgyIt.js";import"./CompositeItem-CKtGokfX.js";import"./ToolbarRootContext-B08lxs8l.js";import"./composite-BDOTFVh5.js";import"./svgIconContainer-Gp_WdiNB.js";import"./PdfViewerSearchBar-BZ8Dxr-e.js";import"./chevron-up-C1-T6d0o.js";import"./chevron-down-BkK6PVnf.js";import"./cross-DjsH4BEX.js";import"./PdfViewerSidebar-DrMFbpAv.js";import"./index-DTPy9xIo.js";import"./index-Ce5TUgVz.js";import"./index-BSQQlf89.js";import"./PdfViewerToolbar-CEOveaWt.js";import"./Button-vcsLfruM.js";import"./chevron-right-DqGwtd4M.js";import"./Input-jHELzDU6.js";import"./search-FP5lKD6I.js";import"./spin-CttV4dMj.js";import"./error-C3B7tWvq.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3993/1e7df6ad7af464955a30a40226cc1843f8ce0f27/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
