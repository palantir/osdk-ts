import{j as n}from"./iframe-BRcpmwFv.js";import{B as e}from"./BasePdfViewer-eFLQ_3xn.js";import"./preload-helper-B5eDbs3J.js";import"./index-DK3oZ2G7.js";import"./BasePdfViewer.module.css-Dg1ONwxT.js";import"./PdfViewerAnnotationLayer-DVHiTtJZ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DrmZsaro.js";import"./PdfViewerOutlineSidebar-BCBaaRg2.js";import"./PdfViewerSidebarHeader-D1Q9dV1d.js";import"./useBaseUiId-BZpEg0W8.js";import"./useControlled-DbOKjk83.js";import"./CompositeRoot-CTz8OuYl.js";import"./CompositeItem-BjOjS-vj.js";import"./ToolbarRootContext-JjbSW9e7.js";import"./composite-BLjliQ-J.js";import"./svgIconContainer-BHIG5g_O.js";import"./PdfViewerSearchBar-C12n1vzM.js";import"./chevron-up-C07MusWk.js";import"./chevron-down-l6tBIHM5.js";import"./cross-C_YRX_a7.js";import"./PdfViewerSidebar-HoW5Y46G.js";import"./index-DqbNsSYI.js";import"./index-Droxy6Rm.js";import"./index-BnsjDL9p.js";import"./PdfViewerToolbar-45inAug2.js";import"./Button-D8AxOjNK.js";import"./chevron-right-Be2BBGJT.js";import"./Input-DcIPWMXq.js";import"./search-DB_eRkJ7.js";import"./spin-Cl_qtp8d.js";import"./error-b3Z30HbN.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-1926/8b5909fbfc3687d7dff82dacae30b11655306f95/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
