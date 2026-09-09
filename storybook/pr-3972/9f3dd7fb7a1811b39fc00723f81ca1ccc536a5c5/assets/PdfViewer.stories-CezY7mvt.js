import{j as r,M as s}from"./iframe-BjZw4uZx.js";import{P as p}from"./pdf-viewer-KKK_wJ_b.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Bz4X3DLN.js";import"./preload-helper-ORk2FqAe.js";import"./PdfViewer-qpN974V2.js";import"./index-1W3MQsZX.js";import"./BasePdfViewer-B5OgY1Ie.js";import"./BasePdfViewer.module.css-B4ni5FoZ.js";import"./PdfViewerAnnotationLayer-joXm_CmC.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DgkWK_k0.js";import"./PdfViewerOutlineSidebar-ma5z23AO.js";import"./PdfViewerSidebarHeader-BBOPCm1r.js";import"./useBaseUiId-C8tvPGb8.js";import"./useControlled-CVj57D_o.js";import"./CompositeRoot-B1ME2X-M.js";import"./CompositeItem-aZoPkaZ5.js";import"./ToolbarRootContext-DZ7-AtKR.js";import"./composite-D0Ri5kCB.js";import"./svgIconContainer-BFOOKm-2.js";import"./PdfViewerSearchBar-9WrSRLaU.js";import"./chevron-up-B8gHdAwL.js";import"./chevron-down-D59bxWeC.js";import"./cross-B7IcoVob.js";import"./PdfViewerSidebar-Dq3C-wZE.js";import"./index-DL1T0XSi.js";import"./index-DQXv-LA5.js";import"./index-raVyMjZg.js";import"./PdfViewerToolbar-DP59M6Vj.js";import"./Button-CWwJb2Uz.js";import"./chevron-right-B4vYwNVZ.js";import"./Input-LhLxUdgb.js";import"./search-H7eFoEJT.js";import"./spin-i3g5uS2T.js";import"./error-BcfWkrIR.js";import"./withOsdkMetrics-C2-SGnqg.js";import"./makeExternalStore-NPZJ19CP.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
