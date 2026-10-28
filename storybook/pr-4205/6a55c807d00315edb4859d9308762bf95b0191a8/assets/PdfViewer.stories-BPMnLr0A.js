import{j as r,M as s}from"./iframe-5xumy2lC.js";import{P as p}from"./pdf-viewer-BheWIhFs.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DWVUat_F.js";import"./preload-helper-Dnp5J3ho.js";import"./PdfViewer-73v1tvJJ.js";import"./index-OGeocGA5.js";import"./BasePdfViewer-CU6jeEM3.js";import"./BasePdfViewer.module.css-B8cBxRti.js";import"./PdfViewerAnnotationLayer-DElqaKp_.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BwlP_ofL.js";import"./PdfViewerOutlineSidebar-D0cYgWgw.js";import"./PdfViewerSidebarHeader-DePAdSRq.js";import"./useBaseUiId-CR8wF2TF.js";import"./useControlled-DMTvVf4P.js";import"./CompositeRoot-DyAPmMMG.js";import"./CompositeItem-FF3KNmJW.js";import"./ToolbarRootContext-D1AghJYR.js";import"./composite-Dn6Zzxac.js";import"./svgIconContainer-DKJstnRa.js";import"./PdfViewerSearchBar-iRqN1c7u.js";import"./chevron-up-CXAsCKAh.js";import"./chevron-down-De5_JPFZ.js";import"./cross-Bww8SGey.js";import"./PdfViewerSidebar-BsfJ4wuD.js";import"./index-BqDaJCNF.js";import"./index-B83pdUrW.js";import"./index-11qWnEer.js";import"./PdfViewerToolbar-BBm7Y4td.js";import"./Button-DIwfO1Nk.js";import"./chevron-right-nZ9TNLzB.js";import"./Input-Cpl3LxFn.js";import"./search-CRyjUtCH.js";import"./spin-DPJmUG_B.js";import"./error-Dp5nV5lf.js";import"./withOsdkMetrics-CN3Oviww.js";import"./makeExternalStore-BV9yhKos.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
