import{j as r,M as s}from"./iframe-DUpgw0Vd.js";import{P as p}from"./pdf-viewer-xNnOzt25.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-ChvBzPW1.js";import"./preload-helper-4IfNc0vd.js";import"./PdfRenderer-R9MeUM6f.js";import"./index-CmRCXIqy.js";import"./PdfViewer-GdT19QbY.js";import"./PdfViewer.module.css-CFfLXQ67.js";import"./PdfViewerAnnotationLayer-BbBHWaGb.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BDXqM67c.js";import"./PdfViewerOutlineSidebar-B2QkH1ga.js";import"./PdfViewerSidebarHeader-BsmlHXbl.js";import"./useBaseUiId-CHJKWKze.js";import"./useControlled-BGlyML6J.js";import"./CompositeRoot-CF94DulB.js";import"./CompositeItem-HjuNkhWe.js";import"./ToolbarRootContext-D_4yVG0k.js";import"./composite-BdvAgWju.js";import"./svgIconContainer-DfmYtqq2.js";import"./PdfViewerSearchBar-CleFHvw8.js";import"./chevron-up-ZenJ8ZgF.js";import"./chevron-down-DDWFgZI5.js";import"./cross-DetTaMvY.js";import"./PdfViewerSidebar-CSqgP6GG.js";import"./index-BfXKVP_t.js";import"./index-Dz8zX7ks.js";import"./index-BJYssAoC.js";import"./PdfViewerToolbar-jL7Ia0T_.js";import"./Button-DE1qFbH-.js";import"./chevron-right-CjAF8cX1.js";import"./Input-ysEfgJNw.js";import"./search-BkGzh2w4.js";import"./spin-FmGiVw5C.js";import"./error-CKdaIVtA.js";import"./withOsdkMetrics-CPnuI3vU.js";import"./makeExternalStore-CExakVHU.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
