import{j as r,M as s}from"./iframe-Ckg3JDEd.js";import{P as p}from"./pdf-viewer-1UC5CSkl.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-SvgKPFPo.js";import"./preload-helper-KBO4otl1.js";import"./PdfViewer-CFAr9Aay.js";import"./index-yOX0clgO.js";import"./BasePdfViewer-CoPD-YDc.js";import"./BasePdfViewer.module.css-DyUVAXMd.js";import"./PdfViewerAnnotationLayer-DTRv4X0a.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BQa2y8Cg.js";import"./PdfViewerOutlineSidebar-o1YJztNJ.js";import"./PdfViewerSidebarHeader-XN49Yo6A.js";import"./useBaseUiId-C1nkxB3O.js";import"./useControlled-DWTYB9QG.js";import"./CompositeRoot-DWNSFHcv.js";import"./CompositeItem-DVQ8sS88.js";import"./ToolbarRootContext-FvrCx-X9.js";import"./composite-C5JLlQSZ.js";import"./svgIconContainer-DWrcnmPY.js";import"./PdfViewerSearchBar-DSxA7PK9.js";import"./chevron-up-fIcmVVnI.js";import"./chevron-down-YWSk7uW9.js";import"./cross-C_oC8uQT.js";import"./PdfViewerSidebar-CzPHhThz.js";import"./index-BZEXsqr4.js";import"./index-DBijKEQ7.js";import"./index-Hqp5BANx.js";import"./PdfViewerToolbar-DOnvSJqq.js";import"./Button-BUGWw6kP.js";import"./chevron-right-YQ6EOSf7.js";import"./Input-SzB69mKt.js";import"./search-CECB0TiM.js";import"./spin-MKxcDO2M.js";import"./error-CYwbtwGc.js";import"./withOsdkMetrics-DWluRxuk.js";import"./makeExternalStore-DsBbJpT3.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
