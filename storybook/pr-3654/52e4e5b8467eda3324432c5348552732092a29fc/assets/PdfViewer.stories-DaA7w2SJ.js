import{j as r,M as s}from"./iframe-DnKJB4tf.js";import{P as p}from"./pdf-viewer-BYiEx83P.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BMjrmJW-.js";import"./preload-helper-CP_4LH1y.js";import"./PdfRenderer-DbOtWrr4.js";import"./index-DsLBK2rD.js";import"./PdfViewer-C82BFCyj.js";import"./PdfViewer.module.css-Duk5LscT.js";import"./PdfViewerAnnotationLayer-DD32b6M4.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BCQx9JbY.js";import"./PdfViewerOutlineSidebar-CdVR8WQO.js";import"./PdfViewerSidebarHeader-DewiQyeA.js";import"./useBaseUiId-c0a-O2p9.js";import"./useControlled-B1Myh9nv.js";import"./CompositeRoot-BPGJDIz5.js";import"./CompositeItem-CIW_zvxP.js";import"./ToolbarRootContext-BFuYTsvJ.js";import"./composite-C2dHrzPG.js";import"./svgIconContainer-hyFCaOzG.js";import"./PdfViewerSearchBar-BZl2AO36.js";import"./chevron-up-XsvTYs2c.js";import"./chevron-down-DxcIi4ej.js";import"./cross-DHc1nhB3.js";import"./PdfViewerSidebar-6dKFFNs1.js";import"./index-CvgbtZHK.js";import"./index-BpSxxceB.js";import"./index-j9hUGQ3G.js";import"./PdfViewerToolbar-CdSzIRam.js";import"./Button-BWPawo9O.js";import"./chevron-right-DrWn6-AP.js";import"./Input-B_8ntroz.js";import"./search-CrLHj3lH.js";import"./spin-D1ljWr-j.js";import"./error-CY06xBhW.js";import"./withOsdkMetrics-Dg_o3KRg.js";import"./makeExternalStore-BP2lWOFo.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
