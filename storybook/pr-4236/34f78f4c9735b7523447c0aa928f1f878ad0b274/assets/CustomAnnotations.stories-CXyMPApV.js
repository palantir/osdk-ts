import{j as n}from"./iframe-CUIuiQ8M.js";import{B as e}from"./BasePdfViewer-CMp_1AJ0.js";import"./preload-helper-w0MMDoBI.js";import"./index-B5rq4E8c.js";import"./BasePdfViewer.module.css-D9WxtN0H.js";import"./PdfViewerAnnotationLayer-D9gpkght.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-AfqaSdKc.js";import"./PdfViewerOutlineSidebar-_0s2WRjZ.js";import"./PdfViewerSidebarHeader-DU4LroWR.js";import"./useBaseUiId-CO_Scg4B.js";import"./useControlled-AW4odFH0.js";import"./CompositeRoot-Bura2FJa.js";import"./CompositeItem-DqTHESiL.js";import"./ToolbarRootContext-mQ2qjFjd.js";import"./composite-CfWLpG35.js";import"./svgIconContainer-XQGxfFa5.js";import"./PdfViewerSearchBar-BcITcYTN.js";import"./chevron-up-Cr0e8Qqr.js";import"./chevron-down-BPe3l6Fo.js";import"./cross-BEDlXMDX.js";import"./PdfViewerSidebar-DOsj_7Qy.js";import"./index-BupjIogH.js";import"./index-BXDM3eUI.js";import"./index-nHMpUj1A.js";import"./PdfViewerToolbar-DMFcQalr.js";import"./Button-BsH4UFjg.js";import"./chevron-right-B_Xrmn_k.js";import"./Input-CUX61x5u.js";import"./search-DuRjWaqd.js";import"./spin-CAe4_1yp.js";import"./error-BGt6yMaY.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4236/34f78f4c9735b7523447c0aa928f1f878ad0b274/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
