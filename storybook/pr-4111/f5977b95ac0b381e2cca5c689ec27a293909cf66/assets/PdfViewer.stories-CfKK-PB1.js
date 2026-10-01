import{j as r,M as s}from"./iframe-CSmstThV.js";import{P as p}from"./pdf-viewer-Qp4gchi-.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-9AEzB6yt.js";import"./preload-helper-CQQlEffD.js";import"./PdfViewer-BYyvWrZk.js";import"./index-L8cshBl8.js";import"./BasePdfViewer-DbsRPGmK.js";import"./BasePdfViewer.module.css-B0W2cHK9.js";import"./PdfViewerAnnotationLayer-CDHZUM-d.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cqv9WK5K.js";import"./PdfViewerOutlineSidebar-H9uyRIKY.js";import"./PdfViewerSidebarHeader-CTApuBBK.js";import"./useBaseUiId-BiI5AoOG.js";import"./useControlled-CNZAIfTk.js";import"./CompositeRoot-gxqN6m5H.js";import"./CompositeItem-BaYmn_Wk.js";import"./ToolbarRootContext-D3qIfWMT.js";import"./composite-D-st0uki.js";import"./svgIconContainer-BHO01tKx.js";import"./PdfViewerSearchBar-CyyCvymj.js";import"./chevron-up-BVjnXGuR.js";import"./chevron-down-Dn4WYVvB.js";import"./cross-D9KoCzL1.js";import"./PdfViewerSidebar-Dhv0BGII.js";import"./index-CQ6HYfiM.js";import"./index-CZXhyyfI.js";import"./index-DfIv01yj.js";import"./PdfViewerToolbar-COnVybMt.js";import"./Button-DI_WLWpV.js";import"./chevron-right-DxmM9qlR.js";import"./Input-1EXkKDbs.js";import"./search-DOAaZcfu.js";import"./spin-BPz0e_a_.js";import"./error-Cu8ttO5d.js";import"./withOsdkMetrics-V02XcVkv.js";import"./makeExternalStore-DWrbiT-Y.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
