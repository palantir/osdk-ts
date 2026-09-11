import{j as r,M as s}from"./iframe-q73h-SNz.js";import{P as p}from"./pdf-viewer-CCYaFy8x.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D00wGYhc.js";import"./preload-helper-BvXISORE.js";import"./PdfViewer-D8bG2YNk.js";import"./index-CNgILQVN.js";import"./BasePdfViewer-cuG4oIcm.js";import"./BasePdfViewer.module.css-CEgmGXDe.js";import"./PdfViewerAnnotationLayer-B9T6QaPs.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BnKZu6zx.js";import"./PdfViewerOutlineSidebar-B66J6UIC.js";import"./PdfViewerSidebarHeader-CFewFIXA.js";import"./useBaseUiId-BT4TVIMU.js";import"./useControlled-CIDCJXAS.js";import"./CompositeRoot-BPySZV7q.js";import"./CompositeItem-8Q0GNXmT.js";import"./ToolbarRootContext-XN_eoe5I.js";import"./composite-DsUUOBpL.js";import"./svgIconContainer-BnJjPefi.js";import"./PdfViewerSearchBar-DXBVXR8Q.js";import"./chevron-up-CwrQarYn.js";import"./chevron-down-CcztAG1Q.js";import"./cross-UurqhnpQ.js";import"./PdfViewerSidebar-BQcjDujq.js";import"./index-CgMWGLyW.js";import"./index-CmcHR3Mh.js";import"./index-GTDJrYHL.js";import"./PdfViewerToolbar-BQDy4xWg.js";import"./Button-DMD0TrjN.js";import"./chevron-right-CbXDzyKQ.js";import"./Input-CUYY-XQS.js";import"./search-CyIDS8Xl.js";import"./spin-MIdvHrni.js";import"./error-BBRDAF1W.js";import"./withOsdkMetrics-mt0BkM0o.js";import"./makeExternalStore-CvHnGZr3.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
        code: \`// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,U as default};
