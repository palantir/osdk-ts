import{j as r,M as s}from"./iframe-C-MKJZyK.js";import{P as p}from"./pdf-viewer-CGH24HS0.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BUFX5w3D.js";import"./preload-helper-CU_HtoHz.js";import"./PdfRenderer-DZDbmbao.js";import"./index-CPYi5p-M.js";import"./PdfViewer-CTNNB4W5.js";import"./PdfViewer.module.css-epb6HorQ.js";import"./PdfViewerAnnotationLayer-DReuPgF-.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BDfPYst1.js";import"./PdfViewerOutlineSidebar-k-PuMAdY.js";import"./PdfViewerSidebarHeader-B_aImqbC.js";import"./useBaseUiId-CgtQyAp-.js";import"./useControlled-NSu5zz5s.js";import"./CompositeRoot-mE3Plzf3.js";import"./CompositeItem-tHPXjfot.js";import"./ToolbarRootContext-D9y6oWor.js";import"./composite-2YGSxd1T.js";import"./svgIconContainer-FX4i3D7t.js";import"./PdfViewerSearchBar-6f02YUGA.js";import"./chevron-up-BqjjCt42.js";import"./chevron-down-71ryCxKg.js";import"./cross-DNu1Vd5q.js";import"./PdfViewerSidebar-CLWYhuSi.js";import"./index-DQWYziCS.js";import"./index-sYzrVFPx.js";import"./index-wyiBeFpI.js";import"./PdfViewerToolbar-CqeA0jTz.js";import"./Button-CKxl37fU.js";import"./chevron-right-Bjul7Bk9.js";import"./Input-CLo1MrIB.js";import"./search-UvEU4G0v.js";import"./spin-CPis6C8a.js";import"./error-CYtlGVxq.js";import"./withOsdkMetrics-BixqoA9K.js";import"./makeExternalStore-DiOUMjBT.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// Access media from an OSDK object's media reference property
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
        code: \`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,U as default};
