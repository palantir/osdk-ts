import{j as r,M as s}from"./iframe-BbZZXiGk.js";import{P as p}from"./pdf-viewer-D8qo2T1k.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-JCkVP_si.js";import"./preload-helper-CeJCQ8zy.js";import"./PdfViewer-DEEpKqNa.js";import"./index-CZbf2fy9.js";import"./BasePdfViewer-DY-gzz6F.js";import"./BasePdfViewer.module.css-BWBgTmVS.js";import"./PdfViewerAnnotationLayer-BdG34fhy.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CcnB16qq.js";import"./PdfViewerOutlineSidebar-CB4LROG8.js";import"./PdfViewerSidebarHeader-D34FXBlE.js";import"./useBaseUiId-DJIunILb.js";import"./useControlled-DQq0royT.js";import"./CompositeRoot-DoauOm5d.js";import"./CompositeItem-Ond9knTH.js";import"./ToolbarRootContext-CLYVvxH8.js";import"./composite-DhB3hKwn.js";import"./svgIconContainer-DdiK9vAR.js";import"./PdfViewerSearchBar-CCoufmjk.js";import"./chevron-up-ckQMmym0.js";import"./chevron-down-1BEbhpzA.js";import"./cross-CrdY7Kh8.js";import"./PdfViewerSidebar-BBAIe0rx.js";import"./index-DBQej_XT.js";import"./index-D53mexCV.js";import"./index-Bz754pyr.js";import"./PdfViewerToolbar-Cgw_AJyX.js";import"./Button-is2LXBbi.js";import"./chevron-right-thH1kmqK.js";import"./Input-Dg2k6Vdc.js";import"./search-C7y_2xxv.js";import"./spin-B8bO-Jf2.js";import"./error-BZHgnJR4.js";import"./withOsdkMetrics-D_eGSjjb.js";import"./makeExternalStore-DcV0xPVd.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
