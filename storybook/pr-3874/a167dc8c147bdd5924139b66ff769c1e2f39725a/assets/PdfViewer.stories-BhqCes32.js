import{j as r,M as s}from"./iframe-De32S9Ga.js";import{P as p}from"./pdf-viewer-Dj827PbW.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C5tBjnoO.js";import"./preload-helper-CnslaRhg.js";import"./PdfViewer-D9ElamJ_.js";import"./index-Bj_BwatX.js";import"./BasePdfViewer-Dz9nO9DA.js";import"./BasePdfViewer.module.css-CFAmoB5w.js";import"./PdfViewerAnnotationLayer-FcL7AOhE.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C855tCEE.js";import"./PdfViewerOutlineSidebar-DtW1-QT-.js";import"./PdfViewerSidebarHeader-mfAZ4T2g.js";import"./useBaseUiId-CbRyPa0L.js";import"./useControlled-NYQbyv_q.js";import"./CompositeRoot-Bysuj5NB.js";import"./CompositeItem-B2LPoskN.js";import"./ToolbarRootContext-CPpFxoM9.js";import"./composite-CbztnelA.js";import"./svgIconContainer-CTp6Tyc8.js";import"./PdfViewerSearchBar-DvATGPJ0.js";import"./chevron-up-CxMhwPt9.js";import"./chevron-down-J7S6Qe54.js";import"./cross-pDSvbI93.js";import"./PdfViewerSidebar-D8EZGwkw.js";import"./index-B2HMeMAA.js";import"./index-BwFeGDU0.js";import"./index-l7crMfe1.js";import"./PdfViewerToolbar-CAYOlGII.js";import"./Button-BDZ6lJNh.js";import"./chevron-right-BBe_Zz9a.js";import"./Input-CEDW6O3n.js";import"./search-098G78gK.js";import"./spin-Dzl0fcoc.js";import"./error-hRM0SKX8.js";import"./withOsdkMetrics-IZ1C7wJE.js";import"./makeExternalStore-DEaEiUV0.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
