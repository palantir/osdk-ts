import{j as r,M as s}from"./iframe-CaMctZhM.js";import{P as p}from"./pdf-viewer-B4X8X5ec.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CkU3P6Hh.js";import"./preload-helper-DNMYa0Vf.js";import"./PdfViewer-a8OF1A8Q.js";import"./index-CtdxRtEM.js";import"./BasePdfViewer-W8nWJsmk.js";import"./BasePdfViewer.module.css-BJvT7ETu.js";import"./PdfViewerAnnotationLayer-C8s7CY1I.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-hhWm256l.js";import"./PdfViewerOutlineSidebar-BhJ4CqaV.js";import"./PdfViewerSidebarHeader-CqGYG7PJ.js";import"./useBaseUiId-DXXB_44i.js";import"./useControlled-BPVVUVXR.js";import"./CompositeRoot-Df6kb7OS.js";import"./CompositeItem-DUaU3yqi.js";import"./ToolbarRootContext-NuzyP_Z2.js";import"./composite-hogSzUb-.js";import"./svgIconContainer--PB46C3w.js";import"./PdfViewerSearchBar-BUZ-cFPb.js";import"./chevron-up-Cah1q7v0.js";import"./chevron-down-BTzBC5n8.js";import"./cross-BG3r1-a6.js";import"./PdfViewerSidebar-GAZ2H3Fv.js";import"./index-BNjCIBi_.js";import"./index-D9rKK3Jx.js";import"./index-ClymoC-g.js";import"./PdfViewerToolbar-BR90ddul.js";import"./Button-BDNmY4BX.js";import"./chevron-right-BheObvZq.js";import"./Input-BXSwuDSh.js";import"./search-jWF7X9or.js";import"./spin-OWdj7l-5.js";import"./error-Cuicm8UG.js";import"./withOsdkMetrics-DSeCvaBk.js";import"./makeExternalStore-BCTvNoj1.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
