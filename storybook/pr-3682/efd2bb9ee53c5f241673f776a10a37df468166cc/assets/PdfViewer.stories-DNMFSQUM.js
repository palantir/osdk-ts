import{j as r,M as s}from"./iframe-DLyBDx3h.js";import{P as p}from"./pdf-viewer-BiPCcpCx.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-E4Fp3Shf.js";import"./preload-helper-CKNCYEID.js";import"./PdfRenderer-Da3IIMi6.js";import"./index-BRmpjKp2.js";import"./PdfViewer--o03Ey9J.js";import"./PdfViewer.module.css-Cyfzy6se.js";import"./PdfViewerAnnotationLayer-3GYXS6B4.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CHr5ymo-.js";import"./PdfViewerOutlineSidebar-DUa_n4Z4.js";import"./PdfViewerSidebarHeader-HSJhDIZL.js";import"./useBaseUiId-IYhLH06n.js";import"./useControlled-DpfXDhaf.js";import"./CompositeRoot-DyrZ7Wa3.js";import"./CompositeItem-CxupW6TJ.js";import"./ToolbarRootContext-5TbsYr-c.js";import"./composite-BIVZP6PR.js";import"./svgIconContainer-DVZM5xMa.js";import"./PdfViewerSearchBar-C2OZ-I2N.js";import"./chevron-up-k6NU47ZT.js";import"./chevron-down-DLGOy9MM.js";import"./cross-Bh6H6DPs.js";import"./PdfViewerSidebar-DCHN14rK.js";import"./index-D4ofTFbf.js";import"./index-DvVaFH5g.js";import"./index-BTa31zA-.js";import"./PdfViewerToolbar-DwJPPALw.js";import"./Button-DjLWKs3R.js";import"./chevron-right-BBremUb4.js";import"./Input-CinFTlV8.js";import"./search-BVn9FoEm.js";import"./spin-DUjHNBdd.js";import"./error-URqFYrIM.js";import"./withOsdkMetrics-Du-o1FGV.js";import"./makeExternalStore-ByO5vKW6.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
