import{j as n}from"./iframe-Ccapaqae.js";import{B as e}from"./BasePdfViewer-CByGDAT2.js";import"./preload-helper-B0fDxzOV.js";import"./index-CAc_fcE_.js";import"./BasePdfViewer.module.css-X1NyD7Fl.js";import"./PdfViewerAnnotationLayer-lFMr_qO4.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BZKJWS8U.js";import"./PdfViewerOutlineSidebar-DP6NCLrB.js";import"./PdfViewerSidebarHeader-BV6EFlmT.js";import"./useBaseUiId-BD8gqrlU.js";import"./useControlled-OeZ6f7Nb.js";import"./CompositeRoot-fv4Yi9n7.js";import"./CompositeItem-BQ56iutS.js";import"./ToolbarRootContext-h1fk3wwB.js";import"./composite-D5uZkbga.js";import"./svgIconContainer-usxw3tZ0.js";import"./PdfViewerSearchBar-ClfSO-nU.js";import"./chevron-up-Cvp81iEj.js";import"./chevron-down-NuPa8cs3.js";import"./cross-DVe-hkuB.js";import"./PdfViewerSidebar-B9K_VIPb.js";import"./index-BmU3DUw1.js";import"./index-DJ_c_Zcf.js";import"./index-Bb7LrozI.js";import"./PdfViewerToolbar-BZ6_slHA.js";import"./Button-YLU6pcy0.js";import"./chevron-right-CRd7FUHS.js";import"./Input-Cmwk-bsi.js";import"./search-gfBqCBGK.js";import"./spin-NGsbtcEa.js";import"./error-rF1GSzue.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4002/a0ebe5eb6a389cf19add1d4e40151906289fc0d7/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
