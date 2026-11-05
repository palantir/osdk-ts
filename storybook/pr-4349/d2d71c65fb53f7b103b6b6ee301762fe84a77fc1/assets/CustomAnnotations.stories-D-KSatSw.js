import{j as n}from"./iframe-Co9BLc26.js";import{B as e}from"./BasePdfViewer-B6sj_RBY.js";import"./preload-helper-CjIZGyxJ.js";import"./index-CaXavGNz.js";import"./BasePdfViewer.module.css-7-Uzr_s4.js";import"./PdfViewerAnnotationLayer-u_z-GgQG.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Dn8Zd1c-.js";import"./PdfViewerOutlineSidebar-BWNLEKD1.js";import"./PdfViewerSidebarHeader-TKlgn_Fq.js";import"./useBaseUiId-B7X46CyE.js";import"./useControlled-Dm9Z_trU.js";import"./CompositeRoot-CKFRNDi_.js";import"./CompositeItem-v285VzZv.js";import"./ToolbarRootContext-CL3VUEMw.js";import"./composite-Bs7VpVD-.js";import"./svgIconContainer-XH9sO27g.js";import"./PdfViewerSearchBar-CWj84n0j.js";import"./chevron-up-BdSFnWDo.js";import"./chevron-down-C2RhY0pV.js";import"./cross-CdeazAmw.js";import"./PdfViewerSidebar-Ck8PrQqj.js";import"./index-D2VnSIP3.js";import"./index-83om9hRt.js";import"./index-DuuftHJS.js";import"./PdfViewerToolbar-BpHnPvNK.js";import"./Button-CKhU91Nr.js";import"./chevron-right-CKjcAcNQ.js";import"./Input-B7An9dFp.js";import"./search-DQyAxhHi.js";import"./spin-CUAvH2FR.js";import"./error-DApxBtMc.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4349/d2d71c65fb53f7b103b6b6ee301762fe84a77fc1/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
