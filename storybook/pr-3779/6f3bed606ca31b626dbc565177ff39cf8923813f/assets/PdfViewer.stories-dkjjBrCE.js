import{j as r,M as s}from"./iframe-DlJcn1ee.js";import{P as p}from"./pdf-viewer-DBYsVgtA.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Dg4HbICA.js";import"./preload-helper-BLYSAxZc.js";import"./PdfRenderer-DO1tVoTY.js";import"./index-CkQyG9JZ.js";import"./PdfViewer-CHj5gmYU.js";import"./PdfViewer.module.css-FYNRRXPY.js";import"./PdfViewerAnnotationLayer-Dip-BBUh.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CSjQF6zA.js";import"./PdfViewerOutlineSidebar-BIKnONBH.js";import"./PdfViewerSidebarHeader-JC09nNmT.js";import"./useBaseUiId-CXPuJlvy.js";import"./useControlled-BS4JJ_gb.js";import"./CompositeRoot-QEn-3CHU.js";import"./CompositeItem-o1wZxKIg.js";import"./ToolbarRootContext-BPqNmhML.js";import"./composite-zLUhUg_C.js";import"./svgIconContainer-5ONNfYAu.js";import"./PdfViewerSearchBar-E3RSNdJ6.js";import"./chevron-up-BT_VQOVW.js";import"./chevron-down-DPOW8KDp.js";import"./cross-BZzn8J7n.js";import"./PdfViewerSidebar-3Q3MbiuD.js";import"./index-BzFfhsxG.js";import"./index-Ci_TDln9.js";import"./index-B8NVU8EY.js";import"./PdfViewerToolbar-4-8QXLC1.js";import"./Button-BcjZpSmY.js";import"./chevron-right-DgIkT6XO.js";import"./Input-DpCgc88D.js";import"./search-Dfke7UKE.js";import"./spin-CR3Our9a.js";import"./error-CS0Z81pt.js";import"./withOsdkMetrics-a2bLSbfF.js";import"./makeExternalStore-DRpXALfh.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
