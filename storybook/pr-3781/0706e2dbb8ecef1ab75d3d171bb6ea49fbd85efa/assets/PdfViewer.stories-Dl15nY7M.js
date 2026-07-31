import{j as r,M as s}from"./iframe-CvtO4IMB.js";import{P as p}from"./pdf-viewer-C3sWf4Rg.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DhlW2KSe.js";import"./preload-helper-BrvcVhe2.js";import"./PdfRenderer-CHxxb2R8.js";import"./index-B_GzWBIK.js";import"./PdfViewer-TiB9jwch.js";import"./PdfViewer.module.css-B4o94GVy.js";import"./PdfViewerAnnotationLayer-CAmCth9W.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-ybip-rV4.js";import"./PdfViewerOutlineSidebar-MV_m9V56.js";import"./PdfViewerSidebarHeader-C2BA2iaX.js";import"./useBaseUiId-Cttj69LG.js";import"./useControlled-DaXRoC7J.js";import"./CompositeRoot-C3LKsejR.js";import"./CompositeItem-BQrOCuSB.js";import"./ToolbarRootContext-D-1cr-4z.js";import"./composite-jre0rmDk.js";import"./svgIconContainer-CCvUYbsi.js";import"./PdfViewerSearchBar-B3Vf1Qi2.js";import"./chevron-up-2FVLl9EJ.js";import"./chevron-down-C-SHqWoa.js";import"./cross-Odyniiv9.js";import"./PdfViewerSidebar-BeGNewMz.js";import"./index-D9z6kKbW.js";import"./index-D86dfeRh.js";import"./index-B3UPezCW.js";import"./PdfViewerToolbar-BNHDCzR3.js";import"./Button-BGi-KOsB.js";import"./chevron-right-i7itwQC0.js";import"./Input-CZiCqG3l.js";import"./search-CcdNkTVL.js";import"./spin-B3dCgEBO.js";import"./error-Bz0GJG-G.js";import"./withOsdkMetrics-DEHLnQpj.js";import"./makeExternalStore-XAqN2zqJ.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
