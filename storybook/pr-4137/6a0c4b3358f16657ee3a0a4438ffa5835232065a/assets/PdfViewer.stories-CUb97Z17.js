import{j as r,M as s}from"./iframe-BwtdJUQ8.js";import{P as p}from"./pdf-viewer-DENK1stV.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-G1SnBWa-.js";import"./preload-helper-DJuGrF4Q.js";import"./PdfViewer-V1vOBSxe.js";import"./index-ecbPEJsH.js";import"./BasePdfViewer-Bynx3l8n.js";import"./BasePdfViewer.module.css-CB5GWPgH.js";import"./PdfViewerAnnotationLayer-d5DO8hKE.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument--AUpYIAW.js";import"./PdfViewerOutlineSidebar-DEnV5f19.js";import"./PdfViewerSidebarHeader-D1oL1CWs.js";import"./useBaseUiId-DlvOV9lG.js";import"./useControlled-CTxNl2GG.js";import"./CompositeRoot-iqzsGS7W.js";import"./CompositeItem-gNAn1-ON.js";import"./ToolbarRootContext-B6jDfH-i.js";import"./composite-DglRx_pb.js";import"./svgIconContainer-BpIR-cOm.js";import"./PdfViewerSearchBar-0LqmfD55.js";import"./chevron-up-DmLmV1CY.js";import"./chevron-down-DAI8xIlK.js";import"./cross-D5O7asJB.js";import"./PdfViewerSidebar-CTYTBU6S.js";import"./index-BkxqopTp.js";import"./index-D-6QZGaS.js";import"./index-NBYYlFiK.js";import"./PdfViewerToolbar-C7ganY9K.js";import"./Button-a-v4YEmM.js";import"./chevron-right-BRXBMNz7.js";import"./Input-Ckc7B0k2.js";import"./search-BMvzDH_4.js";import"./spin-C5YFjcuM.js";import"./error-B3Glsuys.js";import"./withOsdkMetrics-DjmWzspB.js";import"./makeExternalStore-BDYC9xXC.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
