import{j as r,M as s}from"./iframe-GWtObrnm.js";import{P as p}from"./pdf-viewer-CqfBTfzl.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CcIfhRMD.js";import"./preload-helper-BWY60TXQ.js";import"./PdfViewer-DfmqLWjw.js";import"./index-BwNH4hN0.js";import"./BasePdfViewer-DWbfVmjX.js";import"./BasePdfViewer.module.css-ZecQ0o8y.js";import"./PdfViewerAnnotationLayer-DlRgwLBi.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-33Ou5H69.js";import"./PdfViewerOutlineSidebar-CZ0eB2Ik.js";import"./PdfViewerSidebarHeader-fSnMRGNz.js";import"./useBaseUiId-B5mFb3Gq.js";import"./useControlled-Db3BVUkn.js";import"./CompositeRoot-BdqfMAHG.js";import"./CompositeItem-BEBiorcp.js";import"./ToolbarRootContext-BQ6mFAZw.js";import"./composite-BX2E-JQE.js";import"./svgIconContainer-C5I--NmN.js";import"./PdfViewerSearchBar-DC2tqIRt.js";import"./chevron-up-DuVBadab.js";import"./chevron-down-RsutKJrE.js";import"./cross-_OeeVUkl.js";import"./PdfViewerSidebar-DZRLcM1Q.js";import"./index-CTogg8xs.js";import"./index-7rbFwBSi.js";import"./index-srDgigbb.js";import"./PdfViewerToolbar-DM2Zniaf.js";import"./Button-D7JIFKo-.js";import"./chevron-right-CdXv3xxb.js";import"./Input-DbTcmmlC.js";import"./search-DFtnP2n3.js";import"./spin-ozZsVVc3.js";import"./error-DkSINVNd.js";import"./withOsdkMetrics-BdpD7DOf.js";import"./makeExternalStore-DZ29l_q8.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
