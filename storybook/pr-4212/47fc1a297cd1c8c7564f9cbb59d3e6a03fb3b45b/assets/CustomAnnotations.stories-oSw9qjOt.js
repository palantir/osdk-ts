import{j as n}from"./iframe-DfvwHsY4.js";import{B as e}from"./BasePdfViewer-DTMxvZmK.js";import"./preload-helper-B_za76P1.js";import"./index-CQtOsoXK.js";import"./BasePdfViewer.module.css-CbTI8O1V.js";import"./PdfViewerAnnotationLayer-CJPdGJRc.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-8Rr9zYyG.js";import"./PdfViewerOutlineSidebar-CAORqXPh.js";import"./PdfViewerSidebarHeader-C7ApfrDk.js";import"./useBaseUiId-B0xqZb_O.js";import"./useControlled-BjeqQkUk.js";import"./CompositeRoot-BCH0SjIT.js";import"./CompositeItem-DMwkjAkb.js";import"./ToolbarRootContext-rYStqux1.js";import"./composite-CSX6Mrkw.js";import"./svgIconContainer-B9JqQ2wt.js";import"./PdfViewerSearchBar-DHB9BDxq.js";import"./chevron-up-c_-7H9zc.js";import"./chevron-down-B-w_aZMu.js";import"./cross-fqG1RiYl.js";import"./PdfViewerSidebar-CREVy-bk.js";import"./index-dC_pSdIW.js";import"./index-DR_LgGEH.js";import"./index-DVBjGa5t.js";import"./PdfViewerToolbar-BP-qcZTX.js";import"./Button-Ca04rN16.js";import"./chevron-right-M_R_uKJF.js";import"./Input-BPNZHdpC.js";import"./search-CsmvFGw5.js";import"./spin-JpYsc1V6.js";import"./error-1veqZu6X.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4212/47fc1a297cd1c8c7564f9cbb59d3e6a03fb3b45b/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
