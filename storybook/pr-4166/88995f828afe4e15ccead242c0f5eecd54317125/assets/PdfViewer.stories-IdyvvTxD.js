import{j as r,M as s}from"./iframe-YrpSpTvs.js";import{P as p}from"./pdf-viewer-Ae671ePC.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B00iX0T-.js";import"./preload-helper-DxNq55wa.js";import"./PdfViewer-Dw_PJL8x.js";import"./index-BrVf8lWl.js";import"./BasePdfViewer-BbPbeC60.js";import"./BasePdfViewer.module.css-COsDKw2j.js";import"./PdfViewerAnnotationLayer-BH-Wyn48.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-ChEHRNaN.js";import"./PdfViewerOutlineSidebar-3A1Nrfrm.js";import"./PdfViewerSidebarHeader-DoPp7Yih.js";import"./useBaseUiId-nYNd-3tJ.js";import"./useControlled-2o6j3dfP.js";import"./CompositeRoot-CtHmiIPr.js";import"./CompositeItem-B56fR4fH.js";import"./ToolbarRootContext-8z2gQ1ff.js";import"./composite-5Mv9D3-A.js";import"./svgIconContainer-BtBzrjkO.js";import"./PdfViewerSearchBar-CY8v_kHD.js";import"./chevron-up-G8psbIi6.js";import"./chevron-down-BfPcmD3R.js";import"./cross-B0Aawxg9.js";import"./PdfViewerSidebar-DGCcVo64.js";import"./index-BS-m42I7.js";import"./index-Di4tHAvA.js";import"./index-BIHLBcFj.js";import"./PdfViewerToolbar-DXljP_QJ.js";import"./Button-CYGEL5Qg.js";import"./chevron-right-0xY0j62D.js";import"./Input-32CO0l-U.js";import"./search-B0P1cBIF.js";import"./spin-NMKaKDe9.js";import"./error-DewscpxX.js";import"./withOsdkMetrics-GBGU8c2D.js";import"./makeExternalStore-C6NSSiHx.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
