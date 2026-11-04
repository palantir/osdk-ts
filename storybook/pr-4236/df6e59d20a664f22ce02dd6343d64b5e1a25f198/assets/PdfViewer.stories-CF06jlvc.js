import{j as r,M as s}from"./iframe-DrF4uDXw.js";import{P as p}from"./pdf-viewer-BpKDlwcD.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B-5CDDBh.js";import"./preload-helper-u_zBXynr.js";import"./PdfViewer-DOmfnPOR.js";import"./index-CVI5kV9I.js";import"./BasePdfViewer-BJ7anEB7.js";import"./BasePdfViewer.module.css-DKe5cF4H.js";import"./PdfViewerAnnotationLayer-BAQqWAGP.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BCJWjG_J.js";import"./PdfViewerOutlineSidebar-Ct6owV_R.js";import"./PdfViewerSidebarHeader-BJ_uIWov.js";import"./useBaseUiId-C9RyiOK8.js";import"./useControlled-CZU-WiQ8.js";import"./CompositeRoot-DEfZtucj.js";import"./CompositeItem-D46vdXYg.js";import"./ToolbarRootContext-C8VOBVuh.js";import"./composite-Bq13iBNY.js";import"./svgIconContainer-DTs7PmKd.js";import"./PdfViewerSearchBar-CrFgkCQ0.js";import"./chevron-up-Dq83_18J.js";import"./chevron-down-DrKAguLe.js";import"./cross-CpHoxb52.js";import"./PdfViewerSidebar-CzlrdncM.js";import"./index-DyhoC8yA.js";import"./index-BDX0ToeT.js";import"./index-CGWCVoH4.js";import"./PdfViewerToolbar-CU4Annr4.js";import"./Button-YLbQ9ZAy.js";import"./chevron-right-w8lcgRd_.js";import"./Input-CdEHyPrX.js";import"./search-CELVamy6.js";import"./spin-CMdKw_n8.js";import"./error-LoVtbcsO.js";import"./withOsdkMetrics-CRS-8bKl.js";import"./makeExternalStore-DYuKTott.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
