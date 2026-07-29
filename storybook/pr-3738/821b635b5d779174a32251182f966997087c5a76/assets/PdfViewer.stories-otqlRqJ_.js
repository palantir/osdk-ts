import{j as r,M as s}from"./iframe-CL4UessJ.js";import{P as p}from"./pdf-viewer-CpYVJNjb.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DdHmEnxh.js";import"./preload-helper-X9tQ-Ro6.js";import"./PdfRenderer-ALsAyJSF.js";import"./index-CuQscTLS.js";import"./PdfViewer-C2M1Si9o.js";import"./PdfViewer.module.css-ZeWl6Rg4.js";import"./PdfViewerAnnotationLayer-n4zZ62Pg.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D8rInbeg.js";import"./PdfViewerOutlineSidebar-C04UkRZe.js";import"./PdfViewerSidebarHeader-GOa189r7.js";import"./useBaseUiId-C0g9vfON.js";import"./useControlled-C4g4Ro2e.js";import"./CompositeRoot-BiUwxQoz.js";import"./CompositeItem-BJ8h2cBk.js";import"./ToolbarRootContext-YHEW-YfH.js";import"./composite-C9gZWjPR.js";import"./svgIconContainer-CMOMNq3G.js";import"./PdfViewerSearchBar-DlqP1Uzx.js";import"./chevron-up-DfetUFbb.js";import"./chevron-down-CzML4mqe.js";import"./cross-BrJ6ooB2.js";import"./PdfViewerSidebar-C0AJudeK.js";import"./index-Cy3rUIcf.js";import"./index-CZ6Gtb-I.js";import"./index-D5nMUh2o.js";import"./PdfViewerToolbar-DVpqn_Hz.js";import"./Button-DCwXYkIS.js";import"./chevron-right-CtujA3UM.js";import"./Input-CbgCfohB.js";import"./search-CFrkmuc2.js";import"./spin-B6hkCDKN.js";import"./error-DLILtTPf.js";import"./withOsdkMetrics-B0fTd-84.js";import"./makeExternalStore-Bhe8UyWJ.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
