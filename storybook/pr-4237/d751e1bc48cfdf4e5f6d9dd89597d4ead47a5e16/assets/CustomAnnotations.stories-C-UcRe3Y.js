import{j as n}from"./iframe-DFHLrRxy.js";import{B as e}from"./BasePdfViewer-CQaifpny.js";import"./preload-helper-D3OFW4Wp.js";import"./index-lMBTNEhC.js";import"./BasePdfViewer.module.css-BDNgryOG.js";import"./PdfViewerAnnotationLayer-jrJet6eQ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-FhT1-MVZ.js";import"./PdfViewerOutlineSidebar-Ck0eRec0.js";import"./PdfViewerSidebarHeader-8kwdxlm7.js";import"./useBaseUiId-D2rxFRGv.js";import"./useControlled-DfjEV_zy.js";import"./CompositeRoot-V2V3zKwE.js";import"./CompositeItem-BYZr26cD.js";import"./ToolbarRootContext-BjfNF6P-.js";import"./composite-nDV_ik1F.js";import"./svgIconContainer-CWuGvQcW.js";import"./PdfViewerSearchBar-CUjZShXc.js";import"./chevron-up-Dq4sWNuZ.js";import"./chevron-down-DoelWXMj.js";import"./cross-CvONLWGq.js";import"./PdfViewerSidebar-DLneNmL1.js";import"./index-DPVYsjbh.js";import"./index-CWojmVv7.js";import"./index-DCHHusj_.js";import"./PdfViewerToolbar-aKuzvvip.js";import"./Button-yx5bONTn.js";import"./chevron-right-C5ULAxxy.js";import"./Input-CI74CICo.js";import"./search-DQslwNpY.js";import"./spin-D8s_3GfH.js";import"./error-C-yk3J4q.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4237/d751e1bc48cfdf4e5f6d9dd89597d4ead47a5e16/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
