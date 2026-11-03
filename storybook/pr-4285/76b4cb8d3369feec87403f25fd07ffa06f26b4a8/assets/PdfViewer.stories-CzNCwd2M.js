import{j as r,M as s}from"./iframe-CZB8iCrN.js";import{P as p}from"./pdf-viewer-xvRmW-dr.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C6KRGuhk.js";import"./preload-helper-Bfp8b3lb.js";import"./PdfViewer-CHeASS2B.js";import"./index-B20F_8Db.js";import"./BasePdfViewer-Dfxs1swG.js";import"./BasePdfViewer.module.css-0yK5IhFd.js";import"./PdfViewerAnnotationLayer-23BrVjNa.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CYEhnS4O.js";import"./PdfViewerOutlineSidebar-c1ImahRu.js";import"./PdfViewerSidebarHeader-BoscA2ne.js";import"./useBaseUiId-Dl-CxI70.js";import"./useControlled-CISHEyOE.js";import"./CompositeRoot-DeCtH-KB.js";import"./CompositeItem-BGy1WNiQ.js";import"./ToolbarRootContext-Xc9NkH4h.js";import"./composite-7sRBgyZt.js";import"./svgIconContainer-C34Xeufa.js";import"./PdfViewerSearchBar-CyEpc43Z.js";import"./chevron-up-C1YtvBR9.js";import"./chevron-down-CyERpmZf.js";import"./cross-BaVj46vf.js";import"./PdfViewerSidebar-Dmdi-oNP.js";import"./index-CnvQ1zd9.js";import"./index-DadbORQH.js";import"./index-DiIHqUbm.js";import"./PdfViewerToolbar-DVEpds74.js";import"./Button-CN7eBVL6.js";import"./chevron-right-D_5B1IRG.js";import"./Input-mSuQxNwT.js";import"./search-FLqm4c0t.js";import"./spin-Ct3H6N-2.js";import"./error-BrUtxvkn.js";import"./withOsdkMetrics-CrKh0O5J.js";import"./makeExternalStore-Bemx5W1x.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
