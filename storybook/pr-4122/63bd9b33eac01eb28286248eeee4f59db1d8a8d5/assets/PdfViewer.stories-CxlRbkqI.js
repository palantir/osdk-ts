import{j as r,M as s}from"./iframe-CUZRoNNv.js";import{P as p}from"./pdf-viewer-CVv9-alT.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DlTUednG.js";import"./preload-helper-CrAnAkNd.js";import"./PdfViewer-DiLhh0gn.js";import"./index-DyJF2RgL.js";import"./BasePdfViewer-rGqYI2dR.js";import"./BasePdfViewer.module.css-Fu-8o0Nk.js";import"./PdfViewerAnnotationLayer-DlEn8HF-.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B5FVWnIx.js";import"./PdfViewerOutlineSidebar-Cz6-c-J3.js";import"./PdfViewerSidebarHeader-0uIY3q_O.js";import"./useBaseUiId-BjYXt-Y8.js";import"./useControlled-SgSnNk_-.js";import"./CompositeRoot-CGLJgUzA.js";import"./CompositeItem-BcoPKNgT.js";import"./ToolbarRootContext-8UU7wnms.js";import"./composite-LGakJTZC.js";import"./svgIconContainer-grpv7WkD.js";import"./PdfViewerSearchBar-ZlYp6hW0.js";import"./chevron-up-B7QWA6ZV.js";import"./chevron-down-GCVDTzTT.js";import"./cross-CSe3kma4.js";import"./PdfViewerSidebar-Dpf1CuHX.js";import"./index-DGzm9vGw.js";import"./index-BBjGhXOn.js";import"./index-CMCn6By5.js";import"./PdfViewerToolbar-BaoXhlBD.js";import"./Button-C0zF-FQF.js";import"./chevron-right-BNV0nUq1.js";import"./Input-Db-zmbeF.js";import"./search-XLYepbmJ.js";import"./spin-CMVnFUvs.js";import"./error-DiHuZvPy.js";import"./withOsdkMetrics-CXfpKFLb.js";import"./makeExternalStore-BolJxNvY.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
