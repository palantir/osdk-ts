import{j as r,M as s}from"./iframe-DRtOcaPG.js";import{P as p}from"./pdf-viewer-Bp5g6rL6.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CuwUu4aZ.js";import"./preload-helper-9DgHanXn.js";import"./PdfViewer-K0RjwKxv.js";import"./index-Ce2dl65O.js";import"./BasePdfViewer-B44jJ3sX.js";import"./BasePdfViewer.module.css-BV82LKCu.js";import"./PdfViewerAnnotationLayer-EC4LmYc3.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DBbgbx5z.js";import"./PdfViewerOutlineSidebar-BdBAuPPK.js";import"./PdfViewerSidebarHeader-DYK_tMt2.js";import"./useBaseUiId-BGBZ1HUg.js";import"./useControlled-BcvbWefU.js";import"./CompositeRoot-C2R77lpy.js";import"./CompositeItem-DWL2WPXo.js";import"./ToolbarRootContext-B6bPz9D9.js";import"./composite-N79hpvK_.js";import"./svgIconContainer-DpZEtLv9.js";import"./PdfViewerSearchBar-DGLOQT2D.js";import"./chevron-up-DNCLw49l.js";import"./chevron-down-SYe_Fp71.js";import"./cross-BX3J5cVV.js";import"./PdfViewerSidebar-DF1pSAmo.js";import"./index-Bi5AS5V_.js";import"./index-DHqOpqOn.js";import"./index-D8e0XOwM.js";import"./PdfViewerToolbar-C7v7N7-r.js";import"./Button-CK6d5OG4.js";import"./chevron-right-BHnbSIg6.js";import"./Input-QNUGF4Iu.js";import"./search-Dtkc2Iz5.js";import"./spin-CLTlBm1Y.js";import"./error-BkqrjqGY.js";import"./withOsdkMetrics-DDwhyEqf.js";import"./makeExternalStore-Ch0Jbi30.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
