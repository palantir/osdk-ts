import{j as r,M as s}from"./iframe-BVDCNjcv.js";import{P as p}from"./pdf-viewer-zg1zjfVv.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BdnfOAQI.js";import"./preload-helper-BYyHjn7h.js";import"./PdfViewer-CA5fKD4L.js";import"./index-_ZEFwRG4.js";import"./BasePdfViewer-DHKdRC6p.js";import"./BasePdfViewer.module.css-BdXaf-uD.js";import"./PdfViewerAnnotationLayer-BR7tvC3L.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CwllSwhK.js";import"./PdfViewerOutlineSidebar-CGfDiAKa.js";import"./PdfViewerSidebarHeader-C-uDeG4w.js";import"./useBaseUiId-Bn7tPMyc.js";import"./useControlled-C2Zp9gz_.js";import"./CompositeRoot-CvwfLJXK.js";import"./CompositeItem-DqfwRJk9.js";import"./ToolbarRootContext-CtetOuLM.js";import"./composite-DfTYjTcf.js";import"./svgIconContainer-DE6RIudO.js";import"./PdfViewerSearchBar-D2P7Eeia.js";import"./chevron-up-CnEOastD.js";import"./chevron-down-5NG5qhbV.js";import"./cross-ha5THBWj.js";import"./PdfViewerSidebar-C1effVZf.js";import"./index-CMAvGmQJ.js";import"./index-CiJWuuCz.js";import"./index-BpeKA42d.js";import"./PdfViewerToolbar-BzzXOgbZ.js";import"./Button-ChLPke0x.js";import"./chevron-right-DL4SYBU2.js";import"./Input-D5ZE_3yL.js";import"./search-DoN7C3Ww.js";import"./spin-CtnEJLWa.js";import"./error-CyfM8m9x.js";import"./withOsdkMetrics-vrnHfU6i.js";import"./makeExternalStore-B2YAtvuk.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
