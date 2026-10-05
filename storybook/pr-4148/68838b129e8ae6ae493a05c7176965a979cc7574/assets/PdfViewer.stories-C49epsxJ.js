import{j as r,M as s}from"./iframe-axSYt9jb.js";import{P as p}from"./pdf-viewer-D-u5SQQ-.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Bbb7ZG0O.js";import"./preload-helper-5clZkVbz.js";import"./PdfViewer-CNZmUO00.js";import"./index-CLjZOMbp.js";import"./BasePdfViewer-DAoPdbqz.js";import"./BasePdfViewer.module.css-D65vvDkI.js";import"./PdfViewerAnnotationLayer-CpWT22Kn.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-r_UJZiYv.js";import"./PdfViewerOutlineSidebar-D0AoK3K6.js";import"./PdfViewerSidebarHeader-BvzALlak.js";import"./useBaseUiId-CfampI5m.js";import"./useControlled-BSRNruV1.js";import"./CompositeRoot-dqWaQ6Hj.js";import"./CompositeItem-E4JqZHrS.js";import"./ToolbarRootContext-HNR9-LxP.js";import"./composite-G1l_cMk8.js";import"./svgIconContainer-CvOpWe1G.js";import"./PdfViewerSearchBar-DuRqKozQ.js";import"./chevron-up-BwJfLwK2.js";import"./chevron-down-BijfbkW5.js";import"./cross-BV4PjvJc.js";import"./PdfViewerSidebar-BXBR2EH1.js";import"./index-iV2cA45t.js";import"./index-DpGvCUsF.js";import"./index-6T9wCtxW.js";import"./PdfViewerToolbar-CaN1hNii.js";import"./Button-DBXdKKko.js";import"./chevron-right-Cw745l1G.js";import"./Input-nobTN-9C.js";import"./search-B_GR0Y0K.js";import"./spin-X1glnaQV.js";import"./error-dOvZleMr.js";import"./withOsdkMetrics-DSBcYRdu.js";import"./makeExternalStore-7VGeqAOs.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
