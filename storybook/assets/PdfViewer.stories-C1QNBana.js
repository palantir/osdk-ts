import{j as r,M as s}from"./iframe-Chczgz1L.js";import{P as p}from"./pdf-viewer-jR10YV16.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DaoyZqF8.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfViewer-HpyllW4d.js";import"./index-B9rruesR.js";import"./BasePdfViewer-aQh8WIIP.js";import"./BasePdfViewer.module.css-DSWSlNXA.js";import"./PdfViewerAnnotationLayer-C5lqOjyn.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Bid4h1rO.js";import"./PdfViewerOutlineSidebar-BYMyEmM1.js";import"./PdfViewerSidebarHeader-B4beJm_g.js";import"./useBaseUiId-BKJ7O9Ur.js";import"./useControlled-BC2wgxgm.js";import"./CompositeRoot-DkshdpEu.js";import"./CompositeItem-DywVVkGM.js";import"./ToolbarRootContext-BtrjEFZW.js";import"./composite-B4QMOHJZ.js";import"./svgIconContainer-1jnQ2eo6.js";import"./PdfViewerSearchBar-BTgmFEec.js";import"./chevron-up-C3UysyRl.js";import"./chevron-down-Btx-Kyg4.js";import"./cross-BNk5cXgp.js";import"./PdfViewerSidebar-oomqJlgO.js";import"./index-DUC7giJN.js";import"./index-Bt7ugu0N.js";import"./index-Dre7KrbC.js";import"./PdfViewerToolbar-9KwTPirf.js";import"./Button-DeWrzdot.js";import"./chevron-right-CWV_IZ7o.js";import"./Input-D4C3JvNi.js";import"./search-wmopA8Vh.js";import"./spin-CisYY3gV.js";import"./error-ChH6XIqA.js";import"./withOsdkMetrics-C9LJ-x24.js";import"./makeExternalStore-BDwYNInw.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
