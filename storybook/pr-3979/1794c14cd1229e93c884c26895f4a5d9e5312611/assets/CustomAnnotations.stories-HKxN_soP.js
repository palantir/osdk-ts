import{j as n}from"./iframe-g6xxvyIV.js";import{B as e}from"./BasePdfViewer-BvNAZfya.js";import"./preload-helper-VtRw9ZxB.js";import"./index-CswLMQ0k.js";import"./BasePdfViewer.module.css-BQ2q3JVA.js";import"./PdfViewerAnnotationLayer-D_hssroh.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BhQMnXFW.js";import"./PdfViewerOutlineSidebar-DH47Te9O.js";import"./PdfViewerSidebarHeader-Ds-dP4st.js";import"./useBaseUiId-DXMdH-da.js";import"./useControlled-DBzkXlO9.js";import"./CompositeRoot-Bv12sE0u.js";import"./CompositeItem-D8bzrW1A.js";import"./ToolbarRootContext-CnYeU0vp.js";import"./composite-CidrPxyb.js";import"./svgIconContainer-TEGni_EK.js";import"./PdfViewerSearchBar-DsVHgoVR.js";import"./chevron-up-BEGzBVMx.js";import"./chevron-down-CkRfYs8Z.js";import"./cross-ClaRDnYq.js";import"./PdfViewerSidebar-CetCjM9Y.js";import"./index-DuMOiw4h.js";import"./index-B1T8sIVD.js";import"./index-Df1hA2tb.js";import"./PdfViewerToolbar-BOk6Yfi3.js";import"./Button-BX2PLV5j.js";import"./chevron-right-DehdbGdZ.js";import"./Input-DvVClOUT.js";import"./search-CoUKVa3J.js";import"./spin-_u1eDREe.js";import"./error-BGoiu4dF.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3979/1794c14cd1229e93c884c26895f4a5d9e5312611/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
