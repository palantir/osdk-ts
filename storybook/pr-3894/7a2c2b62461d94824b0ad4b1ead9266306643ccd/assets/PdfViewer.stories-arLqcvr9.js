import{j as r,M as s}from"./iframe-jUDVu-oB.js";import{P as p}from"./pdf-viewer-WCAZ2l15.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-fva-05mC.js";import"./preload-helper-CyYr8U1Q.js";import"./PdfViewer-NyTlQhJI.js";import"./index-1Q0hWWGI.js";import"./BasePdfViewer-CGrcy46A.js";import"./BasePdfViewer.module.css-DczI1Vlj.js";import"./PdfViewerAnnotationLayer-BgKkob23.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BjYeZhtF.js";import"./PdfViewerOutlineSidebar-DBHRIDeq.js";import"./PdfViewerSidebarHeader-Cc5Hds6c.js";import"./useBaseUiId-C6WGvNek.js";import"./useControlled-CjWxurNp.js";import"./CompositeRoot-C4FX4tRr.js";import"./CompositeItem-DIufQebI.js";import"./ToolbarRootContext-DhXolmDg.js";import"./composite-Bu0UeckM.js";import"./svgIconContainer-ChyWwrvo.js";import"./PdfViewerSearchBar-Cw-gqg5b.js";import"./chevron-up-BXXiXYd7.js";import"./chevron-down-DSRlwyRr.js";import"./cross-B3EYIFf_.js";import"./PdfViewerSidebar-CF7kmHAA.js";import"./index-DTDaFG3C.js";import"./index-DVDzZTIb.js";import"./index-C9oucRDg.js";import"./PdfViewerToolbar-DAYtXTzJ.js";import"./Button-B3_hL6UU.js";import"./chevron-right-BTdhY4AV.js";import"./Input-BcTAE4rO.js";import"./search-DqQGZnw2.js";import"./spin-CJ4k01--.js";import"./error-ekMkFCMM.js";import"./withOsdkMetrics-Cv-kz2_6.js";import"./makeExternalStore-BbZ23pca.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
