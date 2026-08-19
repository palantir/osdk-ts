import{j as r,M as s}from"./iframe-DzLmQzfL.js";import{P as p}from"./pdf-viewer-Bz2bb5p7.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BYhGtFoE.js";import"./preload-helper-DYuv-bf-.js";import"./PdfViewer-CEkBehXv.js";import"./index-CdQpjacm.js";import"./BasePdfViewer-Da4fVzlT.js";import"./BasePdfViewer.module.css-DY-c2pqk.js";import"./PdfViewerAnnotationLayer-CQidAIId.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Bc_6TbUv.js";import"./PdfViewerOutlineSidebar-CKBlW3kH.js";import"./PdfViewerSidebarHeader-DbKYqoOI.js";import"./useBaseUiId-Bmp5LN4j.js";import"./useControlled-AhpadjFe.js";import"./CompositeRoot-BX8RW_3l.js";import"./CompositeItem-BgbTo1rM.js";import"./ToolbarRootContext-BM7iC6VN.js";import"./composite-Cez-p8GT.js";import"./svgIconContainer-Jv28MIw9.js";import"./PdfViewerSearchBar-Sdtyt3DP.js";import"./chevron-up-BGH4ilG-.js";import"./chevron-down-B52Hmy6V.js";import"./cross-DfDMn0pr.js";import"./PdfViewerSidebar-CuqWE4uA.js";import"./index-CdaZRfws.js";import"./index-D0Om1NOm.js";import"./index-ByLiAsET.js";import"./PdfViewerToolbar-sPD_QWHj.js";import"./Button-DyUjkQv3.js";import"./chevron-right-Bbe7HnxB.js";import"./Input-ea8HxTa0.js";import"./search-tY_g51mG.js";import"./spin-DibdxzMY.js";import"./error-BFLeOIbO.js";import"./withOsdkMetrics-lxs0PU1I.js";import"./makeExternalStore-Bw6HJp50.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
