import{j as r,M as s}from"./iframe-Ci-tzRKJ.js";import{P as p}from"./pdf-viewer-BlCa27tA.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DzNRu0kk.js";import"./preload-helper-DJal9EPS.js";import"./PdfRenderer-By6fsqjm.js";import"./index-CKLM9KrJ.js";import"./PdfViewer-BTpg-LuA.js";import"./PdfViewer.module.css-CIcqRxXz.js";import"./PdfViewerAnnotationLayer-CDSWgiVc.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Bdaon-kn.js";import"./PdfViewerOutlineSidebar-CulaYAr6.js";import"./PdfViewerSidebarHeader-DvFYWBUK.js";import"./useBaseUiId-Bzqf9i17.js";import"./useControlled-Cao399YH.js";import"./CompositeRoot-B0lFDJLH.js";import"./CompositeItem-CTqslAWX.js";import"./ToolbarRootContext-BbdAu-5X.js";import"./composite-C4r_G6LN.js";import"./svgIconContainer-DvpSMQMB.js";import"./PdfViewerSearchBar-spXIxmbm.js";import"./chevron-up-B7to7Dqs.js";import"./chevron-down-BTzWyvSz.js";import"./cross--vCoyTfT.js";import"./PdfViewerSidebar-BOhBWzN9.js";import"./index-D-ov5pJU.js";import"./index-DeFOLRTd.js";import"./index-CaIqfwj2.js";import"./PdfViewerToolbar-SYYh7FKV.js";import"./Button-589e5R23.js";import"./chevron-right-B_M7bAi3.js";import"./Input-BtwCPw-3.js";import"./search-UQXWsdYO.js";import"./spin-BsdDG8Xi.js";import"./error-lEY9aX5-.js";import"./withOsdkMetrics-fuyb5ykd.js";import"./makeExternalStore-C9b1LS5H.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
