import{j as r,M as s}from"./iframe-CQcaQGvw.js";import{P as p}from"./pdf-viewer-DjcVEEWA.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DwQ_eFTc.js";import"./preload-helper-Bpr-Zbmh.js";import"./PdfViewer-hvSbfNSy.js";import"./index-DEOxmfRe.js";import"./BasePdfViewer-BHkpOdO9.js";import"./BasePdfViewer.module.css-CTTnq4qo.js";import"./PdfViewerAnnotationLayer-gzuda-Tr.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BKmd4szi.js";import"./PdfViewerOutlineSidebar-BiTr2oR2.js";import"./PdfViewerSidebarHeader-BoOEKVxT.js";import"./useBaseUiId-VAYeRdVB.js";import"./useControlled-67ajb_bK.js";import"./CompositeRoot-CwxhnD2W.js";import"./CompositeItem-C3IvhL6b.js";import"./ToolbarRootContext-BXhcIhdf.js";import"./composite-CIfh6Bad.js";import"./svgIconContainer-BlwZok7B.js";import"./PdfViewerSearchBar-DKxdq88h.js";import"./chevron-up-GoBjgEvI.js";import"./chevron-down-B_FXfQYl.js";import"./cross-KHNb9CvK.js";import"./PdfViewerSidebar-CzJD40Ts.js";import"./index-BEjLsBGv.js";import"./index-B-ZM_tXu.js";import"./index-B9xnj9RD.js";import"./PdfViewerToolbar-DakIybQ-.js";import"./Button-8-6PGj6n.js";import"./chevron-right-ClHwyiOl.js";import"./Input-9-R4IQfH.js";import"./search-D2m2i9E6.js";import"./spin-CgSsftlE.js";import"./error-CUpk6v7r.js";import"./withOsdkMetrics-gr6PUNKA.js";import"./makeExternalStore-Ms4Ce4yr.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
