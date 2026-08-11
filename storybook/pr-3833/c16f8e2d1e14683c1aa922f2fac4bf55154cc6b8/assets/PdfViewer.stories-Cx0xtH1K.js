import{j as r,M as s}from"./iframe-acbxn-f7.js";import{P as p}from"./pdf-viewer-Dtoy7bhn.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DCCCLZJR.js";import"./preload-helper-fbPQYzet.js";import"./PdfRenderer-BA4B3m5r.js";import"./index-CVPAqU1b.js";import"./PdfViewer-B7_50fin.js";import"./PdfViewer.module.css-DG2ycMu1.js";import"./PdfViewerAnnotationLayer-CoaBpYGz.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-1xUALwbq.js";import"./PdfViewerOutlineSidebar-CwjJ8PmK.js";import"./PdfViewerSidebarHeader-Ccsa9eRU.js";import"./useBaseUiId-CdtAIfTS.js";import"./useControlled-GOo3Sud3.js";import"./CompositeRoot-CJQRTGZO.js";import"./CompositeItem-C-TpVr46.js";import"./ToolbarRootContext-DhAyKrZU.js";import"./composite-CPBbATn-.js";import"./svgIconContainer-DRdEcW3D.js";import"./PdfViewerSearchBar-BWi9YDhV.js";import"./chevron-up-9Zh49hXt.js";import"./chevron-down-fLJV3lSr.js";import"./cross-BW0HBlIL.js";import"./PdfViewerSidebar-BOyBLOOg.js";import"./index-7FxVYwUR.js";import"./index-D440U2lf.js";import"./index-DqqbpueN.js";import"./PdfViewerToolbar-CmQ46anL.js";import"./Button-1BzMXgMp.js";import"./chevron-right-D96-gueT.js";import"./Input-BjbaQoWk.js";import"./search-DiYKFhHE.js";import"./spin-B9z7t5c-.js";import"./error-RYjU87Ko.js";import"./withOsdkMetrics-DopriMje.js";import"./makeExternalStore-B4WBQrGe.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
