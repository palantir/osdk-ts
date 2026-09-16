import{j as r,M as s}from"./iframe-DsISivmL.js";import{P as p}from"./pdf-viewer-BRshUsiz.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BC0dGjvW.js";import"./preload-helper-BzOTEX4h.js";import"./PdfViewer-D8KijnKF.js";import"./index-CA9KUbCW.js";import"./BasePdfViewer-e_T9GdVt.js";import"./BasePdfViewer.module.css-CiWvfh2L.js";import"./PdfViewerAnnotationLayer-flJrDOub.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cu3TsdkY.js";import"./PdfViewerOutlineSidebar-CJ4enFoN.js";import"./PdfViewerSidebarHeader-SY6Bs4Hd.js";import"./useBaseUiId-CMSPxGM5.js";import"./useControlled-B8XvalbJ.js";import"./CompositeRoot-DtRaXi0v.js";import"./CompositeItem-DPkp3H9j.js";import"./ToolbarRootContext-BoW9B8ED.js";import"./composite-0zr51VGP.js";import"./svgIconContainer-Dp3EEAal.js";import"./PdfViewerSearchBar-GpZ4Hxq7.js";import"./chevron-up-DsKGUyjQ.js";import"./chevron-down-CGSFBjuL.js";import"./cross-BGShLWmS.js";import"./PdfViewerSidebar-a6CIjiUM.js";import"./index-CKh5Salv.js";import"./index-CLDUlJNg.js";import"./index-vtVyo2v8.js";import"./PdfViewerToolbar-LXc0Rs-o.js";import"./Button-CSztET3k.js";import"./chevron-right-D1fk8oRH.js";import"./Input-C-IYkLA_.js";import"./search-BjXP8SQo.js";import"./spin-DK3fitk7.js";import"./error-33DrpFja.js";import"./withOsdkMetrics-D6_E0WHa.js";import"./makeExternalStore-Bj-L88f8.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
