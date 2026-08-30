import{j as r,M as s}from"./iframe-CpMx7Aup.js";import{P as p}from"./pdf-viewer-ZRxPehEj.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-a6g-bn5S.js";import"./preload-helper-CoTSq2F1.js";import"./PdfViewer-Dvsm-h56.js";import"./index-CxmY32cc.js";import"./BasePdfViewer-DHNdasT9.js";import"./BasePdfViewer.module.css-_WId63o_.js";import"./PdfViewerAnnotationLayer-sYGghVCa.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-wETDf613.js";import"./PdfViewerOutlineSidebar-C-7ia1VT.js";import"./PdfViewerSidebarHeader-DAgkWr3g.js";import"./useBaseUiId-BekKaTSH.js";import"./useControlled-wTvX_DQ4.js";import"./CompositeRoot-lkx1YlSW.js";import"./CompositeItem-Bh3v2N_o.js";import"./ToolbarRootContext-BxbNKn3r.js";import"./composite-BGRmFTC1.js";import"./svgIconContainer-CuSLG6cZ.js";import"./PdfViewerSearchBar-DL5PFNR9.js";import"./chevron-up-DU8HmTiv.js";import"./chevron-down-Dvd8o3b0.js";import"./cross-TTsfy-0d.js";import"./PdfViewerSidebar-_jt06Kdc.js";import"./index-B9i6lMRF.js";import"./index-CwBRzy5n.js";import"./index-DLO22dOn.js";import"./PdfViewerToolbar-DN5k1HaE.js";import"./Button-BDW79Pmx.js";import"./chevron-right-Bq274gxM.js";import"./Input-DsbvGidK.js";import"./search-DT0Xyteo.js";import"./spin-C73o-h4O.js";import"./error-Cj7z7_gc.js";import"./withOsdkMetrics-DmITN5ju.js";import"./makeExternalStore-BjX6ObK7.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
