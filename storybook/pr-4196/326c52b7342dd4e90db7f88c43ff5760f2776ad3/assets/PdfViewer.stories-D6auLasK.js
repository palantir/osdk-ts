import{j as r,M as s}from"./iframe-CXoxL7cT.js";import{P as p}from"./pdf-viewer-DpoJRZSm.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BQ4ivCBm.js";import"./preload-helper-DMJKrzx6.js";import"./PdfViewer-Cf4L3iQm.js";import"./index-dBMA5UNn.js";import"./BasePdfViewer-DRObZ9oW.js";import"./BasePdfViewer.module.css-DsKaezPD.js";import"./PdfViewerAnnotationLayer-BrBwRUXl.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C8rI6VDo.js";import"./PdfViewerOutlineSidebar-D9JAN5Gh.js";import"./PdfViewerSidebarHeader-7iN_v0Jx.js";import"./useBaseUiId-Izmi48hi.js";import"./useControlled-CEwBj1Zp.js";import"./CompositeRoot-tn7BiEDT.js";import"./CompositeItem-CWiiOpZY.js";import"./ToolbarRootContext-CoErepAo.js";import"./composite-DMCRZOOJ.js";import"./svgIconContainer-DtqPwXsL.js";import"./PdfViewerSearchBar-CmSMFZ9c.js";import"./chevron-up-BvrSseHY.js";import"./chevron-down-tGjjwMVx.js";import"./cross-XQWmBmUb.js";import"./PdfViewerSidebar-BO2YoSbD.js";import"./index-DaVoMYUf.js";import"./index-UsCrzJ_A.js";import"./index-DzDKHmnK.js";import"./PdfViewerToolbar-CsKae6o1.js";import"./Button-Cr7M9AYk.js";import"./chevron-right-C8VsYWYL.js";import"./Input-DwAQ3sDB.js";import"./search-D3KEpk03.js";import"./spin-D5tPrcMH.js";import"./error-Bnpx40Rp.js";import"./withOsdkMetrics-CqzyuRHa.js";import"./makeExternalStore-CHMRsxiL.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
