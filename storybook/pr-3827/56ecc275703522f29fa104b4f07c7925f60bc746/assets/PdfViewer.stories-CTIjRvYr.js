import{j as r,M as s}from"./iframe-Bw3x6lZJ.js";import{P as p}from"./pdf-viewer-Cn3qzXzj.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-pKWyKCXc.js";import"./preload-helper-D6ImcOTa.js";import"./PdfRenderer-De_25JdC.js";import"./index-Qclu0QrF.js";import"./PdfViewer-SDV49oty.js";import"./PdfViewer.module.css-DqXDM8H9.js";import"./PdfViewerAnnotationLayer-CjZF8HKJ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BNoIzH6t.js";import"./PdfViewerOutlineSidebar-BLWBIR0U.js";import"./PdfViewerSidebarHeader-B001gsFC.js";import"./useBaseUiId-vJHidliA.js";import"./useControlled-oOeAgRpZ.js";import"./CompositeRoot-xRaFg422.js";import"./CompositeItem-f_kpd3CD.js";import"./ToolbarRootContext-4HkoDmNp.js";import"./composite-aqmH1tPf.js";import"./svgIconContainer-BM9FUCfQ.js";import"./PdfViewerSearchBar-B-4Pa6nI.js";import"./chevron-up-D_Hyeql9.js";import"./chevron-down-mYSDwVOj.js";import"./cross-m2G2dPiH.js";import"./PdfViewerSidebar-o6nS6mki.js";import"./index-D9NWm6bI.js";import"./index-cks-ZHTj.js";import"./index-BCgpKXyP.js";import"./PdfViewerToolbar-Cp09uijR.js";import"./Button-CFbUHaqb.js";import"./chevron-right-bsmRbbVB.js";import"./Input-DR8DiZ8k.js";import"./search-D48t6EZV.js";import"./spin-YRYEd_Tv.js";import"./error-B-KtUvsa.js";import"./withOsdkMetrics-BzxdER45.js";import"./makeExternalStore-xbWe60kF.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
