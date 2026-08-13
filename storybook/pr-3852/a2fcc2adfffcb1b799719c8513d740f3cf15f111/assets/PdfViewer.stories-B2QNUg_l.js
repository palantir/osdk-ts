import{j as r,M as s}from"./iframe-CR0jsk8T.js";import{P as p}from"./pdf-viewer-Joatu8kq.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DQuSFIoY.js";import"./preload-helper-CLM-aN-8.js";import"./PdfViewer-Dy4TNg9a.js";import"./index-BXDmefey.js";import"./BasePdfViewer-DbFGx9Pw.js";import"./BasePdfViewer.module.css-Eie-B61z.js";import"./PdfViewerAnnotationLayer-DrxrDgKi.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DN1uSMh_.js";import"./PdfViewerOutlineSidebar-NVYV0VGT.js";import"./PdfViewerSidebarHeader-9c-dvcR4.js";import"./useBaseUiId-C44LpUZ_.js";import"./useControlled-BYmOvdgF.js";import"./CompositeRoot-C2paGdBG.js";import"./CompositeItem-CYqCpyh6.js";import"./ToolbarRootContext-Dw5skxCs.js";import"./composite-NkcHW8Ts.js";import"./svgIconContainer-H7nQkb6n.js";import"./PdfViewerSearchBar-BreOJRmU.js";import"./chevron-up-BZq0qfkI.js";import"./chevron-down-CgS2uuYi.js";import"./cross-C_YRmPKj.js";import"./PdfViewerSidebar-R0eOEZCj.js";import"./index-DeB2XC52.js";import"./index-AF0HW_jU.js";import"./index-CviXfYOE.js";import"./PdfViewerToolbar-B3l-2E9V.js";import"./Button-Cwqeh57g.js";import"./chevron-right-CAZOTtpm.js";import"./Input-BUfDw5Gv.js";import"./search-CBxagsiD.js";import"./spin-DAtXqt9j.js";import"./error-Bqwx5_58.js";import"./withOsdkMetrics-GDpEsgqr.js";import"./makeExternalStore-DmONQ8uz.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
