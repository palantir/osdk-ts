import{j as r,M as s}from"./iframe-KgHs4zat.js";import{P as p}from"./pdf-viewer-fKL-OCCR.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BCQ2caPx.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfViewer-a6maWloq.js";import"./index-4vqX9qxC.js";import"./BasePdfViewer-CChkYexN.js";import"./BasePdfViewer.module.css-CLzC45KM.js";import"./PdfViewerAnnotationLayer-CIQou2qW.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BYpguICB.js";import"./PdfViewerOutlineSidebar-y0yZgK4K.js";import"./PdfViewerSidebarHeader-D83Leb0d.js";import"./useBaseUiId-DalgrHe6.js";import"./useControlled-CxaIzWVI.js";import"./CompositeRoot-TVhsWdrP.js";import"./CompositeItem-7z4K7NB3.js";import"./ToolbarRootContext-D2FvLITL.js";import"./composite-IhPVrKNo.js";import"./svgIconContainer-DQnAfD0o.js";import"./PdfViewerSearchBar-i2r5aYBW.js";import"./chevron-up-BdFhpAc7.js";import"./chevron-down-CkShUoKE.js";import"./cross-DhFqeu01.js";import"./PdfViewerSidebar-YIpXjBGB.js";import"./index-Dtd5pHFd.js";import"./index-sG7sensQ.js";import"./index-C8wkzaSL.js";import"./PdfViewerToolbar-DNrTGe5m.js";import"./Button-Dpxg_r7U.js";import"./chevron-right-C8F6ubFS.js";import"./Input-a2sXSpjj.js";import"./search-EITjVgXy.js";import"./spin-BxVHT09q.js";import"./error-DM5-tWgF.js";import"./withOsdkMetrics-fRmXbymy.js";import"./makeExternalStore-CgubNTuf.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
