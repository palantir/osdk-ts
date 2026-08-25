import{j as r,M as s}from"./iframe-BXnew5By.js";import{P as p}from"./pdf-viewer-BvaERZ-T.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CjpX0yDD.js";import"./preload-helper-BgFOTMV1.js";import"./PdfViewer-CdErMfJ7.js";import"./index-DJpoqriT.js";import"./BasePdfViewer-B8JK6gba.js";import"./BasePdfViewer.module.css-BBqwHE1L.js";import"./PdfViewerAnnotationLayer-DdYu-P-3.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BVPha7Q5.js";import"./PdfViewerOutlineSidebar-BAw4itiK.js";import"./PdfViewerSidebarHeader-DmE1YDec.js";import"./useBaseUiId-Co3zeB_F.js";import"./useControlled-ClYOKgQs.js";import"./CompositeRoot-CSmHWVcH.js";import"./CompositeItem-W1wcrO0a.js";import"./ToolbarRootContext-DobZfpb_.js";import"./composite-BAOjtMlw.js";import"./svgIconContainer-BOoSLwOJ.js";import"./PdfViewerSearchBar-lmGXBEfV.js";import"./chevron-up-CgeuJJil.js";import"./chevron-down-BWrlC_BY.js";import"./cross-CeycVR7t.js";import"./PdfViewerSidebar-CGHaVdH1.js";import"./index-Bopk1NCu.js";import"./index-ytG0jJ_D.js";import"./index-Db3xMcrp.js";import"./PdfViewerToolbar-DC4BZRU2.js";import"./Button-TEbldry0.js";import"./chevron-right-BPZi-8mg.js";import"./Input-CvomcPkC.js";import"./search-hra39GH9.js";import"./spin-D8bocb-_.js";import"./error-5wYybOyD.js";import"./withOsdkMetrics-XvAUFTIm.js";import"./makeExternalStore-rqkc6KEp.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
