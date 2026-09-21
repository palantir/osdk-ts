import{j as r,M as s}from"./iframe-CbWKQTAd.js";import{P as p}from"./pdf-viewer-8nu3vFg0.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BGZLKFMT.js";import"./preload-helper-BodAnLGY.js";import"./PdfViewer-CRk63AwJ.js";import"./index-tkyBrQAe.js";import"./BasePdfViewer-CdyFNp9X.js";import"./BasePdfViewer.module.css-_wPLYlM6.js";import"./PdfViewerAnnotationLayer-DhnUtH6l.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Dk-k8SQN.js";import"./PdfViewerOutlineSidebar-cJ6a3Nur.js";import"./PdfViewerSidebarHeader-DuhruZql.js";import"./useBaseUiId-XRd770-U.js";import"./useControlled-Lsl_hIqj.js";import"./CompositeRoot-DFiyBBKq.js";import"./CompositeItem-C2HqLZ_Z.js";import"./ToolbarRootContext-0YQDLW37.js";import"./composite-DcG51BnW.js";import"./svgIconContainer-DOikMtqk.js";import"./PdfViewerSearchBar-CJOqFNZl.js";import"./chevron-up-QZlJ5H5g.js";import"./chevron-down-eXF_jIno.js";import"./cross-DgoT9wry.js";import"./PdfViewerSidebar-BQ3Hp5wT.js";import"./index-b_e1xyL7.js";import"./index-CvOYyjqx.js";import"./index-B9_31cVf.js";import"./PdfViewerToolbar-27fInRN8.js";import"./Button-BKLVv1MD.js";import"./chevron-right-B2IHAETC.js";import"./Input-DFzbl_7I.js";import"./search-DGKjGcgN.js";import"./spin-BWczsKdc.js";import"./error-CW2P3uO4.js";import"./withOsdkMetrics-C5qCRIWi.js";import"./makeExternalStore-DdKrBv4a.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
