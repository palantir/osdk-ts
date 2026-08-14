import{j as r,M as s}from"./iframe-3nC60a4v.js";import{P as p}from"./pdf-viewer-CgD9ZJwv.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-5Y4JkKht.js";import"./preload-helper-CtQiSH5M.js";import"./PdfViewer-341FjH8n.js";import"./index--5KTZ4Ep.js";import"./BasePdfViewer-D6Vl2X7A.js";import"./BasePdfViewer.module.css-BZ_Wo8ir.js";import"./PdfViewerAnnotationLayer-CdF2wFFm.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument--atMU2i5.js";import"./PdfViewerOutlineSidebar-iR93f_Bu.js";import"./PdfViewerSidebarHeader-yt7TDwYY.js";import"./useBaseUiId-BM6_UXz4.js";import"./useControlled-Ba8inJDj.js";import"./CompositeRoot-Cdx_xuDX.js";import"./CompositeItem-BEbKblcQ.js";import"./ToolbarRootContext-BdFb43yO.js";import"./composite-BrRtjrgR.js";import"./svgIconContainer-Hgjanp0y.js";import"./PdfViewerSearchBar-WM2Vq3dY.js";import"./chevron-up-zvZ4Hyz_.js";import"./chevron-down-D0HgWRzj.js";import"./cross-CMAuZjpn.js";import"./PdfViewerSidebar-CBdP4MwR.js";import"./index-CsKQS3Xc.js";import"./index-CLrFIYZg.js";import"./index-DzaKOe1M.js";import"./PdfViewerToolbar-BVrsjX9o.js";import"./Button-Cnm3S-R_.js";import"./chevron-right-CggG-qhy.js";import"./Input-ChkMuz1l.js";import"./search-DQ5LXzk6.js";import"./spin-UPK-ua56.js";import"./error-mCE2N3tZ.js";import"./withOsdkMetrics-BFnBWSw3.js";import"./makeExternalStore-0l0defH5.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
