import{j as r,M as s}from"./iframe-BwJP8SAz.js";import{P as p}from"./pdf-viewer-BERyjvnU.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Ck-TMHQc.js";import"./preload-helper-C__v2HQV.js";import"./PdfViewer-DvGl3_R6.js";import"./index-B1xmU5ac.js";import"./BasePdfViewer-2iOnOT-A.js";import"./BasePdfViewer.module.css-DugcaOB3.js";import"./PdfViewerAnnotationLayer-D2pvF38g.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B8FogAEY.js";import"./PdfViewerOutlineSidebar-6rj0J8gV.js";import"./PdfViewerSidebarHeader-0jwopvMD.js";import"./useBaseUiId-C34DKKh6.js";import"./useControlled-ZLl_p6JX.js";import"./CompositeRoot-DBOoRp9o.js";import"./CompositeItem-BsMyIE9-.js";import"./ToolbarRootContext-CBbcQ6qS.js";import"./composite-a2q1QDdA.js";import"./svgIconContainer-DMpafcgu.js";import"./PdfViewerSearchBar-Bx8vU0nW.js";import"./chevron-up-Dd5v-fVE.js";import"./chevron-down-DSU29Yd7.js";import"./cross-DiTZc7QM.js";import"./PdfViewerSidebar-glyoYpTA.js";import"./index-Qo_wZuR8.js";import"./index-C-xvBHp4.js";import"./index-Bx66jA38.js";import"./PdfViewerToolbar-KLHJwb51.js";import"./Button-C4Q4ezlI.js";import"./chevron-right-Hj7iLv_b.js";import"./Input-Biv1kBRN.js";import"./search-CesJa2BL.js";import"./spin-B-L7OX9b.js";import"./error-DWAlVBAx.js";import"./withOsdkMetrics-CHhNGKv-.js";import"./makeExternalStore-BWpOLj7v.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
