import{j as r,M as s}from"./iframe-7IqfymhU.js";import{P as p}from"./pdf-viewer-CmMZAOEk.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B_qmkcTC.js";import"./preload-helper-3r70WJzt.js";import"./PdfRenderer-6sBmz3JK.js";import"./index-Cm0N0_fF.js";import"./PdfViewer-pN7gRTel.js";import"./PdfViewer.module.css-1-IuyMrB.js";import"./PdfViewerAnnotationLayer-CvM5t8BZ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DiwGdwzI.js";import"./PdfViewerOutlineSidebar-DfdnNblI.js";import"./PdfViewerSidebarHeader-RKT6qcbU.js";import"./useBaseUiId-g3vrjln3.js";import"./useControlled-BleyXyWB.js";import"./CompositeRoot-DNzH-Hzk.js";import"./CompositeItem-BFoAwlad.js";import"./ToolbarRootContext-KGDaSKUg.js";import"./composite-CUuxck-t.js";import"./svgIconContainer-DWoceTOZ.js";import"./PdfViewerSearchBar-Dgt8lsVa.js";import"./chevron-up-BuQH5mjX.js";import"./chevron-down-BgmSLeIb.js";import"./cross-CpnSFL6t.js";import"./PdfViewerSidebar-ik_QNj_b.js";import"./index-1EYlksTG.js";import"./index-CH4X5tDr.js";import"./index-DNc5N9FX.js";import"./PdfViewerToolbar-DwowekiD.js";import"./Button-CWUDYsaf.js";import"./chevron-right-DF4A6m_k.js";import"./Input-8mkLamyL.js";import"./search-CvDLht4j.js";import"./spin-M9LPVCN1.js";import"./error-BA_egiUG.js";import"./withOsdkMetrics-DpAWZ3cs.js";import"./makeExternalStore-gLuSpsoX.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
