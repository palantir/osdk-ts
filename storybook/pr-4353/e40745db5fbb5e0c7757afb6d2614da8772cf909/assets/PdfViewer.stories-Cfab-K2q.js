import{j as r,M as s}from"./iframe-BYejxj2b.js";import{P as p}from"./pdf-viewer--ROpK-ra.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BNOhxcOE.js";import"./preload-helper-C0rDQy5D.js";import"./PdfViewer-DyklNHia.js";import"./index-iipsf35Q.js";import"./BasePdfViewer-DcHUSYmN.js";import"./BasePdfViewer.module.css-CpXeEvje.js";import"./PdfViewerAnnotationLayer-DvRxEvI2.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Bm1KXcGC.js";import"./PdfViewerOutlineSidebar-DDFSLpXt.js";import"./PdfViewerSidebarHeader-tMk117QW.js";import"./useBaseUiId-C9Oeigog.js";import"./useControlled-C0V-KMju.js";import"./CompositeRoot-C8PLhlUL.js";import"./CompositeItem-Ze_igsRp.js";import"./ToolbarRootContext-BhZB42YH.js";import"./composite-E5tzecJv.js";import"./svgIconContainer-BpdSUco1.js";import"./PdfViewerSearchBar-PZke401C.js";import"./chevron-up-DV43WvDG.js";import"./chevron-down-CRHNnKNO.js";import"./cross-C58IIDJt.js";import"./PdfViewerSidebar-Cq6DLhNk.js";import"./index-CZoFsv0k.js";import"./index-CXPcvEZE.js";import"./index-CPmCN5n5.js";import"./PdfViewerToolbar-DqYX3pwG.js";import"./Button-CuqI5477.js";import"./chevron-right-B4yrMb_Q.js";import"./Input-iw0NWTaR.js";import"./search-DoJ4TrKJ.js";import"./spin-CnAtXhX_.js";import"./error-D3cs_59E.js";import"./withOsdkMetrics-BsRlr_Wc.js";import"./makeExternalStore-BiJsDtWq.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />`}}}};var t,m,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => {
    const {
      object: employee,
      isLoading
    } = useOsdkObject(Employee, MEDIA_EMPLOYEE_PK);
    if (isLoading || !employee?.employeeDocuments) {
      return <div style={{
        height: "600px"
      }}>Loading OSDK media…</div>;
    }
    return <div style={{
      height: "600px"
    }}>
        <PdfViewer media={employee.employeeDocuments} />
      </div>;
  },
  parameters: {
    docs: {
      source: {
        code: \`// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,U as default};
