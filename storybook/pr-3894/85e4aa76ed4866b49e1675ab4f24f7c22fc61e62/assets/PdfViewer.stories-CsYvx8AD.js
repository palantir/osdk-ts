import{j as r,M as s}from"./iframe-71AE2c8s.js";import{P as p}from"./pdf-viewer-DDTVivlB.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BpAEbVma.js";import"./preload-helper-BtlTcUvi.js";import"./PdfViewer-DBPf8kWo.js";import"./index-70-LFm6P.js";import"./BasePdfViewer-BVxufJje.js";import"./BasePdfViewer.module.css-xYRmcKnU.js";import"./PdfViewerAnnotationLayer-AINGVuhP.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BsV8UDMU.js";import"./PdfViewerOutlineSidebar-BmJdFoYM.js";import"./PdfViewerSidebarHeader-CDBSwgaO.js";import"./useBaseUiId-koFcKlW2.js";import"./useControlled-ARtkj8_v.js";import"./CompositeRoot-1uvFi0ie.js";import"./CompositeItem-Cu549WoE.js";import"./ToolbarRootContext-lpwl76Za.js";import"./composite-CJjbOeLp.js";import"./svgIconContainer-CQVZ0EfL.js";import"./PdfViewerSearchBar-ZkE41Nr9.js";import"./chevron-up-C7qYKxeh.js";import"./chevron-down-BOqQXOX9.js";import"./cross-DPU8k9PA.js";import"./PdfViewerSidebar-CegHR-Ul.js";import"./index-CRRe-iJL.js";import"./index-_yJiFnLU.js";import"./index-C_ZG4zPp.js";import"./PdfViewerToolbar-CDFthV4S.js";import"./Button-NFl_FDQS.js";import"./chevron-right-B5mPn8aP.js";import"./Input-BTOTZdkr.js";import"./search-DRjn4zmO.js";import"./spin-VooWeWAl.js";import"./error-qex0YiDZ.js";import"./withOsdkMetrics-TK9LRg4L.js";import"./makeExternalStore-Bv5nMmxN.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
