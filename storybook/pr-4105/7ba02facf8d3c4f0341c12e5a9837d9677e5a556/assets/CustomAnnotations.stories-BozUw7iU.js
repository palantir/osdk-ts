import{j as n}from"./iframe-zfG254O_.js";import{B as e}from"./BasePdfViewer-DxcpW6Lq.js";import"./preload-helper-BVR1mWVD.js";import"./index-Wj2BR0GO.js";import"./BasePdfViewer.module.css-B0rggeEq.js";import"./PdfViewerAnnotationLayer-BdS4uAOD.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BNdCOknr.js";import"./PdfViewerOutlineSidebar-CLpQ1VW8.js";import"./PdfViewerSidebarHeader-BXPYYxcu.js";import"./useBaseUiId-DDNAeb_I.js";import"./useControlled-CYuH3Kw2.js";import"./CompositeRoot-DiLvjzLz.js";import"./CompositeItem-7b58zS75.js";import"./ToolbarRootContext-CfVpNXkd.js";import"./composite-DJ7hFQoT.js";import"./svgIconContainer-QVUVb6tE.js";import"./PdfViewerSearchBar-BNyAjmbu.js";import"./chevron-up-BEVl1Rnt.js";import"./chevron-down-omzDCKN7.js";import"./cross-CetEVi0b.js";import"./PdfViewerSidebar-zwwlILm2.js";import"./index-Cfc9ne_z.js";import"./index-DqcYQoAX.js";import"./index-6IcmwpRJ.js";import"./PdfViewerToolbar-BadzjxOt.js";import"./Button-XkjDQhxK.js";import"./chevron-right-DJfOj7uW.js";import"./Input-DnoFtOsb.js";import"./search-C1O_20Mr.js";import"./spin-BJ1DAHpc.js";import"./error-CZvS_ur6.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4105/7ba02facf8d3c4f0341c12e5a9837d9677e5a556/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
