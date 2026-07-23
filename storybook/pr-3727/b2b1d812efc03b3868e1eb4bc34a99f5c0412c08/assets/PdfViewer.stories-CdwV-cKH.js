import{j as r,M as s}from"./iframe-BbXT0DDw.js";import{P as p}from"./pdf-viewer-D9D1hJkc.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Cvqa65H_.js";import"./preload-helper-eaV1mNfD.js";import"./PdfRenderer-D4-a2oUr.js";import"./index-B2WF_Bz4.js";import"./PdfViewer-BaEKMzoy.js";import"./PdfViewer.module.css-7APu4YMB.js";import"./PdfViewerAnnotationLayer-CJBO_zOx.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-xMFqSI7G.js";import"./PdfViewerOutlineSidebar-BnS95nqf.js";import"./PdfViewerSidebarHeader-CbIXQt2m.js";import"./useBaseUiId-D1Pe3AtR.js";import"./useControlled-C7P20UXk.js";import"./CompositeRoot-BfGO-oTq.js";import"./CompositeItem-DvYz6hSy.js";import"./ToolbarRootContext-dJmq_z35.js";import"./composite-BPu-b4cl.js";import"./svgIconContainer-CJjpcCkC.js";import"./PdfViewerSearchBar-CLTYtYEW.js";import"./chevron-up-DCQdm2vQ.js";import"./chevron-down-DlzvZ4IU.js";import"./cross-DkAT-B8J.js";import"./PdfViewerSidebar-Dnq-WRYw.js";import"./index-C-hobEV_.js";import"./index-CcSoWyRj.js";import"./index-DL1_iZ5Q.js";import"./PdfViewerToolbar-BnFTPDMJ.js";import"./Button-B2cJncoY.js";import"./chevron-right-CbzQ0ZW6.js";import"./Input-D1v8skGZ.js";import"./search-Dbb95ii9.js";import"./spin--aNEwYmg.js";import"./error-CS7KmN1B.js";import"./withOsdkMetrics-Cle2y2cZ.js";import"./makeExternalStore-Bk59v3u3.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
