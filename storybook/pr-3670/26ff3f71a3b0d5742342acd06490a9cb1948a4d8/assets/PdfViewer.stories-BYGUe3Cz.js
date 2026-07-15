import{j as r,M as s}from"./iframe-BFjDjldP.js";import{P as p}from"./pdf-viewer-D3h1R80R.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CApQClxN.js";import"./preload-helper-C4pZiwVf.js";import"./PdfRenderer-5RFmK6R4.js";import"./index-CAZUQTDj.js";import"./PdfViewer-Bt5nn5UT.js";import"./PdfViewer.module.css-DzXjk37z.js";import"./PdfViewerAnnotationLayer-DiIuAXjT.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-H2DrCM8-.js";import"./PdfViewerOutlineSidebar-DUUEH2Yp.js";import"./PdfViewerSidebarHeader-C5Uv81Xm.js";import"./useBaseUiId-CZ-M6IZx.js";import"./useControlled-yW-lRQwM.js";import"./CompositeRoot-DsFgwLxT.js";import"./CompositeItem-PrDZaJD1.js";import"./ToolbarRootContext-D2niHTK6.js";import"./composite-GlzD71Ug.js";import"./svgIconContainer-CGD7gnUj.js";import"./PdfViewerSearchBar-DCOeSTgU.js";import"./chevron-up-BiRgKCVD.js";import"./chevron-down-Bdbwp4Pa.js";import"./cross-BcaWw6F5.js";import"./PdfViewerSidebar-7-FIyb67.js";import"./index-CUUG7iJB.js";import"./index-WnNqCI-y.js";import"./index-DoxA6u-7.js";import"./PdfViewerToolbar-D4LD2wqI.js";import"./Button-cQOGqwaF.js";import"./chevron-right-B366rv87.js";import"./Input-CmdAyOYS.js";import"./search-BuWIhr19.js";import"./spin-DDg5tDIV.js";import"./error-Ds7N_mns.js";import"./withOsdkMetrics-CgiiyEtX.js";import"./makeExternalStore-BeTIfd3z.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
