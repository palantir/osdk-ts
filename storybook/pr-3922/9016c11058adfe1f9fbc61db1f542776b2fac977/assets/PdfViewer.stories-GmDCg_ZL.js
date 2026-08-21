import{j as r,M as s}from"./iframe-G2sFBblw.js";import{P as p}from"./pdf-viewer-BeU0DQq_.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-FpVHQIkD.js";import"./preload-helper-CqRVpl7F.js";import"./PdfViewer-BrLiGKVC.js";import"./index-Bf1a_w2A.js";import"./BasePdfViewer-CQV3U6VS.js";import"./BasePdfViewer.module.css-BBOcjVLx.js";import"./PdfViewerAnnotationLayer-DoIrPuVH.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DAz-AJNS.js";import"./PdfViewerOutlineSidebar-B6ouLbu6.js";import"./PdfViewerSidebarHeader-BgqQ9Dp0.js";import"./useBaseUiId-PA0X9Hzc.js";import"./useControlled-D6ZpKCy4.js";import"./CompositeRoot-CBtU9CsU.js";import"./CompositeItem-CDdPDuOE.js";import"./ToolbarRootContext-CKE9jd6d.js";import"./composite-Cs5FDNG8.js";import"./svgIconContainer-C-G74yOn.js";import"./PdfViewerSearchBar-DR3GMjFN.js";import"./chevron-up-DYGlxL9f.js";import"./chevron-down-eR29A_up.js";import"./cross-Cgrm_e1P.js";import"./PdfViewerSidebar-DvJA54WP.js";import"./index-BOFiGVt1.js";import"./index-DQ-VFjK8.js";import"./index-Bz_02AKc.js";import"./PdfViewerToolbar-ByV_W7h5.js";import"./Button-DwEHPhHn.js";import"./chevron-right-C2B0Pblv.js";import"./Input-Bdut2c0i.js";import"./search-X8OElP0v.js";import"./spin-COyqW9wV.js";import"./error-DaCdYUUn.js";import"./withOsdkMetrics-vEES6Ay5.js";import"./makeExternalStore-pUJlIKix.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
