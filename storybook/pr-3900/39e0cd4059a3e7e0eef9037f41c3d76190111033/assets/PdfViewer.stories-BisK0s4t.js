import{j as r,M as s}from"./iframe-CNz8RlYl.js";import{P as p}from"./pdf-viewer-CtxoUIHd.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DLofPnyY.js";import"./preload-helper-BIeB60q0.js";import"./PdfViewer-DHT7gCu0.js";import"./index-XxW0KRYf.js";import"./BasePdfViewer-C3FIrtOT.js";import"./BasePdfViewer.module.css-DV5k_Jh2.js";import"./PdfViewerAnnotationLayer-BnPUQj2j.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CWmEUPUD.js";import"./PdfViewerOutlineSidebar-DlAB2fNK.js";import"./PdfViewerSidebarHeader-BqNlG_wU.js";import"./useBaseUiId-D4vwSczU.js";import"./useControlled-DQvqj1ii.js";import"./CompositeRoot-DlGasQEx.js";import"./CompositeItem-rHSaquZY.js";import"./ToolbarRootContext-D4VXXO-L.js";import"./composite-CZy-mnNe.js";import"./svgIconContainer-B0JmWAlI.js";import"./PdfViewerSearchBar-CLDA8NtI.js";import"./chevron-up-DgraSbQm.js";import"./chevron-down-DoirlpdZ.js";import"./cross-CO8ceZUf.js";import"./PdfViewerSidebar-B3QyVBKC.js";import"./index-9-SdAaB2.js";import"./index-DGRndsQB.js";import"./index-BlGd4sFh.js";import"./PdfViewerToolbar-BwqKGpWl.js";import"./Button-BoQYF-o_.js";import"./chevron-right-XTmjx07v.js";import"./Input-CpAPI-dP.js";import"./search-ERRW7qI9.js";import"./spin-BAakQ5St.js";import"./error-DqoZ7f_W.js";import"./withOsdkMetrics-CtoWR-rA.js";import"./makeExternalStore-pBRszKy8.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
