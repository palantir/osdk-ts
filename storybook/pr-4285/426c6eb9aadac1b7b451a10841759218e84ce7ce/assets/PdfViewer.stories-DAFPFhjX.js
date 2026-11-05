import{j as r,M as s}from"./iframe-DGqz47MG.js";import{P as p}from"./pdf-viewer-BHHQ4AKJ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DVmNR7TH.js";import"./preload-helper-Cim2rGXh.js";import"./PdfViewer-D8UIOkG1.js";import"./index-Bd9LEkTw.js";import"./BasePdfViewer-C3aiWmfR.js";import"./BasePdfViewer.module.css-CUHpmu2A.js";import"./PdfViewerAnnotationLayer-DmWml6TL.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DfSksLDF.js";import"./PdfViewerOutlineSidebar-BIdcZXyQ.js";import"./PdfViewerSidebarHeader-Cs0_8xfH.js";import"./useBaseUiId-DUXwyBKc.js";import"./useControlled-CzYzgIWX.js";import"./CompositeRoot-DbRanLax.js";import"./CompositeItem-DkRqlbxr.js";import"./ToolbarRootContext-CVWObsgJ.js";import"./composite-Ba00gyVa.js";import"./svgIconContainer-DOG7DxQy.js";import"./PdfViewerSearchBar-DpQDnmgn.js";import"./chevron-up-fQyvXoLg.js";import"./chevron-down-oASCfusG.js";import"./cross-CEq_GdMU.js";import"./PdfViewerSidebar-CWVgQve1.js";import"./index-BsG8g24_.js";import"./index-D5J1M6Rk.js";import"./index-8Cs0qfIH.js";import"./PdfViewerToolbar-I_UnMi7S.js";import"./Button-BbcMUrJ0.js";import"./chevron-right-DvzyCZbj.js";import"./Input-74xcLqWb.js";import"./search-DRqVXkuQ.js";import"./spin-CIILfi3X.js";import"./error-CYx8FmP-.js";import"./withOsdkMetrics-6EClZ-2k.js";import"./makeExternalStore-B0og1Ieq.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
