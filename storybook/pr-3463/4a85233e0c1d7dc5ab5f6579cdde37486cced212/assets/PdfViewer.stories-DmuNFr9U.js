import{j as r,M as s}from"./iframe-pvo5mNRI.js";import{P as p}from"./pdf-viewer-BhH_sDHd.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Cy9xCRTF.js";import"./preload-helper-CUspSaqE.js";import"./PdfRenderer-BGzPoyNz.js";import"./index-qcIymPYI.js";import"./PdfViewer-EG7CSgqE.js";import"./PdfViewer.module.css-Bz9rZdm7.js";import"./PdfViewerAnnotationLayer-C3iX_pRq.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CDcyjC6L.js";import"./PdfViewerOutlineSidebar-B29fX4hI.js";import"./PdfViewerSidebarHeader-BscxUtw7.js";import"./useBaseUiId-eF9vQNIb.js";import"./useControlled-PdT34XRG.js";import"./CompositeRoot-mQKKRPHQ.js";import"./CompositeItem-DGqjJsoS.js";import"./ToolbarRootContext-Dl9FxZ6i.js";import"./composite-DIc_-7tC.js";import"./svgIconContainer-BxJfLChJ.js";import"./PdfViewerSearchBar-ckuQN2fr.js";import"./chevron-up-BR4vf4Pp.js";import"./chevron-down-BrEbPX66.js";import"./cross-4FGUS6WK.js";import"./PdfViewerSidebar-CtMKD8-c.js";import"./index-BbN4gMj-.js";import"./index-cpl35BgU.js";import"./index-CinOj92A.js";import"./PdfViewerToolbar-DQY74E99.js";import"./Button-Df62z_9f.js";import"./chevron-right-C0BIyHsO.js";import"./Input-D75p9GRe.js";import"./search-Cu0ZfvZ2.js";import"./spin-DEI90eDU.js";import"./error-btC3ZvGx.js";import"./withOsdkMetrics-C01UvrpP.js";import"./makeExternalStore-6UMapRdl.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
