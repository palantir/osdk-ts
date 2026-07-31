import{j as r,M as s}from"./iframe-BO5nIFL0.js";import{P as p}from"./pdf-viewer-BOWeeFpw.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-ABhdIa78.js";import"./preload-helper-Byzzz28m.js";import"./PdfRenderer-DA2lTInI.js";import"./index-35ki7-Fy.js";import"./PdfViewer-BmXdwB9k.js";import"./PdfViewer.module.css-wJgKz37l.js";import"./PdfViewerAnnotationLayer-B6_Gs3jD.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-0YJ4RiVY.js";import"./PdfViewerOutlineSidebar-C6jbMfr8.js";import"./PdfViewerSidebarHeader-B_8ojick.js";import"./useBaseUiId-WJQc9a5f.js";import"./useControlled-BymPsR7w.js";import"./CompositeRoot-C864O1R6.js";import"./CompositeItem-B_e5r9wc.js";import"./ToolbarRootContext-DfhUwAFa.js";import"./composite-DHPIcUre.js";import"./svgIconContainer-CCohatq7.js";import"./PdfViewerSearchBar-Dz1JfBAr.js";import"./chevron-up-Hu91lzFR.js";import"./chevron-down-dkXODqVq.js";import"./cross-DB2PwsTQ.js";import"./PdfViewerSidebar-CSxtQS_T.js";import"./index-BUXFO2wu.js";import"./index-BAvGYYuM.js";import"./index-CnZy_Djg.js";import"./PdfViewerToolbar-BUW6zRP6.js";import"./Button-DbsXRm21.js";import"./chevron-right-CH7Njsgd.js";import"./Input-CbgheE8R.js";import"./search-D6UctYzP.js";import"./spin-sXOefo6p.js";import"./error-ZVb7iWyg.js";import"./withOsdkMetrics-BH7Yc5xr.js";import"./makeExternalStore-CZCTIsA8.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
