import{j as r,M as s}from"./iframe-CDIPB7O4.js";import{P as p}from"./pdf-viewer-y_SM7YzQ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C1gwhqf1.js";import"./preload-helper-DWohjKyq.js";import"./PdfViewer-Bq42hMI8.js";import"./index-DpqBc055.js";import"./BasePdfViewer-Bp7t5w85.js";import"./BasePdfViewer.module.css-BnSubxiX.js";import"./PdfViewerAnnotationLayer-DbltnrIH.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Pg6MT0xi.js";import"./PdfViewerOutlineSidebar-CewMRE_g.js";import"./PdfViewerSidebarHeader-D8qgvoB8.js";import"./useBaseUiId-C53ArP71.js";import"./useControlled-OIS9RNuC.js";import"./CompositeRoot-BtvxideB.js";import"./CompositeItem-DHFrcPLh.js";import"./ToolbarRootContext-XxXzxguL.js";import"./composite-DJpplRBW.js";import"./svgIconContainer-CpRq1kzn.js";import"./PdfViewerSearchBar-DgNigu_g.js";import"./chevron-up-VQPOSyFv.js";import"./chevron-down-DWvOUDyV.js";import"./cross-DWpFnAxd.js";import"./PdfViewerSidebar-CzRvevbh.js";import"./index-DDzNSFgX.js";import"./index-CyMDaR8V.js";import"./index-CKl1c7mw.js";import"./PdfViewerToolbar-Sor6lJoA.js";import"./Button-1JczBYxA.js";import"./chevron-right-D1fODD7r.js";import"./Input-B0582SQt.js";import"./search-CSd5Haqi.js";import"./spin-Dd9YoLMb.js";import"./error-Q-7f-CPI.js";import"./withOsdkMetrics-DDUsb1yp.js";import"./makeExternalStore-_11RJNTd.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
