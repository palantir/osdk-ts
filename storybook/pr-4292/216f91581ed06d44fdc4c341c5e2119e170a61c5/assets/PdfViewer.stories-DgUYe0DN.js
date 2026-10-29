import{j as r,M as s}from"./iframe-BJLBRZOh.js";import{P as p}from"./pdf-viewer-DEci0U5T.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-ttTp7RHr.js";import"./preload-helper-BwUp_7F1.js";import"./PdfViewer-BZcY_HFf.js";import"./index-C9_BYSi8.js";import"./BasePdfViewer-Db2evUmT.js";import"./BasePdfViewer.module.css-CW-uYbi2.js";import"./PdfViewerAnnotationLayer-C_iCznU3.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B3QH9JlD.js";import"./PdfViewerOutlineSidebar-B_ZwIgJg.js";import"./PdfViewerSidebarHeader-C7xqzhXl.js";import"./useBaseUiId-LHwOB3kw.js";import"./useControlled-DvCQBOjX.js";import"./CompositeRoot-CtmknFFC.js";import"./CompositeItem-B-vP8lxH.js";import"./ToolbarRootContext-DhgC0mq4.js";import"./composite-BxFzj_3L.js";import"./svgIconContainer-CQ7lEg_v.js";import"./PdfViewerSearchBar-CKy-2xFA.js";import"./chevron-up-C0uzKY6c.js";import"./chevron-down-PUEKZFzz.js";import"./cross-DYYKBVG2.js";import"./PdfViewerSidebar-DkfCBouP.js";import"./index-BxHhiHH9.js";import"./index-MgR6vtA5.js";import"./index-Cf7wbzeY.js";import"./PdfViewerToolbar-Bw0mWyBy.js";import"./Button-B1QFNCxV.js";import"./chevron-right-HqwkoTZj.js";import"./Input-DotRyYSg.js";import"./search-lm4u23Jr.js";import"./spin-ldEkp2xB.js";import"./error-RXBYB8o8.js";import"./withOsdkMetrics-CUH6WGya.js";import"./makeExternalStore-BWhFJ2a3.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
