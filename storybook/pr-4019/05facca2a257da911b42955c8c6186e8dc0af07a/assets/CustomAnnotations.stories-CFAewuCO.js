import{j as n}from"./iframe-fw03FCk5.js";import{B as e}from"./BasePdfViewer--h3NtCCS.js";import"./preload-helper-P9E4Gy6I.js";import"./index-cLbCIlyy.js";import"./BasePdfViewer.module.css-BfCadP5y.js";import"./PdfViewerAnnotationLayer-C3NFmQQF.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-95Gc625l.js";import"./PdfViewerOutlineSidebar-CAvuCz1z.js";import"./PdfViewerSidebarHeader-Ny8w68Wv.js";import"./useBaseUiId-R4A3P2Wz.js";import"./useControlled-Bwl7RhM1.js";import"./CompositeRoot-B_DyJufq.js";import"./CompositeItem-BsCKjv-0.js";import"./ToolbarRootContext-BkWOeIIg.js";import"./composite-D_MYaedS.js";import"./svgIconContainer-DTMIi6B0.js";import"./PdfViewerSearchBar-DfQL912p.js";import"./chevron-up-DTJm_c-W.js";import"./chevron-down-CoqXE8sv.js";import"./cross-Cwm_6W5t.js";import"./PdfViewerSidebar-0BsVAp66.js";import"./index-Br7cHrYo.js";import"./index-DFgmoBbG.js";import"./index-DZcROz4y.js";import"./PdfViewerToolbar-DfcCoeqt.js";import"./Button-B6XGTdgm.js";import"./chevron-right-xZ4MceOL.js";import"./Input-Cr_VCQb2.js";import"./search-6gQRaMIj.js";import"./spin-Df9RzKFK.js";import"./error-Dfv9QpfZ.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4019/05facca2a257da911b42955c8c6186e8dc0af07a/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
