import{j as r,M as s}from"./iframe-DkDai4TH.js";import{P as p}from"./pdf-viewer-OvhoWqxA.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-nzJCPceD.js";import"./preload-helper-JjUJzXXj.js";import"./PdfViewer-Z6XOYgsk.js";import"./index-DY9rgq0e.js";import"./BasePdfViewer-D2u6E4AE.js";import"./BasePdfViewer.module.css-CywNL7L8.js";import"./PdfViewerAnnotationLayer-DAk_zM1u.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-yUwI_FF9.js";import"./PdfViewerOutlineSidebar-CE1YGymB.js";import"./PdfViewerSidebarHeader-B2LkYtLE.js";import"./useBaseUiId-BSkkBPAh.js";import"./useControlled-IY8Qa8dX.js";import"./CompositeRoot-6GXCG1ZY.js";import"./CompositeItem-CMeIJ5rV.js";import"./ToolbarRootContext-BkXkRhp8.js";import"./composite-CiXUPQeJ.js";import"./svgIconContainer-Cn4a8-GP.js";import"./PdfViewerSearchBar-BDfHO0Ke.js";import"./chevron-up-DVfjEu6P.js";import"./chevron-down-Do0LaDJ6.js";import"./cross-CAMMsTtN.js";import"./PdfViewerSidebar-cEhcI05S.js";import"./index-CTVvDnPL.js";import"./index-BmkcSWO6.js";import"./index-Lc08usjZ.js";import"./PdfViewerToolbar-KpriZezh.js";import"./Button-DKQFkDWL.js";import"./chevron-right-m3gEzF25.js";import"./Input-Gi5Qq_w9.js";import"./search-BHsfUlEN.js";import"./spin-NXBF9WHo.js";import"./error-CLEog6-B.js";import"./withOsdkMetrics-CNRukvHq.js";import"./makeExternalStore-DYuRaPVt.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
