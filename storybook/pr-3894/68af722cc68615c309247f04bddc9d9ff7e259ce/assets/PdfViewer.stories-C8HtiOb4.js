import{j as r,M as s}from"./iframe-_RccL5V-.js";import{P as p}from"./pdf-viewer-BNcG7fWT.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Dz6SNuYD.js";import"./preload-helper-DD9OvIIK.js";import"./PdfViewer-CyY2Tmap.js";import"./index-C6hccgOF.js";import"./BasePdfViewer-VGGBih9c.js";import"./BasePdfViewer.module.css-CVZsp-rE.js";import"./PdfViewerAnnotationLayer-CffUGarn.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CzcPuqD4.js";import"./PdfViewerOutlineSidebar-DlWbc7-v.js";import"./PdfViewerSidebarHeader-DwFULT4d.js";import"./useBaseUiId-DKx-HA2j.js";import"./useControlled-CcGBD7ay.js";import"./CompositeRoot-BJ8Dc2iA.js";import"./CompositeItem-CyjZ1orr.js";import"./ToolbarRootContext-DPDAzzNp.js";import"./composite-DmZi_mQu.js";import"./svgIconContainer-Dkm7spTV.js";import"./PdfViewerSearchBar-CRk5Ur7Z.js";import"./chevron-up-BwbmfFw4.js";import"./chevron-down-D0EZBNiO.js";import"./cross-CaF5yBdq.js";import"./PdfViewerSidebar-CzGE7UD4.js";import"./index-Bb5kSeb4.js";import"./index-C5klxPP6.js";import"./index-Cv-DuiVI.js";import"./PdfViewerToolbar-ClFMp9qo.js";import"./Button-CqbbN-n3.js";import"./chevron-right-B2LRmLN-.js";import"./Input-BrtWACOD.js";import"./search-90zJh5kA.js";import"./spin-B1Cz7Y2z.js";import"./error-DOBNWCIr.js";import"./withOsdkMetrics-CTkC1llm.js";import"./makeExternalStore-CPjz00Mq.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
