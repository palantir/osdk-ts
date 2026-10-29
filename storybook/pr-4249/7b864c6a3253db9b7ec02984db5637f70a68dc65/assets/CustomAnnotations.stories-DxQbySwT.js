import{j as n}from"./iframe-Bl044qnf.js";import{B as e}from"./BasePdfViewer-0Bkn4tMn.js";import"./preload-helper-C3nN8OhV.js";import"./index-DUYD1b1T.js";import"./BasePdfViewer.module.css-B330iSD5.js";import"./PdfViewerAnnotationLayer-BfP9nNLw.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CZqZkRgN.js";import"./PdfViewerOutlineSidebar-BLtfc-LN.js";import"./PdfViewerSidebarHeader-Bn2KkVdh.js";import"./useBaseUiId-D3Tkd5iy.js";import"./useControlled-DWQwydBz.js";import"./CompositeRoot-DybAya2x.js";import"./CompositeItem-CkPEHO5z.js";import"./ToolbarRootContext-Btm4cFoY.js";import"./composite-BKeFyTtn.js";import"./svgIconContainer-DSPSIjCL.js";import"./PdfViewerSearchBar-DZjOYJlH.js";import"./chevron-up-DtOe0nLd.js";import"./chevron-down-DCr-eUT2.js";import"./cross-ByJxUK15.js";import"./PdfViewerSidebar-fRtm0n-b.js";import"./index-DPpCb37f.js";import"./index-BIw9TA11.js";import"./index-DOFCbist.js";import"./PdfViewerToolbar-DCSqmPFu.js";import"./Button-BeSccTOh.js";import"./chevron-right-CRHiJHpw.js";import"./Input-Dn6FdMxP.js";import"./search-DOyb79Ba.js";import"./spin-ByQUZxHh.js";import"./error-TWIHte5e.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4249/7b864c6a3253db9b7ec02984db5637f70a68dc65/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
