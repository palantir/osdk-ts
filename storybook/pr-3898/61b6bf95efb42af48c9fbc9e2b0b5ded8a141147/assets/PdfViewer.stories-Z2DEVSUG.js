import{j as r,M as s}from"./iframe-YbZJ4Q2T.js";import{P as p}from"./pdf-viewer-DGcl1iQp.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DCFTiv1L.js";import"./preload-helper-nrcicwIZ.js";import"./PdfViewer-DgbglgKK.js";import"./index-BbeJO0tu.js";import"./BasePdfViewer-D0KMZDGH.js";import"./BasePdfViewer.module.css-h0MdYJj0.js";import"./PdfViewerAnnotationLayer-BCa6ly_E.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DcE1JhW0.js";import"./PdfViewerOutlineSidebar-ntscrA4-.js";import"./PdfViewerSidebarHeader-DUiAAdrD.js";import"./useBaseUiId-DTGQIw9V.js";import"./useControlled-DLIRtZT-.js";import"./CompositeRoot-BS7YN-dL.js";import"./CompositeItem-DJS21xnC.js";import"./ToolbarRootContext-hKDDy8Tn.js";import"./composite-D3JFLD7k.js";import"./svgIconContainer-CvzqHx8a.js";import"./PdfViewerSearchBar-B21qMoJA.js";import"./chevron-up-CqhEpnIg.js";import"./chevron-down-DV-3X39-.js";import"./cross-Chqx1Vmd.js";import"./PdfViewerSidebar-DwABWUGh.js";import"./index-Dj7Gzmji.js";import"./index-CjgLq_Ze.js";import"./index-BArD5hnh.js";import"./PdfViewerToolbar-CrlGnN1L.js";import"./Button-Drmtw-7h.js";import"./chevron-right-Dm_uDV0T.js";import"./Input-DuCwdPfX.js";import"./search-c-d9DWXs.js";import"./spin-D1sRWpO5.js";import"./error-BpN2G5nD.js";import"./withOsdkMetrics-DAKfNXNY.js";import"./makeExternalStore-D3Nkh70z.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
