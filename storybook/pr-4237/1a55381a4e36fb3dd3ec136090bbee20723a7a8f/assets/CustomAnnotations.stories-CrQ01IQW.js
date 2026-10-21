import{j as n}from"./iframe-DFGm32Bw.js";import{B as e}from"./BasePdfViewer-D56XPveb.js";import"./preload-helper-fy9m8Fnq.js";import"./index-DjqFaeTC.js";import"./BasePdfViewer.module.css-C6SODAzT.js";import"./PdfViewerAnnotationLayer-B8ViMWU5.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CD14WgRu.js";import"./PdfViewerOutlineSidebar-DCas0l1f.js";import"./PdfViewerSidebarHeader-CzU4nrp9.js";import"./useBaseUiId-DYKNlNgP.js";import"./useControlled-DGRdFYYN.js";import"./CompositeRoot-Bd-bK81X.js";import"./CompositeItem-BNbv7BXO.js";import"./ToolbarRootContext-8KEPzI9b.js";import"./composite-B4OJQV7f.js";import"./svgIconContainer-D-V_MVwY.js";import"./PdfViewerSearchBar-aS6OuRiT.js";import"./chevron-up-BLN9pzIf.js";import"./chevron-down-PQvYLt7R.js";import"./cross-DnLg4Ct0.js";import"./PdfViewerSidebar-W2raoVln.js";import"./index-CNgLBIA9.js";import"./index-FvgKhH5U.js";import"./index-DyySrusV.js";import"./PdfViewerToolbar-rd_ee85_.js";import"./Button-DZG39NOd.js";import"./chevron-right-Cs0rXLZP.js";import"./Input-DL-Ka-L9.js";import"./search-DNzannB5.js";import"./spin-C1_SLpHi.js";import"./error-Ce5TqXqV.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4237/1a55381a4e36fb3dd3ec136090bbee20723a7a8f/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
