import{j as r,M as s}from"./iframe-2FtRoCm-.js";import{P as p}from"./pdf-viewer-DKbxo3uW.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DoL_85YA.js";import"./preload-helper-BhzVSXjW.js";import"./PdfRenderer-CXR7VluT.js";import"./index-Da7siqh-.js";import"./PdfViewer-CGLxUNAW.js";import"./PdfViewer.module.css-aYeLSwyF.js";import"./PdfViewerAnnotationLayer-C8Gs-E1q.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-oFpwcPSS.js";import"./PdfViewerOutlineSidebar-Dd2-Ab5L.js";import"./PdfViewerSidebarHeader-CsHje1es.js";import"./useBaseUiId-B3gkp78u.js";import"./useControlled-Mh588vXg.js";import"./CompositeRoot-CFHUXHXF.js";import"./CompositeItem-DToWODL-.js";import"./ToolbarRootContext-DGtLvIqC.js";import"./composite-BL9wbhp1.js";import"./svgIconContainer-DhU75ccq.js";import"./PdfViewerSearchBar-Yb4GDhc2.js";import"./chevron-up-BJWs-iz1.js";import"./chevron-down-B5tEMHAE.js";import"./cross-B1Xjn_VB.js";import"./PdfViewerSidebar-BbcoKdQK.js";import"./index-CBD_J4tU.js";import"./index-D4lFKTfl.js";import"./index-B5U2wva-.js";import"./PdfViewerToolbar-BMgwo91w.js";import"./Button-DGPB3oJL.js";import"./chevron-right-C5NZWpzS.js";import"./Input-CSUhteg3.js";import"./search-CCqtvudN.js";import"./spin-CYZgpxSC.js";import"./error-DeeTjjpj.js";import"./withOsdkMetrics-QIp6HO9f.js";import"./makeExternalStore-D7cFXXBV.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
