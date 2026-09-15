import{j as r,M as s}from"./iframe-BcjmHG5Y.js";import{P as p}from"./pdf-viewer-Dib4cfQa.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DwgnHlf-.js";import"./preload-helper-CevB4zUw.js";import"./PdfViewer-CjxHcEup.js";import"./index-WgcqtCT6.js";import"./BasePdfViewer-BnwBAcSO.js";import"./BasePdfViewer.module.css-tai0kSJY.js";import"./PdfViewerAnnotationLayer-D5JX9aV4.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-2Xejid9Q.js";import"./PdfViewerOutlineSidebar-DC7S75s4.js";import"./PdfViewerSidebarHeader-C6vvu423.js";import"./useBaseUiId-CYrtGdJE.js";import"./useControlled-6NYxLXP3.js";import"./CompositeRoot-C_bSEZIK.js";import"./CompositeItem-DLw_ttOE.js";import"./ToolbarRootContext-DAX0lKDl.js";import"./composite-D6B2PGWO.js";import"./svgIconContainer-CoM5Z7Ve.js";import"./PdfViewerSearchBar-CNwGzLCF.js";import"./chevron-up-CtIGJGzt.js";import"./chevron-down-yt_M0O0c.js";import"./cross-DoMlZBaZ.js";import"./PdfViewerSidebar-CXhLhpxd.js";import"./index-BuLxCPA9.js";import"./index-CsMXJwKN.js";import"./index-DpV3ZQ0J.js";import"./PdfViewerToolbar-D8Gu7KmF.js";import"./Button-DJfJDABU.js";import"./chevron-right-CKyvtAtA.js";import"./Input-e_01wq9D.js";import"./search-jO8my80A.js";import"./spin-Bv0dbPBc.js";import"./error-CYyfg8wo.js";import"./withOsdkMetrics-C3Z8dnVY.js";import"./makeExternalStore-qC0Amdtu.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
