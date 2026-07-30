import{j as r,M as s}from"./iframe-Do-wqPAG.js";import{P as p}from"./pdf-viewer-B1cSWYKZ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B7Vhvwz4.js";import"./preload-helper-DHrLiF_n.js";import"./PdfRenderer-o1_5Q4Nz.js";import"./index-Cy5rkzVX.js";import"./PdfViewer-Be2gRnzw.js";import"./PdfViewer.module.css-DY4LqA6W.js";import"./PdfViewerAnnotationLayer-DQ-9zZLz.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CyMC8qIX.js";import"./PdfViewerOutlineSidebar-D-PVzXr-.js";import"./PdfViewerSidebarHeader-D2zoUWpA.js";import"./useBaseUiId-Cgco29RD.js";import"./useControlled-BtQf2Mdn.js";import"./CompositeRoot-DzlwdGFU.js";import"./CompositeItem-BVuMRAPI.js";import"./ToolbarRootContext-DVSI0mCZ.js";import"./composite-CTJiCA6q.js";import"./svgIconContainer-B89O08Vs.js";import"./PdfViewerSearchBar-PYcWWLeP.js";import"./chevron-up-BYhPzV_j.js";import"./chevron-down-DEIKb6Ni.js";import"./cross-CvbnaeZH.js";import"./PdfViewerSidebar-BUMdVSQK.js";import"./index-DZMhpjfz.js";import"./index-DSZYY9yk.js";import"./index-Bs0rsg0r.js";import"./PdfViewerToolbar-BbYNwWIF.js";import"./Button-B4RKA1pV.js";import"./chevron-right-CwATynNy.js";import"./Input-C7FUOEIR.js";import"./search-DfQ-5ttz.js";import"./spin-1jUmsStv.js";import"./error-B7QP6y9O.js";import"./withOsdkMetrics-CZzkghnK.js";import"./makeExternalStore-1XgCgHrd.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
