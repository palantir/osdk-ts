import{j as r,M as s}from"./iframe-DIE0F-FJ.js";import{P as p}from"./pdf-viewer-BBr05ESS.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-tYka62IP.js";import"./preload-helper-CdCw_D6s.js";import"./PdfViewer-C7VhOdEQ.js";import"./index-BXhLRBiI.js";import"./BasePdfViewer-D0jysX5Q.js";import"./BasePdfViewer.module.css-CON3C7s1.js";import"./PdfViewerAnnotationLayer-D7yClbef.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cb7UKWnm.js";import"./PdfViewerOutlineSidebar-BFi0Mr4r.js";import"./PdfViewerSidebarHeader-BUTgdVo_.js";import"./useBaseUiId-BGN3IKJR.js";import"./useControlled-BuhNUpGX.js";import"./CompositeRoot-D0uAXqk_.js";import"./CompositeItem-Cu0VA6bk.js";import"./ToolbarRootContext-CovMsxmO.js";import"./composite-RzFWQe2R.js";import"./svgIconContainer-BGsheyOK.js";import"./PdfViewerSearchBar-C4VV0LlE.js";import"./chevron-up-DTcEzRvr.js";import"./chevron-down-Dw6bDKjP.js";import"./cross-B--tnJuh.js";import"./PdfViewerSidebar-ByGDwo-t.js";import"./index-Bd5DnQxC.js";import"./index-PVYT1aqJ.js";import"./index-BkvxGWCD.js";import"./PdfViewerToolbar-C3Lm-Eyq.js";import"./Button-CczGpO78.js";import"./chevron-right-ydBSESkY.js";import"./Input-BprksExu.js";import"./search-DuYiMzJM.js";import"./spin-DyLQKdHZ.js";import"./error-BVPuSvQJ.js";import"./withOsdkMetrics-g9qSGbZX.js";import"./makeExternalStore-7uZMc2Bx.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
