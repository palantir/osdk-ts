import{j as n}from"./iframe-DBsN32YB.js";import{B as e}from"./BasePdfViewer-DhXrDDRn.js";import"./preload-helper-D8tz-Fbl.js";import"./index-nhJVH1tz.js";import"./BasePdfViewer.module.css-C5FR1y-9.js";import"./PdfViewerAnnotationLayer-CwPvVH9l.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Bms_kiBZ.js";import"./PdfViewerOutlineSidebar-B7EFLXun.js";import"./PdfViewerSidebarHeader-s36jyeda.js";import"./useBaseUiId-CSOklioX.js";import"./useControlled-BvDU6EbQ.js";import"./CompositeRoot-D8peGb2J.js";import"./CompositeItem-Dfbl7Tdw.js";import"./ToolbarRootContext-6JBun5UY.js";import"./composite-BNtgV9XE.js";import"./svgIconContainer-X_dBFOT2.js";import"./PdfViewerSearchBar-6K_Yt22D.js";import"./chevron-up-C4B6mav5.js";import"./chevron-down-eJT7_Kub.js";import"./cross-DPk5SIsZ.js";import"./PdfViewerSidebar-B2lDtNh5.js";import"./index-eEgfn-we.js";import"./index-vWZxRhPY.js";import"./index-Cf_xmn3O.js";import"./PdfViewerToolbar-BlmudfqG.js";import"./Button-CQwlNKu1.js";import"./chevron-right-bMiKJSK7.js";import"./Input-DkxwhWbl.js";import"./search-rD_BABVw.js";import"./spin-BJdIjQ3i.js";import"./error-C3JCbj1L.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4021/12e64b8a4f81834c2ca9f575f3375057b9ef8def/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
