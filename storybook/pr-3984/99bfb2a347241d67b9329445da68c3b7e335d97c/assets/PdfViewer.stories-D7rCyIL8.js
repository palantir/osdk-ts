import{j as r,M as s}from"./iframe-DOTdPJBy.js";import{P as p}from"./pdf-viewer-BwO5QS6d.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BQXMx6S5.js";import"./preload-helper-CORjxHe2.js";import"./PdfViewer-BkqHit9q.js";import"./index-7LsoLiQC.js";import"./BasePdfViewer-CsQSZjqK.js";import"./BasePdfViewer.module.css-Dl_tw1V3.js";import"./PdfViewerAnnotationLayer-Bgq228cQ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C-FcRWvv.js";import"./PdfViewerOutlineSidebar-CD-nwtek.js";import"./PdfViewerSidebarHeader-DvQxxajJ.js";import"./useBaseUiId-CSa0UWdd.js";import"./useControlled-CEuBm35N.js";import"./CompositeRoot-ymYcR4Ma.js";import"./CompositeItem-fENznLjR.js";import"./ToolbarRootContext-BMXrmtsD.js";import"./composite-DBLj_rqs.js";import"./svgIconContainer-6XMQleNK.js";import"./PdfViewerSearchBar-vNuPJGZP.js";import"./chevron-up-DMzdktIM.js";import"./chevron-down-D9Jqe_yM.js";import"./cross-m4Jtx501.js";import"./PdfViewerSidebar-D0O0iQzI.js";import"./index-YCEALnwo.js";import"./index-DrAqVeQj.js";import"./index-DoVR9M-q.js";import"./PdfViewerToolbar-F3HSofde.js";import"./Button-HfXhKbNv.js";import"./chevron-right-CKKIJhFS.js";import"./Input-Bzm_LY5N.js";import"./search-CQ447Er6.js";import"./spin-UxjuVtlZ.js";import"./error-1dsahiX9.js";import"./withOsdkMetrics-w09EOhg9.js";import"./makeExternalStore-DXS9zRtb.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
