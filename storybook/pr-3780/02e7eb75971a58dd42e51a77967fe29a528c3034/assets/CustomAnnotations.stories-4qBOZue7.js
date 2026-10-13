import{j as n}from"./iframe-BLF6zRqG.js";import{B as e}from"./BasePdfViewer-H_uVqB2Q.js";import"./preload-helper-BDaxV4R2.js";import"./index-BLFrbzvg.js";import"./BasePdfViewer.module.css-Ba-UIVRk.js";import"./PdfViewerAnnotationLayer-Cd8Nqu-Q.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BS5EYFZC.js";import"./PdfViewerOutlineSidebar-Dmz4qOR1.js";import"./PdfViewerSidebarHeader-DpD3vT1u.js";import"./useBaseUiId-Zjs0lNV0.js";import"./useControlled-CoQlBX4R.js";import"./CompositeRoot-ChKLWTSW.js";import"./CompositeItem-DtwY3yqS.js";import"./ToolbarRootContext-2-p_DBQP.js";import"./composite-CcKV35Kr.js";import"./svgIconContainer-B1hh76l8.js";import"./PdfViewerSearchBar-B-tlf3-U.js";import"./chevron-up-63sGUHDL.js";import"./chevron-down-D3B34KT6.js";import"./cross-BA9FjJ9G.js";import"./PdfViewerSidebar-eOy90xAb.js";import"./index-ccXt1NIS.js";import"./index-CLYhFphF.js";import"./index-ByFfno_8.js";import"./PdfViewerToolbar-qC4SXFDx.js";import"./Button-9qWiKKY-.js";import"./chevron-right-DIZObQsx.js";import"./Input-CCDmeNBI.js";import"./search-9jU6Q1us.js";import"./spin-tlW4bJtZ.js";import"./error-CBG8l0PN.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3780/02e7eb75971a58dd42e51a77967fe29a528c3034/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
