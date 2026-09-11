import{j as n}from"./iframe-2MyeaUzD.js";import{B as e}from"./BasePdfViewer-BG6fiXCC.js";import"./preload-helper-DUn0LkVX.js";import"./index-NZSVMLpP.js";import"./BasePdfViewer.module.css-DW14mgpR.js";import"./PdfViewerAnnotationLayer-yeai_bDB.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CqUu3AA9.js";import"./PdfViewerOutlineSidebar-D_AEt4UU.js";import"./PdfViewerSidebarHeader-BpRY4tQ9.js";import"./useBaseUiId-C0j-SKXM.js";import"./useControlled-DCne3Llm.js";import"./CompositeRoot-CTmjwQ-c.js";import"./CompositeItem-D8KecaIg.js";import"./ToolbarRootContext-zLrFE9v8.js";import"./composite-BVz7tfSY.js";import"./svgIconContainer-4EX1EfK4.js";import"./PdfViewerSearchBar-D6xDwBea.js";import"./chevron-up-T-aqkpq6.js";import"./chevron-down-4RG-YjeV.js";import"./cross-CXnhgyvc.js";import"./PdfViewerSidebar-2fsGHtcX.js";import"./index-jXeA9SgF.js";import"./index-Bm-PBo3A.js";import"./index-Ce4PKvPC.js";import"./PdfViewerToolbar-Bze3N2yA.js";import"./Button-3arTFTpt.js";import"./chevron-right-sDldV2t2.js";import"./Input-DXMdlMds.js";import"./search-CpIfmgVn.js";import"./spin-CtJSO44K.js";import"./error-CSdXVQDA.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4022/de4bcaadcd4496ef1d84f3e006a47dced4f743cd/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
