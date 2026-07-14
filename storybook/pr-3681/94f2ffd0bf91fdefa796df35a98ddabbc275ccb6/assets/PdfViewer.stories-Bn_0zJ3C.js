import{j as r,M as s}from"./iframe-tF3hD-So.js";import{P as p}from"./pdf-viewer-cgujLFWa.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Db9PdnQF.js";import"./preload-helper-CafC6HMh.js";import"./PdfRenderer-iU0ZMdMP.js";import"./index-GBcOF-F_.js";import"./PdfViewer-CFIAssFf.js";import"./PdfViewer.module.css-DAR3tsvD.js";import"./PdfViewerAnnotationLayer-DwAWtTZw.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B9XxYn1M.js";import"./PdfViewerOutlineSidebar-BXr5hiB0.js";import"./PdfViewerSidebarHeader-BHssILch.js";import"./useBaseUiId-C4YmZA-c.js";import"./useControlled-Bb3lODqh.js";import"./CompositeRoot-H4sFKWHA.js";import"./CompositeItem-DQyGAZQU.js";import"./ToolbarRootContext-COnfOXzK.js";import"./composite-DQK6XbxI.js";import"./svgIconContainer-DtEF31st.js";import"./PdfViewerSearchBar-DDafzFVg.js";import"./chevron-up-BPOuQ5ni.js";import"./chevron-down-E6cNQwIo.js";import"./cross-Dfz4JsMi.js";import"./PdfViewerSidebar-BFdmAMvz.js";import"./index-B3qB2-5S.js";import"./index-DCiez3-w.js";import"./index-Dfo0_ggV.js";import"./PdfViewerToolbar-D6J2Pm_l.js";import"./Button-Cz1tYGk1.js";import"./chevron-right-BRy24p4H.js";import"./Input-C9BW0kGM.js";import"./search-73ENE7ac.js";import"./spin-Q-4how-I.js";import"./error-CJjrzN0-.js";import"./withOsdkMetrics-CLQK8lew.js";import"./makeExternalStore-B9Ehzq0f.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
