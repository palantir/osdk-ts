import{j as n}from"./iframe-BP2VUYWC.js";import{B as e}from"./BasePdfViewer-BazlO8p_.js";import"./preload-helper-BbwyyhLF.js";import"./index-B3KCIuhY.js";import"./BasePdfViewer.module.css-CHWzV0go.js";import"./PdfViewerAnnotationLayer-CUN7qkz3.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CTNr7_7w.js";import"./PdfViewerOutlineSidebar-CFg_PHzt.js";import"./PdfViewerSidebarHeader-Yercg_bJ.js";import"./useBaseUiId-CYXU-WIp.js";import"./useControlled-CeB8N0Pd.js";import"./CompositeRoot-Bx2Zrm7f.js";import"./CompositeItem-CSy4C5-C.js";import"./ToolbarRootContext-Dpyy3jMP.js";import"./composite-DVGPAs_G.js";import"./svgIconContainer-CMKl73gN.js";import"./PdfViewerSearchBar-B5oB8dYJ.js";import"./chevron-up-BgJMdGcr.js";import"./chevron-down-DV6qQJYt.js";import"./cross-DeTD0CpU.js";import"./PdfViewerSidebar-egiUK2UN.js";import"./index-WcLTZ_9n.js";import"./index-NspJIeyA.js";import"./index-DhixDc4A.js";import"./PdfViewerToolbar-_HwnQ7pH.js";import"./Button-pnZeIBQ4.js";import"./chevron-right-CjMRqxum.js";import"./Input-DpmPrvJG.js";import"./search-DINZsCiw.js";import"./spin-5hkN-1vV.js";import"./error-CPXKUEGb.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4019/a59dfd8d72d5b27b453e8586a87151cac304833b/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
