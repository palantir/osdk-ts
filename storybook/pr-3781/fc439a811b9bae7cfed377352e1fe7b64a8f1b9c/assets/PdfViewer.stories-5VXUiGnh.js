import{j as r,M as s}from"./iframe-B-JTL6t_.js";import{P as p}from"./pdf-viewer-DZ_TBWT9.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BdtyXclZ.js";import"./preload-helper-DJ_hAMVg.js";import"./PdfRenderer-Dtdna1GM.js";import"./index-BVBufCln.js";import"./PdfViewer-BFEW70It.js";import"./PdfViewer.module.css-D9LmItGl.js";import"./PdfViewerAnnotationLayer-DxTgLt7m.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DMyp6l09.js";import"./PdfViewerOutlineSidebar-CYGyELCN.js";import"./PdfViewerSidebarHeader-DU52SjeD.js";import"./useBaseUiId-CUEnf41u.js";import"./useControlled-ATGUHDV2.js";import"./CompositeRoot-BKldZuPK.js";import"./CompositeItem-DdntBB6P.js";import"./ToolbarRootContext-JmY-spmC.js";import"./composite-VcmuBxGV.js";import"./svgIconContainer-CiyL_qiy.js";import"./PdfViewerSearchBar-D2ygP-8N.js";import"./chevron-up-CPb2qAem.js";import"./chevron-down-BU52dZSy.js";import"./cross-3QOYISjX.js";import"./PdfViewerSidebar-zxDtK2X_.js";import"./index-B57PfW1U.js";import"./index-BA2SfPb-.js";import"./index-D9XzKchN.js";import"./PdfViewerToolbar-DGfToCh9.js";import"./Button-BlExWpZe.js";import"./chevron-right-frVvTwK1.js";import"./Input-BaVlDPE6.js";import"./search-CU5MGZ4i.js";import"./spin-CaENk4VN.js";import"./error-CRuUFItf.js";import"./withOsdkMetrics-DmIxOOZN.js";import"./makeExternalStore-CdrDMmD2.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
