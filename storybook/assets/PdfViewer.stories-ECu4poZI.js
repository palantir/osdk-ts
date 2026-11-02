import{j as r,M as s}from"./iframe-BMD419ka.js";import{P as p}from"./pdf-viewer-BsesIjYC.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-AmHiczxj.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfViewer-673hks3i.js";import"./index-kQgthC1n.js";import"./BasePdfViewer-hxpH-Zwb.js";import"./BasePdfViewer.module.css-DVq_6vJw.js";import"./PdfViewerAnnotationLayer-DTAeqYze.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CIxxXu7t.js";import"./PdfViewerOutlineSidebar-6Z5ZmRD7.js";import"./PdfViewerSidebarHeader-7IvD1i-h.js";import"./useBaseUiId-BBA3Ojwf.js";import"./useControlled-7nsHaAUN.js";import"./CompositeRoot-WdT9HUBt.js";import"./CompositeItem-Bp6sOKGe.js";import"./ToolbarRootContext-COV-S0gg.js";import"./composite-C219b2sQ.js";import"./svgIconContainer-CHQFiUDX.js";import"./PdfViewerSearchBar-dTI2zO4e.js";import"./chevron-up-BLN4BLrL.js";import"./chevron-down-Amjm1ssN.js";import"./cross-C-Zn05Sh.js";import"./PdfViewerSidebar-CZobZoiK.js";import"./index-BRel636c.js";import"./index-DoLcuz7h.js";import"./index-CxpxkMGG.js";import"./PdfViewerToolbar-BhEFaUUH.js";import"./Button-LjQK0IIe.js";import"./chevron-right-B4xRCJPu.js";import"./Input-Bra7C-xN.js";import"./search-EKHgMBUJ.js";import"./spin-Cua8w-HU.js";import"./error-3ACxWnPD.js";import"./withOsdkMetrics-JpL78Mh0.js";import"./makeExternalStore-CFbDS87k.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
