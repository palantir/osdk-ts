import{j as r,M as s}from"./iframe-U_ccsXOa.js";import{P as p}from"./pdf-viewer-B9ZtUs3T.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C8OmDWj7.js";import"./preload-helper-65xl7bLJ.js";import"./PdfViewer-DgUl48KC.js";import"./index-BOhpqcbq.js";import"./BasePdfViewer-DJvVF4kt.js";import"./BasePdfViewer.module.css-7ZuyVjfZ.js";import"./PdfViewerAnnotationLayer-BBXy4kgl.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CURT3cmM.js";import"./PdfViewerOutlineSidebar-CldAmIiT.js";import"./PdfViewerSidebarHeader-DVmdQOq2.js";import"./useBaseUiId-CsjkwTP2.js";import"./useControlled-CXjwM6_M.js";import"./CompositeRoot-Bj3sKbob.js";import"./CompositeItem-6mTD-F3x.js";import"./ToolbarRootContext-D5-PfmM6.js";import"./composite-jcTrqHdY.js";import"./svgIconContainer-Bdip5v4Z.js";import"./PdfViewerSearchBar-Bk3quefY.js";import"./chevron-up-CAF9G4DN.js";import"./chevron-down-B2jqRAv_.js";import"./cross-Dx8cyWlu.js";import"./PdfViewerSidebar-8qkoIdPZ.js";import"./index-BncXt_hB.js";import"./index-CPxksT-G.js";import"./index-CZOfpX0o.js";import"./PdfViewerToolbar-FUcGaosr.js";import"./Button-6VeiZu2O.js";import"./chevron-right-Bscj5Yje.js";import"./Input-W79UZ-Qi.js";import"./search-V9O-Ezy9.js";import"./spin-BC-qNuTx.js";import"./error-DWlA1yK3.js";import"./withOsdkMetrics-DkeqZkcw.js";import"./makeExternalStore-CBJBG8Ns.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
