import{j as r,M as s}from"./iframe-CPLN-ZbK.js";import{P as p}from"./pdf-viewer-CIxLNByj.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B8sC6bMj.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfViewer-BKunqsRc.js";import"./index-Cjge5u51.js";import"./BasePdfViewer-ZcJwSZhS.js";import"./BasePdfViewer.module.css-x2SBeZUr.js";import"./PdfViewerAnnotationLayer-DEr99_e1.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DLZKFgfJ.js";import"./PdfViewerOutlineSidebar-BXViPejT.js";import"./PdfViewerSidebarHeader-DwE84tox.js";import"./useBaseUiId-BCid-a8z.js";import"./useControlled-CjsGTJEt.js";import"./CompositeRoot-B1JVMz8M.js";import"./CompositeItem-2xQpagLs.js";import"./ToolbarRootContext-Bf2tT3Hj.js";import"./composite-DajkLm6o.js";import"./svgIconContainer-DJorehzp.js";import"./PdfViewerSearchBar-CD7i4UVP.js";import"./chevron-up-BqxdWpTR.js";import"./chevron-down-jQvrZLIb.js";import"./cross-DkzWzcR0.js";import"./PdfViewerSidebar-yhYSVDUO.js";import"./index-C_Kl0KC7.js";import"./index-CcftVgrB.js";import"./index-CTI5qcoR.js";import"./PdfViewerToolbar-DaDwZHnv.js";import"./Button-CwRu4Y7L.js";import"./chevron-right-DHE4pVQH.js";import"./Input-DTYOcpRg.js";import"./search-vlNNCCei.js";import"./spin-CpEHeIP7.js";import"./error-CfVtgGYX.js";import"./withOsdkMetrics-DxyXNPGX.js";import"./makeExternalStore-GKMGQTfP.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
