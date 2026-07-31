import{j as r,M as s}from"./iframe-BCELjueD.js";import{P as p}from"./pdf-viewer-HrkdMmfC.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DR81jIGc.js";import"./preload-helper-DhWtn3bd.js";import"./PdfRenderer-B8XvwmTo.js";import"./index-C2TWSJNn.js";import"./PdfViewer-D3LXxzwR.js";import"./PdfViewer.module.css-DCjmLM9y.js";import"./PdfViewerAnnotationLayer-BB4G0mQw.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D18UEipi.js";import"./PdfViewerOutlineSidebar-BDyVFce5.js";import"./PdfViewerSidebarHeader-CR5X4CgC.js";import"./useBaseUiId-D2ilU-eW.js";import"./useControlled-B6AglnsA.js";import"./CompositeRoot-Cbo1bzMr.js";import"./CompositeItem-qaPcSWJy.js";import"./ToolbarRootContext-C2W--ksY.js";import"./composite-CFY-6VGT.js";import"./svgIconContainer-D7r98AQf.js";import"./PdfViewerSearchBar-DmVa92L1.js";import"./chevron-up-DJKmEKaJ.js";import"./chevron-down-QNpM5_Fh.js";import"./cross-DW9P7-kS.js";import"./PdfViewerSidebar-UyjwSYa6.js";import"./index-DrjK6CU8.js";import"./index-Co75qXW3.js";import"./index-BlGT_yiJ.js";import"./PdfViewerToolbar-C4S3S2T4.js";import"./Button-DU1F4Snx.js";import"./chevron-right-B86gBs8e.js";import"./Input-B-GyiHFv.js";import"./search-Dw0OYTHR.js";import"./spin-CAAiEbUS.js";import"./error-BslijzYM.js";import"./withOsdkMetrics-CLAhbfws.js";import"./makeExternalStore-BcTaJpz8.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
