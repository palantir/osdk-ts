import{j as r,M as s}from"./iframe-CaT_SB1N.js";import{P as p}from"./pdf-viewer-yxoXHY-D.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Ds18607Z.js";import"./preload-helper-BPrtRX9r.js";import"./PdfRenderer-DPgY6ewZ.js";import"./index-Dd6LgUAX.js";import"./PdfViewer-CRcBsUic.js";import"./PdfViewer.module.css-BeAZm8ry.js";import"./PdfViewerAnnotationLayer-CjATHlJP.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BWI9Y4M4.js";import"./PdfViewerOutlineSidebar-5Ubr0vAm.js";import"./PdfViewerSidebarHeader-I5e2hf0t.js";import"./useBaseUiId-CvmHPMet.js";import"./useControlled-Fy1hnDi2.js";import"./CompositeRoot-JRqz_Eg-.js";import"./CompositeItem-C1Yswmxi.js";import"./ToolbarRootContext-BobQvyh-.js";import"./composite-5peG0ZaO.js";import"./svgIconContainer-Bz8Ma6vE.js";import"./PdfViewerSearchBar-Bfu0eNGo.js";import"./chevron-up-D3ecOTfb.js";import"./chevron-down-CJo4dMXj.js";import"./cross-BWOJYHQ2.js";import"./PdfViewerSidebar-CmQvyrTJ.js";import"./index-Clp_coQb.js";import"./index-Sztf62uh.js";import"./index-CGIYb_6P.js";import"./PdfViewerToolbar-BUrrH-Yl.js";import"./Button-BkKNJWx6.js";import"./chevron-right-C1lfK7YD.js";import"./Input-B2ntkDdJ.js";import"./search-CPBZ1v0m.js";import"./spin-BHLIPw7m.js";import"./error-Ca_B-WSi.js";import"./withOsdkMetrics-3xHWN_Ge.js";import"./makeExternalStore-CruiM0F1.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
