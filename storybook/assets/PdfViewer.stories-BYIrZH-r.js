import{j as r,M as s}from"./iframe-Cq0f0YGc.js";import{P as p}from"./pdf-viewer-BZ9gWMR0.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BTcAlWCt.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfRenderer-eP0ir7cV.js";import"./index-CHLZ_cbX.js";import"./PdfViewer-Ccp0u2GJ.js";import"./PdfViewer.module.css-DhFxKPNG.js";import"./PdfViewerAnnotationLayer-CJoOksye.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C-7WynL3.js";import"./PdfViewerOutlineSidebar-PLF4NRQ0.js";import"./PdfViewerSidebarHeader-CLRuShQi.js";import"./useBaseUiId-CzmmRtVN.js";import"./useControlled-wT_vKaA9.js";import"./CompositeRoot-B-mbL8DR.js";import"./CompositeItem-BJhSD00r.js";import"./ToolbarRootContext-ChqJin0N.js";import"./composite-StbfLZaH.js";import"./svgIconContainer-B8mFhiXK.js";import"./PdfViewerSearchBar-BIHlrPRW.js";import"./chevron-up-CZmzhyew.js";import"./chevron-down-BeEehn98.js";import"./cross-DmatqTCY.js";import"./PdfViewerSidebar-QWoZrBJa.js";import"./index-DhXipvQj.js";import"./index-Jjw3xH2F.js";import"./index-BAhUG1kk.js";import"./PdfViewerToolbar-BiLzL5OD.js";import"./Button-K6OgNzs-.js";import"./chevron-right-C4itB9hF.js";import"./Input-bapHzMjV.js";import"./search-DP9M0N5w.js";import"./spin-CPlJPRId.js";import"./error-CDthDz4c.js";import"./withOsdkMetrics-DCnuDoUP.js";import"./makeExternalStore-CQ4aObpt.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
