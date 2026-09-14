import{j as r,M as s}from"./iframe-CEbiJF3f.js";import{P as p}from"./pdf-viewer-CVKYLedY.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BhAmTzL6.js";import"./preload-helper--fKrMWtx.js";import"./PdfViewer-DPy_daHM.js";import"./index-BRgb61-Z.js";import"./BasePdfViewer-DrZd9Nyg.js";import"./BasePdfViewer.module.css-BlQlkcCe.js";import"./PdfViewerAnnotationLayer-DApOw9YN.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-_exlOWLd.js";import"./PdfViewerOutlineSidebar-BvRRK6rg.js";import"./PdfViewerSidebarHeader-DvngDX-g.js";import"./useBaseUiId-BeYV2UYU.js";import"./useControlled-B3SpxFFa.js";import"./CompositeRoot-DBKKQc9C.js";import"./CompositeItem-D6m2hJvC.js";import"./ToolbarRootContext-FCi4TTjo.js";import"./composite-u77iw9-s.js";import"./svgIconContainer-CApLlW_3.js";import"./PdfViewerSearchBar-yZBOduME.js";import"./chevron-up-BZYCEKg5.js";import"./chevron-down-SWbuBgt1.js";import"./cross-Be87dRvq.js";import"./PdfViewerSidebar-BPPseCmN.js";import"./index-DjIJ3azX.js";import"./index-DjCMbuHr.js";import"./index-CW5Q51QX.js";import"./PdfViewerToolbar-CL2hUfGX.js";import"./Button-BrIf-_b8.js";import"./chevron-right-BZfq-VJl.js";import"./Input-DqoIy3Li.js";import"./search-0rzEE67s.js";import"./spin-BQp7LSgz.js";import"./error-q5QL61EF.js";import"./withOsdkMetrics-C-j5mTrT.js";import"./makeExternalStore-DY8wBZ1L.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
