import{j as r,M as s}from"./iframe-DlDyg67T.js";import{P as p}from"./pdf-viewer-CAiv3cdE.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CA7Hx9p9.js";import"./preload-helper-CxSoH6eo.js";import"./PdfViewer-DWtUAH8A.js";import"./index-CgLJcHiG.js";import"./BasePdfViewer-DqJt0z-P.js";import"./BasePdfViewer.module.css-DD3Mj0L2.js";import"./PdfViewerAnnotationLayer-CLTGB6g3.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Bl9RT-wg.js";import"./PdfViewerOutlineSidebar-BWYp7Mlh.js";import"./PdfViewerSidebarHeader-CwrgrFYH.js";import"./useBaseUiId-wAPBNlUt.js";import"./useControlled-04OxKEAS.js";import"./CompositeRoot-DhVCpLNB.js";import"./CompositeItem-DzH1OEs5.js";import"./ToolbarRootContext-BTmFkUps.js";import"./composite-BaaVWHgq.js";import"./svgIconContainer-QwkR6eZt.js";import"./PdfViewerSearchBar-Nv3GKA1m.js";import"./chevron-up-CtJBZ2CF.js";import"./chevron-down-CroTI_KF.js";import"./cross-BowQxoCZ.js";import"./PdfViewerSidebar-DHw3Dr5v.js";import"./index-B3dgiPES.js";import"./index-8yeQhVbN.js";import"./index-CY8S8b-r.js";import"./PdfViewerToolbar-BGw4SVgP.js";import"./Button-DRPtGoVj.js";import"./chevron-right-Bgy2qbQN.js";import"./Input-BoCdBbZ_.js";import"./search-Cte5LTFX.js";import"./spin-1haM9ouS.js";import"./error-D50Cem1g.js";import"./withOsdkMetrics-BQw0dFsV.js";import"./makeExternalStore-CODki1eK.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
