import{j as r,M as s}from"./iframe-7g13v2jN.js";import{P as p}from"./pdf-viewer-CL9GPJCk.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D4mrvOrQ.js";import"./preload-helper-CclsuuMH.js";import"./PdfViewer-CMIpVUK1.js";import"./index-BgJ1FFdq.js";import"./BasePdfViewer-C7fwOdt3.js";import"./BasePdfViewer.module.css-C7IBXRhn.js";import"./PdfViewerAnnotationLayer-COmrFsG3.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CIL3wS9o.js";import"./PdfViewerOutlineSidebar-B0NB1fhs.js";import"./PdfViewerSidebarHeader-CQOidbli.js";import"./useBaseUiId-C7XxkQYq.js";import"./useControlled-B23KZW1l.js";import"./CompositeRoot-8amK5kl9.js";import"./CompositeItem-B-yStqfF.js";import"./ToolbarRootContext-CE2CALLi.js";import"./composite-B2zIsJ0R.js";import"./svgIconContainer-DukTjdz5.js";import"./PdfViewerSearchBar-jIA1rBAV.js";import"./chevron-up-D_QaO6YL.js";import"./chevron-down-CFQZfM99.js";import"./cross-OMCp2mi_.js";import"./PdfViewerSidebar-wsQBj3ec.js";import"./index-BfjN1GaO.js";import"./index-f0-b4s2g.js";import"./index-DlhSwHJN.js";import"./PdfViewerToolbar-CDaYKOcM.js";import"./Button-Apw5WzKr.js";import"./chevron-right-DMq_Q7R5.js";import"./Input-CaqMv5Lb.js";import"./search-sAV5xLcY.js";import"./spin-DEx0SlPa.js";import"./error-D4UXhq88.js";import"./withOsdkMetrics-CxyFHZKX.js";import"./makeExternalStore-Bri8hEZ2.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
