import{j as r,M as s}from"./iframe-Bb3tjC3V.js";import{P as p}from"./pdf-viewer-DH1rWWeA.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Ca9TUw9c.js";import"./preload-helper-CYmQZjB9.js";import"./PdfRenderer-D2g2XVZj.js";import"./index-BPbQvyfn.js";import"./PdfViewer-B9ESaMSV.js";import"./PdfViewer.module.css-CzziLkbv.js";import"./PdfViewerAnnotationLayer-VvzU49ED.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-kUBPTQ63.js";import"./PdfViewerOutlineSidebar-gDtxoiKf.js";import"./PdfViewerSidebarHeader-5vcg8m_H.js";import"./useBaseUiId-D29cBnlE.js";import"./useControlled-CvjI6YFT.js";import"./CompositeRoot-B6x9PrZf.js";import"./CompositeItem-DvrPK8M7.js";import"./ToolbarRootContext-CDj27CZR.js";import"./composite-C3Rlyybz.js";import"./svgIconContainer-Y0lQigj_.js";import"./PdfViewerSearchBar-CU19xNs9.js";import"./chevron-up-D-DaOPJG.js";import"./chevron-down-DFJ_DLyR.js";import"./cross-CHnMcV43.js";import"./PdfViewerSidebar-B1hiZXVU.js";import"./index-2qiAvfo5.js";import"./index-B05qlECy.js";import"./index-BZq7S8i7.js";import"./PdfViewerToolbar-Dm8PoWYD.js";import"./Button-nm2pYev7.js";import"./chevron-right-Cjj2DU11.js";import"./Input-CpaS_vj-.js";import"./search-BU45UnDR.js";import"./spin-D8jbT4Ei.js";import"./error-Bc8MML6_.js";import"./withOsdkMetrics-gOeagBA8.js";import"./makeExternalStore-wfcM5ZfN.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
