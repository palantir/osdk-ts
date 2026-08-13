import{j as r,M as s}from"./iframe-EsVd8uKr.js";import{P as p}from"./pdf-viewer-BfSv2yAd.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-ut1NrR2M.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfRenderer-BATtYFSB.js";import"./index-BGqGRh_w.js";import"./PdfViewer-DvRDyPR7.js";import"./PdfViewer.module.css-FQNYTrId.js";import"./PdfViewerAnnotationLayer-BLZfaUiC.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DSi7AV4Z.js";import"./PdfViewerOutlineSidebar-DauG2px3.js";import"./PdfViewerSidebarHeader-D0yrG81o.js";import"./useBaseUiId-MN2jXq2W.js";import"./useControlled-D9mCn6KG.js";import"./CompositeRoot-B2NOhjZr.js";import"./CompositeItem-aLBC2g8K.js";import"./ToolbarRootContext-Bq44IorR.js";import"./composite-1IP-k403.js";import"./svgIconContainer-CKoutHCt.js";import"./PdfViewerSearchBar-CYqmFD3D.js";import"./chevron-up-3t2GI3Ob.js";import"./chevron-down-DFflXKhs.js";import"./cross-BAb-KGA7.js";import"./PdfViewerSidebar-1zv6UwTh.js";import"./index-BSoSJ7XO.js";import"./index-Dk_BL0rE.js";import"./index-BIk1hOdK.js";import"./PdfViewerToolbar-DWB0I1Oj.js";import"./Button-CN-ZsKSm.js";import"./chevron-right-BIThgBKm.js";import"./Input-n0yDacSG.js";import"./search-D3m2bIkp.js";import"./spin-BS66myG0.js";import"./error-DWSN8l-7.js";import"./withOsdkMetrics-D6Z_3e9u.js";import"./makeExternalStore-BhrsvHlw.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
