import{j as r,M as s}from"./iframe-BKBfot2J.js";import{P as p}from"./pdf-viewer-CSNyeWMe.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-VrK8viPn.js";import"./preload-helper-DDEmWdpD.js";import"./PdfRenderer-DTwwGVkX.js";import"./index-DyLIad-u.js";import"./PdfViewer-wkrJWEFj.js";import"./PdfViewer.module.css-6Tr1YBRt.js";import"./PdfViewerAnnotationLayer-7J2TLGuw.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C6yeujNE.js";import"./PdfViewerOutlineSidebar-Ccd0eRDO.js";import"./PdfViewerSidebarHeader-Bx_fnbEi.js";import"./useBaseUiId-BU2OkR0r.js";import"./useControlled-CWFGDVcM.js";import"./CompositeRoot-DZigBAss.js";import"./CompositeItem-ERV_dfiA.js";import"./ToolbarRootContext-Be9AL0zM.js";import"./composite-CqCPDKzt.js";import"./svgIconContainer-DuVqaUvI.js";import"./PdfViewerSearchBar-D9hzm-ok.js";import"./chevron-up-B2mwW3Zz.js";import"./chevron-down-MmD20AEZ.js";import"./cross-DEdTBx1o.js";import"./PdfViewerSidebar-CHvHoKjc.js";import"./index-D_FDqr3a.js";import"./index-DgDVbfrk.js";import"./index-D_swfoLH.js";import"./PdfViewerToolbar-Lo3paxWj.js";import"./Button-BHNI-JAr.js";import"./chevron-right-Bd3qdwjs.js";import"./Input-ia7FD9kx.js";import"./search-Bge0vqWk.js";import"./spin-CnEZOI6E.js";import"./error-CPH4Ll6R.js";import"./withOsdkMetrics-BUWJe443.js";import"./makeExternalStore-D1bGgX9q.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
