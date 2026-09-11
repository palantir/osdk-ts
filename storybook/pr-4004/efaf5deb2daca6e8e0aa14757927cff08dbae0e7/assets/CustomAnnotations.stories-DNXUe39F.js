import{j as n}from"./iframe-DsKrzcRN.js";import{B as e}from"./BasePdfViewer-Bgv_r-Qt.js";import"./preload-helper-XXW3l9t_.js";import"./index-CsPIGNQb.js";import"./BasePdfViewer.module.css-wfcBe7Ut.js";import"./PdfViewerAnnotationLayer-DsWGtWGl.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-3pZoTLBA.js";import"./PdfViewerOutlineSidebar-CpMG8lYq.js";import"./PdfViewerSidebarHeader-BsvCwCbc.js";import"./useBaseUiId-BwjaGsvj.js";import"./useControlled-Bqn_3IUK.js";import"./CompositeRoot-DRk1ZgIV.js";import"./CompositeItem-D26JRJU9.js";import"./ToolbarRootContext-DxArarjC.js";import"./composite-4l0PTrfd.js";import"./svgIconContainer-BOG8o0Qp.js";import"./PdfViewerSearchBar-CKZ_-iju.js";import"./chevron-up-LJ_-hQRF.js";import"./chevron-down-DEsS9nYL.js";import"./cross-BW2NuQAF.js";import"./PdfViewerSidebar-CWurLSkP.js";import"./index-BFmUqTIz.js";import"./index-CbFdJYZA.js";import"./index-v8oVnP18.js";import"./PdfViewerToolbar-DE-A7F9m.js";import"./Button-BKP0-2mJ.js";import"./chevron-right-BWJKde38.js";import"./Input-C_GhTUPn.js";import"./search-Dj7j7f4C.js";import"./spin-CWucZYXU.js";import"./error-CfVMT4Jh.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4004/efaf5deb2daca6e8e0aa14757927cff08dbae0e7/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
