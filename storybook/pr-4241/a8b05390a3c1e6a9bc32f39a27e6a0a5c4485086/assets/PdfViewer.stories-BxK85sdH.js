import{j as r,M as s}from"./iframe-8ifTlOPI.js";import{P as p}from"./pdf-viewer-Ct9aqJdI.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-f8CPZdAo.js";import"./preload-helper-qjA7iF_h.js";import"./PdfViewer-DBDmAbJO.js";import"./index-zP_CtKeM.js";import"./BasePdfViewer-DSSqyzGn.js";import"./BasePdfViewer.module.css-D_GnWEAQ.js";import"./PdfViewerAnnotationLayer-CDG_iZAq.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-vYgxtu9L.js";import"./PdfViewerOutlineSidebar-BXmGvP99.js";import"./PdfViewerSidebarHeader-cqeQIQIA.js";import"./useBaseUiId-Cwh1jhj-.js";import"./useControlled-CyFBz6dn.js";import"./CompositeRoot-Ccf4syiJ.js";import"./CompositeItem-DP3maplG.js";import"./ToolbarRootContext-BVL9-YVY.js";import"./composite-B4CIj8hm.js";import"./svgIconContainer-D_TXE4Bb.js";import"./PdfViewerSearchBar-D51hChCx.js";import"./chevron-up-BBOSnLhC.js";import"./chevron-down-BBwBJyH3.js";import"./cross-CL785k1k.js";import"./PdfViewerSidebar-Npu1Fugz.js";import"./index-DPyB-hEV.js";import"./index-CoyaXW0G.js";import"./index-DwMFEFqg.js";import"./PdfViewerToolbar-B4lu-K-i.js";import"./Button-CkeTq1uo.js";import"./chevron-right-sxxYvo7F.js";import"./Input-CMGBsI9h.js";import"./search-cZtZgUJN.js";import"./spin-Cy22qQuQ.js";import"./error-CEWX4lms.js";import"./withOsdkMetrics-C5cd7yWV.js";import"./makeExternalStore-BjHpzMBx.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
