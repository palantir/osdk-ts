import{j as r,M as s}from"./iframe-CGXoYzNm.js";import{P as p}from"./pdf-viewer-rfba3WHk.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DiuR8-3Q.js";import"./preload-helper-BIk0pbFW.js";import"./PdfRenderer-t6LPPIQH.js";import"./index-B-gIGFxM.js";import"./PdfViewer-DS2WHAW9.js";import"./PdfViewer.module.css-SIDj8sRl.js";import"./PdfViewerAnnotationLayer-BIXVnsWa.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-al1-Q94f.js";import"./PdfViewerOutlineSidebar-m6ate2g5.js";import"./PdfViewerSidebarHeader-COo2FTqu.js";import"./useBaseUiId-C9lxuB2E.js";import"./useControlled-cr2h64km.js";import"./CompositeRoot-Cd7N_ok0.js";import"./CompositeItem-B6G0eofa.js";import"./ToolbarRootContext-CHmIfeJy.js";import"./composite-Djf7LOAP.js";import"./svgIconContainer-C2yUySQD.js";import"./PdfViewerSearchBar-B5L06TEL.js";import"./chevron-up-BMqxv7YH.js";import"./chevron-down-vvZtnb7b.js";import"./cross-CZLvPMyq.js";import"./PdfViewerSidebar-CferXz_j.js";import"./index-D3FEBDFq.js";import"./index-CgUoB6rh.js";import"./index-BsvWREke.js";import"./PdfViewerToolbar-DWzrKmh7.js";import"./Button-C7KwiNiL.js";import"./chevron-right-BRVnKQRS.js";import"./Input-DrVjLFlw.js";import"./search-BEs5Tf1l.js";import"./spin-CZ_lHmU2.js";import"./error-DhIsr36w.js";import"./withOsdkMetrics-BepqP3Ct.js";import"./makeExternalStore-C-D2sCmQ.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
