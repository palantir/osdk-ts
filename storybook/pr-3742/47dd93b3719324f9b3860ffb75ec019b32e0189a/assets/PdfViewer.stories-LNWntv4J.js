import{j as r,M as s}from"./iframe-9L4vMhG3.js";import{P as p}from"./pdf-viewer-wDJDMOUs.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Cj418XX8.js";import"./preload-helper-BmqcIEn7.js";import"./PdfRenderer-CK7kOdpi.js";import"./index-_pdaMpiB.js";import"./PdfViewer-DjcIk00i.js";import"./PdfViewer.module.css-D3eFFKPh.js";import"./PdfViewerAnnotationLayer-b-v0HwVw.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Bm35MeEh.js";import"./PdfViewerOutlineSidebar-eRme4Kba.js";import"./PdfViewerSidebarHeader-BGHh0L3u.js";import"./useBaseUiId-D-sjda76.js";import"./useControlled-CD9rYDgT.js";import"./CompositeRoot-BWI-eCIF.js";import"./CompositeItem-BfdUBqPa.js";import"./ToolbarRootContext-DnGH9Ipt.js";import"./composite-Bx4vMELY.js";import"./svgIconContainer-D9lmXivJ.js";import"./PdfViewerSearchBar-Cm6HuUhf.js";import"./chevron-up-aekNwVCO.js";import"./chevron-down-B91fbDl5.js";import"./cross-BpNWdRWr.js";import"./PdfViewerSidebar-bN21qKGf.js";import"./index-DAKTJ6F7.js";import"./index-Dxea6VRI.js";import"./index-B9Ie_NWS.js";import"./PdfViewerToolbar-3eKSALBI.js";import"./Button-drHfdObt.js";import"./chevron-right-D6csOcCI.js";import"./Input-Bux853dQ.js";import"./search-Xcg7LzRX.js";import"./spin-Bsezuyyn.js";import"./error-XbW8w7e0.js";import"./withOsdkMetrics-CRdZIZCN.js";import"./makeExternalStore-DlzWWYhg.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
