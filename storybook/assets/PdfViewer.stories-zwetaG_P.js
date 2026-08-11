import{j as r,M as s}from"./iframe-Cg6ASuCP.js";import{P as p}from"./pdf-viewer-DxSlUNTv.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DNzAugww.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfRenderer-D7JOt4yc.js";import"./index-V7Glt-8h.js";import"./PdfViewer-BjgtS461.js";import"./PdfViewer.module.css-DHnHWILc.js";import"./PdfViewerAnnotationLayer-tSS0V5Id.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-KTrAZB0N.js";import"./PdfViewerOutlineSidebar-BVrhIUyS.js";import"./PdfViewerSidebarHeader-BvDoNXID.js";import"./useBaseUiId-B89yFkvR.js";import"./useControlled-CnGpIwtD.js";import"./CompositeRoot-IK76mx_Z.js";import"./CompositeItem-UIqmeTDm.js";import"./ToolbarRootContext-CkyWDlNb.js";import"./composite-bA2XaVwF.js";import"./svgIconContainer-DcmQCQdV.js";import"./PdfViewerSearchBar-DWv7FOqq.js";import"./chevron-up-DoSppp5u.js";import"./chevron-down-CS-4kcLV.js";import"./cross-SbgvyX3H.js";import"./PdfViewerSidebar-BjyMlMY4.js";import"./index-BifWs9Kg.js";import"./index-B5FPzhRE.js";import"./index-BIztXxky.js";import"./PdfViewerToolbar-1P96FPHH.js";import"./Button-KGRl-1x_.js";import"./chevron-right-Ch9DsJWB.js";import"./Input-CWI7iTNo.js";import"./search-WAfjvqtM.js";import"./spin-DItfcXDz.js";import"./error-C4_u6BdE.js";import"./withOsdkMetrics-B9NdYHre.js";import"./makeExternalStore-CqKKW2oa.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
