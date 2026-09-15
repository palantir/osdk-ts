import{j as n}from"./iframe-BD39Do8C.js";import{B as e}from"./BasePdfViewer-iTj98a0o.js";import"./preload-helper-JSiQ8WbR.js";import"./index-BCxf04aV.js";import"./BasePdfViewer.module.css-vq8YWVrG.js";import"./PdfViewerAnnotationLayer-8_hOxY4S.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-fKyHT4hI.js";import"./PdfViewerOutlineSidebar-taaZxepA.js";import"./PdfViewerSidebarHeader-CwxhamPq.js";import"./useBaseUiId-CixWZYdi.js";import"./useControlled-eZ44qZZ0.js";import"./CompositeRoot-cE8fIZuj.js";import"./CompositeItem-ucwXIdj-.js";import"./ToolbarRootContext-CEznXclz.js";import"./composite-Dw7ZpZcU.js";import"./svgIconContainer-BGfZ28Se.js";import"./PdfViewerSearchBar-DHMmhbeb.js";import"./chevron-up-DOjPgZ4U.js";import"./chevron-down-Xa2zxhAU.js";import"./cross-CMhnMXoS.js";import"./PdfViewerSidebar-BMQUdtvJ.js";import"./index-C4HeAi2L.js";import"./index-BxvffljR.js";import"./index-BlGl871Z.js";import"./PdfViewerToolbar-D4P_TlQw.js";import"./Button-u59jaYGp.js";import"./chevron-right-BJZlejlM.js";import"./Input-C2jmuYOz.js";import"./search-DKvlAX7y.js";import"./spin-C-Aoqyhx.js";import"./error-Bjl2LrVO.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4011/a7570103a6f06e4e9e471dfe7901a8f3608e7c5e/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
