import{j as n}from"./iframe-BEuky4nW.js";import{B as e}from"./BasePdfViewer-Bga8wcAi.js";import"./preload-helper-DXZnQA0g.js";import"./index-DYYn-JJY.js";import"./BasePdfViewer.module.css-DOk9w-F6.js";import"./PdfViewerAnnotationLayer-CjT2r9qp.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B1ydiM7O.js";import"./PdfViewerOutlineSidebar-D9_JTbJ3.js";import"./PdfViewerSidebarHeader-CnsY-UP9.js";import"./useBaseUiId-BQ-nlD4A.js";import"./useControlled-Ds39J2BB.js";import"./CompositeRoot-Co_Vg0C-.js";import"./CompositeItem-G9820lSK.js";import"./ToolbarRootContext-CUmbCPFZ.js";import"./composite-DtclNBVm.js";import"./svgIconContainer-CnHhfA4g.js";import"./PdfViewerSearchBar-W2vqWw2B.js";import"./chevron-up-Buukew_o.js";import"./chevron-down-D_q9Dus0.js";import"./cross-Ti9XTUaD.js";import"./PdfViewerSidebar-CxqESh6n.js";import"./index-B543OGGW.js";import"./index-BT6wKmSC.js";import"./index-BM4hMUPD.js";import"./PdfViewerToolbar-BuTfXtYe.js";import"./Button-BH8hgTyM.js";import"./chevron-right-DLaOFS51.js";import"./Input-Bkp6Y8Kw.js";import"./search-CUefFBvc.js";import"./spin-phsqeJ2s.js";import"./error-J-Iw-CxZ.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4220/9170a61d47eb41af4f53be69a5558ef36cedd257/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
