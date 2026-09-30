import{j as r,M as s}from"./iframe-3FtDhECv.js";import{P as p}from"./pdf-viewer-DXD1mzMP.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BTDla5sQ.js";import"./preload-helper-70ekmL9Z.js";import"./PdfViewer-CBobYjyj.js";import"./index-DDuj02wW.js";import"./BasePdfViewer-CYo1Rdxg.js";import"./BasePdfViewer.module.css-MuTDyojc.js";import"./PdfViewerAnnotationLayer-DPiFq2qB.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B7OEd9UF.js";import"./PdfViewerOutlineSidebar-bDbTC5Nl.js";import"./PdfViewerSidebarHeader-C3GGI75P.js";import"./useBaseUiId-ba-AZLlh.js";import"./useControlled-DAFRtrE7.js";import"./CompositeRoot-BwQMDbzT.js";import"./CompositeItem-X94Emfw4.js";import"./ToolbarRootContext-DWWF2uk2.js";import"./composite-l2Xk1Iwz.js";import"./svgIconContainer-8d5y5XmV.js";import"./PdfViewerSearchBar-CmydYWFG.js";import"./chevron-up-CN7EwXNY.js";import"./chevron-down-eXeXyWJp.js";import"./cross-3payUlda.js";import"./PdfViewerSidebar-XVDfV0B0.js";import"./index-BmkwvzsK.js";import"./index-Di_GBi9u.js";import"./index-CdOyTJBF.js";import"./PdfViewerToolbar-BtF4Ib9B.js";import"./Button-CtxTGJJ5.js";import"./chevron-right-BhaFJCPt.js";import"./Input-eNpsdHBj.js";import"./search-DQyEiXG4.js";import"./spin-DY-YSkZk.js";import"./error-Co_bSTMk.js";import"./withOsdkMetrics-CkiSk4kW.js";import"./makeExternalStore-Bttk8K2M.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
