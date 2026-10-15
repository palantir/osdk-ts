import{j as r,M as s}from"./iframe-C8jWyiQL.js";import{P as p}from"./pdf-viewer-CA0KI-mW.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-COQrxT5I.js";import"./preload-helper-D3hrqtKI.js";import"./PdfViewer-DE2eJqNd.js";import"./index-Ck3WMYCS.js";import"./BasePdfViewer-Bk7DPR6F.js";import"./BasePdfViewer.module.css-O1yWtspD.js";import"./PdfViewerAnnotationLayer-7Awe-4Ep.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DdCda3E_.js";import"./PdfViewerOutlineSidebar-B_aJ5K-b.js";import"./PdfViewerSidebarHeader-Z_kUTjCO.js";import"./useBaseUiId-C0Hhh4zZ.js";import"./useControlled-HdEPNqxD.js";import"./CompositeRoot-M7l7lOLa.js";import"./CompositeItem-DPPPi3Ly.js";import"./ToolbarRootContext-CKRR356X.js";import"./composite-VSkp61oJ.js";import"./svgIconContainer-Cl0UVpcd.js";import"./PdfViewerSearchBar-DZhpVp2u.js";import"./chevron-up-CRrSBUVC.js";import"./chevron-down-DWvQrpRH.js";import"./cross-Dl8HY39B.js";import"./PdfViewerSidebar-D0Qz0osc.js";import"./index-B-MOYaQO.js";import"./index-Ch17Lfr0.js";import"./index-p54yret9.js";import"./PdfViewerToolbar--jqGV0sY.js";import"./Button-3m2yzrh1.js";import"./chevron-right-CgDVGKQK.js";import"./Input-BJZD4UWc.js";import"./search-D-ei7hDs.js";import"./spin-DtrPWeXh.js";import"./error-DFAsAkKT.js";import"./withOsdkMetrics-DXVkLmYC.js";import"./makeExternalStore-CTfzdsJg.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
