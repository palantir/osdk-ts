import{j as r,M as s}from"./iframe-BD1MEMRl.js";import{P as p}from"./pdf-viewer-Cdji89OG.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C-kzTXtJ.js";import"./preload-helper-DFouLAkd.js";import"./PdfRenderer-BLhotMZd.js";import"./index-sFVy8NqN.js";import"./PdfViewer-C2j1QcLQ.js";import"./PdfViewer.module.css-DgUebSw_.js";import"./PdfViewerAnnotationLayer-DYPaLzmW.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D5QrZlEb.js";import"./PdfViewerOutlineSidebar-BIrUqHaG.js";import"./PdfViewerSidebarHeader-UliLR-2v.js";import"./useBaseUiId-C6VUj_Wo.js";import"./useControlled-Beqkb8BT.js";import"./CompositeRoot-BL-KH2pj.js";import"./CompositeItem-CNoQbRW6.js";import"./ToolbarRootContext-hpi9LUbr.js";import"./composite-DAwmvh4E.js";import"./svgIconContainer-Dbg64RB4.js";import"./PdfViewerSearchBar-CUqoFgEX.js";import"./chevron-up-Dv-ywW2n.js";import"./chevron-down-p-OqQdTE.js";import"./cross-C_Zco2FN.js";import"./PdfViewerSidebar-CsApP8rB.js";import"./index-Bhql2vLt.js";import"./index-Bi_O5ToU.js";import"./index-DJRVJ4qh.js";import"./PdfViewerToolbar-DWYxj66S.js";import"./Button-C-_7Zup6.js";import"./chevron-right-BKzmPQ7i.js";import"./Input-DtFEVn4t.js";import"./search-pFjymYek.js";import"./spin-cyyZDuyH.js";import"./error-Bkh3cooZ.js";import"./withOsdkMetrics-D-wPyKJ2.js";import"./makeExternalStore-R6DoBrXa.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
