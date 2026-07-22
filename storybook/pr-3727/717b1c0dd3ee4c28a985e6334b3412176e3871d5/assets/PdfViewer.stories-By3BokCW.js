import{j as r,M as s}from"./iframe-uQf2Y6HY.js";import{P as p}from"./pdf-viewer-0vkF3AwC.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Dl9e2LrV.js";import"./preload-helper-Du3gRcYm.js";import"./PdfRenderer-DYtQ1jys.js";import"./index-BN2fncHn.js";import"./PdfViewer-BulWPL40.js";import"./PdfViewer.module.css-DJNf66aL.js";import"./PdfViewerAnnotationLayer-DpPY8vR7.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BpoZwgjo.js";import"./PdfViewerOutlineSidebar-bso-WV5g.js";import"./PdfViewerSidebarHeader-CWrUwQkE.js";import"./useBaseUiId-BLcC56e1.js";import"./useControlled-CkzW_hrg.js";import"./CompositeRoot-CCx8x1-0.js";import"./CompositeItem-xMHAt2fI.js";import"./ToolbarRootContext-BiNbQSPr.js";import"./composite-BVu4qhAZ.js";import"./svgIconContainer-BjU-0ep4.js";import"./PdfViewerSearchBar-BxIoARsW.js";import"./chevron-up-BARogNjD.js";import"./chevron-down-DgfzreOC.js";import"./cross-D7UO5IDe.js";import"./PdfViewerSidebar-BXWPsbGU.js";import"./index-CSLzCzGV.js";import"./index-B12iX9a-.js";import"./index-Dk4BWPdu.js";import"./PdfViewerToolbar-CvFPYN4e.js";import"./Button-D7tsmr_Z.js";import"./chevron-right-CRpivG6f.js";import"./Input-CiZhYTqy.js";import"./search-v_cg4ZhI.js";import"./spin-VAoF889e.js";import"./error-59MnhwpW.js";import"./withOsdkMetrics-_IPiFb8m.js";import"./makeExternalStore-BtLnKhO1.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
