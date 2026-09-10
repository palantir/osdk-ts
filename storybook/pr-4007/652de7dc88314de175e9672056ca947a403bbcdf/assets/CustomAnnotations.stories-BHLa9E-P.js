import{j as n}from"./iframe-oqiETzjs.js";import{B as e}from"./BasePdfViewer-rv4NYuNY.js";import"./preload-helper-DY6GVQaH.js";import"./index-ZtK2AEsr.js";import"./BasePdfViewer.module.css-BbRLefkY.js";import"./PdfViewerAnnotationLayer-BhpTHlfj.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CcA-uIkJ.js";import"./PdfViewerOutlineSidebar-C6nrhfhv.js";import"./PdfViewerSidebarHeader-kdxW0ADl.js";import"./useBaseUiId-DB5E9Fa7.js";import"./useControlled-CGzg1vVh.js";import"./CompositeRoot-CI2Wsamv.js";import"./CompositeItem-D_YoAFpQ.js";import"./ToolbarRootContext-B7aYE2db.js";import"./composite-DUWgXaax.js";import"./svgIconContainer-C-hQGfLn.js";import"./PdfViewerSearchBar-CllSMMXZ.js";import"./chevron-up-BENCMOJd.js";import"./chevron-down-B5wuH3n5.js";import"./cross-CMMlEidH.js";import"./PdfViewerSidebar-C_ogui_x.js";import"./index-Dg5Wo44B.js";import"./index-D6-tP7ey.js";import"./index-BcAnoDMR.js";import"./PdfViewerToolbar-Cxfk5R4J.js";import"./Button-BnpV_XVG.js";import"./chevron-right-CERLd2T4.js";import"./Input-DVeUb6S9.js";import"./search-Hb2jWcJP.js";import"./spin-p38zMPtA.js";import"./error-B914xSJQ.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4007/652de7dc88314de175e9672056ca947a403bbcdf/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
