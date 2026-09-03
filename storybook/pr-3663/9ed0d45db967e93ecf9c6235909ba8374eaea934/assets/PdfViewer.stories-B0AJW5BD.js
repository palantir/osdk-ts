import{j as r,M as s}from"./iframe-DEpmrtbG.js";import{P as p}from"./pdf-viewer-Dr1COYpx.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D135TUlx.js";import"./preload-helper-Bgg2uCW1.js";import"./PdfViewer-FgvM3cyv.js";import"./index-DgxVBE9v.js";import"./BasePdfViewer-8LKvmk8x.js";import"./BasePdfViewer.module.css-BqQiX0iB.js";import"./PdfViewerAnnotationLayer-fJq5Vmya.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-zw2D3fBY.js";import"./PdfViewerOutlineSidebar-CLh7fUvT.js";import"./PdfViewerSidebarHeader-C5edfi6W.js";import"./useBaseUiId-CETaC9GH.js";import"./useControlled-CxIvThFp.js";import"./CompositeRoot-BspKcE-Z.js";import"./CompositeItem-LCipfobg.js";import"./ToolbarRootContext-BN4SwV4N.js";import"./composite-DBo_GtSD.js";import"./svgIconContainer-DWCXHbm6.js";import"./PdfViewerSearchBar-CZpZlxlp.js";import"./chevron-up-u1U_q5Bu.js";import"./chevron-down-Cvm0d31k.js";import"./cross-CrU6nGJP.js";import"./PdfViewerSidebar-COmLs_bD.js";import"./index-Ddv81Ai4.js";import"./index-gBnbSOoM.js";import"./index-BsQx4f-z.js";import"./PdfViewerToolbar-Dy1ftZOh.js";import"./Button-C-DZ3Yzq.js";import"./chevron-right-DjJ3dCTu.js";import"./Input-DnQqAjUi.js";import"./search-B4TawZLP.js";import"./spin-7ipxWjVh.js";import"./error-DVsFEdhY.js";import"./withOsdkMetrics-DnWSlC-3.js";import"./makeExternalStore-BaPAj8aa.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
