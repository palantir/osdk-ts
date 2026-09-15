import{j as r,M as s}from"./iframe-BNZD3xWg.js";import{P as p}from"./pdf-viewer-CwmbNV7F.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-uslrO3g8.js";import"./preload-helper-C3FmIxER.js";import"./PdfViewer-cmYDPXKz.js";import"./index-DOv_cZ9G.js";import"./BasePdfViewer-UtDUO9wW.js";import"./BasePdfViewer.module.css-BY5Nnu75.js";import"./PdfViewerAnnotationLayer-AvfzRvMi.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D07QNQg3.js";import"./PdfViewerOutlineSidebar-DxmB29Fp.js";import"./PdfViewerSidebarHeader-eIT4k3mf.js";import"./useBaseUiId-Dm_OUu_u.js";import"./useControlled-izS6CBB9.js";import"./CompositeRoot-C0PrO6wr.js";import"./CompositeItem-36LgHZ7r.js";import"./ToolbarRootContext-CS1sgrs1.js";import"./composite-BtkXGRWa.js";import"./svgIconContainer-2ty1idXI.js";import"./PdfViewerSearchBar-C7otWB8_.js";import"./chevron-up-CJk4cKuz.js";import"./chevron-down-CH0o2x3k.js";import"./cross-CNjRLxpn.js";import"./PdfViewerSidebar-DHi93oG7.js";import"./index-BZ56AvfN.js";import"./index-D51f32rH.js";import"./index-CQVklmSU.js";import"./PdfViewerToolbar-CVsNJLqa.js";import"./Button-S_R7mlWx.js";import"./chevron-right-DHx4R5dg.js";import"./Input-QTs7hrar.js";import"./search-B_H93lCU.js";import"./spin-DePOnyL7.js";import"./error-_5L66YQC.js";import"./withOsdkMetrics-X-R-b_lc.js";import"./makeExternalStore-XG9GYQLa.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
