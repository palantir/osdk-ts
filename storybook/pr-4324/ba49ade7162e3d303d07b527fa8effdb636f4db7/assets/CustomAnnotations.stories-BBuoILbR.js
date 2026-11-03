import{j as n}from"./iframe-DEUQfbyJ.js";import{B as e}from"./BasePdfViewer-CKYKRSCm.js";import"./preload-helper-DDtbSBML.js";import"./index-C6_mThYo.js";import"./BasePdfViewer.module.css-BI0s1Am5.js";import"./PdfViewerAnnotationLayer-D_m4jJtu.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BtKSv4nb.js";import"./PdfViewerOutlineSidebar-BLZi8-q-.js";import"./PdfViewerSidebarHeader-8EdPib00.js";import"./useBaseUiId-CRei-m-p.js";import"./useControlled-BF2EiofB.js";import"./CompositeRoot-CMnQGokI.js";import"./CompositeItem-zXsqXwGS.js";import"./ToolbarRootContext-D3nYLoXj.js";import"./composite-Bu1RP316.js";import"./svgIconContainer-Cb_T1wEM.js";import"./PdfViewerSearchBar-D5LOimRE.js";import"./chevron-up-CrPG7RZK.js";import"./chevron-down-Dri7QTYH.js";import"./cross-BJMUt8op.js";import"./PdfViewerSidebar-4qpJMW8h.js";import"./index-Cb73vfBj.js";import"./index-5cIFHse-.js";import"./index-DlbzGHlu.js";import"./PdfViewerToolbar-Bhvt8s_m.js";import"./Button-PnV_trQF.js";import"./chevron-right-BOvfoCSq.js";import"./Input-Bp3cyvX_.js";import"./search-bO4Ln9fx.js";import"./spin-D7ZyVHiP.js";import"./error-CqWSLLge.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4324/ba49ade7162e3d303d07b527fa8effdb636f4db7/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
