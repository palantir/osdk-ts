import{j as r,M as s}from"./iframe-Gp0duaQJ.js";import{P as p}from"./pdf-viewer-gBzHLIbe.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CUbtyPXo.js";import"./preload-helper-C8FqFtAx.js";import"./PdfRenderer-Ba7nRsMO.js";import"./index-bq86hwmc.js";import"./PdfViewer-DbmJN3Gu.js";import"./PdfViewer.module.css-D4VGNw7v.js";import"./PdfViewerAnnotationLayer-4-vXtBAb.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BRIJUPLx.js";import"./PdfViewerOutlineSidebar-wXQmQW0u.js";import"./PdfViewerSidebarHeader-oW0DHduR.js";import"./useBaseUiId-DnOoKEwn.js";import"./useControlled-CQL1v0td.js";import"./CompositeRoot-BWtoHkhX.js";import"./CompositeItem-DXbnT35K.js";import"./ToolbarRootContext-CNHQa9f8.js";import"./composite-2259NXTL.js";import"./svgIconContainer-BRpGttjJ.js";import"./PdfViewerSearchBar-C6AccogG.js";import"./chevron-up-CGwPp84p.js";import"./chevron-down-CoN8oxZE.js";import"./cross-Dq6w5dEP.js";import"./PdfViewerSidebar-BjnbEzAU.js";import"./index-De-Ywklz.js";import"./index-D9e8Dvqo.js";import"./index-UtAZgLJH.js";import"./PdfViewerToolbar-Bd3Ntnbj.js";import"./Button-jIclGle0.js";import"./chevron-right-ar36APVF.js";import"./Input-ffUWAK2l.js";import"./search-DCiLhOC3.js";import"./spin-CXUte4mh.js";import"./error-Bh1Sjwhe.js";import"./withOsdkMetrics-BMTREDZc.js";import"./makeExternalStore-hYBLAuzZ.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
