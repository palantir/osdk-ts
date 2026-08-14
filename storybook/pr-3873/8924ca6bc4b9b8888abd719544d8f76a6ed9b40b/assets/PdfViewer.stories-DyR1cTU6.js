import{j as r,M as s}from"./iframe-CBrZfziz.js";import{P as p}from"./pdf-viewer-Cqdb3Gwb.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-By-AH7ev.js";import"./preload-helper-C1Z52epK.js";import"./PdfViewer-iOGa4cKS.js";import"./index-Cg9PAsxv.js";import"./BasePdfViewer-BMN_wj5Q.js";import"./BasePdfViewer.module.css-ulTR4dQZ.js";import"./PdfViewerAnnotationLayer-BT5DMeEZ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-7rhSS1zY.js";import"./PdfViewerOutlineSidebar-CPTD0uNY.js";import"./PdfViewerSidebarHeader-BAdOUvk1.js";import"./useBaseUiId-rohArgKw.js";import"./useControlled-DGjbGIEp.js";import"./CompositeRoot-agJia-Q0.js";import"./CompositeItem-BfobZyII.js";import"./ToolbarRootContext-P5RW03dk.js";import"./composite-DsbP76iG.js";import"./svgIconContainer-Dyb3dMVr.js";import"./PdfViewerSearchBar-CwAJmdRf.js";import"./chevron-up-DxQV-6Ni.js";import"./chevron-down-DSLPvc9w.js";import"./cross-CUjJ-5wv.js";import"./PdfViewerSidebar-CbQtvzSZ.js";import"./index-TRV83l-e.js";import"./index-BelcqY8o.js";import"./index-1iEJy2Ov.js";import"./PdfViewerToolbar-CAprJ38H.js";import"./Button-C6PfnoAg.js";import"./chevron-right-CJgsqgoa.js";import"./Input-Z9Dcl-3O.js";import"./search-D5OSZ-8x.js";import"./spin-ZLT370UW.js";import"./error-B-tgnml8.js";import"./withOsdkMetrics-CdS06qS5.js";import"./makeExternalStore-B8Ya0P1z.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
