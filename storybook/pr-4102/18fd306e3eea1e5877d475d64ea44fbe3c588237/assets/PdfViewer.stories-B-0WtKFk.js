import{j as r,M as s}from"./iframe-B30VXZ-6.js";import{P as p}from"./pdf-viewer-CDWpYK-l.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BCiPBbpd.js";import"./preload-helper-ChWHhmMQ.js";import"./PdfViewer-DGUnHRVz.js";import"./index-C8WN5xda.js";import"./BasePdfViewer-tBrnx3v0.js";import"./BasePdfViewer.module.css-BKT4GnQV.js";import"./PdfViewerAnnotationLayer-DmlzION5.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DiD0SdCE.js";import"./PdfViewerOutlineSidebar-DQQTrDEl.js";import"./PdfViewerSidebarHeader-CkN6zB7l.js";import"./useBaseUiId-N1dQpqNi.js";import"./useControlled-jMDaMrsG.js";import"./CompositeRoot-Cm6VUj19.js";import"./CompositeItem-DXi528OA.js";import"./ToolbarRootContext-Dshg5ZnG.js";import"./composite-CL2Urpfy.js";import"./svgIconContainer-CDJpdA9T.js";import"./PdfViewerSearchBar-DEDCwUwu.js";import"./chevron-up-VpseUvUl.js";import"./chevron-down-DiQ4Q7Kd.js";import"./cross-q0dJk3Qv.js";import"./PdfViewerSidebar-C5J-ZAgQ.js";import"./index-D6kqTvDq.js";import"./index-BPP2HBPd.js";import"./index-G14MjZBl.js";import"./PdfViewerToolbar-Bm7hPZuf.js";import"./Button-Fs0rdLv2.js";import"./chevron-right-D5Aw_6UK.js";import"./Input-CUQ6PF3-.js";import"./search-Mz2TVtVf.js";import"./spin-V61O8ccQ.js";import"./error-Cc1FQeFa.js";import"./withOsdkMetrics-DEl0Ng20.js";import"./makeExternalStore-nH4o41kb.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
