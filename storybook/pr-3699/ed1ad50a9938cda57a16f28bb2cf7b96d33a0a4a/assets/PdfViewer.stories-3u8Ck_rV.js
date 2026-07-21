import{j as r,M as s}from"./iframe-BStx9yPR.js";import{P as p}from"./pdf-viewer-BN6JWqBi.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BM0jlgpc.js";import"./preload-helper-UySgbcUR.js";import"./PdfRenderer-mx-Ekq3T.js";import"./index-Be1ULEOR.js";import"./PdfViewer-uGF9G-Tt.js";import"./PdfViewer.module.css-Ox7X2FtX.js";import"./PdfViewerAnnotationLayer-DjWLvCz_.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C8tMkhfR.js";import"./PdfViewerOutlineSidebar-Ds3TES-z.js";import"./PdfViewerSidebarHeader-Cmbke6oy.js";import"./useBaseUiId-Bdm4fxvS.js";import"./useControlled-DvySd0Ik.js";import"./CompositeRoot-CH-1VRb4.js";import"./CompositeItem-C63RKcL1.js";import"./ToolbarRootContext-bupG8LBJ.js";import"./composite-Bd-v3I4o.js";import"./svgIconContainer-B-Cpa4mV.js";import"./PdfViewerSearchBar-CW7x10Vt.js";import"./chevron-up-CXiHIvzg.js";import"./chevron-down-BRbRhHVp.js";import"./cross-FejrogDo.js";import"./PdfViewerSidebar-B_8dKswh.js";import"./index-yZu2NWSV.js";import"./index-D47MGgQl.js";import"./index-CaXF2RA4.js";import"./PdfViewerToolbar-Cjs2UsXy.js";import"./Button-CvmdNRYB.js";import"./chevron-right-BoYn6CRS.js";import"./Input-C7L8al23.js";import"./search-TPtYigE2.js";import"./spin-BMcc271Y.js";import"./error-KbCjfx82.js";import"./withOsdkMetrics-DOJw4LH5.js";import"./makeExternalStore-H8C5w62L.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
