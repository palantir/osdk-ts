import{j as r,M as s}from"./iframe-CbJwn7sB.js";import{P as p}from"./pdf-viewer-BL925Fdo.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DwnRX_H2.js";import"./preload-helper-DYI2LtmH.js";import"./PdfRenderer-al9Qyx9R.js";import"./index-CNby0dnV.js";import"./PdfViewer-DgUcBt2T.js";import"./PdfViewer.module.css-pCAv8s2e.js";import"./PdfViewerAnnotationLayer-DqUQq6q7.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-U5jDxrjz.js";import"./PdfViewerOutlineSidebar-BBvNNN5E.js";import"./PdfViewerSidebarHeader-CxbR_tcO.js";import"./useBaseUiId-CdQ4PgHY.js";import"./useControlled-Crckcthq.js";import"./CompositeRoot-CwM8aRLs.js";import"./CompositeItem-wPytHsEV.js";import"./ToolbarRootContext-BoAAMLC4.js";import"./composite-DcOenC0U.js";import"./svgIconContainer-eMTMOVoV.js";import"./PdfViewerSearchBar-DBfaxbVf.js";import"./chevron-up-Cn3fdzyd.js";import"./chevron-down-Cx5Bq08W.js";import"./cross-BW2hGTBj.js";import"./PdfViewerSidebar-p3lTA368.js";import"./index-CO0foM5g.js";import"./index-DYJsUG8q.js";import"./index-f1laDMmt.js";import"./PdfViewerToolbar-Ntkmocj6.js";import"./Button-TICmbo5h.js";import"./chevron-right-Dtq_tA0h.js";import"./Input-t0mhF6ze.js";import"./search-D3H1qgWh.js";import"./spin-DjODIwBR.js";import"./error-eYsSxcCf.js";import"./withOsdkMetrics-Bu6EFUqn.js";import"./makeExternalStore-ChZxrvMP.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
