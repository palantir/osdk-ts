import{j as n}from"./iframe-DcCQS0_6.js";import{B as e}from"./BasePdfViewer-BcyxhweA.js";import"./preload-helper-xWYT_d-N.js";import"./index-CbMk7YoF.js";import"./BasePdfViewer.module.css-705dVgpg.js";import"./PdfViewerAnnotationLayer-BWDjF__D.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B3OJc69Z.js";import"./PdfViewerOutlineSidebar-JAtAc6Vc.js";import"./PdfViewerSidebarHeader-CgY5cX7_.js";import"./useBaseUiId-Dh-QEy1V.js";import"./useControlled-DjePpHNj.js";import"./CompositeRoot-DjPVJlxR.js";import"./CompositeItem-f5BJQE98.js";import"./ToolbarRootContext-Bj_28nw4.js";import"./composite-CzrpQp13.js";import"./svgIconContainer-DW0Yd1WX.js";import"./PdfViewerSearchBar-kKURnDRS.js";import"./chevron-up-BLQgg8Pb.js";import"./chevron-down-lL-kgNIS.js";import"./cross-CUczp16a.js";import"./PdfViewerSidebar-a_WddAcS.js";import"./index-rRkZkhHF.js";import"./index-DV2Nx4iz.js";import"./index-DH8eBQ7L.js";import"./PdfViewerToolbar-q-0B3-os.js";import"./Button-9wNHK-eW.js";import"./chevron-right--h_sAtNy.js";import"./Input-DQQsT43v.js";import"./search-I8gByOwV.js";import"./spin-CFOF6Ziw.js";import"./error-DZqUEnyZ.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4010/4671835679a8222c02653cdb5f3b69c834f13b15/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
