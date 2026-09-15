import{j as r,M as s}from"./iframe-DMskF-Tm.js";import{P as p}from"./pdf-viewer-BPuaUwSj.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DROudPCZ.js";import"./preload-helper-zdHiINLH.js";import"./PdfViewer-DG1cdzJu.js";import"./index-DLe4u5Oe.js";import"./BasePdfViewer-BiZvk842.js";import"./BasePdfViewer.module.css-BkjXzQzM.js";import"./PdfViewerAnnotationLayer-B4F_raG0.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-zezf4aPs.js";import"./PdfViewerOutlineSidebar-Cq3vs15x.js";import"./PdfViewerSidebarHeader-DXJNiAGL.js";import"./useBaseUiId-IzXs79SE.js";import"./useControlled-CLoeMU3z.js";import"./CompositeRoot-7Epe7SHf.js";import"./CompositeItem-BdlugdAy.js";import"./ToolbarRootContext-Br2QKeOd.js";import"./composite-bCuvd1w6.js";import"./svgIconContainer-CNoR15u0.js";import"./PdfViewerSearchBar-DpITJMtN.js";import"./chevron-up-CGExkWMV.js";import"./chevron-down-D2q20rMp.js";import"./cross-CwAqVkgp.js";import"./PdfViewerSidebar-BN3DbN3y.js";import"./index-BKGUEF_C.js";import"./index-BQNk_jze.js";import"./index-1EVlbohU.js";import"./PdfViewerToolbar-BdH35-zJ.js";import"./Button-BNzcwfr4.js";import"./chevron-right-DuuyikNs.js";import"./Input-D-LAYNYb.js";import"./search-CZUSf-yV.js";import"./spin-B886FzYq.js";import"./error-pEWPvW42.js";import"./withOsdkMetrics-Dwd24s1O.js";import"./makeExternalStore-TRQMkypD.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
