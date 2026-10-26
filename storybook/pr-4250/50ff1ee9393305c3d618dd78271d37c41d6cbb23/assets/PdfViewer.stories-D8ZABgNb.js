import{j as r,M as s}from"./iframe-DLqxDfy6.js";import{P as p}from"./pdf-viewer-DbAJq0wF.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-ClHs3KvO.js";import"./preload-helper-CR03nPFs.js";import"./PdfViewer-DV5zjhcV.js";import"./index-DvJ5FsVz.js";import"./BasePdfViewer-DOxCjC4p.js";import"./BasePdfViewer.module.css-DUBykd7r.js";import"./PdfViewerAnnotationLayer-rJ2qoiST.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cvl8nbVg.js";import"./PdfViewerOutlineSidebar-DXDt5lqT.js";import"./PdfViewerSidebarHeader-BHzrSS_4.js";import"./useBaseUiId-FG2DzWS6.js";import"./useControlled-DTSmocRM.js";import"./CompositeRoot-vKA4N3eP.js";import"./CompositeItem-B4qptw8k.js";import"./ToolbarRootContext-DcKYwC3S.js";import"./composite-Bp3q5gsu.js";import"./svgIconContainer-siAEGujy.js";import"./PdfViewerSearchBar-sfgTx-qe.js";import"./chevron-up-n9QaJLd2.js";import"./chevron-down-D8Abc2XY.js";import"./cross-_XB01iuh.js";import"./PdfViewerSidebar-BLC-81PR.js";import"./index-Bx9TpkCr.js";import"./index-DDPWTNxY.js";import"./index-CN3BhaNE.js";import"./PdfViewerToolbar-BMq1D8he.js";import"./Button-X3mSZ2fF.js";import"./chevron-right-B0SJc6C1.js";import"./Input-CWq-CC7y.js";import"./search-GkSvXq-b.js";import"./spin-DdUN2Siu.js";import"./error-D8ORw_lv.js";import"./withOsdkMetrics-DR4XRGWA.js";import"./makeExternalStore-B-39pyxw.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
