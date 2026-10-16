import{j as n}from"./iframe-C1SMXjUe.js";import{B as e}from"./BasePdfViewer-CWkQNxzc.js";import"./preload-helper-O4cQ6S71.js";import"./index-DN_SN9-G.js";import"./BasePdfViewer.module.css-Ci7aqlTA.js";import"./PdfViewerAnnotationLayer-CAv-PHi6.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BfBLXhYH.js";import"./PdfViewerOutlineSidebar-BlWgIFlF.js";import"./PdfViewerSidebarHeader-Cn0iGjtO.js";import"./useBaseUiId-BuIqgK5v.js";import"./useControlled-BZtQiYd3.js";import"./CompositeRoot-DI0Ox4Zb.js";import"./CompositeItem-BJrPEqdr.js";import"./ToolbarRootContext-BEFeXo6R.js";import"./composite-sNamXEmM.js";import"./svgIconContainer-BDoLcvXV.js";import"./PdfViewerSearchBar-DfikrX6G.js";import"./chevron-up-B6MAmjy7.js";import"./chevron-down-BPj-14kw.js";import"./cross-D7uSPFjO.js";import"./PdfViewerSidebar-Dc9EJEWt.js";import"./index-HIFRtJiy.js";import"./index-08DpGPSx.js";import"./index-19ONWP9f.js";import"./PdfViewerToolbar-BBd0hVMO.js";import"./Button-Bfn1HbBL.js";import"./chevron-right-lZH1wppm.js";import"./Input-57O56G_v.js";import"./search-DnJjsxnU.js";import"./spin-BZjFtkt3.js";import"./error-Ck-1b3_a.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4233/93b6e8261cf1b689c7c7d116f4102048015b42a2/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
