import{j as r,M as s}from"./iframe-CAg-JriM.js";import{P as p}from"./pdf-viewer-BMgFdnut.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BT_Yxqc5.js";import"./preload-helper-BUvKDxEU.js";import"./PdfViewer-DWHPpJBZ.js";import"./index-c30BwpEp.js";import"./BasePdfViewer-lsCQ8HcP.js";import"./BasePdfViewer.module.css-D3k_Oi5V.js";import"./PdfViewerAnnotationLayer-oGexOF5V.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BXFxrXvh.js";import"./PdfViewerOutlineSidebar-zJxDFsZl.js";import"./PdfViewerSidebarHeader-BUgjbvyX.js";import"./useBaseUiId-BRS8U626.js";import"./useControlled-Ceb76xwT.js";import"./CompositeRoot-DTlDvyi2.js";import"./CompositeItem-D7GSS8Td.js";import"./ToolbarRootContext-CdDSSu6d.js";import"./composite-CQrdmEmC.js";import"./svgIconContainer-DADUTguq.js";import"./PdfViewerSearchBar-BYwJojeO.js";import"./chevron-up-DaHopZOz.js";import"./chevron-down-CsfLCkc3.js";import"./cross-f26_pld4.js";import"./PdfViewerSidebar-DQmDwplg.js";import"./index-B-69obD4.js";import"./index-ZJoCPfq8.js";import"./index-BKL1ls47.js";import"./PdfViewerToolbar-BLXFu39O.js";import"./Button-Cl3foSbn.js";import"./chevron-right-C-tV1yoz.js";import"./Input-DRHJ-rvA.js";import"./search-iyFeBtu2.js";import"./spin-Djih_Z01.js";import"./error-1JJ1PBi7.js";import"./withOsdkMetrics-CHGqLnXT.js";import"./makeExternalStore-sIngp_if.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
