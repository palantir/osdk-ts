import{j as r,M as s}from"./iframe-ChVPmkYp.js";import{P as p}from"./pdf-viewer-DqtoZxdu.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CrEP78u_.js";import"./preload-helper-jbV1HaAE.js";import"./PdfRenderer-D8uLuoHx.js";import"./index-Dfx1UfXH.js";import"./PdfViewer-D8H0oV-Q.js";import"./PdfViewer.module.css-DL8c6A1Q.js";import"./PdfViewerAnnotationLayer-Dci_Yvc-.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Dot3VVDR.js";import"./PdfViewerOutlineSidebar-C94ki1KI.js";import"./PdfViewerSidebarHeader-DU9_OEtC.js";import"./useBaseUiId-RI_mTyEl.js";import"./useControlled-CeVHUzb6.js";import"./CompositeRoot-CS54gKjo.js";import"./CompositeItem-BRVs3V1O.js";import"./ToolbarRootContext-BkI8pu11.js";import"./composite-uKN5GTPZ.js";import"./svgIconContainer-BmCqI7gA.js";import"./PdfViewerSearchBar-ClwV6I1G.js";import"./chevron-up-yIfhgSUO.js";import"./chevron-down-DD8cifJj.js";import"./cross-AMwzmsFp.js";import"./PdfViewerSidebar-DAxjOczQ.js";import"./index-CMHuiwLz.js";import"./index-BIQEV1z8.js";import"./index-Ct8PPI2V.js";import"./PdfViewerToolbar-BhyhwdhD.js";import"./Button-BsTIeQ16.js";import"./chevron-right-9aTvZAQ_.js";import"./Input-3RD0Ojm7.js";import"./search-BsrdhH6y.js";import"./spin-I6QCi8Ow.js";import"./error-JTe4qU1R.js";import"./withOsdkMetrics-Ck8R0SUE.js";import"./makeExternalStore-Bfbb1GZW.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
