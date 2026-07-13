import{j as r,M as s}from"./iframe-C-UwW4DG.js";import{P as p}from"./pdf-viewer-BXcLs81u.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DNYMVKmh.js";import"./preload-helper-Db0XYIFl.js";import"./PdfRenderer-BfOzve8J.js";import"./index-DooFDgSw.js";import"./PdfViewer-CEtCJVyu.js";import"./PdfViewer.module.css-rTFFclb_.js";import"./PdfViewerAnnotationLayer-tFhM5KQO.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-tZEZDFfy.js";import"./PdfViewerOutlineSidebar-G2ziUZq1.js";import"./PdfViewerSidebarHeader-D23mZMxN.js";import"./useBaseUiId-ClnYH1ug.js";import"./useControlled-TZvgmE5C.js";import"./CompositeRoot-CpEbcqAI.js";import"./CompositeItem-CIDE_9zh.js";import"./ToolbarRootContext-CyZPcg8f.js";import"./composite-Ypfb1Edk.js";import"./svgIconContainer-URl-rwet.js";import"./PdfViewerSearchBar-CRVxJT4C.js";import"./chevron-up-DLaB7dcJ.js";import"./chevron-down-BSTe-vxS.js";import"./cross-C0jFn5SQ.js";import"./PdfViewerSidebar-Cun4vW9U.js";import"./index-C5XF08j0.js";import"./index-BcDdhWi-.js";import"./index-C555AqYe.js";import"./PdfViewerToolbar-Dx8uCzxR.js";import"./Button-C5eVdiFy.js";import"./chevron-right-Cqc_ER_g.js";import"./Input-pe3OoF5W.js";import"./search-DBoTeCbD.js";import"./spin-DT_n95H8.js";import"./error-BfMTzUHm.js";import"./withOsdkMetrics-B7RoOYcb.js";import"./makeExternalStore-DrLBbM23.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
