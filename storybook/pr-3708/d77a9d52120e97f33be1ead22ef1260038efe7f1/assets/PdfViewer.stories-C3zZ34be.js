import{j as r,M as s}from"./iframe-D3dMtWZi.js";import{P as p}from"./pdf-viewer-O39wVjzQ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Bi8pwnYC.js";import"./preload-helper-DUWG9kqD.js";import"./PdfRenderer-BHHlQwYk.js";import"./index-BkLNCLKs.js";import"./PdfViewer-DQ4glsCb.js";import"./PdfViewer.module.css-HVhIi4nj.js";import"./PdfViewerAnnotationLayer-B5jrvUZv.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CvksHCtx.js";import"./PdfViewerOutlineSidebar--_YoDk8y.js";import"./PdfViewerSidebarHeader-b2XnZDfM.js";import"./useBaseUiId-BeKkfQxb.js";import"./useControlled-4H3BxY_w.js";import"./CompositeRoot-Cv925GMn.js";import"./CompositeItem-iHcCjNZO.js";import"./ToolbarRootContext-D4W13f8M.js";import"./composite-HvEyyie1.js";import"./svgIconContainer-B-3gwpq3.js";import"./PdfViewerSearchBar-_EdurRhp.js";import"./chevron-up-DMBHw9Af.js";import"./chevron-down-CQdp532l.js";import"./cross-BRNjhRUe.js";import"./PdfViewerSidebar-YZ0p8dng.js";import"./index-DpVeZ48A.js";import"./index-Jm7ycLnY.js";import"./index-sXXayhsV.js";import"./PdfViewerToolbar-DoTjgg72.js";import"./Button-uPNp4rf8.js";import"./chevron-right-C3iCWYCO.js";import"./Input-BYKHfHEU.js";import"./search-DFI2cd-q.js";import"./spin-9E0eqek6.js";import"./error-DQrsSH8S.js";import"./withOsdkMetrics-BxkdfDLM.js";import"./makeExternalStore-DtcHQJz3.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
