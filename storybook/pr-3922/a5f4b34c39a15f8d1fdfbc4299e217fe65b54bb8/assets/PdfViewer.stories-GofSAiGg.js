import{j as r,M as s}from"./iframe--ZIBZMJQ.js";import{P as p}from"./pdf-viewer-CSkr3cuG.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CD71XtWR.js";import"./preload-helper-BiE66roc.js";import"./PdfViewer-5n0xLgag.js";import"./index-BYKsb6nS.js";import"./BasePdfViewer-DkeT_AB7.js";import"./BasePdfViewer.module.css-Bkp_-sTd.js";import"./PdfViewerAnnotationLayer-e9bS4uin.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BZkcCNO6.js";import"./PdfViewerOutlineSidebar-YETJihuc.js";import"./PdfViewerSidebarHeader-Dlj5U9cZ.js";import"./useBaseUiId-BfJLJwpt.js";import"./useControlled-CuA5uTC4.js";import"./CompositeRoot-C5d7J8TP.js";import"./CompositeItem-DMbKryF9.js";import"./ToolbarRootContext-Ca6p-z_B.js";import"./composite-DjX-WyFk.js";import"./svgIconContainer-11XNL8gH.js";import"./PdfViewerSearchBar-CQmPbD_x.js";import"./chevron-up-BgjRJwt6.js";import"./chevron-down-DEwAc30E.js";import"./cross-QLCI-etH.js";import"./PdfViewerSidebar-1PCM9eFZ.js";import"./index-B5Q5H9tI.js";import"./index-3A3ZgJ7o.js";import"./index-DTFWeURW.js";import"./PdfViewerToolbar-BUltCMlW.js";import"./Button-BVMM1AFw.js";import"./chevron-right-B2MqwGCt.js";import"./Input-wMnSWKve.js";import"./search-BetwMOQy.js";import"./spin-BRZD0fI9.js";import"./error-5Bj03CYI.js";import"./withOsdkMetrics-CK4M-mJV.js";import"./makeExternalStore-LwZ_z8rF.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
