import{j as r,M as s}from"./iframe-DazX2iSj.js";import{P as p}from"./pdf-viewer-DP1Oo5vV.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Dy_iSFCa.js";import"./preload-helper-BQj2RB6w.js";import"./PdfRenderer-CFjJyt0K.js";import"./index-CDe8Airk.js";import"./PdfViewer-B3gyP4Ov.js";import"./PdfViewer.module.css-COBOsyA7.js";import"./PdfViewerAnnotationLayer-wA5TGdsL.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CQwhyV8x.js";import"./PdfViewerOutlineSidebar-BpwPg2yR.js";import"./PdfViewerSidebarHeader-Bd8rKGwm.js";import"./useBaseUiId-DcvCc8hF.js";import"./useControlled-zrW5hJkq.js";import"./CompositeRoot-CG9_EjyI.js";import"./CompositeItem-BnbXYNh_.js";import"./ToolbarRootContext-J4IsI2WD.js";import"./composite-Bh82b6Z9.js";import"./svgIconContainer-IZ6aTSVB.js";import"./PdfViewerSearchBar-CBCmhiwg.js";import"./chevron-up-CHxZxr-M.js";import"./chevron-down-CaX2isKX.js";import"./cross-DBbbVcUs.js";import"./PdfViewerSidebar-CxKciGu0.js";import"./index-HMgowsEz.js";import"./index-D880Zpm5.js";import"./index-CODLa_2t.js";import"./PdfViewerToolbar-KBHt1jgR.js";import"./Button-W2HxoTOs.js";import"./chevron-right-3IRnoI4C.js";import"./Input-BvwUdBbd.js";import"./search-uLpHYC-4.js";import"./spin-B7Vrsl4v.js";import"./error-yHN1UHFP.js";import"./withOsdkMetrics-4Ee4AkuS.js";import"./makeExternalStore-BtQGZHIP.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
