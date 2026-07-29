import{j as r,M as s}from"./iframe-Tg2fnlVs.js";import{P as p}from"./pdf-viewer-C0BeI7xI.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CUEo2-Zv.js";import"./preload-helper-xsLVBww1.js";import"./PdfRenderer-BR2kq_wp.js";import"./index-B3-1mb1K.js";import"./PdfViewer-DR8tqrZY.js";import"./PdfViewer.module.css-Dl3tnK8i.js";import"./PdfViewerAnnotationLayer-DICNPn7E.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CrooNz0b.js";import"./PdfViewerOutlineSidebar-BewqiHh_.js";import"./PdfViewerSidebarHeader-BsvyxMi0.js";import"./useBaseUiId-D6sRq2bB.js";import"./useControlled-Dvm87Fn4.js";import"./CompositeRoot-BXzs_nCv.js";import"./CompositeItem-DEGMDptb.js";import"./ToolbarRootContext-BUY7sygA.js";import"./composite-DuLfcYDh.js";import"./svgIconContainer-Cp1mUGc0.js";import"./PdfViewerSearchBar-COnisPpp.js";import"./chevron-up-C73GkwVU.js";import"./chevron-down-Bj_a4fCt.js";import"./cross-BZrYWs_D.js";import"./PdfViewerSidebar-yyFNFuOm.js";import"./index-CL7wapu_.js";import"./index-o5uplDD7.js";import"./index-DPwCU7gB.js";import"./PdfViewerToolbar-DoPpdv0Y.js";import"./Button-CiYzxyPU.js";import"./chevron-right-sT8qcncA.js";import"./Input-BPgms8bD.js";import"./search-UK-OniDD.js";import"./spin-CI4RJsDO.js";import"./error-9Ml166dJ.js";import"./withOsdkMetrics-DGs0YjPU.js";import"./makeExternalStore-Y3iyej0D.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
