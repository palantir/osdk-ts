import{j as r,M as s}from"./iframe-BiAp7qlL.js";import{P as p}from"./pdf-viewer-DVRUw8jm.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DAzaIBUy.js";import"./preload-helper-JVo6734q.js";import"./PdfRenderer-3dNe37J-.js";import"./index-CQcFOWil.js";import"./PdfViewer-DykPtej1.js";import"./PdfViewer.module.css-BHw72d2b.js";import"./PdfViewerAnnotationLayer-DeUBTezd.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DONwnYWl.js";import"./PdfViewerOutlineSidebar-BvSto1rk.js";import"./PdfViewerSidebarHeader-B8HhmGYs.js";import"./useBaseUiId-CjAQKvu1.js";import"./useControlled-B36afOR9.js";import"./CompositeRoot-onhq8iX4.js";import"./CompositeItem-CI_PM_Hq.js";import"./ToolbarRootContext-CcrZckfO.js";import"./composite-p19Fe2tx.js";import"./svgIconContainer-COEsHZDV.js";import"./PdfViewerSearchBar-B-RBQuCk.js";import"./chevron-up-7UmK-0oV.js";import"./chevron-down-5c5dpeJJ.js";import"./cross-BOGPXBcz.js";import"./PdfViewerSidebar-CzCaSgAb.js";import"./index-B_GaAJkw.js";import"./index-BqaYgD8L.js";import"./index-D0zp2Plk.js";import"./PdfViewerToolbar-BZceHoV-.js";import"./Button-Cy-uz3uQ.js";import"./chevron-right-DOLYfUIp.js";import"./Input-C8B9L3eu.js";import"./minus-fB-_tNDC.js";import"./search-BYg1Y9fB.js";import"./spin-C37FouS5.js";import"./error-uDToQwnv.js";import"./withOsdkMetrics-Bq8nKD0e.js";import"./makeExternalStore-BD9yZY-5.js";const W={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const X=["Default"];export{o as Default,X as __namedExportsOrder,W as default};
