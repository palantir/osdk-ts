import{j as n}from"./iframe-ClVzwAwQ.js";import{B as e}from"./BasePdfViewer-uVWxydKw.js";import"./preload-helper-Cv11LvJP.js";import"./index-BGl-ufsM.js";import"./BasePdfViewer.module.css-j7VGi9ba.js";import"./PdfViewerAnnotationLayer-CkRum2tc.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D_7RGOds.js";import"./PdfViewerOutlineSidebar-C86nz1QY.js";import"./PdfViewerSidebarHeader-BUaK1PVE.js";import"./useBaseUiId-DBp6INKz.js";import"./useControlled-CYJtKTqW.js";import"./CompositeRoot-C-00yf4w.js";import"./CompositeItem-B_fSDSC7.js";import"./ToolbarRootContext-D3yxcxuQ.js";import"./composite-cy3jdAoe.js";import"./svgIconContainer-Bay1n-zA.js";import"./PdfViewerSearchBar-DuRGDtB6.js";import"./chevron-up-Duc1UKrz.js";import"./chevron-down-UByA3gj5.js";import"./cross-DkZeF945.js";import"./PdfViewerSidebar-CMcTvYc8.js";import"./index-DL1_yfl9.js";import"./index-CY6w5O7H.js";import"./index-CPJZzp1O.js";import"./PdfViewerToolbar-CEkDZhOO.js";import"./Button-D5bJOK4o.js";import"./chevron-right-Dxl-Dm_2.js";import"./Input-BEJWa7gG.js";import"./search-DY6yvOy6.js";import"./spin-D1DLrlqz.js";import"./error-BmOSQ-Av.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4073/b2d0cb02c2852d19b323ede9600486ad34e4d10c/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
