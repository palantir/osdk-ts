import{j as n}from"./iframe-B1HXhuEn.js";import{B as e}from"./BasePdfViewer-Da2ixlHT.js";import"./preload-helper-BS8U_QDO.js";import"./index-CXhpMXAp.js";import"./BasePdfViewer.module.css-D5KLXgvh.js";import"./PdfViewerAnnotationLayer-BRCkDagf.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Xh7njWXm.js";import"./PdfViewerOutlineSidebar-DPG_14jG.js";import"./PdfViewerSidebarHeader-CLmyEgG8.js";import"./useBaseUiId-hdD3ov8Q.js";import"./useControlled-BhBQWUYI.js";import"./CompositeRoot-B5zvPrAA.js";import"./CompositeItem-BMKkQOtg.js";import"./ToolbarRootContext-37rMdX1G.js";import"./composite-DedIsNbG.js";import"./svgIconContainer-DzUf9ieK.js";import"./PdfViewerSearchBar-DUCzTLyX.js";import"./chevron-up-CjrnijYZ.js";import"./chevron-down-D8b4kkiL.js";import"./cross-BttX5lBy.js";import"./PdfViewerSidebar-CgqkVx2b.js";import"./index-BpBIzBNY.js";import"./index-DPC2Y4e5.js";import"./index-3H2Ar6XW.js";import"./PdfViewerToolbar-Ed4IKZcN.js";import"./Button-C9BX79xl.js";import"./chevron-right-D8uc4NVJ.js";import"./Input-v3aPKgft.js";import"./search-oaLO-0GK.js";import"./spin-BUSlbGs7.js";import"./error-CgwFWGpg.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4338/dcc212f98e4c3473405844a13daff5512dd5f8bc/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
