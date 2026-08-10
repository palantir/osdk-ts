import{j as r,M as s}from"./iframe-B70S6Lmv.js";import{P as p}from"./pdf-viewer-ZQGJ9aeU.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-geJzqFvz.js";import"./preload-helper-DvqZs_Ee.js";import"./PdfRenderer-CLOozLd3.js";import"./index-DWnMAI4T.js";import"./PdfViewer-BBvHolTa.js";import"./PdfViewer.module.css-PBpSRMNJ.js";import"./PdfViewerAnnotationLayer-ikY7MOF2.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-SDcFuOoA.js";import"./PdfViewerOutlineSidebar-asR6-J7J.js";import"./PdfViewerSidebarHeader-Cu1JaMIA.js";import"./useBaseUiId-EwZnzvJa.js";import"./useControlled-BYkqALsw.js";import"./CompositeRoot-CagFpgZT.js";import"./CompositeItem-BVQtW5gx.js";import"./ToolbarRootContext-CMGSy6ZS.js";import"./composite-DkMtiPjX.js";import"./svgIconContainer-DCrmifFa.js";import"./PdfViewerSearchBar-CzZP1gq2.js";import"./chevron-up-DBQCWLOx.js";import"./chevron-down-DGeK32yC.js";import"./cross-RQeYgE-5.js";import"./PdfViewerSidebar-xTgN4g_5.js";import"./index-BhkemeNm.js";import"./index-CuOP0KH2.js";import"./index-BKhiojeG.js";import"./PdfViewerToolbar-K30sOoCj.js";import"./Button-ChkfdyYN.js";import"./chevron-right-C_KTtejR.js";import"./Input-aN0JqfYJ.js";import"./search-BA089tRt.js";import"./spin-BkLbA5HC.js";import"./error-B37gQfOZ.js";import"./withOsdkMetrics-DB3VOG4-.js";import"./makeExternalStore-BEhTvj2Q.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
