import{j as n}from"./iframe-BGwIwWEh.js";import{B as e}from"./BasePdfViewer-pTiqir-t.js";import"./preload-helper-DaJMqj_l.js";import"./index-IqKqgeW3.js";import"./BasePdfViewer.module.css-C3d45gCD.js";import"./PdfViewerAnnotationLayer-scHy2JFu.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B137Lp7y.js";import"./PdfViewerOutlineSidebar-BBwvpqSo.js";import"./PdfViewerSidebarHeader-CqZlC2iZ.js";import"./useBaseUiId-Bx0PVkvu.js";import"./useControlled-DZytncd1.js";import"./CompositeRoot-DwumeJDc.js";import"./CompositeItem-D-aFyv1W.js";import"./ToolbarRootContext-BU6MqSEl.js";import"./composite-B2YG03DA.js";import"./svgIconContainer-o0yAa7DN.js";import"./PdfViewerSearchBar-F2x3JOCV.js";import"./chevron-up-DzkX_bFA.js";import"./chevron-down-Bm6Tj7Z6.js";import"./cross-CCJ4Erjw.js";import"./PdfViewerSidebar-Dsvos6Wl.js";import"./index-CTSacj2z.js";import"./index-CbmIHl_7.js";import"./index-Bo6Tdt1f.js";import"./PdfViewerToolbar-Dt2wdCBL.js";import"./Button-BhV9_fzg.js";import"./chevron-right-CbmSY-i6.js";import"./Input-D41ZdIt3.js";import"./search-BpQNC6sv.js";import"./spin-CesCyfwZ.js";import"./error-D5T_pCuL.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4194/a71d5e88e67d061b6fe05e524b3031d7b5ef8ffd/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
