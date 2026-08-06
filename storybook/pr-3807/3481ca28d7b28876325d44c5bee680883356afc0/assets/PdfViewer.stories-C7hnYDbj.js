import{j as r,M as s}from"./iframe-CIDkGdxn.js";import{P as p}from"./pdf-viewer-BnCRTuAe.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Br1J7fxm.js";import"./preload-helper-DQdeEyPy.js";import"./PdfRenderer-Dmkl0GI6.js";import"./index-BJ5omvkY.js";import"./PdfViewer-DQNukKTD.js";import"./PdfViewer.module.css-ygiFgxls.js";import"./PdfViewerAnnotationLayer-CL2vX4Hy.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CYCprH5B.js";import"./PdfViewerOutlineSidebar-B_vgkjGB.js";import"./PdfViewerSidebarHeader-BsuL_JRg.js";import"./useBaseUiId-WZ7ghEOy.js";import"./useControlled-CxUQTcdD.js";import"./CompositeRoot-DRuiRBql.js";import"./CompositeItem-B9naYOTm.js";import"./ToolbarRootContext-B1YU7RoG.js";import"./composite-D_D3blZ6.js";import"./svgIconContainer-DvFKWRFA.js";import"./PdfViewerSearchBar-Dsd8Ea9H.js";import"./chevron-up-CYouSVO9.js";import"./chevron-down-CvarMxgC.js";import"./cross-DiLX3wCt.js";import"./PdfViewerSidebar-B30Izpa9.js";import"./index-58UGqHrm.js";import"./index-Bm0NEbpd.js";import"./index-BRU202F9.js";import"./PdfViewerToolbar-BlFt9NmL.js";import"./Button-DY2ccd-k.js";import"./chevron-right-B0QJ7lOT.js";import"./Input-D-L1f88H.js";import"./search-D4KYriyJ.js";import"./spin-Ce41os_z.js";import"./error-lvST2j8Q.js";import"./withOsdkMetrics-CzLaYybz.js";import"./makeExternalStore-BYndnrrh.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
