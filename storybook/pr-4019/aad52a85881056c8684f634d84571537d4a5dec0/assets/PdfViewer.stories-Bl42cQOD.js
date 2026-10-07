import{j as r,M as s}from"./iframe-Bs9Zqqf-.js";import{P as p}from"./pdf-viewer-BMdiKGjT.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DiI0hRKY.js";import"./preload-helper-Cp9usskF.js";import"./PdfViewer-BO_BvPqX.js";import"./index-BDMfxNxX.js";import"./BasePdfViewer-BkHMLQdM.js";import"./BasePdfViewer.module.css-C5bL09fz.js";import"./PdfViewerAnnotationLayer-C47AlktQ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DdL1fqeE.js";import"./PdfViewerOutlineSidebar-jVOWHYsK.js";import"./PdfViewerSidebarHeader-Brks7vTG.js";import"./useBaseUiId-9IsGojkB.js";import"./useControlled-DkY88gS_.js";import"./CompositeRoot-CkifGjSv.js";import"./CompositeItem-ctTapvtZ.js";import"./ToolbarRootContext-ZHsiNOiv.js";import"./composite-Cqp0rQwX.js";import"./svgIconContainer-aOhTN_D5.js";import"./PdfViewerSearchBar-qfwS8uEI.js";import"./chevron-up-3vtSrJAp.js";import"./chevron-down-Dg71DAa4.js";import"./cross-BNRY-s17.js";import"./PdfViewerSidebar-q6zhDEus.js";import"./index-D6h7Nvb3.js";import"./index-Dblp0HKE.js";import"./index-EMOKDP2T.js";import"./PdfViewerToolbar-Dj1zSTDJ.js";import"./Button-DE9Fucz0.js";import"./chevron-right-C_zZqFzp.js";import"./Input-DFM7xw9J.js";import"./search-D6HT7gEm.js";import"./spin-DON8cxrA.js";import"./error-EzQ0dI5s.js";import"./withOsdkMetrics-DDUrYl-m.js";import"./makeExternalStore-CdBELGf5.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
