import{j as r,M as s}from"./iframe-BH0RiS07.js";import{P as p}from"./pdf-viewer-DdqrdJom.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Bg9lRNID.js";import"./preload-helper-ByubuHXR.js";import"./PdfRenderer-7rwsyLHr.js";import"./index-7v2RjI2w.js";import"./PdfViewer-DKPM7cwM.js";import"./PdfViewer.module.css-C_7fBucJ.js";import"./PdfViewerAnnotationLayer-CRjO8DRt.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BGxNZufF.js";import"./PdfViewerOutlineSidebar-NnSu2U8l.js";import"./PdfViewerSidebarHeader-CuBUPJut.js";import"./useBaseUiId-CUYaSpyz.js";import"./useControlled-CIhWFCzo.js";import"./CompositeRoot--o8y2eSl.js";import"./CompositeItem-YyL2cv7w.js";import"./ToolbarRootContext-Dy6qwQeR.js";import"./composite-Bx3ib-QK.js";import"./svgIconContainer-FtuH6umr.js";import"./PdfViewerSearchBar-B3lPWxRz.js";import"./chevron-up-CfRY8-Up.js";import"./chevron-down-DuuQaagn.js";import"./cross-D9ZUP5Ns.js";import"./PdfViewerSidebar-uM7Zabpz.js";import"./index-BkgjoZmi.js";import"./index-BPstulOd.js";import"./index-C2T1E1t9.js";import"./PdfViewerToolbar-DdHmHN0w.js";import"./Button-Dpxlhfn0.js";import"./chevron-right-B8LPlJQH.js";import"./Input-elqhlQ-r.js";import"./search-Bk-_LlpL.js";import"./spin-BknOkAr6.js";import"./error-BPzajNoT.js";import"./withOsdkMetrics-BwSBQoqW.js";import"./makeExternalStore-Cn2OHyrh.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
