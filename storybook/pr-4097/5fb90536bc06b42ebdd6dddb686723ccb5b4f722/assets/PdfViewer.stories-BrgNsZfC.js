import{j as r,M as s}from"./iframe-BLUQ5n2c.js";import{P as p}from"./pdf-viewer-B1qAlvZ8.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DcI9ncHw.js";import"./preload-helper-DMlP9NYW.js";import"./PdfViewer-BKhU9V5H.js";import"./index-CsLnk6pi.js";import"./BasePdfViewer-DmOgeOUP.js";import"./BasePdfViewer.module.css-BlB7-zFD.js";import"./PdfViewerAnnotationLayer-ByS3HU62.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Bl5VAGAE.js";import"./PdfViewerOutlineSidebar-Dvxc56gm.js";import"./PdfViewerSidebarHeader-BqwZct_t.js";import"./useBaseUiId-BeXNNW2Y.js";import"./useControlled-B201dL0t.js";import"./CompositeRoot-wJ1jo6T8.js";import"./CompositeItem-BFmGj5TY.js";import"./ToolbarRootContext-DgTgfzIH.js";import"./composite-DpCo7vDA.js";import"./svgIconContainer-Cp4hDvLL.js";import"./PdfViewerSearchBar-Boj4dn0I.js";import"./chevron-up-BRN7Leh3.js";import"./chevron-down-5sopWHZC.js";import"./cross-lsoPApi8.js";import"./PdfViewerSidebar-CGZ5FuG_.js";import"./index-C0S21z2f.js";import"./index-CRHr79L0.js";import"./index-3ijF1jpZ.js";import"./PdfViewerToolbar-jDYGvS_8.js";import"./Button-SHEnCOjG.js";import"./chevron-right-WupSAL0I.js";import"./Input-CJtdNhxn.js";import"./search-BxVXVDMi.js";import"./spin-PSfYI4Yg.js";import"./error-CimK2De2.js";import"./withOsdkMetrics-XVg1B84_.js";import"./makeExternalStore-cNeOPsE8.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
