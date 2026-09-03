import{j as n}from"./iframe-CraWtfc_.js";import{B as e}from"./BasePdfViewer-Bi85UFgs.js";import"./preload-helper-B2ygN63P.js";import"./index-uggTCp7M.js";import"./BasePdfViewer.module.css-B67z3yfB.js";import"./PdfViewerAnnotationLayer-BmkyTqln.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BdpN0pBl.js";import"./PdfViewerOutlineSidebar-DCg_MUAa.js";import"./PdfViewerSidebarHeader-DDLnCpEi.js";import"./useBaseUiId-B3gf6Rgr.js";import"./useControlled-C2EFnSRK.js";import"./CompositeRoot-BBwewoC_.js";import"./CompositeItem-D5jj9W4Y.js";import"./ToolbarRootContext-BqVmfek1.js";import"./composite-DStzulLq.js";import"./svgIconContainer-C4_0pLg-.js";import"./PdfViewerSearchBar-q4Dxxdpm.js";import"./chevron-up-CQfXW1SS.js";import"./chevron-down-B7zCZjZp.js";import"./cross-DBeI7hzA.js";import"./PdfViewerSidebar-DfXj3eN6.js";import"./index-KL6FZw16.js";import"./index-C7ILWK60.js";import"./index-CE8B_DUN.js";import"./PdfViewerToolbar-dykahKtu.js";import"./Button-CzW3iwgW.js";import"./chevron-right-THA92gqz.js";import"./Input-BXsVCVWI.js";import"./search-BX2x7npa.js";import"./spin-VnT3o7nh.js";import"./error-CwgXbJjF.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3975/1185a918060ff0ed9ab2875b99a81011dc5e11ab/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
