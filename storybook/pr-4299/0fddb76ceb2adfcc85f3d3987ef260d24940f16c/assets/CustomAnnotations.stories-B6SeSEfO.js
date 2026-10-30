import{j as n}from"./iframe-CBNJ8HWE.js";import{B as e}from"./BasePdfViewer-DdZuu7bK.js";import"./preload-helper-D-aeZqn2.js";import"./index-Dae7Nrzr.js";import"./BasePdfViewer.module.css-BhyWesxG.js";import"./PdfViewerAnnotationLayer-Dvj4YLx_.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-_sqgnGfQ.js";import"./PdfViewerOutlineSidebar-DDYyMiZe.js";import"./PdfViewerSidebarHeader-CEEQyxj4.js";import"./useBaseUiId-OM3pRXHK.js";import"./useControlled-BpsS1h83.js";import"./CompositeRoot-D1r1QqxZ.js";import"./CompositeItem-CFJInvfd.js";import"./ToolbarRootContext-DGgj03xf.js";import"./composite-DVVFhOLL.js";import"./svgIconContainer-Cmsji56X.js";import"./PdfViewerSearchBar-6PhpXWXT.js";import"./chevron-up-D3ci6q-C.js";import"./chevron-down-Df7Rgxm0.js";import"./cross-IIpRFnCv.js";import"./PdfViewerSidebar-1dMWl_SX.js";import"./index-Dre4GzRs.js";import"./index-BDSNEOy8.js";import"./index-BbBV-ipX.js";import"./PdfViewerToolbar-BYKERye3.js";import"./Button-nKcb30G0.js";import"./chevron-right-DfVK0bp5.js";import"./Input-j-S77mRt.js";import"./search-ctIWqbIr.js";import"./spin-NyNKPqOk.js";import"./error-CtfkQOQ0.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4299/0fddb76ceb2adfcc85f3d3987ef260d24940f16c/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
