import{j as n}from"./iframe-X-VSGX-m.js";import{B as e}from"./BasePdfViewer-BCp7VZ46.js";import"./preload-helper-BSxm0T4I.js";import"./index-CGDH48tf.js";import"./BasePdfViewer.module.css-Dx0D_gVd.js";import"./PdfViewerAnnotationLayer-BglCWKFe.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C5v76JBo.js";import"./PdfViewerOutlineSidebar-5X5Ss9Hg.js";import"./PdfViewerSidebarHeader-BZtI7sRz.js";import"./useBaseUiId-BBsjPzS0.js";import"./useControlled-CS7Ud3A1.js";import"./CompositeRoot-BJcQ097z.js";import"./CompositeItem-Dt-41Y4b.js";import"./ToolbarRootContext-CAbB3DSY.js";import"./composite-BZ7oE03c.js";import"./svgIconContainer-BdGqJkEg.js";import"./PdfViewerSearchBar-BQbRgn1X.js";import"./chevron-up-CbCJqwQx.js";import"./chevron-down-Z8wpnP0p.js";import"./cross-CrghqoWd.js";import"./PdfViewerSidebar-5uaN8rWi.js";import"./index-Daq_EkrJ.js";import"./index-DSvAdAem.js";import"./index-C6OnhXV1.js";import"./PdfViewerToolbar-Dj97fOhV.js";import"./Button-BvYXLNva.js";import"./chevron-right-BQnbmMNT.js";import"./Input-CjGosPl8.js";import"./search-CzcR_jWd.js";import"./spin-C6JIAVxG.js";import"./error-D6m_rkvI.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4036/a14f963ec155b4fb07795b724d255049b127d69c/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
