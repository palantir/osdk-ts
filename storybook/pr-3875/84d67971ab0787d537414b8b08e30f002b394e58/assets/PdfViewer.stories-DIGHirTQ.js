import{j as r,M as s}from"./iframe-Bf5y3yuv.js";import{P as p}from"./pdf-viewer-BTV3iDjV.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B9NAq6nM.js";import"./preload-helper-M85ITnzL.js";import"./PdfViewer-BLm5XrXS.js";import"./index-C4oFc8fT.js";import"./BasePdfViewer-CvqhSgtk.js";import"./BasePdfViewer.module.css-CATr13G6.js";import"./PdfViewerAnnotationLayer-DXaoSB6r.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DD7MvuFt.js";import"./PdfViewerOutlineSidebar-BpXOXgjE.js";import"./PdfViewerSidebarHeader-D-O1ljm5.js";import"./useBaseUiId-DRtCxjKI.js";import"./useControlled-BhduwF_8.js";import"./CompositeRoot-SfgevX4o.js";import"./CompositeItem-ComoR2X-.js";import"./ToolbarRootContext-C57pzsjm.js";import"./composite-CgQiA1Oi.js";import"./svgIconContainer-CVN7uHeY.js";import"./PdfViewerSearchBar-DwSIIia-.js";import"./chevron-up-V3ARDsi_.js";import"./chevron-down-Ax9eqJiN.js";import"./cross-DxmUAvZu.js";import"./PdfViewerSidebar-DsV73tSN.js";import"./index-CQQhRiBl.js";import"./index-7NakAMlJ.js";import"./index-BPFo9kvt.js";import"./PdfViewerToolbar-VIeHBjJw.js";import"./Button-C7r4XXrU.js";import"./chevron-right-CpN7wgX0.js";import"./Input-Cld-FXxr.js";import"./search-DTQlzK8C.js";import"./spin-DD7PkANs.js";import"./error-CLHz_uFS.js";import"./withOsdkMetrics-y8Y3XJDn.js";import"./makeExternalStore-ZObW_I0b.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
