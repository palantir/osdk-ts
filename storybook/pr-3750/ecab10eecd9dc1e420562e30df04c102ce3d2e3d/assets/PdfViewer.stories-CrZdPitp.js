import{j as r,M as s}from"./iframe-DpDxhrTk.js";import{P as p}from"./pdf-viewer-YX1A6MhW.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BsqQE5rc.js";import"./preload-helper-C3Wongev.js";import"./PdfRenderer-CrEY5BgM.js";import"./index-BesxUkRl.js";import"./PdfViewer-CGl1Xh_q.js";import"./PdfViewer.module.css-Xet0-HHr.js";import"./PdfViewerAnnotationLayer-Bc9l1I5w.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Ba3rSvqX.js";import"./PdfViewerOutlineSidebar-D_V9dbjv.js";import"./PdfViewerSidebarHeader-DnatAVnm.js";import"./useBaseUiId-ZtxZdVDB.js";import"./useControlled-oqkSa6n9.js";import"./CompositeRoot-CxHMHM-U.js";import"./CompositeItem-ClvJg4YM.js";import"./ToolbarRootContext-BdbZ8fbN.js";import"./composite-XVS2lbRG.js";import"./svgIconContainer-BSn34rPU.js";import"./PdfViewerSearchBar-1xGw1ROg.js";import"./chevron-up-C8x2INba.js";import"./chevron-down-DNQ2sG7I.js";import"./cross-BPqRdDax.js";import"./PdfViewerSidebar-FrUA9Y9V.js";import"./index-knwwMd04.js";import"./index-DO-yw_mS.js";import"./index-CPnh_BhQ.js";import"./PdfViewerToolbar-CAcNgMUg.js";import"./Button-xd1UXX3d.js";import"./chevron-right-BEXWHEKY.js";import"./Input-MJ2Nqs1U.js";import"./search-FgzO_a7-.js";import"./spin-mPrLznRg.js";import"./error-0_EDGuUl.js";import"./withOsdkMetrics-BoydcYO1.js";import"./makeExternalStore-DfqxgRvK.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
