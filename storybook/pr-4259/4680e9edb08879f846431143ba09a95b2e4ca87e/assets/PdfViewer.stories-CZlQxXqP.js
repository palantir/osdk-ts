import{j as r,M as s}from"./iframe-CL0v58YA.js";import{P as p}from"./pdf-viewer-Dkj6N15h.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D3u89MXg.js";import"./preload-helper-YA1d6Ini.js";import"./PdfViewer-3scr22GP.js";import"./index-Dbld71_D.js";import"./BasePdfViewer-KNWWK1Sc.js";import"./BasePdfViewer.module.css-nKopJNr6.js";import"./PdfViewerAnnotationLayer-DvSZOsp0.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B5rkGRm-.js";import"./PdfViewerOutlineSidebar-iLGHDmlU.js";import"./PdfViewerSidebarHeader-D8CMo2bD.js";import"./useBaseUiId-C-B8c9Tq.js";import"./useControlled-CSC850so.js";import"./CompositeRoot-e3dlq57n.js";import"./CompositeItem-DUAhoOI3.js";import"./ToolbarRootContext-Dar2Ujz6.js";import"./composite-CnlM0z75.js";import"./svgIconContainer-C5xAXPyT.js";import"./PdfViewerSearchBar-CUq83Mkf.js";import"./chevron-up-CmwrCFBG.js";import"./chevron-down-BBB2aEWM.js";import"./cross-CMjnlyn3.js";import"./PdfViewerSidebar-CeIhkBaB.js";import"./index-B86UewVM.js";import"./index-B8Uk-bLz.js";import"./index-BvbkTHlh.js";import"./PdfViewerToolbar-Bs143XYK.js";import"./Button-D8zbKIcq.js";import"./chevron-right-Cj7aj79N.js";import"./Input-mgnWKdmk.js";import"./search-1eZ8caHB.js";import"./spin-BYentXap.js";import"./error-DDQ2JALg.js";import"./withOsdkMetrics-B3RxtapX.js";import"./makeExternalStore-Bhj1U_Xf.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
