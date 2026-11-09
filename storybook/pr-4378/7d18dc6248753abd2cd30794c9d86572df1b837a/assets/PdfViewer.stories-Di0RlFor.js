import{j as r,M as s}from"./iframe-CNsFCmRD.js";import{P as p}from"./pdf-viewer-BECqe8XL.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CO5wZQdt.js";import"./preload-helper-B3EQxtCm.js";import"./PdfViewer-BOibYwPT.js";import"./index-DehS0r9u.js";import"./BasePdfViewer-D_CwGjDN.js";import"./BasePdfViewer.module.css-DNNZf6aB.js";import"./PdfViewerAnnotationLayer-CHTCTK86.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-VgeJ_Qsu.js";import"./PdfViewerOutlineSidebar-Tb_DhExr.js";import"./PdfViewerSidebarHeader-Uq6imKnC.js";import"./useBaseUiId-DIFzx6WD.js";import"./useControlled-DkXcDe2n.js";import"./CompositeRoot-CkXtyTRp.js";import"./CompositeItem-PSR5eG0p.js";import"./ToolbarRootContext-DMD9u7kY.js";import"./composite-Difoiya5.js";import"./svgIconContainer-BLE7kABU.js";import"./PdfViewerSearchBar-BJS7r_68.js";import"./chevron-up-DtJpCQNj.js";import"./chevron-down-CgfsyRf8.js";import"./cross-BgW6BP2I.js";import"./PdfViewerSidebar-yD_z2EYY.js";import"./index-D9KhH6vm.js";import"./index-B7uESB1d.js";import"./index-Bu5_opre.js";import"./PdfViewerToolbar-3WhmE-iW.js";import"./Button-g1ae3uCc.js";import"./chevron-right-D0tcr2x7.js";import"./Input-DAosEkIl.js";import"./search-D35U4f_q.js";import"./spin-Q3-t3lyo.js";import"./error-bpMZEwT_.js";import"./withOsdkMetrics-DhWG7RdG.js";import"./makeExternalStore-V3MhvWul.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
