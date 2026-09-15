import{j as n}from"./iframe-BDNIqcwM.js";import{B as e}from"./BasePdfViewer-CXLLTpiy.js";import"./preload-helper-AKgPBeH6.js";import"./index-CxoqJ8Ca.js";import"./BasePdfViewer.module.css-D-wam4DK.js";import"./PdfViewerAnnotationLayer-DYjgGqdJ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CfU3A6uv.js";import"./PdfViewerOutlineSidebar-DWjzfEPe.js";import"./PdfViewerSidebarHeader-Cjr_vBzS.js";import"./useBaseUiId-D6uxKhCZ.js";import"./useControlled-jo7j2Y8W.js";import"./CompositeRoot-CWUeN4IQ.js";import"./CompositeItem-9re6AgtS.js";import"./ToolbarRootContext-BkqYYhP3.js";import"./composite-CjQ-M14e.js";import"./svgIconContainer-YSUGMhqY.js";import"./PdfViewerSearchBar-CkpzgdlO.js";import"./chevron-up-BtnFHI9a.js";import"./chevron-down-B8PeAqOW.js";import"./cross-DSoUlEls.js";import"./PdfViewerSidebar-BzNEl_jM.js";import"./index-DKSVa_Lx.js";import"./index-DYO33UQo.js";import"./index-Dy4KxyPS.js";import"./PdfViewerToolbar-B7GJiQ28.js";import"./Button-DAHfEEi6.js";import"./chevron-right-Bq4gT9hl.js";import"./Input-CGsPuuzg.js";import"./search-B7vNZRvA.js";import"./spin-OYpBNBm1.js";import"./error-CizQVsJR.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4030/4526f0dea9c0d890aa5045d20caf6cbfcf48cf04/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
