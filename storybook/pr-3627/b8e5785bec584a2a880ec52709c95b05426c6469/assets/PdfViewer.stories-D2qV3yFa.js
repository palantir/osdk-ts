import{j as r,M as s}from"./iframe-CKGsYlL3.js";import{P as p}from"./pdf-viewer-CnewgsZ9.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BEXidGJ6.js";import"./preload-helper-C5_AcwHL.js";import"./PdfRenderer-hOPhkJt6.js";import"./index-Bx0tKmFZ.js";import"./PdfViewer-BSlITKDv.js";import"./PdfViewer.module.css-BROJ66K-.js";import"./PdfViewerAnnotationLayer-BKu8M3TM.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Bfp_bLP3.js";import"./PdfViewerOutlineSidebar-BwKIMI3y.js";import"./PdfViewerSidebarHeader-CK8O-O__.js";import"./useBaseUiId-BM2mKp6x.js";import"./useControlled-DYnKoOxV.js";import"./CompositeRoot-Dzp_qw-z.js";import"./CompositeItem-CSKIQkVe.js";import"./ToolbarRootContext-C3AlTUaZ.js";import"./composite-Cn5fnswO.js";import"./svgIconContainer-Dufm_U67.js";import"./PdfViewerSearchBar-BGpvynPs.js";import"./chevron-up-CBlOaP1M.js";import"./chevron-down-BSPC3sc1.js";import"./cross-BQKCm2uo.js";import"./PdfViewerSidebar-CCFgeZDX.js";import"./index-C1Mn403H.js";import"./index-Bwbgkj51.js";import"./index-CxFoDY87.js";import"./PdfViewerToolbar-CGd2YKX5.js";import"./Button-F5mbE45g.js";import"./chevron-right-C9z5p4H9.js";import"./Input-DIB0gIqF.js";import"./search-BVZzJD28.js";import"./spin-Ccl6Y-c5.js";import"./error-BZiJX6vH.js";import"./withOsdkMetrics-BMeFLA1P.js";import"./makeExternalStore-DgODZvRh.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
