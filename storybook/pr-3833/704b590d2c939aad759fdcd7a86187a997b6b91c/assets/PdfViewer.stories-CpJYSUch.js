import{j as r,M as s}from"./iframe-CE9D4JEg.js";import{P as p}from"./pdf-viewer-B-vAfwPR.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DWjtemtN.js";import"./preload-helper-DZkFqKXe.js";import"./PdfRenderer-hsT6Phf9.js";import"./index-CqAb3zQU.js";import"./PdfViewer-DBvDrJ3L.js";import"./PdfViewer.module.css-47jFRNRV.js";import"./PdfViewerAnnotationLayer-BLrNyiQ5.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CXY032ho.js";import"./PdfViewerOutlineSidebar-CApRZOlL.js";import"./PdfViewerSidebarHeader-DLDbGzu0.js";import"./useBaseUiId-By_k7w7S.js";import"./useControlled-3ExL0cgK.js";import"./CompositeRoot-DIN9yqms.js";import"./CompositeItem-CbXGTBfN.js";import"./ToolbarRootContext-BEi2Iys0.js";import"./composite-D8GuK9Lq.js";import"./svgIconContainer-CzB6UxLW.js";import"./PdfViewerSearchBar-VpQK0lVA.js";import"./chevron-up-BqYYYjuP.js";import"./chevron-down-C7EWI--r.js";import"./cross-CEfizOG4.js";import"./PdfViewerSidebar-Dcyzxbnm.js";import"./index-BrXNTpWP.js";import"./index-C8x2Wal6.js";import"./index-TKpJPc24.js";import"./PdfViewerToolbar-C0wl_ucQ.js";import"./Button-C41nBApG.js";import"./chevron-right-CzgY5iey.js";import"./Input-CP1qtpJz.js";import"./search-Bd6q-htL.js";import"./spin-CK7Glqci.js";import"./error-CQamlZ8D.js";import"./withOsdkMetrics-CFMrDZ49.js";import"./makeExternalStore-Dl3CPFxJ.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
