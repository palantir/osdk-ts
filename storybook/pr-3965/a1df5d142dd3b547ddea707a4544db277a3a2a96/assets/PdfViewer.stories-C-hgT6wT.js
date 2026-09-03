import{j as r,M as s}from"./iframe-czm1xubf.js";import{P as p}from"./pdf-viewer-DDoGYWei.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DXxSoKmx.js";import"./preload-helper-BGUEigPd.js";import"./PdfViewer-BMsg_yg8.js";import"./index-_fZ9c0fg.js";import"./BasePdfViewer-CfeO9nnO.js";import"./BasePdfViewer.module.css-mhQcNqZx.js";import"./PdfViewerAnnotationLayer-BJKWdoj7.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DHKY3bII.js";import"./PdfViewerOutlineSidebar-BaUefc4I.js";import"./PdfViewerSidebarHeader-AwmnqBZO.js";import"./useBaseUiId-BS68w5je.js";import"./useControlled-C5Jpqy1f.js";import"./CompositeRoot-C-HaCCjF.js";import"./CompositeItem-BpDVMI5W.js";import"./ToolbarRootContext-DUZDki5d.js";import"./composite-B592Vhi6.js";import"./svgIconContainer-E3yOYGsj.js";import"./PdfViewerSearchBar-BfS2F5If.js";import"./chevron-up-CDQn7NQn.js";import"./chevron-down-WwCXMtNu.js";import"./cross-BQAzUdVL.js";import"./PdfViewerSidebar-j7SIydy7.js";import"./index-BSuxyzBF.js";import"./index-DfcivzEs.js";import"./index-yWvVzDbE.js";import"./PdfViewerToolbar-Bk58Sipm.js";import"./Button-BRqFWopk.js";import"./chevron-right-BL4IjU0w.js";import"./Input-DgUpGPn-.js";import"./search-UypY9bAA.js";import"./spin-lW_usTyU.js";import"./error-DWSVNtwO.js";import"./withOsdkMetrics-C-yijIYr.js";import"./makeExternalStore-BA14Lxn7.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
