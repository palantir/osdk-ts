import{j as r,M as s}from"./iframe-DvmPM8XM.js";import{P as p}from"./pdf-viewer-C7uFGIcs.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Cu1Gbe1c.js";import"./preload-helper-CWXBbGOK.js";import"./PdfViewer-eaN2VY-J.js";import"./index-Ckyxf5ES.js";import"./BasePdfViewer-ATgM-m_0.js";import"./BasePdfViewer.module.css-DbyykB-M.js";import"./PdfViewerAnnotationLayer-BYYy1K8b.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DSOS15gg.js";import"./PdfViewerOutlineSidebar-BY6BHcPg.js";import"./PdfViewerSidebarHeader-DbuqdW3p.js";import"./useBaseUiId-BK6rm_vX.js";import"./useControlled-BlFMc0zn.js";import"./CompositeRoot-C6lBSlqt.js";import"./CompositeItem-kRLneeY3.js";import"./ToolbarRootContext-E7hSXQbh.js";import"./composite-BtMZy7bH.js";import"./svgIconContainer-CKvBglfs.js";import"./PdfViewerSearchBar-DfExe0mw.js";import"./chevron-up-DdNMRTR2.js";import"./chevron-down-BE3Vkzfj.js";import"./cross-CWK_3iX0.js";import"./PdfViewerSidebar-DK9nMTXr.js";import"./index-DPz56gTU.js";import"./index-DxRIPJNB.js";import"./index-DFwggDQF.js";import"./PdfViewerToolbar-C7AMFYJd.js";import"./Button-CdgEMVNK.js";import"./chevron-right-Bn8b5btK.js";import"./Input-DAJjBhoV.js";import"./search-TBI5J1QZ.js";import"./spin-Dglv-MOm.js";import"./error-C_RDaNST.js";import"./withOsdkMetrics-C3HZbqv9.js";import"./makeExternalStore-DPCzTg_N.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
