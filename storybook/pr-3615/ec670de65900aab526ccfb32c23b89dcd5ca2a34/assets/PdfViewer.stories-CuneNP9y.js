import{j as r,M as s}from"./iframe-D6Qvt5o6.js";import{P as p}from"./pdf-viewer-Cbp_HhFZ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BZHYCrBl.js";import"./preload-helper-QAaNPy0I.js";import"./PdfRenderer-DSIEFtoY.js";import"./index-C-eYbqq8.js";import"./PdfViewer-xw6zFCmM.js";import"./PdfViewer.module.css-BE1Z0m_T.js";import"./PdfViewerAnnotationLayer-1K16B3Cw.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DxiXUWBV.js";import"./PdfViewerOutlineSidebar-BzCsR_7V.js";import"./PdfViewerSidebarHeader-Bft6JZlZ.js";import"./useBaseUiId-DjH16UDN.js";import"./useControlled-DLFDxyY4.js";import"./CompositeRoot-gqLYdveh.js";import"./CompositeItem-D_5JtvMI.js";import"./ToolbarRootContext-Db9FG9FP.js";import"./composite-BC5bcyjw.js";import"./svgIconContainer-CpbVpwSo.js";import"./PdfViewerSearchBar-DDRp2ElV.js";import"./chevron-up-K214qMuB.js";import"./chevron-down-CD4LGGid.js";import"./cross-G0YOU9UV.js";import"./PdfViewerSidebar-__8g3sU-.js";import"./index-C-IH5MZr.js";import"./index-BdN5mkbW.js";import"./index-DVBCImRO.js";import"./PdfViewerToolbar-KHLFs1hB.js";import"./Button-Cg2spKPD.js";import"./chevron-right-CLNzQUmR.js";import"./Input-DBEbfhOm.js";import"./minus-DxWHAqVO.js";import"./search-Bc8iOYXo.js";import"./spin-Sqo0-C4G.js";import"./error-CekgsEbM.js";import"./withOsdkMetrics-BwVxwrKk.js";import"./makeExternalStore-DrM1RPrH.js";const W={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const X=["Default"];export{o as Default,X as __namedExportsOrder,W as default};
