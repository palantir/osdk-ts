import{j as n}from"./iframe-BtBIXkF3.js";import{B as e}from"./BasePdfViewer-DqcCEdDU.js";import"./preload-helper-KCRTf-fU.js";import"./index-BGAjKCp6.js";import"./BasePdfViewer.module.css-C7vLGJV9.js";import"./PdfViewerAnnotationLayer-DAm5_aaa.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DukBRc4O.js";import"./PdfViewerOutlineSidebar-Cx0VS6Ec.js";import"./PdfViewerSidebarHeader-Bp0o2aFq.js";import"./useBaseUiId-CzkvuYxc.js";import"./useControlled-Bsm9yLUZ.js";import"./CompositeRoot-B-jp7Oin.js";import"./CompositeItem-BCTeJPmX.js";import"./ToolbarRootContext-B_9qz0NR.js";import"./composite-Bn3hBJno.js";import"./svgIconContainer-CclLyuS6.js";import"./PdfViewerSearchBar-B86OoI1B.js";import"./chevron-up-BaMY7_Jh.js";import"./chevron-down-BHLBt5vn.js";import"./cross-B9mjFWYU.js";import"./PdfViewerSidebar-Ck-gF0-9.js";import"./index-C81F4-IO.js";import"./index-DnxktrWp.js";import"./index-Bg1G_Vw4.js";import"./PdfViewerToolbar-js1ORctc.js";import"./Button-FoDlRoyn.js";import"./chevron-right-CUjU5_04.js";import"./Input-CZ_pHuwE.js";import"./search-DV3YNQgX.js";import"./spin-DQ_PzC6b.js";import"./error-VXjIMzYn.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3986/82dded1732685b058446aefacf333487509a8a60/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
