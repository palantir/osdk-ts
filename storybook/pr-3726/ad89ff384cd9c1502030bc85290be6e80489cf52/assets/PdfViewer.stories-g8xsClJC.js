import{j as r,M as s}from"./iframe-CM6PGdDe.js";import{P as p}from"./pdf-viewer-BOsdZewZ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BxHVGNWc.js";import"./preload-helper-D1fSyZoT.js";import"./PdfRenderer-SkV5JRK8.js";import"./index-Bufk09qs.js";import"./PdfViewer-URaESCUN.js";import"./PdfViewer.module.css-BK-NJm4n.js";import"./PdfViewerAnnotationLayer-CTjeOeUH.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DaxNskV1.js";import"./PdfViewerOutlineSidebar-bO6RJnkA.js";import"./PdfViewerSidebarHeader-u4rEpL-a.js";import"./useBaseUiId-DMGzivLa.js";import"./useControlled-CnS9__rI.js";import"./CompositeRoot-BvB2fyXN.js";import"./CompositeItem-BtR2x_yZ.js";import"./ToolbarRootContext-B7F75xzl.js";import"./composite-xrlucZDA.js";import"./svgIconContainer-CIrlyu8h.js";import"./PdfViewerSearchBar-t7MmM9cJ.js";import"./chevron-up-C9yScxck.js";import"./chevron-down-DXMYU1sy.js";import"./cross-YKaVQcDW.js";import"./PdfViewerSidebar-DPxa3XT2.js";import"./index-CsmpaWCG.js";import"./index-ri1u8Qn4.js";import"./index-BAhrf8CJ.js";import"./PdfViewerToolbar-pDKMo5KU.js";import"./Button-BgnXQklC.js";import"./chevron-right-Db-YJ90l.js";import"./Input-CW95l1_M.js";import"./search-BY_dMaVv.js";import"./spin-Cw501VRw.js";import"./error-CZyQ1xT9.js";import"./withOsdkMetrics-xiZQ-Ys9.js";import"./makeExternalStore-Cew3RdoD.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
