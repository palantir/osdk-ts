import{j as n}from"./iframe-VN1YMwbH.js";import{B as e}from"./BasePdfViewer-DJvsOusK.js";import"./preload-helper-DgM3fVqV.js";import"./index-BQ-hfR18.js";import"./BasePdfViewer.module.css-DhyafcOk.js";import"./PdfViewerAnnotationLayer-dCM6-okX.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B_AnwadG.js";import"./PdfViewerOutlineSidebar-lB9XUTkw.js";import"./PdfViewerSidebarHeader-boh2tSl7.js";import"./useBaseUiId-DJ36Kcth.js";import"./useControlled-BilpsNEK.js";import"./CompositeRoot-BJF5tvmL.js";import"./CompositeItem-BMVV3PhA.js";import"./ToolbarRootContext--QULbV7a.js";import"./composite-DEJ-tsuW.js";import"./svgIconContainer-BXOSkGjh.js";import"./PdfViewerSearchBar-B-qxQAjd.js";import"./chevron-up-D6msriXE.js";import"./chevron-down-DrICZ5Jz.js";import"./cross-CRpIa4b8.js";import"./PdfViewerSidebar-De5VrXzm.js";import"./index-Bu8THvZS.js";import"./index-C-8kYW2Y.js";import"./index-CJqO1XSq.js";import"./PdfViewerToolbar-A7iRoju-.js";import"./Button-Cj2Rzj_x.js";import"./chevron-right-CtoCdlu6.js";import"./Input-CGbGPxHL.js";import"./search-BLvYvb41.js";import"./spin-C8goMnnT.js";import"./error-BSNYyaSK.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4012/48372ee72b5e7f2b0d4ea4d182bd67b01693b0b2/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
