import{j as r,M as s}from"./iframe-gl1D0cYu.js";import{P as p}from"./pdf-viewer-C3ZOSloH.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BEEfdHKl.js";import"./preload-helper-DqgH6sT8.js";import"./PdfViewer-DylZ8CIT.js";import"./index-D5PLyZrU.js";import"./BasePdfViewer-DkljgqiB.js";import"./BasePdfViewer.module.css-CO0vmsb6.js";import"./PdfViewerAnnotationLayer-ybX3hA4R.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CEyizLfm.js";import"./PdfViewerOutlineSidebar-bwwFIqoo.js";import"./PdfViewerSidebarHeader-D5sHIPX4.js";import"./useBaseUiId-DaNXLH9o.js";import"./useControlled-D-vu1Iu-.js";import"./CompositeRoot-Clqxj38a.js";import"./CompositeItem-hGM9YKcr.js";import"./ToolbarRootContext-DUK6v5QM.js";import"./composite-mmowW-5S.js";import"./svgIconContainer-D2ylg-hx.js";import"./PdfViewerSearchBar-B1hpUShF.js";import"./chevron-up-D5XUevhq.js";import"./chevron-down-B--bqcM3.js";import"./cross-nvwlJ43b.js";import"./PdfViewerSidebar-811F-tXP.js";import"./index-Cevn-2DA.js";import"./index-DZJG8XPS.js";import"./index-DYOboT0w.js";import"./PdfViewerToolbar-D1bTeQH2.js";import"./Button-Dyc2i6Ov.js";import"./chevron-right-Tn7vEVRZ.js";import"./Input-DikxtY8U.js";import"./search-DuJOx_mq.js";import"./spin-oGwjDkn0.js";import"./error-CF31ifZ8.js";import"./withOsdkMetrics-qXzvdtsT.js";import"./makeExternalStore-mCeZ-qAv.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
