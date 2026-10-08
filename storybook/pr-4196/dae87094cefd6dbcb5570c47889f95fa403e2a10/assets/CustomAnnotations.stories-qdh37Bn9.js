import{j as n}from"./iframe-BZFzj4I7.js";import{B as e}from"./BasePdfViewer-ByxBGoQu.js";import"./preload-helper-D4VtoqvU.js";import"./index-C9BOu-GC.js";import"./BasePdfViewer.module.css-tDZToo70.js";import"./PdfViewerAnnotationLayer-C7RiEYL0.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Dtee3M5k.js";import"./PdfViewerOutlineSidebar-aLgP9TFs.js";import"./PdfViewerSidebarHeader-C2wd_pSo.js";import"./useBaseUiId-CynpPIak.js";import"./useControlled-ed2KW_CI.js";import"./CompositeRoot-BEl3DueR.js";import"./CompositeItem-V8rmNgwr.js";import"./ToolbarRootContext-BpRFBWvV.js";import"./composite-DOYm4spg.js";import"./svgIconContainer-BgU1NuNe.js";import"./PdfViewerSearchBar-CBZuBEke.js";import"./chevron-up-Cx2idefM.js";import"./chevron-down-B4Kaehlj.js";import"./cross-8Ktod3hp.js";import"./PdfViewerSidebar-H7zAO5yX.js";import"./index-dwA92LAO.js";import"./index-CRbxC94q.js";import"./index-ZJ1zgTXq.js";import"./PdfViewerToolbar-yNfDGjoS.js";import"./Button-BADC2rqt.js";import"./chevron-right-BcLS8R1H.js";import"./Input-CNdZYHeG.js";import"./search-CtmR8qHz.js";import"./spin-DL9iMFar.js";import"./error-DXjyDcZg.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4196/dae87094cefd6dbcb5570c47889f95fa403e2a10/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
