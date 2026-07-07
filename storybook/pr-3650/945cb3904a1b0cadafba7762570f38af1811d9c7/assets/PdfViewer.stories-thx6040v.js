import{j as r,M as s}from"./iframe-Bp-w4XXC.js";import{P as p}from"./pdf-viewer-DS-2KX99.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D0cCimJy.js";import"./preload-helper-xWKdJkiM.js";import"./PdfRenderer-BpwHfjl-.js";import"./index-B7bIJSDH.js";import"./PdfViewer-Ch3mAln1.js";import"./PdfViewer.module.css-DU-ZAjtC.js";import"./PdfViewerAnnotationLayer-DlbpTyVV.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DQFbgVwJ.js";import"./PdfViewerOutlineSidebar-C2b3zPZ5.js";import"./PdfViewerSidebarHeader-Dvx5jEyC.js";import"./useBaseUiId-DQ1ASmMv.js";import"./useControlled-DY_ug2Fp.js";import"./CompositeRoot-CZs-Z7j_.js";import"./CompositeItem-DMnhy0UE.js";import"./ToolbarRootContext-CXHKCxpH.js";import"./composite-PUDp5kDy.js";import"./svgIconContainer-CSCKJR5t.js";import"./PdfViewerSearchBar-zuABVufW.js";import"./chevron-up-Bwlhx0Zs.js";import"./chevron-down-B6OodRkj.js";import"./cross-CrDm0Alz.js";import"./PdfViewerSidebar-DBKSfLA-.js";import"./index-D9pAKDuv.js";import"./index-D6sC94tK.js";import"./index-fgfHQ-7r.js";import"./PdfViewerToolbar-DppBJFsH.js";import"./Button-8Rk-0cug.js";import"./chevron-right-pOtF6Anm.js";import"./Input-DmylTWlW.js";import"./search-BUrfmuEy.js";import"./spin-CL9knmmi.js";import"./error-Dc1dazY_.js";import"./withOsdkMetrics-CtjhTCRY.js";import"./makeExternalStore-CWKTfQZs.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
