import{j as r,M as s}from"./iframe-CqtM1m66.js";import{P as p}from"./pdf-viewer-C6kF_ktN.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CkJtFApE.js";import"./preload-helper-8QenNoR3.js";import"./PdfRenderer-ZieGG-VE.js";import"./index-Bm_s2cXS.js";import"./PdfViewer-KdMAiF8N.js";import"./PdfViewer.module.css-C0fzBnjN.js";import"./PdfViewerAnnotationLayer-B0AB9PJs.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-nHBetJ42.js";import"./PdfViewerOutlineSidebar-HZqJF08W.js";import"./PdfViewerSidebarHeader-DQOoyh4u.js";import"./useBaseUiId-CNCxgIcO.js";import"./useControlled--_m8dGzA.js";import"./CompositeRoot-CmYdRGjw.js";import"./CompositeItem-BtfVG94N.js";import"./ToolbarRootContext-VqVmAPVb.js";import"./composite-BQCFMfMu.js";import"./svgIconContainer-0xugvUkl.js";import"./PdfViewerSearchBar-BDi3HHTs.js";import"./chevron-up-nSvoDsEd.js";import"./chevron-down-Bj4cqrv5.js";import"./cross-C3WCxJ7o.js";import"./PdfViewerSidebar-CqhE6Pl4.js";import"./index-Dfnjwbay.js";import"./index-Cj6SM7QT.js";import"./index-CmmulGo1.js";import"./PdfViewerToolbar-CXAn9CTR.js";import"./Button-B1BjSWNJ.js";import"./chevron-right-WB-4kJAZ.js";import"./Input-pOGeWJ3Y.js";import"./search-DngCEFEh.js";import"./spin-Csx2nC9V.js";import"./error-CT_OGppP.js";import"./withOsdkMetrics-BONS1yzE.js";import"./makeExternalStore-BPqGMrvG.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
