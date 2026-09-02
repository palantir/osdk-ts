import{j as r,M as s}from"./iframe-CtxcX-T2.js";import{P as p}from"./pdf-viewer-D_aUCgoN.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CAc9lg7G.js";import"./preload-helper-cYb1s-yj.js";import"./PdfViewer-CWh1s7lm.js";import"./index-B-TRiKN3.js";import"./BasePdfViewer-BnQ_Izuh.js";import"./BasePdfViewer.module.css-BZOxU-8s.js";import"./PdfViewerAnnotationLayer-EgCW-v7w.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BRnMI1ev.js";import"./PdfViewerOutlineSidebar-DM8hwkCs.js";import"./PdfViewerSidebarHeader-ChbuTqqL.js";import"./useBaseUiId-BKQN5rZA.js";import"./useControlled-KB7Tt3--.js";import"./CompositeRoot-DzrEWxuP.js";import"./CompositeItem-BOSOz_c1.js";import"./ToolbarRootContext-TRfEDRwF.js";import"./composite-Bg1E-ATT.js";import"./svgIconContainer-BdWsevkC.js";import"./PdfViewerSearchBar-BiKWPdBK.js";import"./chevron-up-rm4Ohi3U.js";import"./chevron-down-tzfqMRfe.js";import"./cross-CSOzfLob.js";import"./PdfViewerSidebar-B-Mm7CvS.js";import"./index-WzODq6Cd.js";import"./index-B31wHl9O.js";import"./index-Bx6oSTgH.js";import"./PdfViewerToolbar-BSGQBluo.js";import"./Button-DtDTCbH_.js";import"./chevron-right-Cb2oPStH.js";import"./Input-Bv3vf0p7.js";import"./search-CRmL15NB.js";import"./spin-BqY29EWX.js";import"./error-0r8auSif.js";import"./withOsdkMetrics-CFtxLfFR.js";import"./makeExternalStore-ycTRB21p.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
