import{j as r,M as s}from"./iframe-jF_GefZe.js";import{P as p}from"./pdf-viewer-Ctwz7QeR.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Lb6GC5bx.js";import"./preload-helper-ax3rxsHF.js";import"./PdfRenderer-DXDdhjXo.js";import"./index-DitLc0z5.js";import"./PdfViewer-yXfGdlw5.js";import"./PdfViewer.module.css-H3kMa3lI.js";import"./PdfViewerAnnotationLayer-ChIwY_CP.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Sy2BzfAz.js";import"./PdfViewerOutlineSidebar-BQ8NRcea.js";import"./PdfViewerSidebarHeader-BRVL5lmF.js";import"./useBaseUiId-DKzOiOT9.js";import"./useControlled-DiS2bKo-.js";import"./CompositeRoot-UzNdGzQp.js";import"./CompositeItem-D9lMUzCF.js";import"./ToolbarRootContext-DldUqbwa.js";import"./composite-CtM82JIl.js";import"./svgIconContainer-C0F2aC1p.js";import"./PdfViewerSearchBar-DUeCRpKA.js";import"./chevron-up-DPf4WoLb.js";import"./chevron-down-8rc7edZ_.js";import"./cross-VCektVnL.js";import"./PdfViewerSidebar-3tUHy2ea.js";import"./index-CiE6yYJO.js";import"./index-BghPQzz8.js";import"./index-D6U5yBjg.js";import"./PdfViewerToolbar-Bsw5rOSL.js";import"./Button-0Mscwedl.js";import"./chevron-right-D7Np8DWu.js";import"./Input-CmBmi_9h.js";import"./search-B_vtsGCI.js";import"./spin-Bcb_miy4.js";import"./error-C-ncpnxT.js";import"./withOsdkMetrics-CO8nMfPN.js";import"./makeExternalStore-D5-uy0cS.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
