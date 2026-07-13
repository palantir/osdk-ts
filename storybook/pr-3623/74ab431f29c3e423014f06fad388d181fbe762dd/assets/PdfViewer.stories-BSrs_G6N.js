import{j as r,M as s}from"./iframe-BzmiqMlA.js";import{P as p}from"./pdf-viewer-CUIMV0pV.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-YCuPYBCn.js";import"./preload-helper-DWDBlvcC.js";import"./PdfRenderer-CZFsWUx7.js";import"./index-awxBpamY.js";import"./PdfViewer-h8jmsa-I.js";import"./PdfViewer.module.css-92-CuKHt.js";import"./PdfViewerAnnotationLayer-Cz1Z9Jvv.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cw5ex9Wm.js";import"./PdfViewerOutlineSidebar-CflOqEe5.js";import"./PdfViewerSidebarHeader-BSf0uGcz.js";import"./useBaseUiId-B5jv3z2Z.js";import"./useControlled-jiltt0Oe.js";import"./CompositeRoot-EFzeJW7w.js";import"./CompositeItem-DbR51llk.js";import"./ToolbarRootContext-BsgmrDDK.js";import"./composite--zb5EXZT.js";import"./svgIconContainer-CRKkbXcr.js";import"./PdfViewerSearchBar-CEhV1cod.js";import"./chevron-up-C3EwXijR.js";import"./chevron-down-DfO2hlZp.js";import"./cross-BaWVDSt7.js";import"./PdfViewerSidebar-MVJm0cGF.js";import"./index-DKajfwmt.js";import"./index-DN6rquhH.js";import"./index-DS9dAQh3.js";import"./PdfViewerToolbar-Cy5VnaQQ.js";import"./Button-Bo5_QW4H.js";import"./chevron-right-D8SzjAlb.js";import"./Input-D8stKE34.js";import"./search-CaDlj1cR.js";import"./spin-D8e-nZC_.js";import"./error-3H7hzpsi.js";import"./withOsdkMetrics-C_7uNmr6.js";import"./makeExternalStore-qzzx8i_j.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
