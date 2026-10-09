import{j as n}from"./iframe-cBiyHty9.js";import{B as e}from"./BasePdfViewer-CY2S6g0Z.js";import"./preload-helper-Bv3meVH3.js";import"./index-D9svWSdg.js";import"./BasePdfViewer.module.css-WudCuP3q.js";import"./PdfViewerAnnotationLayer-Dwx9ti6I.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D3LJ2mDk.js";import"./PdfViewerOutlineSidebar-c3X0u9q7.js";import"./PdfViewerSidebarHeader-mN8IWMxp.js";import"./useBaseUiId-DvsuiOVy.js";import"./useControlled-CK1iqSKb.js";import"./CompositeRoot-DICBneCX.js";import"./CompositeItem-CVN4lZoj.js";import"./ToolbarRootContext-C7-4unHr.js";import"./composite-CzYA3ElD.js";import"./svgIconContainer-BYeKHHBz.js";import"./PdfViewerSearchBar-BSd4GbRq.js";import"./chevron-up-CMsS-JIu.js";import"./chevron-down-X8NW_OEl.js";import"./cross-6ls1LaWh.js";import"./PdfViewerSidebar-DmLgydfd.js";import"./index-CBnbMMaT.js";import"./index-BjO7MMv7.js";import"./index-AEP3bJ8p.js";import"./PdfViewerToolbar-BwQBzxBi.js";import"./Button-BcVzWRXY.js";import"./chevron-right-G7tvS-5V.js";import"./Input-CUOeqbmp.js";import"./search-BHdPsWbB.js";import"./spin-CXRuReTv.js";import"./error-Ct0Hv0fs.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-1927/39d0cee69d67059d2649ff1ca8fcde799140a3ce/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
