import{j as r,M as s}from"./iframe-BUEP5_KN.js";import{P as p}from"./pdf-viewer-efQoEq0Y.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-u6sLHOWT.js";import"./preload-helper-BCZ0e6Bx.js";import"./PdfRenderer-C-QANaxs.js";import"./index-Cv5GbN86.js";import"./PdfViewer-CMTak1Hn.js";import"./PdfViewer.module.css-0lIWmL1T.js";import"./PdfViewerAnnotationLayer-KvhoyHHq.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DjH5dyGq.js";import"./PdfViewerOutlineSidebar-BHJ0N99Y.js";import"./PdfViewerSidebarHeader-DXUnVCmf.js";import"./useBaseUiId-CtzwQFB0.js";import"./useControlled-PKwq7ae5.js";import"./CompositeRoot-yiBwtH19.js";import"./CompositeItem-C6hNbQz3.js";import"./ToolbarRootContext-BnGkTKD4.js";import"./composite-CRlO-KKn.js";import"./svgIconContainer-BxBMhXhK.js";import"./PdfViewerSearchBar-BK9jQg10.js";import"./chevron-up-CSOCtVod.js";import"./chevron-down-BLw7EeHj.js";import"./cross-BFI2c1gT.js";import"./PdfViewerSidebar-MUk52W77.js";import"./index-B16c37PX.js";import"./index-BFlpobHB.js";import"./index-C5qosZUE.js";import"./PdfViewerToolbar-Bf7qcsHC.js";import"./Button-BSn-_RfD.js";import"./chevron-right-EDVo4puz.js";import"./Input-Bnyr3ygR.js";import"./search-ug0_eoW4.js";import"./spin-D0oo1bpJ.js";import"./error-CGouaaOn.js";import"./withOsdkMetrics-B5ElZfNl.js";import"./makeExternalStore-BQTvyZx_.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
