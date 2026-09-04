import{j as r,M as s}from"./iframe-sCC61k92.js";import{P as p}from"./pdf-viewer-cp1NeeYJ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-0JBgEz-R.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfViewer-BGRvCL0I.js";import"./index-COwL7OJ8.js";import"./BasePdfViewer-UUxcTLWz.js";import"./BasePdfViewer.module.css-DznFE92X.js";import"./PdfViewerAnnotationLayer-DDdurm9z.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-YMqVZgHR.js";import"./PdfViewerOutlineSidebar-BVL8AF4W.js";import"./PdfViewerSidebarHeader-C7LCGL52.js";import"./useBaseUiId-BliaD1O6.js";import"./useControlled-QNZ0QZkj.js";import"./CompositeRoot-BPozR5Pl.js";import"./CompositeItem-DoarEqny.js";import"./ToolbarRootContext-C2ojXHeq.js";import"./composite-CISHKC9x.js";import"./svgIconContainer-hqfoTYTd.js";import"./PdfViewerSearchBar-B_nORWHQ.js";import"./chevron-up-Bq0OGvlL.js";import"./chevron-down-5SB1wRqG.js";import"./cross-DRK3VtDX.js";import"./PdfViewerSidebar-BdNT6MBX.js";import"./index-B-SSDTy4.js";import"./index-BO4p12nE.js";import"./index-BPgVurxA.js";import"./PdfViewerToolbar-BL8h1Oqg.js";import"./Button-CuqFP7rB.js";import"./chevron-right-B_BSP86r.js";import"./Input-oPnlo5ZK.js";import"./search-BCt11QUz.js";import"./spin-wiTuzP3k.js";import"./error-DG5J3I3H.js";import"./withOsdkMetrics-B8lVQvrV.js";import"./makeExternalStore-BHhNjBOZ.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
