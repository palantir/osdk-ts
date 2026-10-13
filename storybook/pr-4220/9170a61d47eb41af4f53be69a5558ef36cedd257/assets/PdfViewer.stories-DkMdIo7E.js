import{j as r,M as s}from"./iframe-BEuky4nW.js";import{P as p}from"./pdf-viewer-DQ5lIh0c.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Dg5c5tn2.js";import"./preload-helper-DXZnQA0g.js";import"./PdfViewer-Damd23_K.js";import"./index-DYYn-JJY.js";import"./BasePdfViewer-Bga8wcAi.js";import"./BasePdfViewer.module.css-DOk9w-F6.js";import"./PdfViewerAnnotationLayer-CjT2r9qp.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B1ydiM7O.js";import"./PdfViewerOutlineSidebar-D9_JTbJ3.js";import"./PdfViewerSidebarHeader-CnsY-UP9.js";import"./useBaseUiId-BQ-nlD4A.js";import"./useControlled-Ds39J2BB.js";import"./CompositeRoot-Co_Vg0C-.js";import"./CompositeItem-G9820lSK.js";import"./ToolbarRootContext-CUmbCPFZ.js";import"./composite-DtclNBVm.js";import"./svgIconContainer-CnHhfA4g.js";import"./PdfViewerSearchBar-W2vqWw2B.js";import"./chevron-up-Buukew_o.js";import"./chevron-down-D_q9Dus0.js";import"./cross-Ti9XTUaD.js";import"./PdfViewerSidebar-CxqESh6n.js";import"./index-B543OGGW.js";import"./index-BT6wKmSC.js";import"./index-BM4hMUPD.js";import"./PdfViewerToolbar-BuTfXtYe.js";import"./Button-BH8hgTyM.js";import"./chevron-right-DLaOFS51.js";import"./Input-Bkp6Y8Kw.js";import"./search-CUefFBvc.js";import"./spin-phsqeJ2s.js";import"./error-J-Iw-CxZ.js";import"./withOsdkMetrics-DVNHib_Z.js";import"./makeExternalStore-BNzKZyz4.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
