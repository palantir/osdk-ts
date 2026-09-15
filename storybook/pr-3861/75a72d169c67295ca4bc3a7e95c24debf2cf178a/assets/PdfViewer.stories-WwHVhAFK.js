import{j as r,M as s}from"./iframe-DX9GTmTS.js";import{P as p}from"./pdf-viewer-BfC497QQ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Co3I4TIt.js";import"./preload-helper-BJHRWIj0.js";import"./PdfViewer-Dm93Tu1d.js";import"./index-qD7KPbHv.js";import"./BasePdfViewer-B7Ik1yZK.js";import"./BasePdfViewer.module.css-CM0kH4Z7.js";import"./PdfViewerAnnotationLayer-CNdFX5xk.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Be3bZCfc.js";import"./PdfViewerOutlineSidebar-J72h8Gkb.js";import"./PdfViewerSidebarHeader-BI3nX7Bu.js";import"./useBaseUiId-LIEARN9F.js";import"./useControlled-Bbq2I_dd.js";import"./CompositeRoot-Bv91Ukc9.js";import"./CompositeItem-CDg-ghY6.js";import"./ToolbarRootContext-HucsP966.js";import"./composite-YtQb8O1c.js";import"./svgIconContainer-DiXmcE79.js";import"./PdfViewerSearchBar-Bx-c0Fu7.js";import"./chevron-up-CHv3hu-4.js";import"./chevron-down-DasCvZc6.js";import"./cross-CnnW3pn0.js";import"./PdfViewerSidebar-Djospvqk.js";import"./index-B6DX-C20.js";import"./index-D6AHn8lU.js";import"./index-BFmznvox.js";import"./PdfViewerToolbar-ht-C_2Nb.js";import"./Button-B-xJiokr.js";import"./chevron-right-BsVP4_og.js";import"./Input-D3jwcYVb.js";import"./search-CpS_oLmz.js";import"./spin-BLxO64LV.js";import"./error-BLx5cAN8.js";import"./withOsdkMetrics-CVU4RfbR.js";import"./makeExternalStore-ChFrK0L7.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
