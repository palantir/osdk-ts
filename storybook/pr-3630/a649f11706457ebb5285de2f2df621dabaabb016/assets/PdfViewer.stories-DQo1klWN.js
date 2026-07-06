import{j as r,M as s}from"./iframe-CrIhlkWG.js";import{P as p}from"./pdf-viewer-BJd-u8Qq.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-HcBjLHvq.js";import"./preload-helper-BdM1hQMI.js";import"./PdfRenderer-CI_BDu7b.js";import"./index-CfEHV_V1.js";import"./PdfViewer-B-JcRDjg.js";import"./PdfViewer.module.css-CW-baiki.js";import"./PdfViewerAnnotationLayer-DU8r7VdM.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BFpai-BW.js";import"./PdfViewerOutlineSidebar-DHPEgkIa.js";import"./PdfViewerSidebarHeader-Czt8L0if.js";import"./useBaseUiId-DWzwKBeJ.js";import"./useControlled-DSBWS2LY.js";import"./CompositeRoot-CxIBRK5p.js";import"./CompositeItem-BXGodCVh.js";import"./ToolbarRootContext-DKfv93TJ.js";import"./composite-B_Bx_Z-y.js";import"./svgIconContainer--TJe8Z_y.js";import"./PdfViewerSearchBar-BNUMIr2i.js";import"./chevron-up-DjWxHygV.js";import"./chevron-down-BFPGOAtb.js";import"./cross-Dav_ntOW.js";import"./PdfViewerSidebar-BZrFaHR1.js";import"./index-DqFqCA0c.js";import"./index-BsENGrJp.js";import"./index-BWUlQoJd.js";import"./PdfViewerToolbar-23ScX2VG.js";import"./Button-CXL1iv3d.js";import"./chevron-right-45xs6eCG.js";import"./Input-DuRR9wbS.js";import"./search-CNHl7oo4.js";import"./spin-BnPQff8R.js";import"./error-Czl3WPi0.js";import"./withOsdkMetrics-QURdURG6.js";import"./makeExternalStore-BSphl6MW.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
