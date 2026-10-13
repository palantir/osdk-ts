import{j as r,M as s}from"./iframe-DkjIhjOk.js";import{P as p}from"./pdf-viewer-Dg7l8gKz.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BYDRGsIF.js";import"./preload-helper-DUI5tsck.js";import"./PdfViewer-Bpja80zw.js";import"./index-Ci1HsxQf.js";import"./BasePdfViewer-D0rr_x9N.js";import"./BasePdfViewer.module.css-BY1_2kI0.js";import"./PdfViewerAnnotationLayer-BztLv2fn.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DhURX_2C.js";import"./PdfViewerOutlineSidebar-DvkbXkU6.js";import"./PdfViewerSidebarHeader-Cei7WWVd.js";import"./useBaseUiId-Biend9O3.js";import"./useControlled-BTghw2bz.js";import"./CompositeRoot-DHMzLgl1.js";import"./CompositeItem-BNwAusbR.js";import"./ToolbarRootContext-6z2XExln.js";import"./composite-DVDI3Vyc.js";import"./svgIconContainer-bvG5TW2Y.js";import"./PdfViewerSearchBar-CsO7NKz_.js";import"./chevron-up-B2z461Ys.js";import"./chevron-down-DahpzRGw.js";import"./cross-BOLu8mlC.js";import"./PdfViewerSidebar-D0jzUSsM.js";import"./index-BSyqZrwB.js";import"./index-ey6hl2b8.js";import"./index--Nzol5yv.js";import"./PdfViewerToolbar-DwzRKovq.js";import"./Button-CwSvPgha.js";import"./chevron-right-D-DgKp-3.js";import"./Input-D-eMrt1E.js";import"./search-BZ8v_096.js";import"./spin-CvG3oIG7.js";import"./error-B5H2RzDH.js";import"./withOsdkMetrics-CFjDkd46.js";import"./makeExternalStore-DV2VnHUE.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
