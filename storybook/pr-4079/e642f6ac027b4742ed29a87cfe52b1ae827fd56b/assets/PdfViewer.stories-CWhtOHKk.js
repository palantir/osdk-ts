import{j as r,M as s}from"./iframe-C-JZ09HL.js";import{P as p}from"./pdf-viewer-DA_SBd7G.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CEbSdZCx.js";import"./preload-helper-Btqf0-MW.js";import"./PdfViewer-CEh-G8oQ.js";import"./index-BXkYmYaL.js";import"./BasePdfViewer-MfV2rvG7.js";import"./BasePdfViewer.module.css-DhVSYn30.js";import"./PdfViewerAnnotationLayer-Cql65TEC.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CzFBAKt_.js";import"./PdfViewerOutlineSidebar-Dj4OGMms.js";import"./PdfViewerSidebarHeader-CgquGrhf.js";import"./useBaseUiId-C6m1fY6X.js";import"./useControlled-BnCuZsdw.js";import"./CompositeRoot-B4wMs_Aj.js";import"./CompositeItem-1x61Rlw0.js";import"./ToolbarRootContext-CcljaRm4.js";import"./composite-BHrzkL3j.js";import"./svgIconContainer-GnFqEV7J.js";import"./PdfViewerSearchBar-ChPR-QxE.js";import"./chevron-up-C2A5w8a5.js";import"./chevron-down-l-lKjlka.js";import"./cross-CDvt64dz.js";import"./PdfViewerSidebar-BJCgbV1G.js";import"./index-DKkkLjbn.js";import"./index-B9W8VWla.js";import"./index-CWTT4E5c.js";import"./PdfViewerToolbar-Zj8Ln6Tm.js";import"./Button-DnUlyK7a.js";import"./chevron-right-B-QXP9AB.js";import"./Input-9fM_pp7v.js";import"./search-CRF0d4U_.js";import"./spin-BlJAUecy.js";import"./error-jL4dzDGt.js";import"./withOsdkMetrics-Das8js_L.js";import"./makeExternalStore-CHVbKC8p.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
