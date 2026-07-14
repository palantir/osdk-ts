import{j as r,M as s}from"./iframe-CGAAWjUk.js";import{P as p}from"./pdf-viewer-AfI9FnQ1.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BBYiJWEg.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfRenderer-BKx65RIX.js";import"./index-DVNbGEom.js";import"./PdfViewer-BiwGfWBj.js";import"./PdfViewer.module.css-BlN_k76L.js";import"./PdfViewerAnnotationLayer-CFkU81-y.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DFDnXVkv.js";import"./PdfViewerOutlineSidebar-Cti_X3Oo.js";import"./PdfViewerSidebarHeader-0Lpw_OBg.js";import"./useBaseUiId-q2gn17YU.js";import"./useControlled-BH1kMEtF.js";import"./CompositeRoot-C8cgbKI9.js";import"./CompositeItem-C6tKhX8Q.js";import"./ToolbarRootContext-Dg97O1ft.js";import"./composite-TSR6i9AI.js";import"./svgIconContainer-C5cq20xn.js";import"./PdfViewerSearchBar-DAQ5y0P5.js";import"./chevron-up-Dtcn7PDH.js";import"./chevron-down-BzIR7Dic.js";import"./cross-BMOnILF9.js";import"./PdfViewerSidebar-BGd8LPG8.js";import"./index-CpMNxW-6.js";import"./index-CAq0mONR.js";import"./index-cfs0j-RS.js";import"./PdfViewerToolbar-B4FSaYus.js";import"./Button-C3seCtRt.js";import"./chevron-right-O-QU1skl.js";import"./Input-DcY1pFOE.js";import"./search-B1x9qoKl.js";import"./spin-hipT2haQ.js";import"./error-CYiBScrz.js";import"./withOsdkMetrics-CUrrt16x.js";import"./makeExternalStore-dSMUltpM.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
