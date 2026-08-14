import{j as r,M as s}from"./iframe-DPKjJbUl.js";import{P as p}from"./pdf-viewer-BhJ_lQJX.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Bhh4P98r.js";import"./preload-helper-jysXR-to.js";import"./PdfViewer-C15MQRV0.js";import"./index-2SPkUawk.js";import"./BasePdfViewer-CZiELCdx.js";import"./BasePdfViewer.module.css-BmRXj5Du.js";import"./PdfViewerAnnotationLayer-DG6Y6fbA.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DiTjoHry.js";import"./PdfViewerOutlineSidebar-LG8xuAsF.js";import"./PdfViewerSidebarHeader-DLIauQQt.js";import"./useBaseUiId-CpCoqI7r.js";import"./useControlled-36BIvyhs.js";import"./CompositeRoot-D3LUEy2j.js";import"./CompositeItem-C1vm5CBx.js";import"./ToolbarRootContext-BNVI8n48.js";import"./composite-4w9rumvd.js";import"./svgIconContainer-DcOBBk2S.js";import"./PdfViewerSearchBar-D7yX44gJ.js";import"./chevron-up-DsexfWUQ.js";import"./chevron-down-CkO13R5T.js";import"./cross-Bur9aTxF.js";import"./PdfViewerSidebar-BR62O5kr.js";import"./index-CazPboEE.js";import"./index-BJOf7s-T.js";import"./index-BHZ9rsvc.js";import"./PdfViewerToolbar-CiZP9PBJ.js";import"./Button-DhDj0z4t.js";import"./chevron-right-BAIql0fX.js";import"./Input-Cp0wF4SO.js";import"./search-CfvDmUdq.js";import"./spin-DPgM6PAX.js";import"./error-Cbkkosws.js";import"./withOsdkMetrics-V_4YWEt4.js";import"./makeExternalStore-BrJQqJjN.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
