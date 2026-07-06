import{j as r,M as s}from"./iframe-CS4uInNs.js";import{P as p}from"./pdf-viewer-fpZVS4Q6.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DLlVlGnY.js";import"./preload-helper-DJbiWg0J.js";import"./PdfRenderer-i8WBCpxz.js";import"./index-Mo7NaMAc.js";import"./PdfViewer-b6Fi3TeJ.js";import"./PdfViewer.module.css-EridQRCR.js";import"./PdfViewerAnnotationLayer-Be3rlLCd.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C2BzcnOn.js";import"./PdfViewerOutlineSidebar-BZjRp_Es.js";import"./PdfViewerSidebarHeader-CmE3APNY.js";import"./useBaseUiId-DmeLcsx8.js";import"./useControlled-HOGSaRNJ.js";import"./CompositeRoot-CLa9K15O.js";import"./CompositeItem-CMg-qIJ6.js";import"./ToolbarRootContext-B6_w_oot.js";import"./composite-CZDWh6fZ.js";import"./svgIconContainer-BcZVA4m2.js";import"./PdfViewerSearchBar-BME_sl-s.js";import"./chevron-up-3JoazL6R.js";import"./chevron-down-Bzytuh9J.js";import"./cross-BjOhv1Ii.js";import"./PdfViewerSidebar-DS3MjfcU.js";import"./index-AO9C5vmj.js";import"./index-Dn8izZ7b.js";import"./index-B9D3MW7f.js";import"./PdfViewerToolbar-BBctA-8o.js";import"./Button-CRGIRpju.js";import"./chevron-right-BL4Da8r3.js";import"./Input-BJASKMpQ.js";import"./search-C2vneXVH.js";import"./spin-Qty-taMb.js";import"./error-Bl0z0l3a.js";import"./withOsdkMetrics-DNx8DpSS.js";import"./makeExternalStore-B5Sbxl5a.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
