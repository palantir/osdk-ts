import{j as n}from"./iframe-A4y6o7Ie.js";import{B as e}from"./BasePdfViewer-Ba_eKLAc.js";import"./preload-helper-BzztgknT.js";import"./index-u7v7sD8l.js";import"./BasePdfViewer.module.css-rgLmD6Zo.js";import"./PdfViewerAnnotationLayer-DHD7tXrQ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-4CynnlIX.js";import"./PdfViewerOutlineSidebar-MDMHB9Qv.js";import"./PdfViewerSidebarHeader-Bf9JEsyv.js";import"./useBaseUiId-DE1tY3Ft.js";import"./useControlled-C-FlvKxX.js";import"./CompositeRoot-SxFpmTzI.js";import"./CompositeItem-1bj7m8dY.js";import"./ToolbarRootContext-BQWxRNLz.js";import"./composite-Cae9SV4u.js";import"./svgIconContainer-hodslvqS.js";import"./PdfViewerSearchBar-CPKJq7bj.js";import"./chevron-up-D5jf88VI.js";import"./chevron-down-DaeYHOS7.js";import"./cross-BiOP9WPq.js";import"./PdfViewerSidebar-CVcmHEfq.js";import"./index-CVD25b_z.js";import"./index-C8GSd3VQ.js";import"./index-Coz2by3h.js";import"./PdfViewerToolbar-BjaJkAt4.js";import"./Button-CpcDAbH0.js";import"./chevron-right-CCl2S5Fk.js";import"./Input-8Z1nJkFY.js";import"./search-BJw96kDe.js";import"./spin-0Iu-BsOk.js";import"./error-D67R2Dnx.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4241/ca37e693e36a84842a228e81b834e8482e57ba53/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
