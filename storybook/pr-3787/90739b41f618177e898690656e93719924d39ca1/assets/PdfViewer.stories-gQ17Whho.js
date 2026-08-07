import{j as r,M as s}from"./iframe-BzWIB64s.js";import{P as p}from"./pdf-viewer-DCEfcIwL.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DpD59fPE.js";import"./preload-helper-rFyywtxe.js";import"./PdfRenderer-CGySeocE.js";import"./index-DfNwDZkB.js";import"./PdfViewer-HXu8Dy0Y.js";import"./PdfViewer.module.css-BUCnanaR.js";import"./PdfViewerAnnotationLayer-ChqzMT97.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BiQsQKTs.js";import"./PdfViewerOutlineSidebar-OS7PqtFG.js";import"./PdfViewerSidebarHeader-BPn6K2uF.js";import"./useBaseUiId-CxW8wnCT.js";import"./useControlled-BurtOwE_.js";import"./CompositeRoot-DGoUdWS6.js";import"./CompositeItem-Cko4FjAL.js";import"./ToolbarRootContext-BvYqQjl4.js";import"./composite-CAPd73HO.js";import"./svgIconContainer-CqmqwQ_y.js";import"./PdfViewerSearchBar-CRWB9vHP.js";import"./chevron-up-1xKZyg3B.js";import"./chevron-down-OVbf4Oys.js";import"./cross-Ckuh3sxL.js";import"./PdfViewerSidebar-JHV52-T4.js";import"./index-hj2OXCFm.js";import"./index-OSq7gO3K.js";import"./index-CSOQLHLc.js";import"./PdfViewerToolbar-DLff-Ghz.js";import"./Button-D-HHsrb0.js";import"./chevron-right-BaMDMuk3.js";import"./Input-jzz_WLdV.js";import"./search-BwW8B6vN.js";import"./spin-N8lKnwbP.js";import"./error-BOU7Ocpj.js";import"./withOsdkMetrics-DLIsJJkp.js";import"./makeExternalStore-CND2K_mN.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
