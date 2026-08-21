import{j as r,M as s}from"./iframe-DitR3wrF.js";import{P as p}from"./pdf-viewer-D_6EcCqk.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DoNQNbvD.js";import"./preload-helper-CNXpGYTW.js";import"./PdfViewer-BoBU_7mW.js";import"./index-BxGfYTdz.js";import"./BasePdfViewer-DzT7M5sc.js";import"./BasePdfViewer.module.css-BRw2PxHm.js";import"./PdfViewerAnnotationLayer-DDlVMfZF.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-aJR6y96Z.js";import"./PdfViewerOutlineSidebar-DE53HmQN.js";import"./PdfViewerSidebarHeader-DLwFWbCM.js";import"./useBaseUiId-nvgLYlZj.js";import"./useControlled-Bo2-iR5e.js";import"./CompositeRoot-CmbfqzsR.js";import"./CompositeItem-Drvp4rJR.js";import"./ToolbarRootContext-u_lF0Sl2.js";import"./composite-C4jZt334.js";import"./svgIconContainer-iiqqYfd1.js";import"./PdfViewerSearchBar-DgeBAiTE.js";import"./chevron-up-B_vMtRR6.js";import"./chevron-down-BsVtNM2T.js";import"./cross-Bk9CQZhu.js";import"./PdfViewerSidebar-B1t3I2z_.js";import"./index-BPs86j1H.js";import"./index-mmwfIz2r.js";import"./index-B_n8V48u.js";import"./PdfViewerToolbar-CU7JSQml.js";import"./Button-Bo3FBeXJ.js";import"./chevron-right-DWeStEvO.js";import"./Input-CYzB12qm.js";import"./search-Bwe7rzXS.js";import"./spin-BLDZSZmz.js";import"./error-C_6ZHNzG.js";import"./withOsdkMetrics-wlTLtuGf.js";import"./makeExternalStore-C2AhoyWG.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
