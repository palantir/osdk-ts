import{j as r,M as s}from"./iframe-vXKa1QMI.js";import{P as p}from"./pdf-viewer-7P3Kv45F.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BcFI-8Pm.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfRenderer-CEJmuS2c.js";import"./index-BZUwKl2C.js";import"./PdfViewer-DDltTAnF.js";import"./PdfViewer.module.css-BoIfmFbn.js";import"./PdfViewerAnnotationLayer-Br4FXqib.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CQwRRwQW.js";import"./PdfViewerOutlineSidebar-ChPKloia.js";import"./PdfViewerSidebarHeader-DnlDAzxJ.js";import"./useBaseUiId-j7NI3ST-.js";import"./useControlled-3uJBVoyi.js";import"./CompositeRoot-4fBd7vEX.js";import"./CompositeItem-RdnTn3rE.js";import"./ToolbarRootContext-cmWIa-Ty.js";import"./composite-B99FTSHr.js";import"./svgIconContainer-BwFoKu1X.js";import"./PdfViewerSearchBar-B14pBLX8.js";import"./chevron-up-3Dyo1jtw.js";import"./chevron-down-TgAoBZZl.js";import"./cross-N9iE7mDZ.js";import"./PdfViewerSidebar-DIxBOVeL.js";import"./index-1kAdlIvE.js";import"./index-vIJqV7GB.js";import"./index-SbXfcVQe.js";import"./PdfViewerToolbar-CNzidNrD.js";import"./Button-iKziWPYX.js";import"./chevron-right-CpCoqVyb.js";import"./Input-uXEt6rMo.js";import"./search-edWvcvDt.js";import"./spin-DfObu2wm.js";import"./error-BEG3c8CZ.js";import"./withOsdkMetrics-BUmKf9Cf.js";import"./makeExternalStore-zpEcE1We.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
