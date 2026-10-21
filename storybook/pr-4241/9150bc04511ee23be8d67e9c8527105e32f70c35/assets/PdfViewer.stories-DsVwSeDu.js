import{j as r,M as s}from"./iframe-81je18Ik.js";import{P as p}from"./pdf-viewer-DfsxPyLf.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DEc7qrEb.js";import"./preload-helper-CRAEXExV.js";import"./PdfViewer-TWymX7MK.js";import"./index-Ch4IN5aI.js";import"./BasePdfViewer-Ci5Vrc0s.js";import"./BasePdfViewer.module.css-BzG02dbL.js";import"./PdfViewerAnnotationLayer-Bbr90Rgp.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BDiQ432p.js";import"./PdfViewerOutlineSidebar-e92mls7v.js";import"./PdfViewerSidebarHeader-C38X4R_B.js";import"./useBaseUiId-BZJB2Tlb.js";import"./useControlled-B3eKfZiB.js";import"./CompositeRoot-DxJSOp1F.js";import"./CompositeItem-CGRjueKi.js";import"./ToolbarRootContext-Bevviuy2.js";import"./composite-B4jPeedW.js";import"./svgIconContainer-CkaRT57i.js";import"./PdfViewerSearchBar-Bi4kjmAD.js";import"./chevron-up-DC8tJt2z.js";import"./chevron-down-ea9DRGVa.js";import"./cross-Cc4GvHBG.js";import"./PdfViewerSidebar-C9MU9U5e.js";import"./index-BZr2ycyZ.js";import"./index-F2YzzidU.js";import"./index-CJX1bs1L.js";import"./PdfViewerToolbar-CMDtWs46.js";import"./Button-DMrFAQQL.js";import"./chevron-right-BNKR4gBX.js";import"./Input-Dw0afNfi.js";import"./search-DL20J9IV.js";import"./spin-C5ZheXis.js";import"./error-v2_eLjNd.js";import"./withOsdkMetrics-DpvfaYrl.js";import"./makeExternalStore-C42KheMu.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
