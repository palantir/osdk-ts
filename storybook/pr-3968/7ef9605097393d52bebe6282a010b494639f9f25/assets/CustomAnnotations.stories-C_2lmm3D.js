import{j as n}from"./iframe-D07_tlNY.js";import{B as e}from"./BasePdfViewer-rbOvSoYP.js";import"./preload-helper-BZ5VSi4J.js";import"./index-BQ0PEMCN.js";import"./BasePdfViewer.module.css-fmUBrwz2.js";import"./PdfViewerAnnotationLayer-J7oRR_qK.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C_R31C_v.js";import"./PdfViewerOutlineSidebar-BllbR4RT.js";import"./PdfViewerSidebarHeader-eJfeG94v.js";import"./useBaseUiId-B0wQwkXS.js";import"./useControlled-BOVJlk7U.js";import"./CompositeRoot-B2IZOYeQ.js";import"./CompositeItem-B62DALdv.js";import"./ToolbarRootContext-A8nSy6Lb.js";import"./composite-gwuj_Yg_.js";import"./svgIconContainer-BLgeYPC8.js";import"./PdfViewerSearchBar-CsjmOfiu.js";import"./chevron-up-CmAacVBF.js";import"./chevron-down-Dm8M3XHE.js";import"./cross-cfoeTeHb.js";import"./PdfViewerSidebar-F4o_aZRx.js";import"./index-B2TS2X4n.js";import"./index-EmEIjE8b.js";import"./index-Dy14VnsS.js";import"./PdfViewerToolbar-B88jWZgK.js";import"./Button-xkyJItTT.js";import"./chevron-right-L8aUqCbd.js";import"./Input-C_nbkkcq.js";import"./search-c3tWQKm6.js";import"./spin-DeBvGscZ.js";import"./error-D7fddi8p.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3968/7ef9605097393d52bebe6282a010b494639f9f25/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
