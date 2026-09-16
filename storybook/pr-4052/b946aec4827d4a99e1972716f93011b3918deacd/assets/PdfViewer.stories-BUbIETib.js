import{j as r,M as s}from"./iframe-DGHdiPVF.js";import{P as p}from"./pdf-viewer-scNmfBaF.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Bwqe4vza.js";import"./preload-helper-Dwawx57G.js";import"./PdfViewer-DKtiztjX.js";import"./index-CfDWuSgz.js";import"./BasePdfViewer-yALMX5cs.js";import"./BasePdfViewer.module.css-5IneWNwY.js";import"./PdfViewerAnnotationLayer-B2nWSYGQ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DA7umr_X.js";import"./PdfViewerOutlineSidebar-E8gkx5EW.js";import"./PdfViewerSidebarHeader-BFBagDMC.js";import"./useBaseUiId-DSFsxKY7.js";import"./useControlled-BEh8mP6Z.js";import"./CompositeRoot-auzbGKeK.js";import"./CompositeItem-Bbw7hYJK.js";import"./ToolbarRootContext-SNm3mtrK.js";import"./composite-D0rWnQN7.js";import"./svgIconContainer-Cn2xvZW5.js";import"./PdfViewerSearchBar-DBvRsIZd.js";import"./chevron-up-a0O93LiA.js";import"./chevron-down-DP9lMKr_.js";import"./cross-B2_lH3br.js";import"./PdfViewerSidebar-eJhF50-q.js";import"./index-DrXgwkrt.js";import"./index-D6q9eE8T.js";import"./index-CvnU9MrA.js";import"./PdfViewerToolbar-CJ64sGAx.js";import"./Button-BowS6vUa.js";import"./chevron-right-DIOzzKD-.js";import"./Input-CON8UdB3.js";import"./search-B7igo8wt.js";import"./spin-mzpVSXE9.js";import"./error-BdbrlX1x.js";import"./withOsdkMetrics-DkGiRBlo.js";import"./makeExternalStore-CWOokT-C.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
