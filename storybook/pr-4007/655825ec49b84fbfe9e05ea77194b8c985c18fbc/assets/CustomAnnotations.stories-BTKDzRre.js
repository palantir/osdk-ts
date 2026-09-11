import{j as n}from"./iframe-B9P_guYe.js";import{B as e}from"./BasePdfViewer-C0VvbYo0.js";import"./preload-helper-DZKvLzKM.js";import"./index-BmU_yXsT.js";import"./BasePdfViewer.module.css-CSQQ_Cf7.js";import"./PdfViewerAnnotationLayer-DdghZTKq.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Ba8PiwPa.js";import"./PdfViewerOutlineSidebar-2UJ88A9t.js";import"./PdfViewerSidebarHeader-DbQ2cyPX.js";import"./useBaseUiId-4Ig60Xd8.js";import"./useControlled-CCs_p_PA.js";import"./CompositeRoot-DfQ8WP8h.js";import"./CompositeItem-G1VIkMjr.js";import"./ToolbarRootContext-CMDQJiC4.js";import"./composite-0HTyS9cl.js";import"./svgIconContainer-86dgqwTy.js";import"./PdfViewerSearchBar-CerF0zQd.js";import"./chevron-up-BBiulZHL.js";import"./chevron-down-CL_Pf9bS.js";import"./cross-B0jMy4Xj.js";import"./PdfViewerSidebar-CMJqQoeD.js";import"./index-UwB-iCL8.js";import"./index-3EbL4LBn.js";import"./index-CucgTNc9.js";import"./PdfViewerToolbar-bsWYWJEl.js";import"./Button-BKlQWyYX.js";import"./chevron-right-B8UWNrfB.js";import"./Input-CexEAM7S.js";import"./search-_dMlLuUD.js";import"./spin-BFie9xFn.js";import"./error-B_xrvVtR.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4007/655825ec49b84fbfe9e05ea77194b8c985c18fbc/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
