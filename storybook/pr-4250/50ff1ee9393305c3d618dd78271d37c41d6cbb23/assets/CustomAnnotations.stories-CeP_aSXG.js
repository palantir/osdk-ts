import{j as n}from"./iframe-DLqxDfy6.js";import{B as e}from"./BasePdfViewer-DOxCjC4p.js";import"./preload-helper-CR03nPFs.js";import"./index-DvJ5FsVz.js";import"./BasePdfViewer.module.css-DUBykd7r.js";import"./PdfViewerAnnotationLayer-rJ2qoiST.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cvl8nbVg.js";import"./PdfViewerOutlineSidebar-DXDt5lqT.js";import"./PdfViewerSidebarHeader-BHzrSS_4.js";import"./useBaseUiId-FG2DzWS6.js";import"./useControlled-DTSmocRM.js";import"./CompositeRoot-vKA4N3eP.js";import"./CompositeItem-B4qptw8k.js";import"./ToolbarRootContext-DcKYwC3S.js";import"./composite-Bp3q5gsu.js";import"./svgIconContainer-siAEGujy.js";import"./PdfViewerSearchBar-sfgTx-qe.js";import"./chevron-up-n9QaJLd2.js";import"./chevron-down-D8Abc2XY.js";import"./cross-_XB01iuh.js";import"./PdfViewerSidebar-BLC-81PR.js";import"./index-Bx9TpkCr.js";import"./index-DDPWTNxY.js";import"./index-CN3BhaNE.js";import"./PdfViewerToolbar-BMq1D8he.js";import"./Button-X3mSZ2fF.js";import"./chevron-right-B0SJc6C1.js";import"./Input-CWq-CC7y.js";import"./search-GkSvXq-b.js";import"./spin-DdUN2Siu.js";import"./error-D8ORw_lv.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4250/50ff1ee9393305c3d618dd78271d37c41d6cbb23/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
