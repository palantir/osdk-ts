import{j as r,M as s}from"./iframe-DaCuFEr4.js";import{P as p}from"./pdf-viewer-DpdApbwH.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DkzrUGHh.js";import"./preload-helper-CH__3C9o.js";import"./PdfViewer-DPOjk5ot.js";import"./index-DBgsNfjF.js";import"./BasePdfViewer-BdzKrfKk.js";import"./BasePdfViewer.module.css-C1zI1tNE.js";import"./PdfViewerAnnotationLayer-COJs5GwV.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CXV4-MLN.js";import"./PdfViewerOutlineSidebar-CNlHuIcU.js";import"./PdfViewerSidebarHeader-KQN-j8bD.js";import"./useBaseUiId-ONC8Xt4g.js";import"./useControlled-qOz3lv_a.js";import"./CompositeRoot-a5XcNEy2.js";import"./CompositeItem-CUKWIiHk.js";import"./ToolbarRootContext-BhpmgE0w.js";import"./composite-dd7jjZk4.js";import"./svgIconContainer-xI7GONU5.js";import"./PdfViewerSearchBar-CB0i3I6D.js";import"./chevron-up-Wbqk9-ry.js";import"./chevron-down-kPE5lOM8.js";import"./cross-Dvh7Mb4q.js";import"./PdfViewerSidebar-CZcDlZY-.js";import"./index-CGnRKytQ.js";import"./index-dtUyYAkL.js";import"./index-B2p2pg25.js";import"./PdfViewerToolbar-C5Gm7vDt.js";import"./Button-BSyutd6a.js";import"./chevron-right-DKAWtf1g.js";import"./Input-9OWE4hHY.js";import"./search-D050E2Ix.js";import"./spin-DdKkev4B.js";import"./error-C-IGdotI.js";import"./withOsdkMetrics-B-pgZqiw.js";import"./makeExternalStore-DGayjJTu.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
