import{j as n}from"./iframe-DSFJZDbB.js";import{B as e}from"./BasePdfViewer-J0OenkBG.js";import"./preload-helper-BXZsHDRp.js";import"./index-7paxFDvD.js";import"./BasePdfViewer.module.css-DTlYkk7k.js";import"./PdfViewerAnnotationLayer-CP9C7FVQ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BmSuomEq.js";import"./PdfViewerOutlineSidebar-Bae-P-9f.js";import"./PdfViewerSidebarHeader-LHO_pOp2.js";import"./useBaseUiId-c3zUK5X5.js";import"./useControlled-C2eq60VR.js";import"./CompositeRoot-CYwXzK9W.js";import"./CompositeItem-Dz7MzIvk.js";import"./ToolbarRootContext-jXB37hMy.js";import"./composite-DxVQtdWX.js";import"./svgIconContainer-RNVtlkjd.js";import"./PdfViewerSearchBar-CrTQtdok.js";import"./chevron-up-hNV0beo3.js";import"./chevron-down-VJT3Mdig.js";import"./cross-BB9CVc-Q.js";import"./PdfViewerSidebar-UN5jr7RK.js";import"./index-Cwvk-iSE.js";import"./index-DZNGA6d-.js";import"./index-D6ZHe2_A.js";import"./PdfViewerToolbar-Ck-6-j2e.js";import"./Button-DQPbKfHN.js";import"./chevron-right-CSuiBNI9.js";import"./Input-PKRWZfPT.js";import"./search-CoFzowK4.js";import"./spin-XCn1vyUY.js";import"./error-uQwZC4G-.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4333/8cbce66eb5ed4f0db08a920c99c4f13cbc78caa5/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
