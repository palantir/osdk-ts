import{j as n}from"./iframe-XZT6dXfR.js";import{B as e}from"./BasePdfViewer-xrzZV36A.js";import"./preload-helper-Bq4RjIN3.js";import"./index-DBmC_ZXQ.js";import"./BasePdfViewer.module.css-BBHrLAQz.js";import"./PdfViewerAnnotationLayer-B2vtiUOO.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BNU70m8X.js";import"./PdfViewerOutlineSidebar-SjEaOYTA.js";import"./PdfViewerSidebarHeader-BBWVORx8.js";import"./useBaseUiId-B8UoJpnF.js";import"./useControlled-eor914uw.js";import"./CompositeRoot-DcGXb8Oq.js";import"./CompositeItem-CFpArZRZ.js";import"./ToolbarRootContext-DmE1Zvel.js";import"./composite-8to6_dHI.js";import"./svgIconContainer-CU7rRNTz.js";import"./PdfViewerSearchBar-BgC3a9uL.js";import"./chevron-up-CE-W5bVQ.js";import"./chevron-down-7slW-jes.js";import"./cross-DhoAWiHd.js";import"./PdfViewerSidebar-BQEIjH-6.js";import"./index-CAFrt6ka.js";import"./index-CNzOt5rB.js";import"./index-DBvBEYmO.js";import"./PdfViewerToolbar-CTtMUPp1.js";import"./Button-CFmpzwcx.js";import"./chevron-right-BWYm7qwx.js";import"./Input-ieeoajuX.js";import"./search-JQ5a7a7P.js";import"./spin-BnwWfZf1.js";import"./error-CE5bRqvK.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4007/bff80c7bd344855612b1b2e77153624036aaa20a/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
