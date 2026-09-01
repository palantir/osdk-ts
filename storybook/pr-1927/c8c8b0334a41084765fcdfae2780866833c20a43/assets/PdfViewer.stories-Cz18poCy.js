import{j as r,M as s}from"./iframe-DjJ9fG9k.js";import{P as p}from"./pdf-viewer-BHdNc4Ih.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BDBpReTx.js";import"./preload-helper-CzF3ego9.js";import"./PdfViewer-BJexF-2z.js";import"./index-BUkKlB3h.js";import"./BasePdfViewer-CfD-7mzW.js";import"./BasePdfViewer.module.css-Cr3cd19f.js";import"./PdfViewerAnnotationLayer-B7W_tXgP.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CLsvOOl8.js";import"./PdfViewerOutlineSidebar-D9swwzhF.js";import"./PdfViewerSidebarHeader-DMLBfUZM.js";import"./useBaseUiId-Ci5r9TJ6.js";import"./useControlled-Bn3rrr6o.js";import"./CompositeRoot-ozymVkrC.js";import"./CompositeItem-D6E8WDBw.js";import"./ToolbarRootContext-ShM1dPIH.js";import"./composite-3IcR8GbN.js";import"./svgIconContainer-DVza0T8P.js";import"./PdfViewerSearchBar-BjRCkfOd.js";import"./chevron-up-C73sQ7x-.js";import"./chevron-down-BX7mmNXU.js";import"./cross-BLMtHmrz.js";import"./PdfViewerSidebar-BnKrxIbg.js";import"./index-CKkTwCGI.js";import"./index-DP_nFxdX.js";import"./index-Dnw16Cjy.js";import"./PdfViewerToolbar-CiVSks8v.js";import"./Button-TYrwdaKn.js";import"./chevron-right-mmbqJBzm.js";import"./Input-DC7dCpbq.js";import"./search-DYgrI8Q7.js";import"./spin-Dlxi8kUD.js";import"./error-CPN3xdYh.js";import"./withOsdkMetrics-DtrDT4Gg.js";import"./makeExternalStore-2E9_090X.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
