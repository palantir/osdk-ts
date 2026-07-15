import{j as r,M as s}from"./iframe-Dtbf3TuU.js";import{P as p}from"./pdf-viewer-DaVqEY_-.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-xqrIvfkj.js";import"./preload-helper-CQu8uCfQ.js";import"./PdfRenderer-Ce6ZlN9i.js";import"./index-EYso11IY.js";import"./PdfViewer-COW4FslP.js";import"./PdfViewer.module.css-yY6WVtdE.js";import"./PdfViewerAnnotationLayer-C0lNcNh7.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BppRPQ_2.js";import"./PdfViewerOutlineSidebar-5F63AniE.js";import"./PdfViewerSidebarHeader-Bm_Bbugp.js";import"./useBaseUiId-DVd3jV5r.js";import"./useControlled-BC2dHnLu.js";import"./CompositeRoot-C6GItd9N.js";import"./CompositeItem-DcWTbhBi.js";import"./ToolbarRootContext-BAxO_wrr.js";import"./composite-CwPVGBWv.js";import"./svgIconContainer-C1p-d_dH.js";import"./PdfViewerSearchBar-GEqHN66V.js";import"./chevron-up-B8bCtRfQ.js";import"./chevron-down-C1BwuCR2.js";import"./cross-DNdqZgG6.js";import"./PdfViewerSidebar-HRfPRPPQ.js";import"./index-C5PeE2rD.js";import"./index-Cwq7Pz9d.js";import"./index-lqXiSb16.js";import"./PdfViewerToolbar-B67WRP6k.js";import"./Button-BDDmjQ5h.js";import"./chevron-right-BttF09XZ.js";import"./Input-CLTlUn9N.js";import"./search-CpfDEfge.js";import"./spin-6oZUALEg.js";import"./error-QzPjrc98.js";import"./withOsdkMetrics-CqqGBMrg.js";import"./makeExternalStore-F_tso8mB.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
