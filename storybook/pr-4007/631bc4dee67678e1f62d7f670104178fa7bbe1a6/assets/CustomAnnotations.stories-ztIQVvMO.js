import{j as n}from"./iframe-BU8GFPxQ.js";import{B as e}from"./BasePdfViewer-BDxjjoHE.js";import"./preload-helper-BSSMxuAV.js";import"./index-Bj-f6_Qj.js";import"./BasePdfViewer.module.css-BDZHc6OO.js";import"./PdfViewerAnnotationLayer-BTWmABeI.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CRWn3Slq.js";import"./PdfViewerOutlineSidebar-st9mywuE.js";import"./PdfViewerSidebarHeader-BthmLq-b.js";import"./useBaseUiId-BwjQR-o4.js";import"./useControlled-D1XH3a1Z.js";import"./CompositeRoot-CcOKlLIN.js";import"./CompositeItem-CKxdCuih.js";import"./ToolbarRootContext-C_zt0aic.js";import"./composite-Boe3qmtr.js";import"./svgIconContainer-TGaOK_qc.js";import"./PdfViewerSearchBar-DRrKMafe.js";import"./chevron-up-CJMheTzz.js";import"./chevron-down-Cmk3gaNN.js";import"./cross-DWZb8fnb.js";import"./PdfViewerSidebar-DHvCsD_h.js";import"./index-DzgdnyuN.js";import"./index-RL0-TRLi.js";import"./index-BXjwg4tu.js";import"./PdfViewerToolbar-DM-ox_iT.js";import"./Button-BVSo85zW.js";import"./chevron-right-avJJdPxo.js";import"./Input-BKDA3F0b.js";import"./search-BzzxBGZs.js";import"./spin-ludp9p20.js";import"./error-DmWc08dY.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4007/631bc4dee67678e1f62d7f670104178fa7bbe1a6/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
