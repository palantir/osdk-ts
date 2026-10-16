import{j as n}from"./iframe-Dz-3bopY.js";import{B as e}from"./BasePdfViewer-8G0zK0oa.js";import"./preload-helper-DyKBZj2x.js";import"./index-DXk5AkRu.js";import"./BasePdfViewer.module.css-CiINk9yw.js";import"./PdfViewerAnnotationLayer-DNjp7g3z.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DE3jD7zk.js";import"./PdfViewerOutlineSidebar-BNn15tHi.js";import"./PdfViewerSidebarHeader-Co05XmFp.js";import"./useBaseUiId-DdDMVRT4.js";import"./useControlled-BicNl6JT.js";import"./CompositeRoot-Cn2oP6nd.js";import"./CompositeItem-DkOqAvvV.js";import"./ToolbarRootContext-Bdn-bZ42.js";import"./composite-CeOULy3_.js";import"./svgIconContainer-VUnqKTqj.js";import"./PdfViewerSearchBar-D-JUaCpU.js";import"./chevron-up-DOQZQn2y.js";import"./chevron-down-CtwdWDe5.js";import"./cross-BV1ilYHG.js";import"./PdfViewerSidebar-Br5aT4HQ.js";import"./index-DDGzWdyM.js";import"./index-Cd6ys6N0.js";import"./index-CESOHnLX.js";import"./PdfViewerToolbar-Ck7qQvVC.js";import"./Button-CYhmyUyk.js";import"./chevron-right-Rm4XSKGW.js";import"./Input-BShSfu0I.js";import"./search-C0Oo-5ck.js";import"./spin-C69x-DrP.js";import"./error-DDZrlFGO.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4235/2a6fe5306f336996cffd41d3ffde89221382665e/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
