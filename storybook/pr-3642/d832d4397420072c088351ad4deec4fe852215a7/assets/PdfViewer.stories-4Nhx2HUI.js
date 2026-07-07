import{j as r,M as s}from"./iframe-B9KQ9d_Q.js";import{P as p}from"./pdf-viewer-BEiUX2qg.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BAGmPNYd.js";import"./preload-helper-DeuuX8Pw.js";import"./PdfRenderer-B0acftQd.js";import"./index-DjGmCvwN.js";import"./PdfViewer-CfSkYbw1.js";import"./PdfViewer.module.css-CiMUeqqG.js";import"./PdfViewerAnnotationLayer-BPBzjpt6.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DzgT2C5h.js";import"./PdfViewerOutlineSidebar-RZXB7Pdx.js";import"./PdfViewerSidebarHeader-DWbPr5ug.js";import"./useBaseUiId-CACmZoDt.js";import"./useControlled-7mPXTkWJ.js";import"./CompositeRoot-D-Vvy2gc.js";import"./CompositeItem-lvWGvgnE.js";import"./ToolbarRootContext-CDRb2CiM.js";import"./composite-Dkfcd9K6.js";import"./svgIconContainer-Dkipw4BE.js";import"./PdfViewerSearchBar-DaDLaYm3.js";import"./chevron-up--VrikIyD.js";import"./chevron-down-C-NtZAg2.js";import"./cross-CYACTAyc.js";import"./PdfViewerSidebar-Bjekyane.js";import"./index-C7_CeCDa.js";import"./index-DeQVC1y1.js";import"./index-abmL8mI0.js";import"./PdfViewerToolbar-DH2GQi6a.js";import"./Button-CsNzNUJM.js";import"./chevron-right-rd9d2j1S.js";import"./Input-3YBkK_9B.js";import"./search-CLgwBxIh.js";import"./spin-Bu4uCU0T.js";import"./error-aMms0fQH.js";import"./withOsdkMetrics-B8cbL6XT.js";import"./makeExternalStore-foZLPFy5.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
