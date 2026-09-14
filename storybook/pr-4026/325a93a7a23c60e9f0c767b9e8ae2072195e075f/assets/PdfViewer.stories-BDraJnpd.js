import{j as r,M as s}from"./iframe-NlvaTXdz.js";import{P as p}from"./pdf-viewer-By1pyTGk.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BDcB8K7v.js";import"./preload-helper-11218VAb.js";import"./PdfViewer-D06gdlwv.js";import"./index-B0X1kouN.js";import"./BasePdfViewer-cX0R3UNw.js";import"./BasePdfViewer.module.css-Ca9ophqN.js";import"./PdfViewerAnnotationLayer-npsFHhzZ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CVhlME-B.js";import"./PdfViewerOutlineSidebar-HMfnTXmg.js";import"./PdfViewerSidebarHeader-CFl1a2Da.js";import"./useBaseUiId-Cak_Gf6y.js";import"./useControlled-Dr03MbeI.js";import"./CompositeRoot-CDJQI2Ny.js";import"./CompositeItem--ZMxCD0o.js";import"./ToolbarRootContext-BusYBQnb.js";import"./composite-BVOO1HYh.js";import"./svgIconContainer-Dx3Wsu_D.js";import"./PdfViewerSearchBar-DvuRlyeH.js";import"./chevron-up-BTu_QsjG.js";import"./chevron-down-dfuDLNdx.js";import"./cross-3E2um-ab.js";import"./PdfViewerSidebar-Cq4sWQDG.js";import"./index-Cub9R0HW.js";import"./index-zA5UJtgN.js";import"./index-BKEieiUG.js";import"./PdfViewerToolbar-BWUXitbi.js";import"./Button-Cj6didcq.js";import"./chevron-right-ChHnv9hH.js";import"./Input-ec2719nZ.js";import"./search-JCoXnDaS.js";import"./spin-AOlpyF_E.js";import"./error-CV3Wyi-T.js";import"./withOsdkMetrics-zr1-J277.js";import"./makeExternalStore-BJZbhgwh.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
