import{j as r,M as s}from"./iframe-B-WU-8wd.js";import{P as p}from"./pdf-viewer-BOBiP0-_.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Dte9pr4B.js";import"./preload-helper-C40QNhqw.js";import"./PdfRenderer-DAfbO4Hp.js";import"./index-Bnf1WvQV.js";import"./PdfViewer-vFiP0nmM.js";import"./PdfViewer.module.css-pBlB6K92.js";import"./PdfViewerAnnotationLayer-BoakSIfP.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BZE4BVtc.js";import"./PdfViewerOutlineSidebar-BtHk_EaO.js";import"./PdfViewerSidebarHeader-bbfvhrWI.js";import"./useBaseUiId-Bi3-Fffy.js";import"./useControlled-CbwX9DZR.js";import"./CompositeRoot-B3DYWaAJ.js";import"./CompositeItem-BEnpaF9E.js";import"./ToolbarRootContext-oT7fW65H.js";import"./composite-DpJKh4-s.js";import"./svgIconContainer-BnLwqgci.js";import"./PdfViewerSearchBar-CJcHddJS.js";import"./chevron-up-Bfp_EoJ8.js";import"./chevron-down-3mFcboyY.js";import"./cross-KJ7LHtiK.js";import"./PdfViewerSidebar-V2STp8HE.js";import"./index-BqYFCOuP.js";import"./index-Dh8ouLHi.js";import"./index-By31Q2MY.js";import"./PdfViewerToolbar-D7FaECL7.js";import"./Button-B4vcsqpE.js";import"./chevron-right-CPwGEWON.js";import"./Input-2mfpVf2j.js";import"./search-VDjb0-h7.js";import"./spin-DtAmZby1.js";import"./error-R1Pak1UN.js";import"./withOsdkMetrics-Cuas_biu.js";import"./makeExternalStore-HqHpVmcS.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
