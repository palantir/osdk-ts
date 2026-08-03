import{j as r,M as s}from"./iframe-CDM8VvCL.js";import{P as p}from"./pdf-viewer-Cp5825tq.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-SNYM4Phn.js";import"./preload-helper-DfBWA75O.js";import"./PdfRenderer-BrEMoYMQ.js";import"./index-C6PbldxU.js";import"./PdfViewer-DoRPj5-o.js";import"./PdfViewer.module.css-Dpm7-pvA.js";import"./PdfViewerAnnotationLayer-Bkg1hLNA.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Dc1TzRdm.js";import"./PdfViewerOutlineSidebar-B3lEnZ1E.js";import"./PdfViewerSidebarHeader-jYElk3Xf.js";import"./useBaseUiId-YyZMVoz3.js";import"./useControlled-CPS_mZpC.js";import"./CompositeRoot-Dy6hXCh-.js";import"./CompositeItem-DG32YQLD.js";import"./ToolbarRootContext-eNrqlMGW.js";import"./composite-BMzBsQCY.js";import"./svgIconContainer-C1O7d22_.js";import"./PdfViewerSearchBar-DzQcbyFx.js";import"./chevron-up-CVZUSTWY.js";import"./chevron-down-GK8uglpz.js";import"./cross-DMe_NFrB.js";import"./PdfViewerSidebar-DEFSPBU0.js";import"./index-C_gjknLZ.js";import"./index-C2c3YLny.js";import"./index-DgkciYYF.js";import"./PdfViewerToolbar-P0vvVudb.js";import"./Button-Dow9ecKk.js";import"./chevron-right-RnMF_1Pw.js";import"./Input-B__e197v.js";import"./search-ChMgyiyS.js";import"./spin-nQpcba5f.js";import"./error-BLTG8w8a.js";import"./withOsdkMetrics-C30IttKx.js";import"./makeExternalStore-DhNYhl9Y.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
