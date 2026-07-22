import{j as r,M as s}from"./iframe-BRxXnNeA.js";import{P as p}from"./pdf-viewer-BDK9qA2e.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C3yoCWEz.js";import"./preload-helper-ZwpNBDck.js";import"./PdfRenderer-Bq95b-H-.js";import"./index-DnUdziE3.js";import"./PdfViewer-GPNsY9rV.js";import"./PdfViewer.module.css-Cj91CPPf.js";import"./PdfViewerAnnotationLayer-CyLFUMNH.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument--yXDyOmv.js";import"./PdfViewerOutlineSidebar-eL_EEHbN.js";import"./PdfViewerSidebarHeader-DZMRM2Md.js";import"./useBaseUiId-iHLM7QjT.js";import"./useControlled-StFrWOwS.js";import"./CompositeRoot-Cvlt3Qca.js";import"./CompositeItem-01NlXsRP.js";import"./ToolbarRootContext-DTrfrJro.js";import"./composite-BmCm4IKS.js";import"./svgIconContainer-BOuRuwJr.js";import"./PdfViewerSearchBar-Cfe4CSxm.js";import"./chevron-up-B6jd7yJ5.js";import"./chevron-down-DBKWZy9U.js";import"./cross-p5C9R9_r.js";import"./PdfViewerSidebar-Bnd-lj6s.js";import"./index-CYoRdqfZ.js";import"./index-BMsxRPaK.js";import"./index-V95TsBfL.js";import"./PdfViewerToolbar-BbyxC491.js";import"./Button-CLHyeJxI.js";import"./chevron-right-D1iH5wCI.js";import"./Input-CGTuhK0d.js";import"./search-DKQ2rHbj.js";import"./spin-Do418CE6.js";import"./error-BFvdxdQn.js";import"./withOsdkMetrics-DEkYj1jo.js";import"./makeExternalStore-DmpDAepm.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
