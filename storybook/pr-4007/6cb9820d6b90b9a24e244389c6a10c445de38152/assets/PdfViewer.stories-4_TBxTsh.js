import{j as r,M as s}from"./iframe-CJdhljqY.js";import{P as p}from"./pdf-viewer-CcDtsGhl.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-OVBNdaDp.js";import"./preload-helper-Dt50QPrM.js";import"./PdfViewer-BGz1VQUE.js";import"./index-C_XWhVsk.js";import"./BasePdfViewer-1NGhDUWH.js";import"./BasePdfViewer.module.css-Ct3t6DCZ.js";import"./PdfViewerAnnotationLayer-Bedp6CcU.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CnYHQZTk.js";import"./PdfViewerOutlineSidebar-BrvBrRU0.js";import"./PdfViewerSidebarHeader-CXhDvSV3.js";import"./useBaseUiId-DhLXeG5Q.js";import"./useControlled-DxG1_BRX.js";import"./CompositeRoot-BAJ3naX0.js";import"./CompositeItem-D1aj4ASS.js";import"./ToolbarRootContext-BUjzSc7s.js";import"./composite-CMxCP_fe.js";import"./svgIconContainer-DfUk_uW1.js";import"./PdfViewerSearchBar-DQQmDUZd.js";import"./chevron-up-C-egzvGQ.js";import"./chevron-down-HDas2nyI.js";import"./cross-xpJwG0PM.js";import"./PdfViewerSidebar-t5UYINmO.js";import"./index-JTXg-Z1T.js";import"./index-CiaROGr7.js";import"./index-PvN9PIAf.js";import"./PdfViewerToolbar-BCoSjyie.js";import"./Button-BW0xuowo.js";import"./chevron-right-DszgFpl5.js";import"./Input-MNhthrzu.js";import"./search-KsJ5YUkQ.js";import"./spin-DEdFVklQ.js";import"./error-De8eomlR.js";import"./withOsdkMetrics-C23PGbte.js";import"./makeExternalStore-JX4u0CWz.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
