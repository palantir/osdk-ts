import{j as n}from"./iframe-RocwcLA1.js";import{B as e}from"./BasePdfViewer-eY7oaNPW.js";import"./preload-helper-Bi11_lQh.js";import"./index-CPYhK6Tm.js";import"./BasePdfViewer.module.css-CrvxP8Ob.js";import"./PdfViewerAnnotationLayer-CWqIW-Nb.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-De1N8uoq.js";import"./PdfViewerOutlineSidebar-BngGzl3U.js";import"./PdfViewerSidebarHeader-C47I5uND.js";import"./useBaseUiId-CBnRLDYk.js";import"./useControlled-Bbowgw5B.js";import"./CompositeRoot-kbTi56P6.js";import"./CompositeItem-CRCvuWR7.js";import"./ToolbarRootContext-Cn6bmXqK.js";import"./composite-CcO-1qH0.js";import"./svgIconContainer-DLWtp0BU.js";import"./PdfViewerSearchBar-CvXgrMY6.js";import"./chevron-up-Dy4oGccG.js";import"./chevron-down-C7FnpsrF.js";import"./cross-BgyJlmiP.js";import"./PdfViewerSidebar-C7EoVUBG.js";import"./index-DmXTiMr0.js";import"./index-BnYAAGls.js";import"./index-CYrtNoCb.js";import"./PdfViewerToolbar-Bovqr1XW.js";import"./Button-BNn-NlyQ.js";import"./chevron-right-ovVulBH5.js";import"./Input-CcAG7gXy.js";import"./search-vjT1hCHx.js";import"./spin-CC8HsMB3.js";import"./error-DACjt9aW.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4208/9ec12b5706cf23a38c30a4d62773bfb2c5298fcc/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
