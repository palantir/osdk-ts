import{j as r,M as s}from"./iframe-DmtH0n9a.js";import{P as p}from"./pdf-viewer-hONu62oa.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject--8awaazM.js";import"./preload-helper-BVTRjjKw.js";import"./PdfRenderer-DGNOyTKa.js";import"./index-BdFb3QwW.js";import"./PdfViewer-D_GMMFej.js";import"./PdfViewer.module.css-CA8sE5PG.js";import"./PdfViewerAnnotationLayer-Bpu8BXL2.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C5N9vBxt.js";import"./PdfViewerOutlineSidebar-DBUxJba_.js";import"./PdfViewerSidebarHeader-Bde05LmS.js";import"./useBaseUiId-BBuvUIea.js";import"./useControlled-CywIKAhB.js";import"./CompositeRoot-Da-0IMlB.js";import"./CompositeItem-BeRdWG_-.js";import"./ToolbarRootContext-BSo8gEvR.js";import"./composite-BkzMbckt.js";import"./svgIconContainer-Pw6aLkay.js";import"./PdfViewerSearchBar-DcCdsSuG.js";import"./chevron-up-mZcXicm_.js";import"./chevron-down-Chw1fxBZ.js";import"./cross-BCEjrsY6.js";import"./PdfViewerSidebar-B6GDfNxo.js";import"./index-Dbxm_8DG.js";import"./index-D5LxgD1e.js";import"./index-ChyY_H7T.js";import"./PdfViewerToolbar-RmEL5sIg.js";import"./Button-B3WaeV_y.js";import"./chevron-right-D6zAI6E4.js";import"./Input-pGfNFQVP.js";import"./search-Dao56fJg.js";import"./spin-Bs8kGBa-.js";import"./error-CgFhqpwO.js";import"./withOsdkMetrics-CY_Q9bgr.js";import"./makeExternalStore-Z-52Zdib.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
