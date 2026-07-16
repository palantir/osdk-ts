import{j as r,M as s}from"./iframe-Drs9PtpT.js";import{P as p}from"./pdf-viewer-BoEqqfAb.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BDzVXWxe.js";import"./preload-helper-E4CpQqjO.js";import"./PdfRenderer-CXzrAfJg.js";import"./index-BFJ9VRsG.js";import"./PdfViewer-D8Pk918D.js";import"./PdfViewer.module.css-qht23BQ1.js";import"./PdfViewerAnnotationLayer-DqfqIORo.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CG_Hrwb3.js";import"./PdfViewerOutlineSidebar-Nn_XIfHb.js";import"./PdfViewerSidebarHeader-BuhP86Pb.js";import"./useBaseUiId-CsSh5-M6.js";import"./useControlled-DkxCviXg.js";import"./CompositeRoot-Co45592g.js";import"./CompositeItem-DneLKGg6.js";import"./ToolbarRootContext-C8W-kuVs.js";import"./composite-CGsQF29V.js";import"./svgIconContainer-DFiUxhoB.js";import"./PdfViewerSearchBar-CUzHKusX.js";import"./chevron-up-W7j7y2Ba.js";import"./chevron-down-CWlc4pKw.js";import"./cross-DM4c_Ehx.js";import"./PdfViewerSidebar-RSJ4i2UW.js";import"./index-DhDdmZ2c.js";import"./index-BBwlcU-i.js";import"./index-fpVPsiDF.js";import"./PdfViewerToolbar-C4YvVF64.js";import"./Button-BW5dLyJk.js";import"./chevron-right-BIlZF6O6.js";import"./Input-BaILboJh.js";import"./search-Cla38eR_.js";import"./spin-Ct2twvI1.js";import"./error-DoFECo31.js";import"./withOsdkMetrics-DS0s9Yhu.js";import"./makeExternalStore-C7LxlEOX.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
