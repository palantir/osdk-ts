import{j as n}from"./iframe-CzgnuvEu.js";import{B as e}from"./BasePdfViewer-x-dMBLNC.js";import"./preload-helper-BOIiyEUV.js";import"./index-DzE9qOqD.js";import"./BasePdfViewer.module.css-B0LGQEaj.js";import"./PdfViewerAnnotationLayer-D8nvSo-C.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CKBY-TtB.js";import"./PdfViewerOutlineSidebar-DsIv_uJ8.js";import"./PdfViewerSidebarHeader-fEOrkiuH.js";import"./useBaseUiId-BVmKyOEj.js";import"./useControlled-C5aZuSIZ.js";import"./CompositeRoot-B_mZQolP.js";import"./CompositeItem-D17OeXfK.js";import"./ToolbarRootContext-DRsejA9Q.js";import"./composite-DYp9sm2c.js";import"./svgIconContainer-CqjF4WdJ.js";import"./PdfViewerSearchBar-qPK0xNWy.js";import"./chevron-up-MSLkKn0U.js";import"./chevron-down-CcjtSJSE.js";import"./cross-BZ8qiqH7.js";import"./PdfViewerSidebar-ssCNWiAv.js";import"./index-D4tXRR6m.js";import"./index-CK7PizA2.js";import"./index-8D7uARHg.js";import"./PdfViewerToolbar-Ca5hqeNe.js";import"./Button-NdiRMwUB.js";import"./chevron-right-BCadBgjI.js";import"./Input-ZYnWFBEZ.js";import"./search-Cwa3Up2s.js";import"./spin-DTT180pK.js";import"./error-Dn-b8Fhc.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4252/8a524149a3836c89a2f98d2619e5852dad0496af/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
