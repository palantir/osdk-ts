import{j as r,M as s}from"./iframe-KOhODaDj.js";import{P as p}from"./pdf-viewer-CjWyw4gi.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CDkhEUss.js";import"./preload-helper-BODknkj-.js";import"./PdfViewer-DjtYry7M.js";import"./index-B0nzDQgS.js";import"./BasePdfViewer-CN51a87J.js";import"./BasePdfViewer.module.css-DzsSchw3.js";import"./PdfViewerAnnotationLayer-Dh2HHsn2.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-uuIq1q7b.js";import"./PdfViewerOutlineSidebar-rxSMj-IX.js";import"./PdfViewerSidebarHeader-C6v0kzp1.js";import"./useBaseUiId-gSHm8V6S.js";import"./useControlled-DJm187qA.js";import"./CompositeRoot-BHx08BV6.js";import"./CompositeItem-KroluAr_.js";import"./ToolbarRootContext-CEqE4F8_.js";import"./composite-C_Vf-kWD.js";import"./svgIconContainer-C65gZPep.js";import"./PdfViewerSearchBar-bsBRbweh.js";import"./chevron-up--5d_pmIU.js";import"./chevron-down-CWcC4j17.js";import"./cross-Dgf421i8.js";import"./PdfViewerSidebar-CFVlqcVT.js";import"./index-Cebj72FH.js";import"./index-DV1hfBzW.js";import"./index-D9daGdR1.js";import"./PdfViewerToolbar-DgopQrJV.js";import"./Button-DhCL6Aji.js";import"./chevron-right-Sh_G8KzE.js";import"./Input-B02ROypI.js";import"./search-BaFhwWB9.js";import"./spin-APNUx_zO.js";import"./error-BU6upqzF.js";import"./withOsdkMetrics-D2FX6zR1.js";import"./makeExternalStore-mEv2XVah.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
