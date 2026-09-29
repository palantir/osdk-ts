import{j as n}from"./iframe-CAlFL39P.js";import{B as e}from"./BasePdfViewer-C1bRGJkf.js";import"./preload-helper-Di8UnZgY.js";import"./index-Btel0vm8.js";import"./BasePdfViewer.module.css-BtwZ3tyk.js";import"./PdfViewerAnnotationLayer-DuXtu3YG.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-FIpnXy1C.js";import"./PdfViewerOutlineSidebar-CmqujXO2.js";import"./PdfViewerSidebarHeader-B7oH4Rjp.js";import"./useBaseUiId-DZP7PN-D.js";import"./useControlled-CagAHQp0.js";import"./CompositeRoot-meFPhZU1.js";import"./CompositeItem-BD07_lL8.js";import"./ToolbarRootContext-NYYVBOfJ.js";import"./composite-Do6HvbOs.js";import"./svgIconContainer-B3bjsS48.js";import"./PdfViewerSearchBar-Bvc_xrrw.js";import"./chevron-up-BOo88cIL.js";import"./chevron-down-C4L1Vt1n.js";import"./cross-C-7oEPIv.js";import"./PdfViewerSidebar-Dn0JL2g8.js";import"./index-DlRk9Ig6.js";import"./index-CFlCfQcw.js";import"./index-BkqKFdv7.js";import"./PdfViewerToolbar-cAt8mu1J.js";import"./Button-C360afnZ.js";import"./chevron-right-CUo_pJ2c.js";import"./Input-BBwNdl2L.js";import"./search-B49Txj1R.js";import"./spin-C3MHl-Jx.js";import"./error-DNzjg8ag.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4116/febab8eca08c5d43fb6778e679a0f6d6b2bc75ca/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
