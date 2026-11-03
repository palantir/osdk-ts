import{j as r,M as s}from"./iframe-BSBY3PjJ.js";import{P as p}from"./pdf-viewer-DWFQP7Ax.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject--76NEUYl.js";import"./preload-helper-DpSdlFS8.js";import"./PdfViewer-BZMnFs6Q.js";import"./index-DK106w7q.js";import"./BasePdfViewer-DkwppI14.js";import"./BasePdfViewer.module.css-BrcPbaVX.js";import"./PdfViewerAnnotationLayer-C8SzE3po.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BLmI2Q4n.js";import"./PdfViewerOutlineSidebar-DXOZWlhZ.js";import"./PdfViewerSidebarHeader-3T-uQUoL.js";import"./useBaseUiId-BWCrzuEr.js";import"./useControlled-Ki3OxTZR.js";import"./CompositeRoot-C2p9IfuB.js";import"./CompositeItem-B9uKrben.js";import"./ToolbarRootContext-5qjYeV0P.js";import"./composite-iYZqsZLy.js";import"./svgIconContainer-CVR7Tkh3.js";import"./PdfViewerSearchBar-CWQ-vdgL.js";import"./chevron-up-fAnMhF1z.js";import"./chevron-down-BHUr8iy5.js";import"./cross-ChnkwhQq.js";import"./PdfViewerSidebar-DzGvxzOx.js";import"./index-YAOpnUoq.js";import"./index-DVvqS1th.js";import"./index-CKbXy3Dj.js";import"./PdfViewerToolbar-DeKn4V__.js";import"./Button-DyRQe702.js";import"./chevron-right-G-YcQ7W2.js";import"./Input-DLFn8nXq.js";import"./search-D4Uipsbf.js";import"./spin-Bjga8pxW.js";import"./error-iycxY9-l.js";import"./withOsdkMetrics-C3TRqwn-.js";import"./makeExternalStore-DU_ddruH.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
