import{j as r,M as s}from"./iframe-B9T5oMDr.js";import{P as p}from"./pdf-viewer-DQkkIPn8.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DrLxqqg7.js";import"./preload-helper-BPAbrKbo.js";import"./PdfRenderer-BGmX4rQJ.js";import"./index-BbzHpAd2.js";import"./PdfViewer-bnkLRiw9.js";import"./PdfViewer.module.css-BIINBCee.js";import"./PdfViewerAnnotationLayer-DZxFDp54.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CBnnMrmh.js";import"./PdfViewerOutlineSidebar-CQKzl_2W.js";import"./PdfViewerSidebarHeader-BdhPje1P.js";import"./useBaseUiId-B_QbIUqB.js";import"./useControlled-B65L2iRV.js";import"./CompositeRoot-CfHYarVV.js";import"./CompositeItem-_z9g8yfT.js";import"./ToolbarRootContext-BsgfQ9_l.js";import"./composite-youxeV_z.js";import"./svgIconContainer-DzM4Ci-u.js";import"./PdfViewerSearchBar-LhRHZt0t.js";import"./chevron-up-D5vwwbbJ.js";import"./chevron-down-BEQDQVHr.js";import"./cross-B02AaJUG.js";import"./PdfViewerSidebar-CfARJiRO.js";import"./index-Bq_KCjK9.js";import"./index-BDL1OtV7.js";import"./index-mRe9n3gj.js";import"./PdfViewerToolbar-DtpVDa1Y.js";import"./Button-jzGBL2cN.js";import"./chevron-right-B4MdUrxu.js";import"./Input-k9vi4ZnU.js";import"./search-BibTnjwg.js";import"./spin-b2_RmMc8.js";import"./error-Con-Q4S3.js";import"./withOsdkMetrics-D1MjRaaQ.js";import"./makeExternalStore-5V9xTDRp.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
