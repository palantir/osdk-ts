import{j as r,M as s}from"./iframe-DKL5fMMN.js";import{P as p}from"./pdf-viewer-CM9cFCYB.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BX8arT-m.js";import"./preload-helper-DZ75gHYy.js";import"./PdfRenderer-q_xw4LRy.js";import"./index-C18S26o0.js";import"./PdfViewer-uiKOSBPl.js";import"./PdfViewer.module.css-17IYYWkv.js";import"./PdfViewerAnnotationLayer-BIlMgj0T.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DEklYM67.js";import"./PdfViewerOutlineSidebar-mWb7Ro0Z.js";import"./PdfViewerSidebarHeader-D8NJakbU.js";import"./useBaseUiId-Lrxw0WNy.js";import"./useControlled-CR1Oigvm.js";import"./CompositeRoot-ChA9bMrX.js";import"./CompositeItem-C5EMZa5C.js";import"./ToolbarRootContext-COa18mV2.js";import"./composite-B4XGSPic.js";import"./svgIconContainer-CLgP8v9E.js";import"./PdfViewerSearchBar-RaobXhNL.js";import"./chevron-up-8iLBGGCO.js";import"./chevron-down-CrTICgoo.js";import"./cross-C-pPDyML.js";import"./PdfViewerSidebar-DnYApoDr.js";import"./index-DaYoKOt5.js";import"./index-DuLer_zI.js";import"./index-DroEIit2.js";import"./PdfViewerToolbar-CZcZ1ucv.js";import"./Button-BJawmklY.js";import"./chevron-right-xNC2SvfC.js";import"./Input-B2RdC9nW.js";import"./search-DrvBLSJq.js";import"./spin-BYd0BzE4.js";import"./error-m4vt8SMz.js";import"./withOsdkMetrics-D2OVVpLz.js";import"./makeExternalStore-DaqRDUtN.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
