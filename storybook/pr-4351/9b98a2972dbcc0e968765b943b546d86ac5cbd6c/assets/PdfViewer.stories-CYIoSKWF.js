import{j as r,M as s}from"./iframe-DalzUr1q.js";import{P as p}from"./pdf-viewer-CjDh9ns4.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-VG3m-_io.js";import"./preload-helper-D_n2FxVD.js";import"./PdfViewer-D-QxLCvn.js";import"./index-BFBpHzmv.js";import"./BasePdfViewer-kvXgimS-.js";import"./BasePdfViewer.module.css-QPM4myKY.js";import"./PdfViewerAnnotationLayer-BWrQ-j4s.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DpyA5lgW.js";import"./PdfViewerOutlineSidebar-P6casyWk.js";import"./PdfViewerSidebarHeader-CMtV1Ard.js";import"./useBaseUiId-C1YfiI_O.js";import"./useControlled-kzcpSzwV.js";import"./CompositeRoot-CMKlH_Pk.js";import"./CompositeItem-BA4-v1aY.js";import"./ToolbarRootContext-BCpC9w2q.js";import"./composite-ByIGP6v1.js";import"./svgIconContainer-8scThZ5S.js";import"./PdfViewerSearchBar-BuATpDg6.js";import"./chevron-up-BuQVfXH0.js";import"./chevron-down-CPH5FDFQ.js";import"./cross-SZYnhdqh.js";import"./PdfViewerSidebar-RNTmkKK7.js";import"./index-B3TGx6rz.js";import"./index-CyRUVzxf.js";import"./index-8qyP2Pih.js";import"./PdfViewerToolbar-DQPhDK5-.js";import"./Button-c1CthLqB.js";import"./chevron-right-CbkGGwc1.js";import"./Input-D5Owm4cS.js";import"./search-B4UxFsnj.js";import"./spin-iVO2YGPz.js";import"./error-3LJUbIdl.js";import"./withOsdkMetrics-pz-JOP6f.js";import"./makeExternalStore-Ill0Kq_R.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
