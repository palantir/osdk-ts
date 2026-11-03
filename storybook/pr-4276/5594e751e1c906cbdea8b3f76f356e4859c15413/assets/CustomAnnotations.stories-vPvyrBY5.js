import{j as n}from"./iframe-Cp-VmNqL.js";import{B as e}from"./BasePdfViewer-D-56U8rv.js";import"./preload-helper-AzhWXDuQ.js";import"./index-dpygWVpJ.js";import"./BasePdfViewer.module.css-D6sFnlok.js";import"./PdfViewerAnnotationLayer-CaXok6DK.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cr3GMBrM.js";import"./PdfViewerOutlineSidebar-LVcDEUYY.js";import"./PdfViewerSidebarHeader-BffDS5pH.js";import"./useBaseUiId-OdIul-yE.js";import"./useControlled-OYIwur-C.js";import"./CompositeRoot-BeA-03_-.js";import"./CompositeItem-CzQ4Mwjm.js";import"./ToolbarRootContext-DNY7Xc1D.js";import"./composite-DlQhckwI.js";import"./svgIconContainer-zkQ14032.js";import"./PdfViewerSearchBar-Cm8THDs7.js";import"./chevron-up-C1IjPord.js";import"./chevron-down-Dk2LvJq7.js";import"./cross-uOKlIsXG.js";import"./PdfViewerSidebar-DePITXji.js";import"./index-Jc-X2-Ds.js";import"./index-tUkk1A8p.js";import"./index-yO_woVyq.js";import"./PdfViewerToolbar-BGNoG9NO.js";import"./Button-NTUIWe38.js";import"./chevron-right-BZ_Rsh1v.js";import"./Input-BEEKmunm.js";import"./search-HIN2ZGpm.js";import"./spin-DhG3qMNK.js";import"./error-BJ-TznDH.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4276/5594e751e1c906cbdea8b3f76f356e4859c15413/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
