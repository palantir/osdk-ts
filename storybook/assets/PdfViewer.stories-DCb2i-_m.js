import{j as r,M as s}from"./iframe-CAIgECfm.js";import{P as p}from"./pdf-viewer-B0O2ugu0.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CQ2Ob3Bd.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfViewer-DGYxw1t6.js";import"./index-B3MYTMei.js";import"./BasePdfViewer-B32e8yCq.js";import"./BasePdfViewer.module.css-3YFsBoQu.js";import"./PdfViewerAnnotationLayer-D-YaWbnm.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BTlLzOJC.js";import"./PdfViewerOutlineSidebar-C_mAsOJs.js";import"./PdfViewerSidebarHeader-D4-3zJnc.js";import"./useBaseUiId-D9Drx6D-.js";import"./useControlled-Dfbx34Uf.js";import"./CompositeRoot--pC6VFJA.js";import"./CompositeItem-ByF2vx3e.js";import"./ToolbarRootContext-wvUb7vtw.js";import"./composite-JJXOCwqO.js";import"./svgIconContainer-C3DKY__f.js";import"./PdfViewerSearchBar-C6x613dI.js";import"./chevron-up-K48VvhXT.js";import"./chevron-down-DmkBexVO.js";import"./cross-BQNRDOaU.js";import"./PdfViewerSidebar-kNU6s0RI.js";import"./index-euZ8olZi.js";import"./index-oq0LOBzb.js";import"./index-Ufz-XkYv.js";import"./PdfViewerToolbar-B53bAvt0.js";import"./Button-B8Prvm33.js";import"./chevron-right-CtTYqqSg.js";import"./Input-DiYmIIHx.js";import"./search-DtjskLKm.js";import"./spin-zGfvfs9s.js";import"./error-DOslEiGD.js";import"./withOsdkMetrics-BxbwCQgj.js";import"./makeExternalStore-1s6PxRaa.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
