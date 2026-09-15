import{j as n}from"./iframe-BTZXjcS6.js";import{B as e}from"./BasePdfViewer-Bn7eNZiM.js";import"./preload-helper-C9NzPdgc.js";import"./index-CeqBwR3m.js";import"./BasePdfViewer.module.css-94aqFAAA.js";import"./PdfViewerAnnotationLayer-Cfhh_U8z.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DzzV3VxX.js";import"./PdfViewerOutlineSidebar-BlpUjvuE.js";import"./PdfViewerSidebarHeader-BhDuSSxr.js";import"./useBaseUiId-BYa5JSvm.js";import"./useControlled-D3czSe4k.js";import"./CompositeRoot-DgLdT1BM.js";import"./CompositeItem-BbZyoEpe.js";import"./ToolbarRootContext-CSsWfPwj.js";import"./composite-Bir0R2T2.js";import"./svgIconContainer-B_6Ye4VC.js";import"./PdfViewerSearchBar-BsrH6ysW.js";import"./chevron-up-DuZTZv0H.js";import"./chevron-down-BnB-eP8_.js";import"./cross-B7KIcqou.js";import"./PdfViewerSidebar-Bt14astp.js";import"./index-BwVZwZx_.js";import"./index-Bc5CyDlw.js";import"./index-PyK1kYPr.js";import"./PdfViewerToolbar-6phrPA_c.js";import"./Button-tBNbm5Ca.js";import"./chevron-right-DU91Ek_7.js";import"./Input-CufnAxBU.js";import"./search-B_jja5k9.js";import"./spin-B0b0Pj0S.js";import"./error-CNEXn0eH.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4015/5740a7760150d79eff1f10fb251d3c488608de94/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
