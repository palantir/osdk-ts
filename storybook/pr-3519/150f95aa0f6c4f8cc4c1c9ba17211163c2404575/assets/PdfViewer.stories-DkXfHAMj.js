import{j as r,M as s}from"./iframe-BI4mv9kr.js";import{P as p}from"./pdf-viewer-Bh6U-Pvq.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BcSqDDqM.js";import"./preload-helper-Dt0Twvmj.js";import"./PdfRenderer-D4hh_3G-.js";import"./index-DBuQd2cE.js";import"./PdfViewer-Bq_LG3hJ.js";import"./PdfViewer.module.css-DHY2JQma.js";import"./PdfViewerAnnotationLayer-ChFn8Z0S.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Dc8k6G5U.js";import"./PdfViewerOutlineSidebar-sWNJIabp.js";import"./PdfViewerSidebarHeader-C2T8wTeJ.js";import"./useBaseUiId-dZrnpRDf.js";import"./useControlled-Dw2VLJ3p.js";import"./CompositeRoot-CPyAAdOS.js";import"./CompositeItem-CtYZ0HZn.js";import"./ToolbarRootContext-CPvJTDaT.js";import"./composite-DSqZameO.js";import"./svgIconContainer-DXKz2g6i.js";import"./PdfViewerSearchBar-BVBpomhA.js";import"./chevron-up-BU9Ea8gl.js";import"./chevron-down-DdrZvlkD.js";import"./cross-IOYA3BMD.js";import"./PdfViewerSidebar-TCDeeIY8.js";import"./index-BusFLKiz.js";import"./index-B9DuMdAz.js";import"./index-BOmc3ycU.js";import"./PdfViewerToolbar-Du24hsAa.js";import"./Button-D3Zu-C0a.js";import"./chevron-right-BWVnfJJw.js";import"./Input-CoUXyPMe.js";import"./search-COytg_IS.js";import"./spin-DxYixP9G.js";import"./error-B3oUAsIz.js";import"./withOsdkMetrics-DPBuA6d7.js";import"./makeExternalStore-D35xftiO.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
