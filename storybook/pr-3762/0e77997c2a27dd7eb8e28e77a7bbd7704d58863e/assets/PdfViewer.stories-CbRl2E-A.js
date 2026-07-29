import{j as r,M as s}from"./iframe-Dtkqspnq.js";import{P as p}from"./pdf-viewer-CFYz_xIZ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BL1pzywt.js";import"./preload-helper-CMjwTO2l.js";import"./PdfRenderer-K7bhHuF2.js";import"./index-O6kMzL-B.js";import"./PdfViewer-DqLCt4gX.js";import"./PdfViewer.module.css-C2LXSvLO.js";import"./PdfViewerAnnotationLayer-D5-Lvg8x.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DbD6m-1e.js";import"./PdfViewerOutlineSidebar-DdH1r7iR.js";import"./PdfViewerSidebarHeader-AL9wgEHw.js";import"./useBaseUiId-BA2Wb1vw.js";import"./useControlled-DsSZ6QOu.js";import"./CompositeRoot-5Q6Kbraf.js";import"./CompositeItem-C-3HiIeo.js";import"./ToolbarRootContext-BVt7FkS8.js";import"./composite-C43fxzlr.js";import"./svgIconContainer-7kIDCLLr.js";import"./PdfViewerSearchBar-DGV1nBd3.js";import"./chevron-up-DD9hh-5v.js";import"./chevron-down-Beub6QMI.js";import"./cross-RSYUfYNl.js";import"./PdfViewerSidebar-1jjVtyBV.js";import"./index-BzmK8_eD.js";import"./index-BK1pEJ_2.js";import"./index-DnTpAg1q.js";import"./PdfViewerToolbar-D_d1o6QI.js";import"./Button-GHfwW4ze.js";import"./chevron-right-eTNBzQkh.js";import"./Input-BQhqp0i4.js";import"./search-BdsiJdsL.js";import"./spin-B95XdUS_.js";import"./error-D0-EM7fN.js";import"./withOsdkMetrics-bTLqPtnq.js";import"./makeExternalStore-CpwKRFYJ.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
