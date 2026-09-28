import{j as r,M as s}from"./iframe-Dtb1PIwC.js";import{P as p}from"./pdf-viewer-D4eWO5af.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-YhOOAJ5T.js";import"./preload-helper-CrZ439aZ.js";import"./PdfViewer-AxlFlmTS.js";import"./index-CLrFOtS8.js";import"./BasePdfViewer-Xr5XLa7Q.js";import"./BasePdfViewer.module.css-D8L-Gitd.js";import"./PdfViewerAnnotationLayer-BxwF1ihI.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BrmM7Jj7.js";import"./PdfViewerOutlineSidebar-CISqyHUF.js";import"./PdfViewerSidebarHeader-DwClTKAO.js";import"./useBaseUiId-COzzw9eg.js";import"./useControlled-C9h-MgnN.js";import"./CompositeRoot-kBz1TnJC.js";import"./CompositeItem-DJjbAwA2.js";import"./ToolbarRootContext-CVyIw6JT.js";import"./composite-BY6IafNz.js";import"./svgIconContainer-DpSb0Wlf.js";import"./PdfViewerSearchBar-Q7v43WBt.js";import"./chevron-up-BwMh7bxG.js";import"./chevron-down-CjmVxAZS.js";import"./cross-CVJIQSJP.js";import"./PdfViewerSidebar-BEXUpls1.js";import"./index-BYzRMw1m.js";import"./index-v7pWAnnW.js";import"./index-0o9LwOHv.js";import"./PdfViewerToolbar-CvWSNso1.js";import"./Button-CLxSMUqH.js";import"./chevron-right-RHWSxcp_.js";import"./Input-77thj6XN.js";import"./search-BvnVhgRx.js";import"./spin-D8OEjAhE.js";import"./error-BTkWOlta.js";import"./withOsdkMetrics-B_mXWVb4.js";import"./makeExternalStore-DJHAEnib.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
