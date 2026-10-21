import{j as r,M as s}from"./iframe-DFHLrRxy.js";import{P as p}from"./pdf-viewer-DFXqgYlj.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CYOolSBr.js";import"./preload-helper-D3OFW4Wp.js";import"./PdfViewer-D-mJfX59.js";import"./index-lMBTNEhC.js";import"./BasePdfViewer-CQaifpny.js";import"./BasePdfViewer.module.css-BDNgryOG.js";import"./PdfViewerAnnotationLayer-jrJet6eQ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-FhT1-MVZ.js";import"./PdfViewerOutlineSidebar-Ck0eRec0.js";import"./PdfViewerSidebarHeader-8kwdxlm7.js";import"./useBaseUiId-D2rxFRGv.js";import"./useControlled-DfjEV_zy.js";import"./CompositeRoot-V2V3zKwE.js";import"./CompositeItem-BYZr26cD.js";import"./ToolbarRootContext-BjfNF6P-.js";import"./composite-nDV_ik1F.js";import"./svgIconContainer-CWuGvQcW.js";import"./PdfViewerSearchBar-CUjZShXc.js";import"./chevron-up-Dq4sWNuZ.js";import"./chevron-down-DoelWXMj.js";import"./cross-CvONLWGq.js";import"./PdfViewerSidebar-DLneNmL1.js";import"./index-DPVYsjbh.js";import"./index-CWojmVv7.js";import"./index-DCHHusj_.js";import"./PdfViewerToolbar-aKuzvvip.js";import"./Button-yx5bONTn.js";import"./chevron-right-C5ULAxxy.js";import"./Input-CI74CICo.js";import"./search-DQslwNpY.js";import"./spin-D8s_3GfH.js";import"./error-C-yk3J4q.js";import"./withOsdkMetrics-BEBmRKsA.js";import"./makeExternalStore-D-LxbjRt.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
