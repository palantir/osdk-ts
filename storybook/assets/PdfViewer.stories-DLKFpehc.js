import{j as r,M as s}from"./iframe-DFUOfUSe.js";import{P as p}from"./pdf-viewer-BPd1f75a.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CtuSU4kg.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfViewer-BUKKj2Ul.js";import"./index-kBc01955.js";import"./BasePdfViewer-DKujOuvN.js";import"./BasePdfViewer.module.css-DNKikBac.js";import"./PdfViewerAnnotationLayer-nO52a5mG.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-X254L-BW.js";import"./PdfViewerOutlineSidebar-DtEw3pai.js";import"./PdfViewerSidebarHeader-CXQh4G7t.js";import"./useBaseUiId-iIiGKJbX.js";import"./useControlled-v23QOsKY.js";import"./CompositeRoot-C9VZMVJZ.js";import"./CompositeItem-DFHRfQA2.js";import"./ToolbarRootContext-BDheAh6f.js";import"./composite-1eFG2hxZ.js";import"./svgIconContainer-BEzB0n9v.js";import"./PdfViewerSearchBar-DPQjyx6l.js";import"./chevron-up-s7Dx9oge.js";import"./chevron-down-CYOYBDrS.js";import"./cross-B1MvVSxZ.js";import"./PdfViewerSidebar-NM674mLO.js";import"./index-DvkqE7yU.js";import"./index-CjvFN5_9.js";import"./index-BENq6zow.js";import"./PdfViewerToolbar-DTXyciL2.js";import"./Button-ixew-sI_.js";import"./chevron-right-6h718sSj.js";import"./Input-BQVjPxIe.js";import"./search-DJSgEYs8.js";import"./spin-BS1mZHTh.js";import"./error-D5rDq67F.js";import"./withOsdkMetrics-BWtToZ6G.js";import"./makeExternalStore-CBoWfP78.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
