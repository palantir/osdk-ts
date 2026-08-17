import{j as r,M as s}from"./iframe-D_l2u6_6.js";import{P as p}from"./pdf-viewer-DFl6hPuh.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CnpU8Mkb.js";import"./preload-helper-DpjmzVUp.js";import"./PdfViewer-CdIJ6tS4.js";import"./index-Dh9XtuqD.js";import"./BasePdfViewer-DHyIfavU.js";import"./BasePdfViewer.module.css-C-e8ReIY.js";import"./PdfViewerAnnotationLayer-CEhLiLiX.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BAeYNyYs.js";import"./PdfViewerOutlineSidebar-D70t3YeP.js";import"./PdfViewerSidebarHeader-lb_CCZYW.js";import"./useBaseUiId-CXCcQdyU.js";import"./useControlled-BDw-HKbZ.js";import"./CompositeRoot-DSAvaodN.js";import"./CompositeItem-iF4WWV8_.js";import"./ToolbarRootContext-C1XZ50ky.js";import"./composite-BhVnd5Ck.js";import"./svgIconContainer-5I5uI1yB.js";import"./PdfViewerSearchBar-6jCOO96U.js";import"./chevron-up-DipOmRal.js";import"./chevron-down-CrG8bbfA.js";import"./cross-gGpYcHa9.js";import"./PdfViewerSidebar-BPoADrGR.js";import"./index-DidMIQP-.js";import"./index-DfO4jocZ.js";import"./index-CiyIlioJ.js";import"./PdfViewerToolbar-BYHb49za.js";import"./Button-CKuTj87a.js";import"./chevron-right-CbayS9vn.js";import"./Input-C-nLgfsl.js";import"./search-CpZeqKUE.js";import"./spin-BjUW9Vs4.js";import"./error-BMvuJzzL.js";import"./withOsdkMetrics-BJ3LCUHt.js";import"./makeExternalStore-BcUYV5GH.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
