import{j as r,M as s}from"./iframe-Cib7M-Xy.js";import{P as p}from"./pdf-viewer-DGchrU4Z.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DJO4D4Ff.js";import"./preload-helper-CRDWPiYa.js";import"./PdfViewer-BTDS-oMU.js";import"./index-CBv-FCGp.js";import"./BasePdfViewer-DDhinvuY.js";import"./BasePdfViewer.module.css-FpulXOVZ.js";import"./PdfViewerAnnotationLayer-DKjM3cVT.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-4O99GWHo.js";import"./PdfViewerOutlineSidebar-CtIG3j06.js";import"./PdfViewerSidebarHeader-BMP1ufyG.js";import"./useBaseUiId-M5BZcaZy.js";import"./useControlled-C0WjWXAL.js";import"./CompositeRoot-B7eK7E7H.js";import"./CompositeItem-BwGgrVOO.js";import"./ToolbarRootContext-BNUf7EA-.js";import"./composite-kqFH7m6U.js";import"./svgIconContainer-D1xpzhCr.js";import"./PdfViewerSearchBar-BQZ9OhTl.js";import"./chevron-up-C9OWx-LY.js";import"./chevron-down-CDgi7Jby.js";import"./cross-C2V_DgUT.js";import"./PdfViewerSidebar-Crygcv7l.js";import"./index-Dg5LeqIW.js";import"./index-BuKksupP.js";import"./index-BCtR_sML.js";import"./PdfViewerToolbar-BziZjtjm.js";import"./Button-D17R42M5.js";import"./chevron-right-D9aHkwBw.js";import"./Input-DoKdALsn.js";import"./search-DCZZXW6e.js";import"./spin-DRYLZdYX.js";import"./error-CzUPZAgK.js";import"./withOsdkMetrics-B-KTU3vQ.js";import"./makeExternalStore-C8s6weLu.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
