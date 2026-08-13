import{j as r,M as s}from"./iframe-pVpd-5Fd.js";import{P as p}from"./pdf-viewer-Er6Ixyni.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-zMtuqBz0.js";import"./preload-helper-CWKX588j.js";import"./PdfViewer-BaxtYz8T.js";import"./index-BqhgvWoK.js";import"./BasePdfViewer-C3Q0qKbm.js";import"./BasePdfViewer.module.css-H1A9_lrp.js";import"./PdfViewerAnnotationLayer-f6AjvRkL.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-EACutf9B.js";import"./PdfViewerOutlineSidebar-H-aWmZWz.js";import"./PdfViewerSidebarHeader--S6-Ygn1.js";import"./useBaseUiId-E_3kyUVy.js";import"./useControlled-8FvqARU6.js";import"./CompositeRoot-ayu-apR3.js";import"./CompositeItem-BQXuUE1x.js";import"./ToolbarRootContext-CZHUcEVu.js";import"./composite-CwUrmrWF.js";import"./svgIconContainer-CaaU9NHC.js";import"./PdfViewerSearchBar-CNrxOapg.js";import"./chevron-up-CVGDpGZ_.js";import"./chevron-down-DYz5-Z2v.js";import"./cross-DkYiF8wc.js";import"./PdfViewerSidebar-DI7tpfcc.js";import"./index-BCDVMhSh.js";import"./index-CylWHs1O.js";import"./index-DjcUw-9V.js";import"./PdfViewerToolbar-CmoMth7N.js";import"./Button-DFmHXmt2.js";import"./chevron-right-VZNtTVvQ.js";import"./Input-B4fGMfLL.js";import"./search-Jf5xJ1D9.js";import"./spin-iz75IPun.js";import"./error-CBBs5I85.js";import"./withOsdkMetrics-DrmtF7vj.js";import"./makeExternalStore-v2dcTeAE.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
