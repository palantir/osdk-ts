import{j as r,M as s}from"./iframe-Bz3hVWPH.js";import{P as p}from"./pdf-viewer-B-qdrYns.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DUixC3zG.js";import"./preload-helper-B5WDuSuX.js";import"./PdfViewer-BCs2Er2M.js";import"./index-DByWOMtj.js";import"./BasePdfViewer-BFw4MOdv.js";import"./BasePdfViewer.module.css-DXKUR3B3.js";import"./PdfViewerAnnotationLayer-CVEXgRij.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-ILi6dGnM.js";import"./PdfViewerOutlineSidebar-DlEXkE1Z.js";import"./PdfViewerSidebarHeader-ySUtv4w3.js";import"./useBaseUiId-dzLz4lPg.js";import"./useControlled-DOWqxCnV.js";import"./CompositeRoot-CvayAu2Y.js";import"./CompositeItem-dA2LCxOZ.js";import"./ToolbarRootContext-D-xyRBQY.js";import"./composite-CPnF2lA7.js";import"./svgIconContainer-_Jncan05.js";import"./PdfViewerSearchBar-r8UI56lk.js";import"./chevron-up-QuHlCrM5.js";import"./chevron-down-Bi16AFVJ.js";import"./cross-Fpn0tB3m.js";import"./PdfViewerSidebar-CG5kqA-P.js";import"./index-BwGnMyFh.js";import"./index-vogC1DiU.js";import"./index-De0WyPkh.js";import"./PdfViewerToolbar-GeeBzsJE.js";import"./Button-CiU5aFV9.js";import"./chevron-right-DCMbpsrV.js";import"./Input-niPYTtX3.js";import"./search-Ctah0g8H.js";import"./spin-DQueR6BC.js";import"./error-CQxjkOW_.js";import"./withOsdkMetrics-DIZcYriA.js";import"./makeExternalStore-BkTXcz9h.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
