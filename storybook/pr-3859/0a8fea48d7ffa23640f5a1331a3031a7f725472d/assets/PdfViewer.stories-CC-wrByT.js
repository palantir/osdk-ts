import{j as r,M as s}from"./iframe-DMEeR_A6.js";import{P as p}from"./pdf-viewer-XDmA9yki.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Yd1mddNS.js";import"./preload-helper-CSwxJ2Qu.js";import"./PdfRenderer-BkDOU07D.js";import"./index-BqSwH6BS.js";import"./PdfViewer-CQdjG_cW.js";import"./PdfViewer.module.css-jk_TnqFR.js";import"./PdfViewerAnnotationLayer-AzBAe36P.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BYWnCD1x.js";import"./PdfViewerOutlineSidebar-BDnrJ11i.js";import"./PdfViewerSidebarHeader-KCRu1Rhn.js";import"./useBaseUiId-C_keuJD_.js";import"./useControlled-JgK447yP.js";import"./CompositeRoot-3lswtgLc.js";import"./CompositeItem-BjD7sfVu.js";import"./ToolbarRootContext-DUcwU7Eq.js";import"./composite-c9YX8hZx.js";import"./svgIconContainer-BjNsgw11.js";import"./PdfViewerSearchBar-CsIpe2wL.js";import"./chevron-up-Dlu4dYZg.js";import"./chevron-down-CQJ4c2jJ.js";import"./cross-D1DQ-gsn.js";import"./PdfViewerSidebar-xs5Ns3JL.js";import"./index-BDKCNXPL.js";import"./index-DfbVa9Ua.js";import"./index-BNsZDNUv.js";import"./PdfViewerToolbar-3cozNrKU.js";import"./Button-D8YP-W_J.js";import"./chevron-right-C0SpgxV8.js";import"./Input-DNu0XTv_.js";import"./search-C4awjolY.js";import"./spin-B8LfjDYX.js";import"./error-B_Co1YFo.js";import"./withOsdkMetrics-CPkWaZWg.js";import"./makeExternalStore-lRhVC4OU.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
