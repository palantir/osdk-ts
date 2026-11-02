import{j as r,M as s}from"./iframe-BMT91W1Z.js";import{P as p}from"./pdf-viewer-BSntgvwR.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C3SaeF_z.js";import"./preload-helper-rvXeaCGs.js";import"./PdfViewer-nfiMx4ie.js";import"./index-Bx6Ivmjs.js";import"./BasePdfViewer-DQpDC3ru.js";import"./BasePdfViewer.module.css-2nuWJr2D.js";import"./PdfViewerAnnotationLayer-B1xxs8cm.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-mzmW6RqA.js";import"./PdfViewerOutlineSidebar-D9ka79Px.js";import"./PdfViewerSidebarHeader-jG5aiJsA.js";import"./useBaseUiId-B4USe1gj.js";import"./useControlled-L0eiJeCg.js";import"./CompositeRoot-Xx8LPOzt.js";import"./CompositeItem-CssM4Gze.js";import"./ToolbarRootContext-D1Qf3sGL.js";import"./composite-D3rTrYkW.js";import"./svgIconContainer-B3o1vMYf.js";import"./PdfViewerSearchBar-DLPgVhvG.js";import"./chevron-up-CW_U01AK.js";import"./chevron-down-C4MVGpCZ.js";import"./cross-C9h9qNTe.js";import"./PdfViewerSidebar-DND-V-MN.js";import"./index-BVpohJtF.js";import"./index-xfqQSbot.js";import"./index-DEWgT4HO.js";import"./PdfViewerToolbar-CeGVHadb.js";import"./Button-Djft0tAo.js";import"./chevron-right-DPJyyD05.js";import"./Input-B-23mNdu.js";import"./search-CYSVIzHU.js";import"./spin-D-jwGpL9.js";import"./error-Dzj1sGPq.js";import"./withOsdkMetrics-DgSik2_o.js";import"./makeExternalStore-DBhSiWtQ.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
