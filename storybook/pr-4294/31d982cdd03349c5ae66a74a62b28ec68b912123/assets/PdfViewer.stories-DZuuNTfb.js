import{j as r,M as s}from"./iframe-Br8xONPm.js";import{P as p}from"./pdf-viewer-DFKQtSVi.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-VKJRfUcA.js";import"./preload-helper-DQgVVB6U.js";import"./PdfViewer-C8q0JAdH.js";import"./index-B2krqAG0.js";import"./BasePdfViewer-CW9KQ-xm.js";import"./BasePdfViewer.module.css-BBS0G7jV.js";import"./PdfViewerAnnotationLayer-s7-42X9u.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BIcqaZq7.js";import"./PdfViewerOutlineSidebar-BWpS08Hc.js";import"./PdfViewerSidebarHeader-CYP6JX44.js";import"./useBaseUiId-BZnTNrwC.js";import"./useControlled-BLiUdu5J.js";import"./CompositeRoot-D70_kQpu.js";import"./CompositeItem-yj6TyWdn.js";import"./ToolbarRootContext-CI35CvFn.js";import"./composite-C9h1Nrh8.js";import"./svgIconContainer-CSQu9ec3.js";import"./PdfViewerSearchBar-CaEZlWIx.js";import"./chevron-up-OS1T51px.js";import"./chevron-down-CG3ZsjCs.js";import"./cross-DuxFWD_g.js";import"./PdfViewerSidebar-BQ8hR6RA.js";import"./index-6kzQ95ap.js";import"./index-D9czVAyf.js";import"./index-jHhc_U3n.js";import"./PdfViewerToolbar-BU1RNiQk.js";import"./Button-CpiJCvHd.js";import"./chevron-right-CSGXpZEj.js";import"./Input-BHVdEi5Z.js";import"./search-DZd-hDvg.js";import"./spin-x1xMC4YE.js";import"./error-5UgtcFK8.js";import"./withOsdkMetrics-BaSLlHt7.js";import"./makeExternalStore-N49v7_Hy.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
