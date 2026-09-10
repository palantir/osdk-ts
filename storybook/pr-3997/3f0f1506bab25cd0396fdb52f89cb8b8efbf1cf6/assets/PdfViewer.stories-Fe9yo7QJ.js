import{j as r,M as s}from"./iframe-C-ZowQax.js";import{P as p}from"./pdf-viewer-CT5JB4NU.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DfU6Nn1P.js";import"./preload-helper-BwoiUuS0.js";import"./PdfViewer-D-SpX7MW.js";import"./index-Be4hOd1B.js";import"./BasePdfViewer-CMWhujZv.js";import"./BasePdfViewer.module.css-DSdvhArm.js";import"./PdfViewerAnnotationLayer-Bfcm5jMT.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-ChQ1o9GN.js";import"./PdfViewerOutlineSidebar-DloGqGYQ.js";import"./PdfViewerSidebarHeader-BJ0d0b6d.js";import"./useBaseUiId-z3JC-8KB.js";import"./useControlled-BMJFbw6E.js";import"./CompositeRoot-BxA4Kn0M.js";import"./CompositeItem-Boyopm8a.js";import"./ToolbarRootContext-qpt4Azan.js";import"./composite-DecXstOI.js";import"./svgIconContainer-DOvH0cqq.js";import"./PdfViewerSearchBar-CjnyKQsd.js";import"./chevron-up-BbViTdpj.js";import"./chevron-down-BB7K5vpo.js";import"./cross-Eu5MsQSw.js";import"./PdfViewerSidebar-B6g8ER8J.js";import"./index-BDVpzpby.js";import"./index-Ds7XpPFE.js";import"./index-CLAxlO_0.js";import"./PdfViewerToolbar-CobAn1uj.js";import"./Button-BvplgYnA.js";import"./chevron-right-DjBltQ-v.js";import"./Input-DBndaIW5.js";import"./search-IKabI-9R.js";import"./spin-daVQS3OR.js";import"./error-DLiiLlwM.js";import"./withOsdkMetrics-nJkmP2WD.js";import"./makeExternalStore-D6lqxyG2.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
