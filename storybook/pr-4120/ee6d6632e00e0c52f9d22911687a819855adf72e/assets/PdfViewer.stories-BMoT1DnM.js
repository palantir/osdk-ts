import{j as r,M as s}from"./iframe-DTMqKPBE.js";import{P as p}from"./pdf-viewer-DdTig5gy.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CnP9JR3D.js";import"./preload-helper-CjsYpY57.js";import"./PdfViewer-DaUZOi4x.js";import"./index-UDd9WuYK.js";import"./BasePdfViewer-D_NuN44o.js";import"./BasePdfViewer.module.css-BynqA5Wt.js";import"./PdfViewerAnnotationLayer-DOK9SRWO.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-K4ZkRjow.js";import"./PdfViewerOutlineSidebar-8Iel_cOC.js";import"./PdfViewerSidebarHeader-BAs2nEgz.js";import"./useBaseUiId-CEeKBGAz.js";import"./useControlled-BHnYSqNh.js";import"./CompositeRoot-DTEvP718.js";import"./CompositeItem-vKvJJfWL.js";import"./ToolbarRootContext-BFkkbk8n.js";import"./composite-ythbHTkl.js";import"./svgIconContainer-CTrmoxuh.js";import"./PdfViewerSearchBar-BiALlKrE.js";import"./chevron-up-CIxtdqnC.js";import"./chevron-down-CHkr5iXo.js";import"./cross-B4qzvymc.js";import"./PdfViewerSidebar-C5rRKpjF.js";import"./index-BsUTfLWI.js";import"./index-C4q2yfqG.js";import"./index-JW1fQ_Y7.js";import"./PdfViewerToolbar-Cph1vrEV.js";import"./Button-xDEOgU6J.js";import"./chevron-right-Cneq7o1f.js";import"./Input-7TR5u0Qr.js";import"./search-DI2V8WRZ.js";import"./spin-DDhSkNxj.js";import"./error-DhhuqABX.js";import"./withOsdkMetrics-C9k-iTWj.js";import"./makeExternalStore-BqhBup0t.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
