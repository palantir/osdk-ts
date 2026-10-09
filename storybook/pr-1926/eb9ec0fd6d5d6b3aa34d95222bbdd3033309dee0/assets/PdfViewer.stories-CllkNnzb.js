import{j as r,M as s}from"./iframe-1dJaCYlm.js";import{P as p}from"./pdf-viewer-BZFMDxrD.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BNyKe0xz.js";import"./preload-helper-DxSOn4L7.js";import"./PdfViewer-Cd8wMEXr.js";import"./index-B5nbKv82.js";import"./BasePdfViewer-lervRrTZ.js";import"./BasePdfViewer.module.css-Bz1LyrS6.js";import"./PdfViewerAnnotationLayer-B-UFOgqE.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DR8VHzes.js";import"./PdfViewerOutlineSidebar-Ba7B1VGb.js";import"./PdfViewerSidebarHeader-DuIsngII.js";import"./useBaseUiId-C4uZnOHm.js";import"./useControlled-CHSiaIM9.js";import"./CompositeRoot-BEQKaFyv.js";import"./CompositeItem-C0Th2oHB.js";import"./ToolbarRootContext-Ztq9_6cI.js";import"./composite-L8QPO2DT.js";import"./svgIconContainer-BHSx6W0Z.js";import"./PdfViewerSearchBar-BdGjtUeu.js";import"./chevron-up-BxuEZMzO.js";import"./chevron-down-CFBQ0zoB.js";import"./cross-YjWLpu8J.js";import"./PdfViewerSidebar-RXBUUPy7.js";import"./index-DIXb6m2-.js";import"./index-BTsOhHh-.js";import"./index-DWMe-xRS.js";import"./PdfViewerToolbar-KVy4NaR-.js";import"./Button-C4vq1MKj.js";import"./chevron-right-da8Cy_8w.js";import"./Input-CIfB9akU.js";import"./search-BkPLkzDr.js";import"./spin-BwFbUcx5.js";import"./error-BHBv4jub.js";import"./withOsdkMetrics-H4WNoQWX.js";import"./makeExternalStore-P9a4XRGC.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
