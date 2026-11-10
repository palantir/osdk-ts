import{j as r,M as s}from"./iframe-A4y6o7Ie.js";import{P as p}from"./pdf-viewer-yQFnHHgg.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C91flPGX.js";import"./preload-helper-BzztgknT.js";import"./PdfViewer-CZpaOoRC.js";import"./index-u7v7sD8l.js";import"./BasePdfViewer-Ba_eKLAc.js";import"./BasePdfViewer.module.css-rgLmD6Zo.js";import"./PdfViewerAnnotationLayer-DHD7tXrQ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-4CynnlIX.js";import"./PdfViewerOutlineSidebar-MDMHB9Qv.js";import"./PdfViewerSidebarHeader-Bf9JEsyv.js";import"./useBaseUiId-DE1tY3Ft.js";import"./useControlled-C-FlvKxX.js";import"./CompositeRoot-SxFpmTzI.js";import"./CompositeItem-1bj7m8dY.js";import"./ToolbarRootContext-BQWxRNLz.js";import"./composite-Cae9SV4u.js";import"./svgIconContainer-hodslvqS.js";import"./PdfViewerSearchBar-CPKJq7bj.js";import"./chevron-up-D5jf88VI.js";import"./chevron-down-DaeYHOS7.js";import"./cross-BiOP9WPq.js";import"./PdfViewerSidebar-CVcmHEfq.js";import"./index-CVD25b_z.js";import"./index-C8GSd3VQ.js";import"./index-Coz2by3h.js";import"./PdfViewerToolbar-BjaJkAt4.js";import"./Button-CpcDAbH0.js";import"./chevron-right-CCl2S5Fk.js";import"./Input-8Z1nJkFY.js";import"./search-BJw96kDe.js";import"./spin-0Iu-BsOk.js";import"./error-D67R2Dnx.js";import"./withOsdkMetrics-DS1Us_TM.js";import"./makeExternalStore-i5MDKYGm.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
