import{j as r,M as s}from"./iframe-Bm_G5iDx.js";import{P as p}from"./pdf-viewer-Cf2y6KyE.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BAsgRVsB.js";import"./preload-helper-CUfc8vWr.js";import"./PdfRenderer-CFZudJhb.js";import"./index-BAmggNkh.js";import"./PdfViewer-B-C01mUr.js";import"./PdfViewer.module.css-bqxPsD5v.js";import"./PdfViewerAnnotationLayer-DkfDI3Vd.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C69ufePN.js";import"./PdfViewerOutlineSidebar-D8gzbxFm.js";import"./PdfViewerSidebarHeader-Dzv8GmCd.js";import"./useBaseUiId-CbgYpGct.js";import"./useControlled-BCHomVef.js";import"./CompositeRoot-EomC_6CQ.js";import"./CompositeItem-IegWcQIo.js";import"./ToolbarRootContext-Dxj7jCyQ.js";import"./composite-CATuqAxD.js";import"./svgIconContainer-BnHXU4W_.js";import"./PdfViewerSearchBar-RruEVMTY.js";import"./chevron-up-DYMtus0u.js";import"./chevron-down-IPiASCLZ.js";import"./cross-DJhNhnN_.js";import"./PdfViewerSidebar-B-kycWOS.js";import"./index-BbPclRAn.js";import"./index-Dwdfinsm.js";import"./index-C4IbAVlO.js";import"./PdfViewerToolbar-jENLKhbm.js";import"./Button-BJTsBY7U.js";import"./chevron-right-DjshHSbg.js";import"./Input-AGFS7EAo.js";import"./search-DFrayO2N.js";import"./spin-BKFzF3O2.js";import"./error-ATsLMRCi.js";import"./withOsdkMetrics-D-OjO4gU.js";import"./makeExternalStore-BNOz6mKS.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// Access media from an OSDK object's media reference property
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
        code: \`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,U as default};
