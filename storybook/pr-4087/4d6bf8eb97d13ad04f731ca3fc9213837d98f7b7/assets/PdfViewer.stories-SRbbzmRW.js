import{j as r,M as s}from"./iframe-H475fjT9.js";import{P as p}from"./pdf-viewer-DsQVMiKt.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BGEf6h2C.js";import"./preload-helper-4X7ac1X_.js";import"./PdfViewer-gvSqzpvJ.js";import"./index-xnZyhOap.js";import"./BasePdfViewer-DYQ3-xMS.js";import"./BasePdfViewer.module.css-DmfXDcM9.js";import"./PdfViewerAnnotationLayer-BRlUJZOh.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BA5PQVtr.js";import"./PdfViewerOutlineSidebar-CutR8ALu.js";import"./PdfViewerSidebarHeader-2_rXK6SD.js";import"./useBaseUiId-D9Y7uIA_.js";import"./useControlled-CTWYlqbQ.js";import"./CompositeRoot-D0DVPPw6.js";import"./CompositeItem-Nblbqfxi.js";import"./ToolbarRootContext-DRktyYqF.js";import"./composite-BYdl5w4l.js";import"./svgIconContainer-DRh8H81_.js";import"./PdfViewerSearchBar-CEv8hdLA.js";import"./chevron-up-ClqMCafD.js";import"./chevron-down-BgkFJdjv.js";import"./cross-Dm1NPVGS.js";import"./PdfViewerSidebar-D97HGQEp.js";import"./index-DT4cMJml.js";import"./index-D2G91xGC.js";import"./index-2KdCkDaD.js";import"./PdfViewerToolbar-CHJWoglA.js";import"./Button-C-c_YzgP.js";import"./chevron-right-ZSps1Ia7.js";import"./Input-CSGRdmE4.js";import"./search-BeyzIhyn.js";import"./spin-BrzEc2bE.js";import"./error-C3Cl8o9I.js";import"./withOsdkMetrics-D1pGtXX8.js";import"./makeExternalStore-DSrF5gYv.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
