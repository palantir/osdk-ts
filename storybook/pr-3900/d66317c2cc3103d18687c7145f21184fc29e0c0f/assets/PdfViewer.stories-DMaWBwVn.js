import{j as r,M as s}from"./iframe-CWeddnom.js";import{P as p}from"./pdf-viewer-Ir0AaXEA.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DavgQkf0.js";import"./preload-helper-P6cBfe2q.js";import"./PdfViewer-DjKol3KU.js";import"./index-Ce_LLk-c.js";import"./BasePdfViewer-HIKJKPPr.js";import"./BasePdfViewer.module.css-BSe85tWh.js";import"./PdfViewerAnnotationLayer-BrNfUSOw.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DzXPiad4.js";import"./PdfViewerOutlineSidebar-CoSoW7NM.js";import"./PdfViewerSidebarHeader-BqOpv3zc.js";import"./useBaseUiId-BHqcFBZd.js";import"./useControlled-D25GPjW5.js";import"./CompositeRoot-tpZuSnwW.js";import"./CompositeItem-cY4WW7Zc.js";import"./ToolbarRootContext-Dr7NuLF0.js";import"./composite-4vKCxbin.js";import"./svgIconContainer-DmSfLyH4.js";import"./PdfViewerSearchBar-CW8CL__A.js";import"./chevron-up-CTn4JIGX.js";import"./chevron-down-KrLWmTY_.js";import"./cross-Dfng7QTU.js";import"./PdfViewerSidebar-CK8r520_.js";import"./index-J0u8aPtF.js";import"./index-C-EhxOhv.js";import"./index-DmTK8ivk.js";import"./PdfViewerToolbar-D73PYS-Q.js";import"./Button-B3SaH4FN.js";import"./chevron-right-CFnibupB.js";import"./Input-DKw_pk-9.js";import"./search-DgtO9tzy.js";import"./spin-CrL-kLch.js";import"./error-B2dkz28B.js";import"./withOsdkMetrics-DJ5t4kKo.js";import"./makeExternalStore-Cr_BtxbS.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
