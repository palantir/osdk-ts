import{j as r,M as s}from"./iframe-DLgN9t5v.js";import{P as p}from"./pdf-viewer-B8N8kCeW.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DNZ5pvd0.js";import"./preload-helper-GQQxIkh6.js";import"./PdfRenderer-fnw-25Vj.js";import"./index-v3g8ifCJ.js";import"./PdfViewer-DrW2ZWjC.js";import"./PdfViewer.module.css-CQVB7sfl.js";import"./PdfViewerAnnotationLayer-AxGvTYD6.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B10VAUAj.js";import"./PdfViewerOutlineSidebar-C8BXMLU9.js";import"./PdfViewerSidebarHeader-Ci7fyE55.js";import"./useBaseUiId-Dpa6Beos.js";import"./useControlled-DT8eUeYS.js";import"./CompositeRoot-D-6TOrEl.js";import"./CompositeItem-Cn-Qie6A.js";import"./ToolbarRootContext-CHwAKDGY.js";import"./composite-C2s2hLKa.js";import"./svgIconContainer-B6EElgGO.js";import"./PdfViewerSearchBar-BwJgq8c4.js";import"./chevron-up-DtwRGZVG.js";import"./chevron-down-DnTpC6Sk.js";import"./cross-CzHPX12u.js";import"./PdfViewerSidebar-DNSBkDOM.js";import"./index-l9c4hdaB.js";import"./index-BM-l2K5c.js";import"./index-a1A_OxAE.js";import"./PdfViewerToolbar-D67-QL2s.js";import"./Button-BfnbSWIb.js";import"./chevron-right-CNWNgdtm.js";import"./Input-b1uAx6Zz.js";import"./search-Jp1XmHuj.js";import"./spin-CbPQAj2T.js";import"./error-DMFq-J5M.js";import"./withOsdkMetrics-DBL8VqE1.js";import"./makeExternalStore-5Xs92RZ7.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
