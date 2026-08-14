import{j as r,M as s}from"./iframe-Cpw76Sdc.js";import{P as p}from"./pdf-viewer-B_IxVB6L.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DqK0RArX.js";import"./preload-helper-8AbM0gOB.js";import"./PdfViewer-C2W2DavB.js";import"./index-zPQhZCVL.js";import"./BasePdfViewer-BhXztD7X.js";import"./BasePdfViewer.module.css-L8ypb4wi.js";import"./PdfViewerAnnotationLayer-jEsZQZaf.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BG2wFfrL.js";import"./PdfViewerOutlineSidebar-B8j17Lrc.js";import"./PdfViewerSidebarHeader-Crv7QNJn.js";import"./useBaseUiId-iIyXPd8a.js";import"./useControlled-JdKni9kg.js";import"./CompositeRoot-BGd0EyCH.js";import"./CompositeItem-CvHmtrv6.js";import"./ToolbarRootContext-BkMaLa5M.js";import"./composite-BiHZiM_o.js";import"./svgIconContainer-BD5xY0XD.js";import"./PdfViewerSearchBar-C4sgZi-L.js";import"./chevron-up-jVJwY19W.js";import"./chevron-down-CZx_QJYn.js";import"./cross-CHILGXBp.js";import"./PdfViewerSidebar-Dc3S-1uO.js";import"./index-CDcUaHOJ.js";import"./index-DyQIyZ_o.js";import"./index-CCh0UBc-.js";import"./PdfViewerToolbar-Da-FbPwV.js";import"./Button-CKa97gQA.js";import"./chevron-right-CcBp1Vin.js";import"./Input-CtOgxGdW.js";import"./search-C6EHfnm3.js";import"./spin-CGNNehFy.js";import"./error-Cf9QFWnN.js";import"./withOsdkMetrics-DWbYyS_O.js";import"./makeExternalStore-BBzTQwwa.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
