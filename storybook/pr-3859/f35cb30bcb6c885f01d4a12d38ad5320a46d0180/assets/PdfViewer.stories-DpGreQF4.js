import{j as r,M as s}from"./iframe-DSbYefrL.js";import{P as p}from"./pdf-viewer-BBOhQ0Gh.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-K7EhEpt4.js";import"./preload-helper-Clv0QEBX.js";import"./PdfRenderer-CMmBfMz0.js";import"./index-DfJdOFwn.js";import"./PdfViewer-CjCw0Z0O.js";import"./PdfViewer.module.css-BM2ytaVW.js";import"./PdfViewerAnnotationLayer-BBF0fnh3.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-wzgi3gPC.js";import"./PdfViewerOutlineSidebar-CgbE6-r_.js";import"./PdfViewerSidebarHeader-D3XL3IWE.js";import"./useBaseUiId-DkV43R3v.js";import"./useControlled-BarHOyLv.js";import"./CompositeRoot-CSy-MUyO.js";import"./CompositeItem-BtVMJozf.js";import"./ToolbarRootContext-B6LO1XZ_.js";import"./composite-BhxdHiE2.js";import"./svgIconContainer-Bkjdx6MT.js";import"./PdfViewerSearchBar-BDKkgeyR.js";import"./chevron-up-Hg3UIbY-.js";import"./chevron-down-Bh4mvEIQ.js";import"./cross-CfYS8owk.js";import"./PdfViewerSidebar-CIJy64uR.js";import"./index-R_rBoHID.js";import"./index-lJwGhQIz.js";import"./index-BRbX29hR.js";import"./PdfViewerToolbar-Bm2EFjDm.js";import"./Button-C4t72u0x.js";import"./chevron-right-FHPvYfHz.js";import"./Input-DHiPLKtg.js";import"./search-qlM389i2.js";import"./spin-19U-bIxr.js";import"./error-BdBj8w6f.js";import"./withOsdkMetrics-D8wuERpN.js";import"./makeExternalStore-48lrjWXo.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
