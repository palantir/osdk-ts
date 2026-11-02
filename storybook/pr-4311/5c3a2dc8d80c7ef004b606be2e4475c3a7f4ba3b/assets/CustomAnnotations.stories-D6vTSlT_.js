import{j as n}from"./iframe-Biji2bf1.js";import{B as e}from"./BasePdfViewer--5dNeVXR.js";import"./preload-helper-BnQD_pUs.js";import"./index-DfdB1ttn.js";import"./BasePdfViewer.module.css-C5zI-iiq.js";import"./PdfViewerAnnotationLayer-Bh7bFlx6.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CiLV-SH_.js";import"./PdfViewerOutlineSidebar-owm5v7j4.js";import"./PdfViewerSidebarHeader-Dwk47v41.js";import"./useBaseUiId-D8agI47X.js";import"./useControlled-CvQogkf4.js";import"./CompositeRoot-Bhuo6i00.js";import"./CompositeItem-D3laoAWw.js";import"./ToolbarRootContext-8ykIWAUV.js";import"./composite-DTVuKyBl.js";import"./svgIconContainer-CtuHzH_7.js";import"./PdfViewerSearchBar-c-ZDPeUt.js";import"./chevron-up-NX2TCCeJ.js";import"./chevron-down-xdyo5QmP.js";import"./cross-DgO8Y3SG.js";import"./PdfViewerSidebar-BtNjxx-f.js";import"./index-CwIIM57l.js";import"./index-BcRJjTzj.js";import"./index-BBv7G2Gz.js";import"./PdfViewerToolbar-BuVz1N3x.js";import"./Button-B3fK-m0j.js";import"./chevron-right-bjytU0AS.js";import"./Input-Ka8u0CD4.js";import"./search-CLwp4qIO.js";import"./spin-tYaZ3MA-.js";import"./error-AacONtzC.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4311/5c3a2dc8d80c7ef004b606be2e4475c3a7f4ba3b/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
