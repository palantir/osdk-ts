import{j as r,M as s}from"./iframe-B-n5uLkA.js";import{P as p}from"./pdf-viewer-DkAq_3nM.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D_mVD9qp.js";import"./preload-helper-vxu-jvpO.js";import"./PdfViewer-J72YkR7c.js";import"./index-r9aFA9c6.js";import"./BasePdfViewer-DsqSJIY1.js";import"./BasePdfViewer.module.css-C28-UcdJ.js";import"./PdfViewerAnnotationLayer-BMA9iZVb.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DkwdRMfE.js";import"./PdfViewerOutlineSidebar-BVJjYtFp.js";import"./PdfViewerSidebarHeader-DZks3GlM.js";import"./useBaseUiId-Cx3-H6q7.js";import"./useControlled-Bce4MQ3D.js";import"./CompositeRoot-BbXiNDeB.js";import"./CompositeItem-Brq4Jfrc.js";import"./ToolbarRootContext-pXgQ7_Yk.js";import"./composite-CcnMcVoq.js";import"./svgIconContainer-BAP4xquW.js";import"./PdfViewerSearchBar-Bq6LA8fo.js";import"./chevron-up-hPelyIO0.js";import"./chevron-down-COZB8m2A.js";import"./cross-CzzoI-Me.js";import"./PdfViewerSidebar-CK-mZ2K7.js";import"./index-B0qRo9vw.js";import"./index-AEeSb7o4.js";import"./index-DKaYQA5S.js";import"./PdfViewerToolbar-Cpwfsrwc.js";import"./Button-Cxizrf8Y.js";import"./chevron-right-rktv7Zwr.js";import"./Input-LcpenwpJ.js";import"./search-DCVRYddG.js";import"./spin-9uwqU0kA.js";import"./error-ctHtVSzl.js";import"./withOsdkMetrics-BSpJ8hG-.js";import"./makeExternalStore-CWIwlctc.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
