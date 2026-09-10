import{j as n}from"./iframe-B9pmQzab.js";import{B as e}from"./BasePdfViewer-Du-Y6GD5.js";import"./preload-helper-8ApCze4z.js";import"./index-DJNcHwm8.js";import"./BasePdfViewer.module.css-59o3EWNu.js";import"./PdfViewerAnnotationLayer-DTAUpqBe.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BxsH70SP.js";import"./PdfViewerOutlineSidebar-oQRmdghs.js";import"./PdfViewerSidebarHeader-CVrNCTV_.js";import"./useBaseUiId-CeFMmA-9.js";import"./useControlled-BWGqCRkH.js";import"./CompositeRoot-Ba6eZcsV.js";import"./CompositeItem-CxryFH5r.js";import"./ToolbarRootContext-ByReu0dc.js";import"./composite-C0QPd-_Y.js";import"./svgIconContainer-CO7Z6-JZ.js";import"./PdfViewerSearchBar-Ck8xQ4Cu.js";import"./chevron-up-D0K14Zfx.js";import"./chevron-down-CZhOdlZa.js";import"./cross-8efItR-s.js";import"./PdfViewerSidebar-Boefb7ng.js";import"./index-C31EnYzg.js";import"./index-D1sJuveY.js";import"./index-C-ZM_VQS.js";import"./PdfViewerToolbar-C7BUqhI8.js";import"./Button-Bv8-UnbE.js";import"./chevron-right-BOi9C_DM.js";import"./Input-DpZPwerh.js";import"./search-DgrCLXVb.js";import"./spin-pqwfeNZw.js";import"./error-RG5ruaVA.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3861/94a7b539864cddb418cc872bb23c0b5638fdc4c8/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
