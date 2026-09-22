import{j as r,M as s}from"./iframe-CJFgfqJQ.js";import{P as p}from"./pdf-viewer-C4sr9oNr.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Chqxxy5b.js";import"./preload-helper-CB2bVH8w.js";import"./PdfViewer-CdX8--x0.js";import"./index-BDuqkffg.js";import"./BasePdfViewer-Bw4zFtkP.js";import"./BasePdfViewer.module.css-CyoJbnzs.js";import"./PdfViewerAnnotationLayer-E1APrMth.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DSya-lAQ.js";import"./PdfViewerOutlineSidebar-Cam-YTrX.js";import"./PdfViewerSidebarHeader-DVDdQd0b.js";import"./useBaseUiId-KMobehZg.js";import"./useControlled-HhXb2sFD.js";import"./CompositeRoot-Cc2xxpdp.js";import"./CompositeItem-8xWeC0Vv.js";import"./ToolbarRootContext-DJb0kYMX.js";import"./composite-D_U5DxNy.js";import"./svgIconContainer-SiM3kExX.js";import"./PdfViewerSearchBar-BR-ptGvD.js";import"./chevron-up-BmG3vX6H.js";import"./chevron-down-DGQA7IYp.js";import"./cross-CGqAK_rm.js";import"./PdfViewerSidebar-XnOJbtfN.js";import"./index-DFjPXJ5y.js";import"./index-D8JNb3--.js";import"./index-DCMHFOQf.js";import"./PdfViewerToolbar-CIAZt46m.js";import"./Button-cr6PNOy5.js";import"./chevron-right-BbQNND44.js";import"./Input-DmfjYINK.js";import"./search-DdMhLoUU.js";import"./spin-hmIWTH83.js";import"./error-DUmxQ8UR.js";import"./withOsdkMetrics-DL4u8lDZ.js";import"./makeExternalStore-v_n6tY7p.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
