import{j as r,M as s}from"./iframe-pmNjzkSa.js";import{P as p}from"./pdf-viewer-CKdLk-It.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CVQH__fK.js";import"./preload-helper-_91snrAe.js";import"./PdfRenderer-D_ZsLKxu.js";import"./index-DgbX2nfK.js";import"./PdfViewer-CEiZvVqR.js";import"./PdfViewer.module.css-BFBcKSg0.js";import"./PdfViewerAnnotationLayer-MdXfPMXB.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CV6rY5UU.js";import"./PdfViewerOutlineSidebar-BZWUKSKi.js";import"./PdfViewerSidebarHeader-BbEnW9U7.js";import"./useBaseUiId-yuPZM35O.js";import"./useControlled-CWeh_fXo.js";import"./CompositeRoot-DmOhjON1.js";import"./CompositeItem-mJLhl0rA.js";import"./ToolbarRootContext-zyqED4Pq.js";import"./composite-CDFQZzUv.js";import"./svgIconContainer-BZe9E0fd.js";import"./PdfViewerSearchBar-CcujxLD6.js";import"./chevron-up-CG5idhpL.js";import"./chevron-down-BS9Gs3vv.js";import"./cross-Dqi4IPXt.js";import"./PdfViewerSidebar-BBxQNjme.js";import"./index-trp_UBRu.js";import"./index-Dk_LArqT.js";import"./index-CQnyyv3M.js";import"./PdfViewerToolbar-NNFqTpfT.js";import"./Button-DcauLdOh.js";import"./chevron-right-CPDls-0Z.js";import"./Input-EJedlwTO.js";import"./search-Bxht82Ps.js";import"./spin-BElseZ25.js";import"./error-BfEBsCaT.js";import"./withOsdkMetrics-Ua95Z_9x.js";import"./makeExternalStore-ZxXmouAx.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
