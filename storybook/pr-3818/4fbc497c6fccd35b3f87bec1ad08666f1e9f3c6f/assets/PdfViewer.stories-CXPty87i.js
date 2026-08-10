import{j as r,M as s}from"./iframe-Cre-9cas.js";import{P as p}from"./pdf-viewer-DJ30D_kq.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BPIZALEQ.js";import"./preload-helper-DHrhJo4v.js";import"./PdfRenderer-sG38jUzg.js";import"./index-Cz4GDW4R.js";import"./PdfViewer-BgEiVIce.js";import"./PdfViewer.module.css-CSbCKZCR.js";import"./PdfViewerAnnotationLayer-EhZVsQM5.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CeZsSvFo.js";import"./PdfViewerOutlineSidebar-BQwAuArB.js";import"./PdfViewerSidebarHeader-8WRAR6sg.js";import"./useBaseUiId-DOqKyLzL.js";import"./useControlled-hjvc-0on.js";import"./CompositeRoot-Dd_tS65I.js";import"./CompositeItem-BAdlDQDE.js";import"./ToolbarRootContext-Dg4xP7xV.js";import"./composite-0-c1qOZY.js";import"./svgIconContainer-DBkJAZ9O.js";import"./PdfViewerSearchBar-Ds9CVPMk.js";import"./chevron-up-CggtrfKL.js";import"./chevron-down-D0grZxr0.js";import"./cross-CmMOk3cx.js";import"./PdfViewerSidebar-CB1sPz-h.js";import"./index-NgNvunFL.js";import"./index-Bm3R8EDL.js";import"./index-BSEjtXWh.js";import"./PdfViewerToolbar-DpzJvzag.js";import"./Button-D-qwXXls.js";import"./chevron-right-BlR4x1xB.js";import"./Input-BbbRXoqK.js";import"./search-C14d_QIQ.js";import"./spin-D_YZDtaf.js";import"./error-DrQnvBEM.js";import"./withOsdkMetrics-CUiTNeFG.js";import"./makeExternalStore-B7-iML3E.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
