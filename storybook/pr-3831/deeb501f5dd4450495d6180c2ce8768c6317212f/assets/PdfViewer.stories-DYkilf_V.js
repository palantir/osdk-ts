import{j as r,M as s}from"./iframe-pVQp6_80.js";import{P as p}from"./pdf-viewer-awgAIz9-.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-LqgqqxuD.js";import"./preload-helper-DvrEbwMF.js";import"./PdfRenderer-BnCQprqS.js";import"./index-BKHZTTuk.js";import"./PdfViewer-B0BiR9_M.js";import"./PdfViewer.module.css-pxN_e3ZP.js";import"./PdfViewerAnnotationLayer-Cc1fGU8Z.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CS648Ikg.js";import"./PdfViewerOutlineSidebar-DBto7sXq.js";import"./PdfViewerSidebarHeader-cMkUvW2a.js";import"./useBaseUiId-CFh57Y09.js";import"./useControlled-rB5MAIpC.js";import"./CompositeRoot-CAhGGkNE.js";import"./CompositeItem-DLKVePVU.js";import"./ToolbarRootContext-BWr-STqk.js";import"./composite-DXQY7w3G.js";import"./svgIconContainer-CLNzJqq-.js";import"./PdfViewerSearchBar-DwU-ruPF.js";import"./chevron-up-BvTtjA7Q.js";import"./chevron-down-kqlA2gTm.js";import"./cross-p15vEzF4.js";import"./PdfViewerSidebar-6JhjLnkO.js";import"./index-B-tGz8RK.js";import"./index-rPQo9pxM.js";import"./index-BPbZVciS.js";import"./PdfViewerToolbar-B2wLVzvi.js";import"./Button-Cgl5xkj-.js";import"./chevron-right-C-3rv-jf.js";import"./Input-BEUZb4Zo.js";import"./search-DKMeJpmh.js";import"./spin-K2hR5Fns.js";import"./error-DHHv-x7q.js";import"./withOsdkMetrics-CIu58Hun.js";import"./makeExternalStore-CYd-_mYw.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
