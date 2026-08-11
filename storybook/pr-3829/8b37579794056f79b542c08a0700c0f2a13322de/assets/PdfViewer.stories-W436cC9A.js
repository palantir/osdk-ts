import{j as r,M as s}from"./iframe-BmMBMHjI.js";import{P as p}from"./pdf-viewer-BGQtKCZ8.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BV83dUlU.js";import"./preload-helper-wzQkPQkq.js";import"./PdfRenderer-Ofzebebj.js";import"./index-B599Nl-W.js";import"./PdfViewer-DwEM7A19.js";import"./PdfViewer.module.css-BaMOv3He.js";import"./PdfViewerAnnotationLayer-DUXi5GCo.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DiqnA5DB.js";import"./PdfViewerOutlineSidebar-DsZK0A1I.js";import"./PdfViewerSidebarHeader-s13hJ5PV.js";import"./useBaseUiId-BHpwAgpt.js";import"./useControlled-DfCV0PJg.js";import"./CompositeRoot-Dz9v_2m_.js";import"./CompositeItem-DqqLZlu_.js";import"./ToolbarRootContext-DGVWKOqx.js";import"./composite-DSlcQFOp.js";import"./svgIconContainer-BQffYzRd.js";import"./PdfViewerSearchBar-Cq1SCh7l.js";import"./chevron-up-CripzDyt.js";import"./chevron-down-D3dzWqXW.js";import"./cross-B9gM567t.js";import"./PdfViewerSidebar-B-dnUGnz.js";import"./index-C-Jg4LdO.js";import"./index-Ebkov8ab.js";import"./index-DG25GMXZ.js";import"./PdfViewerToolbar-B57heRiO.js";import"./Button-B9Rc1kKc.js";import"./chevron-right-Bd3AvNtb.js";import"./Input-C23cy_6N.js";import"./search-D8XOPKVg.js";import"./spin-BjXg-nAw.js";import"./error-Dmt4lvM1.js";import"./withOsdkMetrics-CY55LUs5.js";import"./makeExternalStore-CAgM2Mvg.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
