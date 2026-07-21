import{j as r,M as s}from"./iframe-Oyh7YWVy.js";import{P as p}from"./pdf-viewer-BUkAzT7x.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-jPrEUmXV.js";import"./preload-helper-DzjYghL3.js";import"./PdfRenderer-CovGBUYH.js";import"./index-xEo1ZlxZ.js";import"./PdfViewer-BNQtAcrP.js";import"./PdfViewer.module.css-aXIVTcUY.js";import"./PdfViewerAnnotationLayer-cMVYcagA.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-9-GBVLMb.js";import"./PdfViewerOutlineSidebar-3c-4KLWa.js";import"./PdfViewerSidebarHeader-uOrI7q3M.js";import"./useBaseUiId-BvyYcN2c.js";import"./useControlled-CqqqXdoU.js";import"./CompositeRoot-Bu6ta1jK.js";import"./CompositeItem-9J1_-fS5.js";import"./ToolbarRootContext-BaOGvdf2.js";import"./composite-_OL6DVDU.js";import"./svgIconContainer-DOss5Ez0.js";import"./PdfViewerSearchBar-TnDtxjjE.js";import"./chevron-up-C8TkAZ1e.js";import"./chevron-down-DAtbsfww.js";import"./cross-D3VIzmhf.js";import"./PdfViewerSidebar-CRF5flHP.js";import"./index-Cu_y1ZLF.js";import"./index-Cc89UydO.js";import"./index-DP-E86sA.js";import"./PdfViewerToolbar-Gv9LkPR9.js";import"./Button-DeDouW8J.js";import"./chevron-right-CG7qNkex.js";import"./Input-Bv50XYYd.js";import"./search-LRAlq_kr.js";import"./spin-DPgy-Cm_.js";import"./error-zQ5jpS7E.js";import"./withOsdkMetrics-p9AruliU.js";import"./makeExternalStore-BSTQoVfL.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
