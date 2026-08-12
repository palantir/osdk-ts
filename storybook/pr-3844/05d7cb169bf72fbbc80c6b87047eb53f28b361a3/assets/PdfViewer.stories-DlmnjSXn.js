import{j as r,M as s}from"./iframe-Bzfl0edf.js";import{P as p}from"./pdf-viewer-sBigyj81.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DfcS114b.js";import"./preload-helper-B208VeDC.js";import"./PdfRenderer-DgjP3Alj.js";import"./index-CGVuXL6A.js";import"./PdfViewer-DoPAhXH5.js";import"./PdfViewer.module.css-DUEouNQK.js";import"./PdfViewerAnnotationLayer-BRpWCMqN.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CspTGnhF.js";import"./PdfViewerOutlineSidebar-DHB0CPKI.js";import"./PdfViewerSidebarHeader-Dpy9peA7.js";import"./useBaseUiId-BJ8-iUbP.js";import"./useControlled-B36barjX.js";import"./CompositeRoot-ATLtBu4v.js";import"./CompositeItem-DlE9RLJl.js";import"./ToolbarRootContext-Dh6jr3zV.js";import"./composite-C_lr7yXh.js";import"./svgIconContainer-Bnp_lIJz.js";import"./PdfViewerSearchBar-C7hdXOk1.js";import"./chevron-up-CmsIaCCY.js";import"./chevron-down-5xkKqCSO.js";import"./cross-CwTbRfdE.js";import"./PdfViewerSidebar-BPQXrGQs.js";import"./index-UVAOyVXG.js";import"./index-CE0CDnbM.js";import"./index-Cqab7N-9.js";import"./PdfViewerToolbar-CLE735LY.js";import"./Button-fO_zAq5Q.js";import"./chevron-right-Chx43aea.js";import"./Input-DisgP7IF.js";import"./search-qz1hnUVF.js";import"./spin-5UlZEciH.js";import"./error-SO7gTkQm.js";import"./withOsdkMetrics-Cb6Jf2gD.js";import"./makeExternalStore-Csana1x2.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
