import{j as r,M as s}from"./iframe-PwAIVm5u.js";import{P as p}from"./pdf-viewer-mTvn2G6c.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-eVAdgebZ.js";import"./preload-helper-CQv3h1eP.js";import"./PdfViewer-ND3OUl2e.js";import"./index-Ca_oKjEa.js";import"./BasePdfViewer-CFtI3Ufl.js";import"./BasePdfViewer.module.css-CcorK1j_.js";import"./PdfViewerAnnotationLayer-l7bPUeop.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CDixz0L6.js";import"./PdfViewerOutlineSidebar-CjlGAeWD.js";import"./PdfViewerSidebarHeader-DKQr96NQ.js";import"./useBaseUiId-BhpsHhZ2.js";import"./useControlled-_4ugvpeb.js";import"./CompositeRoot-B2Nu1FwG.js";import"./CompositeItem-DPCNdhZq.js";import"./ToolbarRootContext-BB_k_Kqj.js";import"./composite-fUnz6yuB.js";import"./svgIconContainer-HsDGQ90M.js";import"./PdfViewerSearchBar-DS_IhSB2.js";import"./chevron-up-Cb0duFtM.js";import"./chevron-down-BA5gqzEX.js";import"./cross-GcEEbHxC.js";import"./PdfViewerSidebar-M_yyl893.js";import"./index-hThCMCFD.js";import"./index-RdMLhv4M.js";import"./index-BihfBpP7.js";import"./PdfViewerToolbar-DLIXz9_E.js";import"./Button-VHGYpAX6.js";import"./chevron-right-BsaXBd1I.js";import"./Input-CPGzuvOj.js";import"./search-Nx9kE-Q8.js";import"./spin-C0nXLC0k.js";import"./error-DMntN0M5.js";import"./withOsdkMetrics-38iXVMUT.js";import"./makeExternalStore-CqOzjQXJ.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
