import{j as r,M as s}from"./iframe-BXxdMdy7.js";import{P as p}from"./pdf-viewer-BTrifEn0.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DaN51BNo.js";import"./preload-helper-CzdKpJOA.js";import"./PdfViewer-DHaHfgXj.js";import"./index-BD4H0T12.js";import"./BasePdfViewer-BrP7N7KI.js";import"./BasePdfViewer.module.css-DjzDQjdh.js";import"./PdfViewerAnnotationLayer-D6cQBdkb.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C2lLyBjZ.js";import"./PdfViewerOutlineSidebar-tElHv9gX.js";import"./PdfViewerSidebarHeader-yDXPJoYW.js";import"./useBaseUiId-CWV-_dal.js";import"./useControlled-BP-Dvf9O.js";import"./CompositeRoot-D9V5NfAC.js";import"./CompositeItem-DWha1o73.js";import"./ToolbarRootContext-CIB517xc.js";import"./composite-D8jBtBX-.js";import"./svgIconContainer-Cxa1Q93_.js";import"./PdfViewerSearchBar-6Xkrz15Z.js";import"./chevron-up-a9EH8Scq.js";import"./chevron-down-CYALw_cH.js";import"./cross-IC7VDHMx.js";import"./PdfViewerSidebar-R04ILAzu.js";import"./index-DS2LC4Xn.js";import"./index-CHD8ML8j.js";import"./index-Bnop5Sxj.js";import"./PdfViewerToolbar-FxWQiohx.js";import"./Button--SPNZNsz.js";import"./chevron-right-Cs3c8GRK.js";import"./Input-CqSjd8ip.js";import"./search-BBZ4C5jZ.js";import"./spin-9DYMhz-g.js";import"./error-xwnNQugq.js";import"./withOsdkMetrics-LqvHVeDk.js";import"./makeExternalStore-BdrikpT6.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
