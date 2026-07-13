import{j as r,M as s}from"./iframe-DXOx5HZq.js";import{P as p}from"./pdf-viewer-D2BF6JeC.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-SwebCAbT.js";import"./preload-helper-DbSz4N6m.js";import"./PdfRenderer-d_LUl-8E.js";import"./index-EK_AzR4L.js";import"./PdfViewer-TANXqsIA.js";import"./PdfViewer.module.css-DsOTG144.js";import"./PdfViewerAnnotationLayer-DjlEzGRJ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BV8Md9Q_.js";import"./PdfViewerOutlineSidebar-DUIlQrXB.js";import"./PdfViewerSidebarHeader-u8xvivLE.js";import"./useBaseUiId-DlnHJ-y0.js";import"./useControlled-BbZsH73K.js";import"./CompositeRoot-CzafHGXV.js";import"./CompositeItem-C2-X6kGH.js";import"./ToolbarRootContext-BwukNo20.js";import"./composite-BB7CsduO.js";import"./svgIconContainer-P_tD1vYu.js";import"./PdfViewerSearchBar-pzUMRQG4.js";import"./chevron-up-B0fYdsBY.js";import"./chevron-down-DZ5gB4N1.js";import"./cross-CCTYU4u_.js";import"./PdfViewerSidebar-fNePpckp.js";import"./index-1DyO5HBt.js";import"./index-nnnUhGGv.js";import"./index-CnB9T9Ef.js";import"./PdfViewerToolbar-BiWRtcrj.js";import"./Button-ncybMHe1.js";import"./chevron-right-AUgc7qNX.js";import"./Input-rp4pZDu_.js";import"./search-C-inAfPu.js";import"./spin-DFhkdlMU.js";import"./error-B7WCIeaP.js";import"./withOsdkMetrics-BbOwOjOj.js";import"./makeExternalStore-EuHn88-3.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
