import{j as r,M as s}from"./iframe-CkxgfQeO.js";import{P as p}from"./pdf-viewer-C5b9Wty5.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BTnRY9p6.js";import"./preload-helper-D5D19XNo.js";import"./PdfRenderer-DsBb8QR7.js";import"./index-IOPRRqhI.js";import"./PdfViewer-CDcD_G4s.js";import"./PdfViewer.module.css-Dzpfy5-R.js";import"./PdfViewerAnnotationLayer-DoaNWlkk.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DqtnQ94l.js";import"./PdfViewerOutlineSidebar-DG3BBVTw.js";import"./PdfViewerSidebarHeader-DYUbs5k0.js";import"./useBaseUiId-CoaLnFnK.js";import"./useControlled-DB78SK-c.js";import"./CompositeRoot-B8gOGDMw.js";import"./CompositeItem-BTHTAMQz.js";import"./ToolbarRootContext-Cr1zYvXJ.js";import"./composite-C9gQ7F0R.js";import"./svgIconContainer-BnddIgAA.js";import"./PdfViewerSearchBar-BB6tZ6E9.js";import"./chevron-up-CCRDsj5C.js";import"./chevron-down-aLsddmml.js";import"./cross-CH36hvQf.js";import"./PdfViewerSidebar-C4Cr9_Uf.js";import"./index-B9L6gED-.js";import"./index-CzQUlWmE.js";import"./index-BBrPyGlT.js";import"./PdfViewerToolbar-oFvDpGnF.js";import"./Button-DT56OzjG.js";import"./chevron-right-DNVE9tQW.js";import"./Input-CBK5xZA_.js";import"./search-6LzY9pcR.js";import"./spin-B3M2umzu.js";import"./error-DNZfmN7i.js";import"./withOsdkMetrics-Zaf_KVW8.js";import"./makeExternalStore-B9DKryZa.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
