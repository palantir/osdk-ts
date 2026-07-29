import{j as r,M as s}from"./iframe-DNetijtG.js";import{P as p}from"./pdf-viewer-BpGogAAn.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DaZ2dHqK.js";import"./preload-helper-sU92iF6A.js";import"./PdfRenderer-C_KywnSf.js";import"./index-DI0O4qg-.js";import"./PdfViewer-9Th5cIXY.js";import"./PdfViewer.module.css-DQvHPph-.js";import"./PdfViewerAnnotationLayer-Bt5BhHkw.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D9rAuzVr.js";import"./PdfViewerOutlineSidebar-B0eg-esg.js";import"./PdfViewerSidebarHeader-CJa6rPwb.js";import"./useBaseUiId-Ak-3DuY6.js";import"./useControlled-YxlSFc_i.js";import"./CompositeRoot-Byjlj8aL.js";import"./CompositeItem-CLDjlyod.js";import"./ToolbarRootContext-DDPRGDp5.js";import"./composite-C2317CzO.js";import"./svgIconContainer-SoGYuBp4.js";import"./PdfViewerSearchBar-BhuUACIC.js";import"./chevron-up-qn3jCTBy.js";import"./chevron-down-CyTZFakG.js";import"./cross-CGUI5AG7.js";import"./PdfViewerSidebar-BKiM0yqB.js";import"./index-DicHFhjm.js";import"./index-BkBhqNzA.js";import"./index-DHKOddTR.js";import"./PdfViewerToolbar-lEsVt-9B.js";import"./Button-DOSVI_Y5.js";import"./chevron-right-B54gN0Wq.js";import"./Input-F3IXB8Pb.js";import"./search-BXldx6q2.js";import"./spin-DurnEYQz.js";import"./error-C-M3f4ep.js";import"./withOsdkMetrics-N49xkUon.js";import"./makeExternalStore-CvuNyL00.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
