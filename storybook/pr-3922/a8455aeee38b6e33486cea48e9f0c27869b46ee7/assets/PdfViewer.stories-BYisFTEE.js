import{j as r,M as s}from"./iframe-CSel4t1W.js";import{P as p}from"./pdf-viewer-CtvADHPP.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BmeZg5nc.js";import"./preload-helper-DeRLNq8K.js";import"./PdfViewer-DJBuRwMa.js";import"./index-VOBk3ad_.js";import"./BasePdfViewer-BCQ7LBHa.js";import"./BasePdfViewer.module.css-yD3jnVzy.js";import"./PdfViewerAnnotationLayer-Cv6egNjN.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Bc5IZpzZ.js";import"./PdfViewerOutlineSidebar-D760OYnZ.js";import"./PdfViewerSidebarHeader-Q7AsHKpW.js";import"./useBaseUiId-D0496slr.js";import"./useControlled-7Z_CrWcG.js";import"./CompositeRoot-BwnD_IR5.js";import"./CompositeItem-DNegNKGA.js";import"./ToolbarRootContext-CEF5Xnn_.js";import"./composite-Byzj7O17.js";import"./svgIconContainer-i8GFflPC.js";import"./PdfViewerSearchBar-DLzjXMqg.js";import"./chevron-up-DinYoorE.js";import"./chevron-down-cgZkYG2x.js";import"./cross-DPetmLAe.js";import"./PdfViewerSidebar-Dzmrrb-n.js";import"./index-BoKtPRc2.js";import"./index-DeXJQAWa.js";import"./index--NqLpmCo.js";import"./PdfViewerToolbar-WsJvFNjn.js";import"./Button-B0bJWnZB.js";import"./chevron-right-ReRVYVUW.js";import"./Input-DGTrvJuV.js";import"./search-BwGGgMMr.js";import"./spin-D6Ju89EO.js";import"./error-zHB_ZVMZ.js";import"./withOsdkMetrics-BkUfyHr_.js";import"./makeExternalStore-DsAD24Tw.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
