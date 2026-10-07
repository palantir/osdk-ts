import{j as r,M as s}from"./iframe-Chio77VP.js";import{P as p}from"./pdf-viewer-BYZptc7Q.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-rOzkHsRc.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfViewer-CNpoeybD.js";import"./index-Ca2LpqUZ.js";import"./BasePdfViewer-BnS_j9RU.js";import"./BasePdfViewer.module.css-CsLJ_BcO.js";import"./PdfViewerAnnotationLayer-DsFnPI15.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CB000usU.js";import"./PdfViewerOutlineSidebar-DvMwAEws.js";import"./PdfViewerSidebarHeader-8ekp_ZL1.js";import"./useBaseUiId-ClFlSRoQ.js";import"./useControlled-C7GDl2B7.js";import"./CompositeRoot-BtrOimns.js";import"./CompositeItem-Qz08TpRA.js";import"./ToolbarRootContext-CZQCk8Ol.js";import"./composite-DE8-mgXU.js";import"./svgIconContainer-Csco7ptr.js";import"./PdfViewerSearchBar-gqp_wR6g.js";import"./chevron-up-yzMUJV4D.js";import"./chevron-down-D-UVCR2J.js";import"./cross-DSLJTQ5w.js";import"./PdfViewerSidebar-DtGW5gTe.js";import"./index-CeDQ-Vdk.js";import"./index-BcgDg9yf.js";import"./index-DnMFWa6M.js";import"./PdfViewerToolbar-D8NqUnZK.js";import"./Button-6EmhjClO.js";import"./chevron-right-Dx09HuFI.js";import"./Input-C-4igv96.js";import"./search-Bq_ERYnO.js";import"./spin-Bsk5gVL_.js";import"./error-Yn-rJTrJ.js";import"./withOsdkMetrics-Cz5B5mCa.js";import"./makeExternalStore-CTFx1LEB.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
        code: \`// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,U as default};
