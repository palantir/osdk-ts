import{j as r,M as s}from"./iframe-D4uVbbmv.js";import{P as p}from"./pdf-viewer-UIhHBOxh.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C2rJTEbJ.js";import"./preload-helper-BmNxizg7.js";import"./PdfRenderer-DJPsTqiS.js";import"./index-APMMA_6e.js";import"./PdfViewer-C5Ze7Iwj.js";import"./PdfViewer.module.css-CAIBko-g.js";import"./PdfViewerAnnotationLayer-DHpYwBF0.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B7UsYgHB.js";import"./PdfViewerOutlineSidebar-UI9TScVw.js";import"./PdfViewerSidebarHeader-WRgGunJ1.js";import"./useBaseUiId-D8bHBuAj.js";import"./useControlled-CYYBVSCA.js";import"./CompositeRoot-BCaTsJeV.js";import"./CompositeItem-dLl2klUa.js";import"./ToolbarRootContext-CgcDMUZv.js";import"./composite-DSrAyWnR.js";import"./svgIconContainer-C-UKpIGq.js";import"./PdfViewerSearchBar-BQXZmx23.js";import"./chevron-up-BVLHux2i.js";import"./chevron-down-Ch0PbUhb.js";import"./cross-CWRYv8qu.js";import"./PdfViewerSidebar-C8ox7tjK.js";import"./index-Dbhkjidn.js";import"./index-DMXJyqmQ.js";import"./index-vLGJVlTP.js";import"./PdfViewerToolbar-pe4qLxmB.js";import"./Button-CUvumU_z.js";import"./chevron-right-zeDmuGOJ.js";import"./Input-CI-QUH2Z.js";import"./search-YL8utvOc.js";import"./spin-D08ET4WT.js";import"./error-BmdzypHe.js";import"./withOsdkMetrics-D6jS_maY.js";import"./makeExternalStore-BukyzIkL.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
