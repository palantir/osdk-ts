import{j as r,M as s}from"./iframe-5X19KWNx.js";import{P as p}from"./pdf-viewer-I9PRMGpw.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-uGDnmgWY.js";import"./preload-helper-UTxkvQfT.js";import"./PdfRenderer-dHFk9uzG.js";import"./index-DMgSKlOH.js";import"./PdfViewer-DbOJvT8t.js";import"./PdfViewer.module.css-DTgijchm.js";import"./PdfViewerAnnotationLayer-BOogRLRX.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DNpcA8eN.js";import"./PdfViewerOutlineSidebar-vXcWrWR7.js";import"./PdfViewerSidebarHeader-rHD5bKYk.js";import"./useBaseUiId-5Y5tv9E4.js";import"./useControlled-1rpxN9if.js";import"./CompositeRoot-CEeAgbHG.js";import"./CompositeItem-sAVqkF8E.js";import"./ToolbarRootContext-Bxj_6rSd.js";import"./composite-CRwwAO6c.js";import"./svgIconContainer-BwFWOY5-.js";import"./PdfViewerSearchBar-qrPfjLWi.js";import"./chevron-up-B1R48zyy.js";import"./chevron-down-6VdMSlQi.js";import"./cross-C3ae2c9J.js";import"./PdfViewerSidebar-C9e2z8Rb.js";import"./index-C-mg4eFB.js";import"./index-CrYEtrFn.js";import"./index-iNzzVQ6F.js";import"./PdfViewerToolbar-D_dXCcLd.js";import"./Button-Bt5MDCDq.js";import"./chevron-right-CXNfpLbv.js";import"./Input-DFixr08O.js";import"./minus-G83cJ8Qy.js";import"./search-D_fUGpVV.js";import"./spin-CWzVIwgG.js";import"./error-DYtuPI4g.js";import"./withOsdkMetrics-CVHDQp9i.js";import"./makeExternalStore-BbDEhM-7.js";const W={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
