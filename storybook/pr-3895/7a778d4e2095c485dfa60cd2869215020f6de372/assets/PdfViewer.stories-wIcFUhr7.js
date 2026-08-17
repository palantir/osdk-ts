import{j as r,M as s}from"./iframe-BoqxVsev.js";import{P as p}from"./pdf-viewer-CVdlnRr-.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DTGg4-TU.js";import"./preload-helper-Aq8qnvWR.js";import"./PdfViewer-CyIqE3R7.js";import"./index-hQXIiWom.js";import"./BasePdfViewer-DGHQbHJe.js";import"./BasePdfViewer.module.css-CjPeLL16.js";import"./PdfViewerAnnotationLayer-D27YmdC6.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-q6aqbmJP.js";import"./PdfViewerOutlineSidebar-19my6zln.js";import"./PdfViewerSidebarHeader-B4TT6g7t.js";import"./useBaseUiId-yvSaUVvb.js";import"./useControlled-ZG4JZg3B.js";import"./CompositeRoot-p3-kyosn.js";import"./CompositeItem-BJ5PlAn8.js";import"./ToolbarRootContext-CoT6phAF.js";import"./composite-BXQWKcxK.js";import"./svgIconContainer-CJ6zO_Yl.js";import"./PdfViewerSearchBar-CNw_WY0w.js";import"./chevron-up-bPqQFBAf.js";import"./chevron-down-BBGQdN8O.js";import"./cross-DvCT72yg.js";import"./PdfViewerSidebar-8UhQuJnK.js";import"./index-DVhCuea2.js";import"./index-DdyFNYe7.js";import"./index-BB1uKxMJ.js";import"./PdfViewerToolbar-BfL4AC1Y.js";import"./Button-D1EPyyjE.js";import"./chevron-right-isHt91Q6.js";import"./Input-DVgEeo3Y.js";import"./search-DFnmSjiz.js";import"./spin-jW6wNMPz.js";import"./error-yoGLU_F1.js";import"./withOsdkMetrics-D2tjX_Ah.js";import"./makeExternalStore-DUwv-hHr.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
