import{j as r,M as s}from"./iframe-CSjrP8vI.js";import{P as p}from"./pdf-viewer-C6305gEs.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CIrEHMBL.js";import"./preload-helper-Cx2hoj0m.js";import"./PdfViewer-BPudAvlV.js";import"./index-CqYglBD0.js";import"./BasePdfViewer-IUjYcOb-.js";import"./BasePdfViewer.module.css-DqMkrUap.js";import"./PdfViewerAnnotationLayer-BfN0tAeK.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument--u_Kl1nS.js";import"./PdfViewerOutlineSidebar-B1A7k3mr.js";import"./PdfViewerSidebarHeader-BrKlFBLC.js";import"./useBaseUiId-DcgW2BGe.js";import"./useControlled-W118GxB4.js";import"./CompositeRoot-CTCX69DK.js";import"./CompositeItem-C2wpcQLE.js";import"./ToolbarRootContext-Skd8opG_.js";import"./composite-CAXBU4pD.js";import"./svgIconContainer-B7BQRztY.js";import"./PdfViewerSearchBar-D37sN-As.js";import"./chevron-up-CvwBzOgX.js";import"./chevron-down-xJOpychc.js";import"./cross-Ds3xYnVZ.js";import"./PdfViewerSidebar-BXaua0xK.js";import"./index-v62Ii5_v.js";import"./index-BedFYm95.js";import"./index-BN7bp0b2.js";import"./PdfViewerToolbar-B7NtM1Px.js";import"./Button-nWxTMLuc.js";import"./chevron-right-exsFH_1a.js";import"./Input-DG23LIw2.js";import"./search-BM_j1Cww.js";import"./spin-CGVtWVcz.js";import"./error-Du9W1yMi.js";import"./withOsdkMetrics-sMcDJBip.js";import"./makeExternalStore-DptFAV08.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
