import{j as r,M as s}from"./iframe-DljkNNxK.js";import{P as p}from"./pdf-viewer-Dui0UqlD.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C4WWjl69.js";import"./preload-helper-Cpo1q_i6.js";import"./PdfViewer-Bui9fDoz.js";import"./index-D64RJmhP.js";import"./BasePdfViewer-CboSLd2a.js";import"./BasePdfViewer.module.css-1zrF6tZn.js";import"./PdfViewerAnnotationLayer-C438AilN.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-ZXWFWpva.js";import"./PdfViewerOutlineSidebar-CAQw7WYZ.js";import"./PdfViewerSidebarHeader-krlztRqR.js";import"./useBaseUiId-BDewQ6nf.js";import"./useControlled-Chg_haxJ.js";import"./CompositeRoot-9hHHwD3S.js";import"./CompositeItem-asw0sP3K.js";import"./ToolbarRootContext-DT3K0tIr.js";import"./composite-GUx361Ly.js";import"./svgIconContainer-CnhwGfa6.js";import"./PdfViewerSearchBar-aXMdBSKx.js";import"./chevron-up-CO0SZdwt.js";import"./chevron-down-TeUlP9Ri.js";import"./cross-BC6Bgo8V.js";import"./PdfViewerSidebar-sWvnl6Ze.js";import"./index-IcPHFoqD.js";import"./index-BwvPIv6E.js";import"./index-DVoFeU9w.js";import"./PdfViewerToolbar-HZHcI9qt.js";import"./Button-sFRd8YxN.js";import"./chevron-right-Bxm0Pe6L.js";import"./Input-C1T-Uord.js";import"./search-CviN7Quw.js";import"./spin-DGzd_DtO.js";import"./error-M6Q45Sy0.js";import"./withOsdkMetrics-DgcAshrM.js";import"./makeExternalStore-CQCn-_eJ.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
