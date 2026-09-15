import{j as r,M as s}from"./iframe-DuKb9b-g.js";import{P as p}from"./pdf-viewer-UQPo0Kiz.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-2sTHnCpv.js";import"./preload-helper-CmBjm-d1.js";import"./PdfViewer-Dc1cl-Nj.js";import"./index-CBTF18Y_.js";import"./BasePdfViewer-MmFnUZVK.js";import"./BasePdfViewer.module.css-y3RTnGfa.js";import"./PdfViewerAnnotationLayer-HaWbeQIB.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D_z5bC4w.js";import"./PdfViewerOutlineSidebar-Dk3Ghgyy.js";import"./PdfViewerSidebarHeader-DxG0n6qo.js";import"./useBaseUiId-NQWDjIJs.js";import"./useControlled-Cq3GxJKq.js";import"./CompositeRoot-BpV2z7hj.js";import"./CompositeItem-nEfjeVhf.js";import"./ToolbarRootContext-B06gfqsL.js";import"./composite-DGpno2Zs.js";import"./svgIconContainer-D2G78cDZ.js";import"./PdfViewerSearchBar-Csc76ePm.js";import"./chevron-up-BbZJaETR.js";import"./chevron-down-Cn1BrU6q.js";import"./cross-BuyNDB8o.js";import"./PdfViewerSidebar-Djvr1z3H.js";import"./index-DYJuDcIp.js";import"./index-COA_z0C-.js";import"./index-rSrw9_A6.js";import"./PdfViewerToolbar-BIGoPLkL.js";import"./Button--z0-7-P6.js";import"./chevron-right-CgmzZFDC.js";import"./Input-Cn1-EvYg.js";import"./search-DorovZ71.js";import"./spin-BRAmWsJR.js";import"./error-F4sFwWip.js";import"./withOsdkMetrics-HiGGTrX-.js";import"./makeExternalStore-Ch4HrWdd.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
