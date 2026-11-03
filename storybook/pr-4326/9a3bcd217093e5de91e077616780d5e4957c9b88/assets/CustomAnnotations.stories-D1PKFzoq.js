import{j as n}from"./iframe-BSBY3PjJ.js";import{B as e}from"./BasePdfViewer-DkwppI14.js";import"./preload-helper-DpSdlFS8.js";import"./index-DK106w7q.js";import"./BasePdfViewer.module.css-BrcPbaVX.js";import"./PdfViewerAnnotationLayer-C8SzE3po.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BLmI2Q4n.js";import"./PdfViewerOutlineSidebar-DXOZWlhZ.js";import"./PdfViewerSidebarHeader-3T-uQUoL.js";import"./useBaseUiId-BWCrzuEr.js";import"./useControlled-Ki3OxTZR.js";import"./CompositeRoot-C2p9IfuB.js";import"./CompositeItem-B9uKrben.js";import"./ToolbarRootContext-5qjYeV0P.js";import"./composite-iYZqsZLy.js";import"./svgIconContainer-CVR7Tkh3.js";import"./PdfViewerSearchBar-CWQ-vdgL.js";import"./chevron-up-fAnMhF1z.js";import"./chevron-down-BHUr8iy5.js";import"./cross-ChnkwhQq.js";import"./PdfViewerSidebar-DzGvxzOx.js";import"./index-YAOpnUoq.js";import"./index-DVvqS1th.js";import"./index-CKbXy3Dj.js";import"./PdfViewerToolbar-DeKn4V__.js";import"./Button-DyRQe702.js";import"./chevron-right-G-YcQ7W2.js";import"./Input-DLFn8nXq.js";import"./search-D4Uipsbf.js";import"./spin-Bjga8pxW.js";import"./error-iycxY9-l.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4326/9a3bcd217093e5de91e077616780d5e4957c9b88/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
