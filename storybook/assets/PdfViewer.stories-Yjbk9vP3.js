import{j as r,M as s}from"./iframe-DeJWYCn1.js";import{P as p}from"./pdf-viewer-DB9FbtJT.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-10ZMen71.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfViewer-DyUQ9hQB.js";import"./index-B5Yva2Xc.js";import"./BasePdfViewer-BNipyoZa.js";import"./BasePdfViewer.module.css-CAYrp_h8.js";import"./PdfViewerAnnotationLayer-H8xSwkFe.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CL4U24ay.js";import"./PdfViewerOutlineSidebar-DxVbF3SW.js";import"./PdfViewerSidebarHeader-CLi_vFP5.js";import"./useBaseUiId-DhBsrvdy.js";import"./useControlled-DyW4-M2H.js";import"./CompositeRoot-C_4lfzRs.js";import"./CompositeItem-BhfhJAmc.js";import"./ToolbarRootContext-Bw_XS67E.js";import"./composite-q4pLTQsX.js";import"./svgIconContainer-D4OdXIbd.js";import"./PdfViewerSearchBar-8vcnehay.js";import"./chevron-up-Bi4USfde.js";import"./chevron-down-C0hhObXO.js";import"./cross-BHBLhOoQ.js";import"./PdfViewerSidebar-DzORCLE_.js";import"./index-B8RwvKuR.js";import"./index-B6JIIbmg.js";import"./index-Bkdv8Oep.js";import"./PdfViewerToolbar-Cgjx4ati.js";import"./Button-BTjXEyn6.js";import"./chevron-right-Bvq7gt3R.js";import"./Input-ChnYFThm.js";import"./search-ymO1htD2.js";import"./spin-C-qJBpnj.js";import"./error-CPbKcdrM.js";import"./withOsdkMetrics-BUS-C4Xd.js";import"./makeExternalStore-DYjFjmyg.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
