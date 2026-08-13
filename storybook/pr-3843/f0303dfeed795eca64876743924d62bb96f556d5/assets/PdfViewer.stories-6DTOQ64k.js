import{j as r,M as s}from"./iframe-dW7ZySVo.js";import{P as p}from"./pdf-viewer-GNBqUzsS.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-eeNXHVk7.js";import"./preload-helper-ietlItcG.js";import"./PdfRenderer-heR75ver.js";import"./index-CyX_mbZv.js";import"./PdfViewer-CTJMxun4.js";import"./PdfViewer.module.css-CDg313lc.js";import"./PdfViewerAnnotationLayer-CFY2cODp.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Bmh7J3Ji.js";import"./PdfViewerOutlineSidebar-kg2Y_1ev.js";import"./PdfViewerSidebarHeader-DprK5G-o.js";import"./useBaseUiId-CltpoqoE.js";import"./useControlled--a4EJP-K.js";import"./CompositeRoot-TXqsXOKd.js";import"./CompositeItem-B9fLtNsk.js";import"./ToolbarRootContext-Cx1oPDzo.js";import"./composite-yun7E3H0.js";import"./svgIconContainer-De3VosTd.js";import"./PdfViewerSearchBar-BmqmGSCN.js";import"./chevron-up-rvgdkgPo.js";import"./chevron-down-D0s0iZJp.js";import"./cross-BV4X4rJT.js";import"./PdfViewerSidebar-BLGpvo9c.js";import"./index-CiitfvmC.js";import"./index-NFcKjdXW.js";import"./index-BUDv2oUY.js";import"./PdfViewerToolbar-DgY-VrDt.js";import"./Button-BjotpDzx.js";import"./chevron-right-kIsLTbJM.js";import"./Input-BEPGpKmX.js";import"./search-BVLxwhoK.js";import"./spin-DNoswh-E.js";import"./error-CUjzZGeI.js";import"./withOsdkMetrics-CzRWl-u7.js";import"./makeExternalStore-p_MVbTGu.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
