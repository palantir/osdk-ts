import{j as r,M as s}from"./iframe-B8GoyF7c.js";import{P as p}from"./pdf-viewer-C_Y6Ui2K.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CKpRRJ1N.js";import"./preload-helper-B5kMgiMb.js";import"./PdfRenderer-oLK_vSl7.js";import"./index-CL1eTbPH.js";import"./PdfViewer-yodnKBX7.js";import"./PdfViewer.module.css-BCMu450m.js";import"./PdfViewerAnnotationLayer-vH8oav6F.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CW-jc-0Y.js";import"./PdfViewerOutlineSidebar-5UAltWJD.js";import"./PdfViewerSidebarHeader-COcSw1C7.js";import"./useBaseUiId-Bu2Afjul.js";import"./useControlled-7SLzbWAF.js";import"./CompositeRoot-DTSxfbdw.js";import"./CompositeItem-59wLeDqw.js";import"./ToolbarRootContext-Cv3hvHkJ.js";import"./composite-CN8JawkT.js";import"./svgIconContainer-BNTJvbOM.js";import"./PdfViewerSearchBar-BcyNN_Zb.js";import"./chevron-up-BlzI7t5V.js";import"./chevron-down-BUm8spsZ.js";import"./cross-D9o3BuIu.js";import"./PdfViewerSidebar-B1JGEQeX.js";import"./index-D3EOgLBg.js";import"./index-B5C9ERo8.js";import"./index-1KpX_3Nf.js";import"./PdfViewerToolbar-DL3tGF-m.js";import"./Button-6Xf5SjjR.js";import"./chevron-right-CJIO3aPf.js";import"./Input-BoB_S2Yy.js";import"./search-ChHon717.js";import"./spin-DRrmo2TH.js";import"./error-D_8Foosf.js";import"./withOsdkMetrics-CFIv4gRX.js";import"./makeExternalStore-CPUAg4gi.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
