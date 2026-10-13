import{j as n}from"./iframe-DTTjhdqf.js";import{B as e}from"./BasePdfViewer-jUvFnpOR.js";import"./preload-helper-DLuwwicB.js";import"./index-C_u0ZD76.js";import"./BasePdfViewer.module.css-rUrmlmw9.js";import"./PdfViewerAnnotationLayer-Dhwrcb_0.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BNbnv1ln.js";import"./PdfViewerOutlineSidebar-ELSJ21tQ.js";import"./PdfViewerSidebarHeader-FmkGg-FW.js";import"./useBaseUiId-DAXCLwKK.js";import"./useControlled-DnFxapfF.js";import"./CompositeRoot-C8ZgTfhF.js";import"./CompositeItem-NevsqKCs.js";import"./ToolbarRootContext-Dcs6ty2M.js";import"./composite-DmV5qlv-.js";import"./svgIconContainer-BQTxrAHk.js";import"./PdfViewerSearchBar-BQQS97E4.js";import"./chevron-up-Bgd0bC6g.js";import"./chevron-down-DMQn8YNS.js";import"./cross-Biqxkz0W.js";import"./PdfViewerSidebar-BRh9uSsT.js";import"./index-cabLRwho.js";import"./index-BF1qraTR.js";import"./index-BZqSoOPp.js";import"./PdfViewerToolbar-Bhsbcv9h.js";import"./Button-CVsxv-I0.js";import"./chevron-right-BqJpObXT.js";import"./Input-DIq0Mf7R.js";import"./search-DqqzOunc.js";import"./spin-CRrAljnP.js";import"./error-9LOJa28H.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4062/03ef46166ab20de56af447c7d583d1465a6cf612/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
