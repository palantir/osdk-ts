import{j as r,M as s}from"./iframe-BBjL-F6y.js";import{P as p}from"./pdf-viewer-CqUZTeOi.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BEiuMJEq.js";import"./preload-helper-DNVbAuUc.js";import"./PdfViewer-DOifQSCJ.js";import"./index-YgwbFw5i.js";import"./BasePdfViewer-CqxlmU7p.js";import"./BasePdfViewer.module.css-j4oxMCas.js";import"./PdfViewerAnnotationLayer-BTpp9UPC.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CPBcXQHG.js";import"./PdfViewerOutlineSidebar-3k9SxrTE.js";import"./PdfViewerSidebarHeader-4VVRLoOM.js";import"./useBaseUiId-CMNBQkED.js";import"./useControlled-B4FriTOA.js";import"./CompositeRoot-b336gGyF.js";import"./CompositeItem-C0luX3iR.js";import"./ToolbarRootContext-YS97F8pO.js";import"./composite-CUtkN34M.js";import"./svgIconContainer-CHtsuizn.js";import"./PdfViewerSearchBar-C-SxriAD.js";import"./chevron-up-Cj52C32e.js";import"./chevron-down-6vd3dKBy.js";import"./cross-DmliyvQK.js";import"./PdfViewerSidebar-Bv2m_5KK.js";import"./index-Cc2JD9jP.js";import"./index-kvFmoSiE.js";import"./index-R2_PcSMY.js";import"./PdfViewerToolbar-Xm_qxIqJ.js";import"./Button-BVwSTECw.js";import"./chevron-right-BIZXDsGT.js";import"./Input-wfcqgvpx.js";import"./search-DTU0lDb9.js";import"./spin-B52aXEux.js";import"./error-CjgVLvJc.js";import"./withOsdkMetrics-B0Y7OQ6I.js";import"./makeExternalStore-D1LPwt7p.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
