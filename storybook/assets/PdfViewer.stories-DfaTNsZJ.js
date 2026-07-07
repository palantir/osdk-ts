import{j as r,M as s}from"./iframe-BsJ6skNO.js";import{P as p}from"./pdf-viewer-D63Otthm.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BxKgaIGt.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfRenderer-C8fY4IGB.js";import"./index-tosYC6sU.js";import"./PdfViewer-BUUgAcmg.js";import"./PdfViewer.module.css-bCtEiR5G.js";import"./PdfViewerAnnotationLayer-CH3jL1Up.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CHzW4pL0.js";import"./PdfViewerOutlineSidebar-CnI94Bq3.js";import"./PdfViewerSidebarHeader-DvTb5l0N.js";import"./useBaseUiId-w6j8mMqv.js";import"./useControlled-BvG1X1Yn.js";import"./CompositeRoot-BU4IjyRV.js";import"./CompositeItem-CB1yFyrh.js";import"./ToolbarRootContext-_3BaerVg.js";import"./composite-DB9MIcSB.js";import"./svgIconContainer-BqKTiLhX.js";import"./PdfViewerSearchBar-CU9E_rIn.js";import"./chevron-up-Dga0jdx7.js";import"./chevron-down-BIVIQnR2.js";import"./cross-CJN9-3Xs.js";import"./PdfViewerSidebar-DTBmDNLO.js";import"./index-Dwjdsjwc.js";import"./index-DPLkgV4s.js";import"./index-D2TBVAmm.js";import"./PdfViewerToolbar-CKAw1EhB.js";import"./Button-B5q5Q8T0.js";import"./chevron-right-DA44eApq.js";import"./Input-CAZSpPNu.js";import"./search-BAaG3R55.js";import"./spin-COANFphl.js";import"./error-BsMAB-HQ.js";import"./withOsdkMetrics-B8Tbf6Xk.js";import"./makeExternalStore-DtARJ13Z.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
