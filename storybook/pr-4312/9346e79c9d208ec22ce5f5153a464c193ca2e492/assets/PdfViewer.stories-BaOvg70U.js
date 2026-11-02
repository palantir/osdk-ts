import{j as r,M as s}from"./iframe-DM1KpbCL.js";import{P as p}from"./pdf-viewer-URevvZRU.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CduOpikK.js";import"./preload-helper-B5lE_CeJ.js";import"./PdfViewer-BLlXQV3T.js";import"./index-CcTzWx10.js";import"./BasePdfViewer-D0NB-n9h.js";import"./BasePdfViewer.module.css-BMAndMl6.js";import"./PdfViewerAnnotationLayer-ClC3ukgT.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cu1UHlw9.js";import"./PdfViewerOutlineSidebar-Fc8rr4_t.js";import"./PdfViewerSidebarHeader-DCGekNek.js";import"./useBaseUiId-BS0ydcCd.js";import"./useControlled-BpM5Znsw.js";import"./CompositeRoot-C-13SY6Q.js";import"./CompositeItem-DEphRU8b.js";import"./ToolbarRootContext-kXKFrX_U.js";import"./composite-UHbWR1-V.js";import"./svgIconContainer-D9_cFA2L.js";import"./PdfViewerSearchBar-D62Ufm2H.js";import"./chevron-up-CL4mdyy-.js";import"./chevron-down-B55CqhSV.js";import"./cross-CnFtk43X.js";import"./PdfViewerSidebar-DAezMjVZ.js";import"./index-BzYLadhD.js";import"./index-kvb1enIs.js";import"./index-Zf2bdMMR.js";import"./PdfViewerToolbar-0iIXkt3L.js";import"./Button-DbYUMIvf.js";import"./chevron-right-BYbHC32b.js";import"./Input-rJPz8yLN.js";import"./search-CDaKZsSd.js";import"./spin-BiemMRCk.js";import"./error-BpWcPv0-.js";import"./withOsdkMetrics-Dzlv9-Px.js";import"./makeExternalStore-ZdV9YzEC.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
