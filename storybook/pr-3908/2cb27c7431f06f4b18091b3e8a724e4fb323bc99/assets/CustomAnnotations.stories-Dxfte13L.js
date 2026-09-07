import{j as n}from"./iframe-jVZSa0_O.js";import{B as e}from"./BasePdfViewer-Bg-_rCra.js";import"./preload-helper-B0JsgF0Q.js";import"./index-cz87o1u2.js";import"./BasePdfViewer.module.css-9y043NI2.js";import"./PdfViewerAnnotationLayer-CgiOjAbQ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Dkm-vK6I.js";import"./PdfViewerOutlineSidebar-Dusly85D.js";import"./PdfViewerSidebarHeader-C_kJ8EY_.js";import"./useBaseUiId-Dh7cbX1i.js";import"./useControlled-PPoFg-g2.js";import"./CompositeRoot-C9Vt8VFM.js";import"./CompositeItem-Bdw-jz1U.js";import"./ToolbarRootContext-W1O_4HxY.js";import"./composite-B1R1VOU-.js";import"./svgIconContainer-CCkoUGO-.js";import"./PdfViewerSearchBar-WooVDK4y.js";import"./chevron-up-t4wLVQYF.js";import"./chevron-down-vgR9jQm9.js";import"./cross-D_kf2VMY.js";import"./PdfViewerSidebar-9Q6gqzaE.js";import"./index-DprOP2mE.js";import"./index-CFlWgQDO.js";import"./index-DRJcVra2.js";import"./PdfViewerToolbar-B8f76iUU.js";import"./Button-ruj5eHNw.js";import"./chevron-right--CjNk6a9.js";import"./Input-DE-dqgbb.js";import"./search-y5GiQxVJ.js";import"./spin-BZt4imx5.js";import"./error-BkWT_eOO.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3908/2cb27c7431f06f4b18091b3e8a724e4fb323bc99/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
