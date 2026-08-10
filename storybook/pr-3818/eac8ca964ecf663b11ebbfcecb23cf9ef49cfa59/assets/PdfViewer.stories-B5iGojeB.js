import{j as r,M as s}from"./iframe-CxyWClRv.js";import{P as p}from"./pdf-viewer-DG1sLqLq.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DO1fgnfz.js";import"./preload-helper-BD8IUSLW.js";import"./PdfRenderer-Dsw3X5za.js";import"./index-CwkmsmKS.js";import"./PdfViewer-D-BKsVJV.js";import"./PdfViewer.module.css-B-_WSMan.js";import"./PdfViewerAnnotationLayer-C8UwVzYy.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-HxNpE9cF.js";import"./PdfViewerOutlineSidebar-BNSPhgmA.js";import"./PdfViewerSidebarHeader-BNGHhQ4A.js";import"./useBaseUiId-jf4U9pqb.js";import"./useControlled-BFAPGVYI.js";import"./CompositeRoot-CG0bYcQX.js";import"./CompositeItem-CgKzJJIm.js";import"./ToolbarRootContext-jpHryEcr.js";import"./composite-BEt3pTCK.js";import"./svgIconContainer-CfXklo5s.js";import"./PdfViewerSearchBar-B14NTwDt.js";import"./chevron-up-lCOrW0t5.js";import"./chevron-down-BiOQJ87i.js";import"./cross-sylIwqMp.js";import"./PdfViewerSidebar-Db4ZWE10.js";import"./index-CVx7inSp.js";import"./index-B4nTVLHO.js";import"./index-CNEU6CxQ.js";import"./PdfViewerToolbar-CINwZk7J.js";import"./Button-DQ3MNO2y.js";import"./chevron-right-DLZ1J46-.js";import"./Input-BOgrzWPu.js";import"./search-BqpVCTT7.js";import"./spin-B9V3r6mG.js";import"./error-CAKdt8h3.js";import"./withOsdkMetrics-DJH-BeK5.js";import"./makeExternalStore-Cy6TXmii.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
