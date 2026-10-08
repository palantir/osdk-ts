import{j as r,M as s}from"./iframe-BaqisVl-.js";import{P as p}from"./pdf-viewer-DlR7WnRF.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BOJzdK0E.js";import"./preload-helper-BNi0jLvn.js";import"./PdfViewer-SSdVpL0e.js";import"./index-DsJxcxuD.js";import"./BasePdfViewer-tyFguv66.js";import"./BasePdfViewer.module.css-Bgisswlb.js";import"./PdfViewerAnnotationLayer-DCF4zKuo.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-ehcL5G7K.js";import"./PdfViewerOutlineSidebar-rXSsmBd_.js";import"./PdfViewerSidebarHeader-BacbI8HK.js";import"./useBaseUiId-CZNOvWOX.js";import"./useControlled-CryTPf8E.js";import"./CompositeRoot-TUnXLOhi.js";import"./CompositeItem-oqc0csOw.js";import"./ToolbarRootContext-DvsCcilH.js";import"./composite-DaM8qI8D.js";import"./svgIconContainer-TSbWa_lF.js";import"./PdfViewerSearchBar-D5Ls9EIT.js";import"./chevron-up-Bmq9Nv-b.js";import"./chevron-down-DUYAtgkB.js";import"./cross-NcNTP23a.js";import"./PdfViewerSidebar-CBToEehC.js";import"./index-fm-M8VrQ.js";import"./index-DVQ_HGj7.js";import"./index-Dku8OroJ.js";import"./PdfViewerToolbar-Dlkbyx-i.js";import"./Button-BTfyWfru.js";import"./chevron-right-C4Xe7MdP.js";import"./Input-CegZe646.js";import"./search-xoA6p7gs.js";import"./spin-MT_IQTR3.js";import"./error-USmwsDsu.js";import"./withOsdkMetrics-CQLdSUZI.js";import"./makeExternalStore-DaHYiupK.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
